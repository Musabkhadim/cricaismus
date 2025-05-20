"use client"

// import { useEffect, useState } from "react"
// import "react-quill/dist/quill.snow.css"

// interface QuillEditorProps {
//   value: string
//   onChange: (value: string) => void
// }

// export default function QuillEditor({ value, onChange }: QuillEditorProps) {
//   const [mounted, setMounted] = useState(false)
//   const [ReactQuill, setReactQuill] = useState<any>(null)

//   useEffect(() => {
//     // Import ReactQuill dynamically only on the client side
//     import("react-quill").then((module) => {
//       setReactQuill(() => module.default)
//       setMounted(true)
//     })
//   }, [])

//   if (!mounted || !ReactQuill) {
//     return (
//       <div className="h-64 border rounded-md p-4 bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
//         <p className="text-gray-500">Loading editor...</p>
//       </div>
//     )
//   }

//   const modules = {
//     toolbar: [
//       [{ header: [1, 2, 3, 4, 5, 6, false] }],
//       ["bold", "italic", "underline", "strike"],
//       [{ list: "ordered" }, { list: "bullet" }],
//       [{ indent: "-1" }, { indent: "+1" }],
//       ["link", "image"],
//       ["clean"],
//     ],
//   }

//   return (
//     <div className="quill-container">
//       <ReactQuill theme="snow" value={value} onChange={onChange} modules={modules} className="h-64 mb-12" />
//       <style jsx global>{`
//         .quill-container .ql-container {
//           border-bottom-left-radius: 0.375rem;
//           border-bottom-right-radius: 0.375rem;
//           background: white;
//         }
//         .quill-container .ql-toolbar {
//           border-top-left-radius: 0.375rem;
//           border-top-right-radius: 0.375rem;
//           background: white;
//         }
//         .dark .quill-container .ql-container,
//         .dark .quill-container .ql-toolbar {
//           background: #1f2937;
//           color: white;
//           border-color: #374151;
//         }
//         .dark .quill-container .ql-toolbar .ql-stroke {
//           stroke: #9ca3af;
//         }
//         .dark .quill-container .ql-toolbar .ql-fill {
//           fill: #9ca3af;
//         }
//         .dark .quill-container .ql-toolbar .ql-picker {
//           color: #9ca3af;
//         }
//         .dark .quill-container .ql-editor.ql-blank::before {
//           color: #6b7280;
//         }
//       `}</style>
//     </div>
//   )
// }
// components/MyEditor.js

import dynamic from "next/dynamic";
import 'react-quill/dist/quill.snow.css';

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

export default ReactQuill;
