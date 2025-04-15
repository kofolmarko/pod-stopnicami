import { NextRequest, NextResponse } from "next/server"
import { IncomingForm } from "formidable"
import { Readable } from "stream"
import fs from "fs"
import { enhanceClassroom } from "@/lib/services/gemini"

export const config = {
    api: {
        bodyParser: false,
    },
}

function toNodeCompatibleRequest(req: NextRequest): Readable & { headers: any } {
    const reader = req.body?.getReader()
    if (!reader) throw new Error("No request body")

    const stream = new Readable({
        async read() {
            const { done, value } = await reader.read()
            if (done) this.push(null)
            else this.push(value)
        },
    })

    const headers = Object.fromEntries(req.headers.entries())
    return Object.assign(stream, { headers })
}

export async function POST(req: NextRequest) {
    const form = new IncomingForm({ keepExtensions: true, multiples: false, uploadDir: "./uploads" })

    try {
        const nodeReq = toNodeCompatibleRequest(req)

        return await new Promise((resolve) => {
            form.parse(nodeReq as any, async (err, fields, files) => {
                if (err) {
                    console.error("Formidable parse error:", err)
                    return resolve(NextResponse.json({ error: "Form parsing failed" }, { status: 400 }))
                }

                const imageArray = files.image as any[]
                const imageFile = Array.isArray(imageArray) ? imageArray[0] : imageArray

                if (!imageFile || !imageFile.filepath) {
                    console.error("No image uploaded or invalid file structure:", files)
                    return resolve(NextResponse.json({ error: "No image uploaded" }, { status: 400 }))
                }

                try {
                    const buffer = fs.readFileSync(imageFile.filepath)
                    const file = new File([buffer], imageFile.originalFilename || "image.png", {
                        type: imageFile.mimetype,
                    })

                    const result = await enhanceClassroom(file)

                    return resolve(
                        NextResponse.json({
                            imageUrl: result.imageUrl,
                            description: result.description,
                        })
                    )
                } catch (e) {
                    console.error("Enhancement error:", e)
                    return resolve(NextResponse.json({ error: "Failed to enhance image" }, { status: 500 }))
                } finally {
                    fs.unlink(imageFile.filepath, (unlinkErr) => {
                        if (unlinkErr) {
                            console.error("Failed to delete uploaded file:", unlinkErr)
                        }
                    }) // clean up uploaded file
                }
            })
        })
    } catch (e) {
        console.error("Unexpected error:", e)
        return NextResponse.json({ error: "Internal error" }, { status: 500 })
    }
}
