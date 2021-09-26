import React from "react";
import { useForm } from "react-hook-form";
import content from "./Content";
import "./Form.css";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const Form = () => {
  const schema = yup.object().shape({
    username: yup.string().required(),
    email: yup.string().required(),
    password: yup.string().required().min(8),
  });

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => console.log(data);

  
  return (
    <div className="app">
      <div className="continer">
        <h3 className="heading">React-Hook from validation</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          {content.inputs.map((input, key) => {
            return (
              <div className="form" key={key}>
                <p>
                  <input
                    ref={register}
                    name={input.name}
                    type={input.type}
                    placeholder={input.placeholder}
                    
                  />
                </p>
                <p className="warning">{errors[input.name]?.message}</p>
              </div>
            );
          })}
          <button  type="submit">submit</button>
        </form>
      </div>
    </div>
  );
};

export default Form;
