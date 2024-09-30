/* eslint-disable react/prop-types */
import { useState } from "react";
import { Button, Checkbox, Form, Input, Radio } from "antd";
import axios from "axios";

const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};

// const FormsProps = {
//   width?: string;
//   inputWidth?: string;
//   inputWidth1?: string;
//   heading?: string;
//   radioStyle?: string;
//   terms?: string;
//   formFields?: FormField[];
// };

// const FormValues = {
//   [key: string]: string | number;
// };

const TellaFriend = ({
  width,
  inputWidth,
  inputWidth1,
  heading,
  radioStyle,
  terms,
  formFields = [],
}) => {
  const [formValues, setFormValues] = useState({});

  const handleInputChange = (name, value) => {
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = () => {
    if (formValues.agreeToTerms) {
      onFinish(formValues);
    } else {
      alert("Please agree to the terms and conditions before submitting.");
    }
  };

  const [thankYouMessage, setThanks] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);

  const onFinish = async (values) => {
    try {
      const response = await axios.post(
        "https://formspree.io/f/xjkbnyoe",
        values
      );
      console.log(response.data);

      setThanks("Thank you for your submission! We will get back to you soon");
      setIsDisabled(true);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Form
      name="nest-messages"
      className={`p-5 flex flex-col justify-center place-items-center rounded-2xl gap-[10px] ${width}`}
      validateMessages={validateMessages}
    >
      <h1 className="font-bold text-[#3a3b3b]">
        <span className="text-[red]">*</span>
        {heading}
      </h1>
      {formFields.map((field) => (
        <Form.Item
          key={field.name}
          name={field.name}
          rules={field.rules}
          className={`${inputWidth}`}
        >
          {field.type === "radio" ? (
            <div className={`${radioStyle} h3 flex flex-col`}>
              <label>{field.label}</label>
              <Radio.Group
                value={formValues[field.name]}
                onChange={(e) => handleInputChange(field.name, e.target.value)}
                className="flex place-items-center"
              >
                {field.options?.map((option) => (
                  <Radio key={option} value={option} className="h3">
                    {option}
                  </Radio>
                ))}
              </Radio.Group>
            </div>
          ) : field.type === "textarea" ? (
            <Input.TextArea
              rows={field.rows || 4}
              placeholder={field.placeholder}
              className={`${inputWidth1} py-2 h3`}
              value={formValues[field.name]}
              onChange={(e) => handleInputChange(field.name, e.target.value)}
            />
          ) : (
            <Input
              placeholder={field.placeholder}
              className={`${inputWidth1} py-2 h3`}
              value={formValues[field.name]}
              onChange={(e) => handleInputChange(field.name, e.target.value)}
            />
          )}
        </Form.Item>
      ))}
      <Form.Item className={`${inputWidth}`}>
        <Checkbox
          className="text-justify h3"
          onChange={(e) => handleInputChange("agreeToTerms", e.target.checked)}
        >
          {terms}
        </Checkbox>
      </Form.Item>
      <Form.Item className={`${inputWidth}`}>
        <Button
          type="primary"
          className="flex place-items-center justify-between px-4 py-2 text-[15px] bg-[#005883] font-semibold text-white hover:scale-105 hover:text-white hover:bg-none rounded-sm"
          onClick={handleSubmit}
          disabled={isDisabled}
        >
          Submit
        </Button>
        {thankYouMessage && (
          <p className="text-[#005883] mt-3 font-semibold">{thankYouMessage}</p>
        )}
      </Form.Item>
    </Form>
  );
};

export default TellaFriend;
