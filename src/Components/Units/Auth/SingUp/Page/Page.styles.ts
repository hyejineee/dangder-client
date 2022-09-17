import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const GuidanceWrapper = styled.h1`
  font-weight: 700;
  font-size: 2.1rem;
  margin-bottom: 4rem;
`;

export const AuthCodeBoxWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const AuthCodeBox = styled.input`
  background-color: #f5f5f5;
  border-radius: 0.9rem;
  height: 7rem;
  width: 5.5rem;
  border: none;
  text-align: center;
  font-size: 1.8rem;
  font-weight: 700;
`;

export const ErrorTextWrapper = styled.span`
  font-size: 0.875rem;
  color: red;
  margin-top: 5px;
`;

