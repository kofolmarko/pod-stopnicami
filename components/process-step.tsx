import type { ReactNode } from "react"

interface ProcessStepProps {
  number: number
  title: string
  description: string
  icon: ReactNode
}

export default function ProcessStep({ number, title, description, icon }: ProcessStepProps) {
  return (
    <div className="group relative p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <div className="absolute -top-4 -left-4 w-10 h-10 bg-blue-800 text-white rounded-full flex items-center justify-center font-bold">
        {number}
      </div>
      <div className="mb-4 w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center group-hover:bg-blue-100 transition-colors">
        {icon}
      </div>
      <h3 className="text-xl font-medium text-slate-900 mb-2">{title}</h3>
      <p className="text-slate-700">{description}</p>
    </div>
  )
}
