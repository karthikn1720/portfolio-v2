import CodeHighlight from "components/CodeHighlight/CodeHighlight";
import Text from "design/Text/Text";
import React from "react";
import "./hello.scss";

const Hello = () => {
  return (
    <div className=" h100 w100 flex center border overflow-h">
      <div className="flex aic g20px">
        <div className="flex-1">
          <Text type="active">Hi all, I am</Text>
          <Text fontSize={62} type="active">
            Karthik
          </Text>
          <Text fontSize={32} color="#4D5BCE">{`> Full-stack developer`}</Text>
        </div>
        <div className="code-wrapper flex flex-d-c g20px flex-1">
          {[1, 2, 3, 4, 5].map((ele) => {
            return (
              <div
                key={ele}
                className="border b-width-05 bg-black color-active m-20px br-15"
              >
                <CodeHighlight fontSize="10px">
                  {`const debouncedValidator = React.useMemo(() => debounce(validator, 1000), []);
const handleChange = async (name: string, value: any) => {
  setFormData({
    ...formData,
    ..._.set(formData, name, value),
  });
  const error = await debouncedValidator(formData, value, name);
};`}
                </CodeHighlight>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Hello;
