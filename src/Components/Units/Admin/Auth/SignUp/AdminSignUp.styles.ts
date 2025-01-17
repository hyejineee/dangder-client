import styled from "@emotion/styled";
import { Button, Form } from "antd";

export const Wrapper = styled.div`
  width: 100vw;
  min-width: 550px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: -1rem 0 0 -4rem;
`;

export const LogoImage = styled.img`
  margin-bottom: 2rem;
`;

export const FormTitle = styled.span`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
`;

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 400px;
  border-radius: 10px;
  background-color: #ffffff;
  box-shadow: 8px 8px 15px 0px rgba(0, 0, 0, 0.15);
`;

export const LoginForm = styled(Form)`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const SignUpInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
`;

export const FormInput = styled.input`
  width: 200px;
  height: 30px;
  background-color: #f6f6f6;
  padding: 15px;
  margin: 10px 0px 0px 5px;
  border: 1px solid #cccccc;
  border-radius: 5px;
`;

export const FormLabel = styled.label`
  font-weight: 500;
`;

export const ButtonWrapper = styled(Form.Item)`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SignupButton = styled(Button)`
  width: 20rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoginFooter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FooterSpan = styled.span`
  color: #71717b;
  font-weight: 600;
  margin-right: 6px;
`;

export const MovetoJoinSpan = styled.span`
  font-weight: 500;
  text-decoration: underline;
`;

export const ErrorInputMsg = styled.div`
  color: tomato;
`;
