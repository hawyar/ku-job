import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import * as yup from "yup";

const SignupSchema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().min(8),
  password2: yup.string().min(8),
});

const Register = () => {
  // watch password for match validation
  const { register, handleSubmit, errors, watch } = useForm({
    mode: "onBlur",
    nativeValidation: true,
    validationSchema: SignupSchema,
  });

  const password = useRef({});

  //watch password with form-hooks
  password.current = watch("password", "");

  // event: get target to reset form after submission
  // data: get form data to send to server
  const onSubmit = (data, event) => {
    alert(JSON.stringify(data));
    event.target.reset(); // reset the form after submission
  };

  return (
    <div>
      <CenteredContainer>
        <h1 style={{ color: "white" }}>Sign up</h1>
        <StyledForm>
          <StyledInput
            id="name"
            name="name"
            required
            ref={register({
              maxLength: 30,
              required: "Name is required",
            })}
            placeholder="Name"
            autoComplete="off"
          />
          {errors.name && <span>{errors.name.message}</span>}

          <StyledInput
            name="email"
            placeholder="Email Address"
            autoComplete="off"
            ref={register({ required: true })}
          />
          {errors.email && <span>Email Address is required</span>}
          <StyledInput
            name="password"
            type="password"
            placeholder="Password"
            autoComplete="off"
            ref={register({
              required: "Password is required",
              minLength: { value: 6, message: "Passowrd is too short" },
            })}
          />
          {errors.password && <p>{errors.password.message}</p>}
          <StyledInput
            name="password2"
            type="password"
            placeholder="Password"
            autoComplete="off"
            ref={register({
              required: "Password is required",
              minLength: { value: 6, message: "Passowrd is too short" },
              validate: (value) =>
                value === password.current || "The password do not match",
            })}
          />
          {/* display error message from above validation */}
          {errors.password2 && <p>{errors.password2.message}</p>}
          <StyledButton type="submit" primary onClick={handleSubmit(onSubmit)}>
            Submit
          </StyledButton>
        </StyledForm>

        <p>
          Already have an account <strong>?</strong>{" "}
          <span>
            <a href="/login">Log in</a>
          </span>
        </p>
      </CenteredContainer>
    </div>
  );
};

const CenteredContainer = styled.div`
  margin: 2rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  p {
    a {
      color: red;
    }
  }
`;

const StyledButton = styled.button`
  padding: 9px 18px;
  background-color: ${(props) => (props.primary ? "#252a34" : "#eaeaea")};
  border-radius: 2px;
  border: none;
  color: ${(props) => (props.primary ? "white" : "black")};
  font-weight: 500;
  font-size: 14px;
  box-shadow: 10px 10px 66px 0px rgba(0, 0, 0, 0.17);
  cursor: pointer;
  margin-bottom: 3rem;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;

  input {
    margin: 1rem 0;
    padding: 8px 12px;
    width: 220px;
  }
`;

const StyledInput = styled.input`
  background-color: white;
  border: solid 0.5px #252a34;
  box-shadow: 10px 10px 66px 0px rgba(0, 0, 0, 0.12);

  height: 40px;
  border-radius: 2px;

  :focus {
    border-color: black;
  }
`;

export default Register;
