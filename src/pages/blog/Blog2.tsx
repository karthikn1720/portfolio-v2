import axios from "axios";
import React from "react";
import Markdown from "react-markdown";

const Blog2 = () => {
  const [blogData, setBlogData] = React.useState<any>([]);
  console.log(blogData);
  React.useEffect(() => {
    axios
      .get("http://localhost:1337/api/blogs", {
        headers: {
          Authorization:
            "Bearer 592e6e0882fb29237319dbdcb8dd4317599c1361fa575c7c750002244cc8b438ae34c6856d95769ea69faaa2809976011267cfa9cd00883650a3407720781ca65cded992b4a504849d01edd82530c4b3e478965a3d42791adc1dfa37daf4652b779331ee4c3763643e37fa22dddc3fedb3bf18d02f0eda8535616d94789c4dd3",
        },
      })
      .then(({ data }) => {
        setBlogData(data?.data);
      });
  }, []);
  return (
    <div className="bg-white">
      {blogData.map((item: any) => {
        const ite = item?.attributes;
        console.log(ite);
        // return <BlocksRenderer content={ite} />;
        return <Markdown children={ite.content2} />;
      })}
    </div>
  );
};

export default Blog2;
