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
        { text: "Enhance this classroom. Keep layout, add calming colors, plants, and modern furniture. Generate new image." },
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
