import { postBlog } from "api/blog";
import React, { ChangeEvent, useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";

const CreateBlog = () => {
  const [value, setValue] = React.useState("");
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const editorRef = useRef<any>(null);
  const submit = async () => {
    if (editorRef.current) {
      const payload = {
        content: editorRef.current.getContent(),
        title: value,
      };
      await postBlog(payload);
      setIsSubmitted(true);
    }
  };

  return (
    <div className="bg-white h100">
      <Editor
        onSaveContent={(val) => console.log(val)}
        apiKey={process.env.TINYMCE_API_KEY}
        onInit={(evt, editor) => (editorRef.current = editor)}
        initialValue="<p>This is the initial content of the editor.</p>"
        init={{
          height: 500,
          // menubar: false,
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
            "codesample",
            "save",
            "print",
          ],
          toolbar:
            "undo redo | blocks | " +
            "bold italic forecolor | alignleft aligncenter " +
            "alignright alignjustify | bullist numlist outdent indent | " +
            "removeformat | help | code | image | codesample | preview | save | print",
        }}
      />
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        name="Title"
        className="border"
      />
      <button onClick={submit}>Submit</button>
      {isSubmitted && <span>Submitted successfully</span>}
    </div>
  );
};

export default CreateBlog;
