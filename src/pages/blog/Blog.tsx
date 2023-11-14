import { getBlog } from "api/blog";
import React from "react";
import "../../styles/vars/prism.css";

const Blog = ({ id }: { id: string | number | undefined }) => {
  const [data, setData] = React.useState<string>("");
  React.useEffect(() => {
    if (!id) return;
    getBlog(id).then((val) => {
      setData(val.content);
    });
  }, [id]);
  return (
    <div className="bg-white h100 pad-lr-30 overflow-s">
      <div
        className="bg-white"
        dangerouslySetInnerHTML={{ __html: data }}
      ></div>
    </div>
  );
};

export default Blog;
