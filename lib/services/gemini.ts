import { GoogleGenAI, Modality } from "@google/genai";
// Removed 'fs' import as file system operations are not supported in the browser environment.
import fs from "fs"

export async function enhanceClassroom(file: File): Promise<{
    outputImagePath: any;
    imageUrl?: string;
    description?: string;
}> {
    const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY! });

    // Read the file as a base64 string
    const arrayBuffer = await file.arrayBuffer();
    const base64Image = Buffer.from(arrayBuffer).toString("base64");

    // Prepare the content parts
    const contents = [
        { text: "Add to my image what is missing: A long, well-lit school hallway with sleek light-colored wooden flooring and warm-toned wooden ceiling panels extends forward, featuring floor-to-ceiling glass walls on both sides revealing classrooms. Deep green and muted blue cushioned wall panels line the hallway at regular intervals, while padded impact columns are embedded into the walls between them. Some sections of the walls incorporate built-in rebound pads with subtle give when pushed. Throughout the space, wooden and upholstered benches in curved and geometric shapes are positioned along the walls, with some benches incorporating climbing holds and interactive elements. Recessed lighting fixtures in the ceiling create soft, even illumination across the space. Small, unobtrusive acoustic panels are integrated into the walls at regular intervals. Large windows at the end of the hallway provide natural light that complements the interior lighting. Wide-angle architectural photography with natural and artificial lighting highlighting interior details and materials. try to keep as much as you can from the original image (like layout), just add things from the prompt to add to it." },
        {
            inlineData: {
                mimeType: file.type,
                data: base64Image,
            },
        },
    ];

    // Set responseModalities to include "Image" so the model can generate an image
    const response = await ai.models.generateContent({
        model: "gemini-2.0-flash-exp-image-generation",
        contents: contents,
        config: {
            responseModalities: [Modality.TEXT, Modality.IMAGE],
        },
    });

    let description: string | undefined;
    let imageUrl: string | undefined;

    for (const part of response.candidates?.[0]?.content?.parts || []) {
        if (part.text) {
            description = part.text;
        } else if (part.inlineData) {
            const imageData = part.inlineData.data;
            if (imageData) {
                const buffer = Buffer.from(imageData, "base64");
                const outputPath = `public/enhanced-classroom-${Date.now()}.png`;

                // Write file to disk on server
                fs.writeFileSync(outputPath, buffer);

                imageUrl = `/${outputPath.replace("public/", "")}`; // serve from /public
            }

        }
    }

    return { outputImagePath: imageUrl, imageUrl, description };
}
