import { getAllBlogs } from "api/blog";
import Text from "design/Text/Text";
import React from "react";

const Blogs = () => {
  const [data, setData] = React.useState<any[]>([]);
  console.log(data);
  React.useEffect(() => {
    // getAllBlogs().then((res) => setData(res.data));
  }, []);

  const handleClick = () => {};
  return (
    <div className="flex flex-d-c g20px">
      {data?.map((dat) => {
        return (
          <div className="blog-post-container" onClick={handleClick}>
            <Text>{dat.title}</Text>
            <Text>{dat.name}</Text>
            <Text>{dat.createdAt}</Text>
            {/* <ReactQuill value={dat.content} readOnly={true} theme={"bubble"} /> */}
            <div
              className=""
              dangerouslySetInnerHTML={{ __html: dat.content }}
            ></div>
          </div>
        );
      })}
    </div>
  );
};

export default Blogs;
