import CodeHighlight from "components/CodeHighlight/CodeHighlight";
import Button from "design/Button/Button";
import Input from "design/Input/Input";
import { useState } from "react";
import _ from "lodash";
import ThankYou from "./ThankYou";
import emailjs from "@emailjs/browser";

import LoadingScreen from "design/LoadingScreen/LoadingScreen";
//
interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactMe = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [touched, setTouched] = useState({
    name: false,
    email: false,
    message: false,
  });

  const [formValid, setFormValid] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const validator = (name: string, val: string) => {
    let err = "";
    if (_.isEmpty(val)) {
      err = "Should not be empty";
    }
    setErrors((prev) => {
      return {
        ...prev,
        [name]: err,
      };
    });
    return err;
  };

  const handleBlur = (e: any) => {
    setTouched((prev) => {
      return {
        ...prev,
        [e.target.name]: true,
      };
    });
    validator(e.target.name, e.target.value);
  };

  const sendEmail = async () => {
    const res = await emailjs.send(
      process.env.REACT_APP_SERVICE_ID!,
      process.env.REACT_APP_TEMPLATE_ID!,
      {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
      },
      {
        publicKey: process.env.REACT_APP_PUBLIC_KEY,
      }
    );
    return res;
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    setTouched({
      name: true,
      email: true,
      message: true,
    });

    const validatedErrors = _.map(formData, (val, key) => validator(key, val));
    const isError = _.some(validatedErrors, (a) => !_.isEmpty(a));
    if (isError) {
      // setAlertMsg("Fill all the fields");
      setFormValid(false);
      setIsLoading(false);
      return;
    }
    setFormValid(true);

    //Submitting
    const res = await sendEmail();
    console.log(res);
    setIsSubmitted(true);
    setIsLoading(false);
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      message: "",
    });
    setErrors({
      name: "",
      email: "",
      message: "",
    });
    setTouched({
      name: false,
      email: false,
      message: false,
    });
    setIsLoading(false);
    setIsSubmitted(false);
    setFormValid(true);
  };

  return (
    <div className="contact-me-container flex-d-c-mobile">
      <div className="form-page">
        {isLoading && <LoadingScreen>Submitting...</LoadingScreen>}

        {isSubmitted ? (
          <ThankYou onClick={resetForm} />
        ) : (
          <div className="">
            <div className="">
              <Input
                label="_name"
                value={formData.name}
                name="name"
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <Input
                label="_email"
                value={formData.email}
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <Input
                id="message"
                label="_message"
                value={formData.message}
                name="message"
                type="text-area"
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
            <div className="button-wrapper">
              <Button disabled={isLoading} onClick={handleSubmit}>
                Submit
              </Button>
              <Button disabled={isLoading} onClick={resetForm}>
                Reset
              </Button>
            </div>
          </div>
        )}
      </div>
      <div className="json-page">
        <div className="code-highlight-wrap-text">
          <CodeHighlight language="javascript">
            {`// FORM DATA 
const formData = {
  name: {
    value: "${formData.name}",
    touched: ${touched.name},
    error: "${errors.name}",
  },
  email: {
    value: "${formData.email}",
    touched: ${touched.email},
    error: "${errors.email}",
  },
  message: {
    value: "${formData.message.replace(/\n/g, " \\n")}",
    touched: ${touched.message},
    error: "${errors.message}",
  }
}
// FORM STATUS
const formStatus = {
  isValid : ${formValid},
  isLoading : ${isLoading},
  isSubmitted : ${isSubmitted}
}
`}
          </CodeHighlight>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
