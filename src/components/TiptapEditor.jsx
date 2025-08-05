import React from "react";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

export default function TiptapEditor() {
  const editor = useEditor({
    extensions: [StarterKit],
    content: "<p>Hello from Tiptap!</p>",
  });

  return (
    <div className="border rounded-md p-4">
      <EditorContent editor={editor} />
    </div>
  );
}
