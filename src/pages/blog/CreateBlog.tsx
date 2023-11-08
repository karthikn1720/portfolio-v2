import { updateBlog } from "api/blog";
import React, { useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";

const CreateBlog = () => {
  const [value, setValue] = React.useState("");
  const editorRef = useRef<any>(null);
  const submit = async () => {
    if (editorRef.current) {
      const data = editorRef.current.getContent();
      await updateBlog(data);
    }
  };

  return (
    <div className="bg-white h100">
      <Editor
        apiKey={process.env.TINYMCE_API_KEY}
        onInit={(evt, editor) => (editorRef.current = editor)}
        initialValue="<p>This is the initial content of the editor.</p>"
        init={{
          height: 500,
          menubar: false,
          plugins: [
            "advlist",
            "autolink",
            "lists",
            "link",
            "image",
            "charmap",
            "preview",
            "anchor",
            "searchreplace",
            "visualblocks",
            "code",
            "fullscreen",
            "insertdatetime",
            "media",
            "table",
            "code",
            "help",
            "wordcount",
          ],
          toolbar:
            "undo redo | blocks | " +
            "bold italic forecolor | alignleft aligncenter " +
            "alignright alignjustify | bullist numlist outdent indent | " +
            "removeformat | help",
          content_style:
            "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
        }}
      />
      <button onClick={submit}>Submit</button>
    </div>
  );
};

export default CreateBlog;
