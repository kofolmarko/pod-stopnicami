"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Upload, ImageIcon } from "lucide-react"

export default function UploadForm() {
  const [isDragging, setIsDragging] = useState(false)
  const [file, setFile] = useState<File | null>(null)
  const [preview, setPreview] = useState<string | null>(null)

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = () => {
    setIsDragging(false)
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0])
    }
  }

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0])
    }
  }

  const handleFile = (file: File) => {
    if (file.type.startsWith("image/")) {
      setFile(file)
      const reader = new FileReader()
      reader.onload = () => {
        setPreview(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <div className="bg-slate-50 p-8 rounded-xl shadow-md">
      {!preview ? (
        <div
          className={`border-2 border-dashed rounded-lg p-12 text-center ${
            isDragging ? "border-blue-500 bg-blue-50" : "border-slate-300"
          }`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <div className="mx-auto w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mb-4">
            <Upload className="h-8 w-8 text-slate-500" />
          </div>
          <h3 className="text-lg font-medium text-slate-900 mb-2">Drag and drop your image here</h3>
          <p className="text-slate-600 mb-6">or click to browse from your computer</p>
          <input type="file" accept="image/*" className="hidden" id="file-upload" onChange={handleFileInput} />
          <label htmlFor="file-upload">
            <Button variant="outline" className="border-blue-800 text-blue-800 hover:bg-blue-50" as="span">
              Browse Files
            </Button>
          </label>
        </div>
      ) : (
        <div className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-medium text-slate-900 mb-4">Original Image</h3>
              <div className="relative h-64 rounded-lg overflow-hidden border border-slate-200">
                <img src={preview || "/placeholder.svg"} alt="Original space" className="w-full h-full object-cover" />
              </div>
            </div>
            <div>
              <h3 className="text-lg font-medium text-slate-900 mb-4">Redesigned Space</h3>
              <div className="relative h-64 rounded-lg overflow-hidden border border-slate-200 bg-slate-100 flex items-center justify-center">
                <div className="text-center p-6">
                  <ImageIcon className="h-12 w-12 text-slate-400 mx-auto mb-4" />
                  <p className="text-slate-600">Your redesigned space will appear here after processing</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-between">
            <Button
              variant="outline"
              onClick={() => {
                setFile(null)
                setPreview(null)
              }}
            >
              Upload Different Image
            </Button>
            <Button className="bg-blue-800 hover:bg-blue-900">Generate Redesign</Button>
          </div>
        </div>
      )}
    </div>
  )
}
