import React, { useState, useRef } from "react";
import Button from "../common/Button";
import {
  EyeContainer,
  LoginFormContainer,
  LoginInput,
  PasswordWrapper,
  ButtonContainer,
} from "../login/styled";

import { DuplicateCheckBtn, ErrorText } from "./styled";

const SignupForm = () => {
  const [nickname, setNickname] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isDuplicate, setIsDuplicate] = useState(null);
  const formRef = useRef(null);
  const handleDuplicateCheck = () => {
    // 특정 조건에 따라 실행
    setIsDuplicate("red");
    setIsDuplicate("green");
    console.log(formRef.current);
  };
  const isPasswordChecked = password === confirmPassword;
  const isFormComplete = nickname && username && password && confirmPassword;
  return (
    <>
      <LoginFormContainer ref={formRef}>
        <PasswordWrapper>
          <LoginInput
            placeholder="닉네임을 입력해주세요"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
            style={{ borderColor: isDuplicate }}
          ></LoginInput>
          <EyeContainer>
            <DuplicateCheckBtn type="button" onClick={handleDuplicateCheck}>
              중복확인
            </DuplicateCheckBtn>
          </EyeContainer>
          {isDuplicate === "green" && (
            <ErrorText style={{ color: "green" }}>
              사용 가능한 아이디입니다.
            </ErrorText>
          )}
          {isDuplicate === "red" && (
            <ErrorText style={{ color: "red" }}>
              중복된 아이디입니다. 다른 아이디를 사용해주세요.
            </ErrorText>
          )}
        </PasswordWrapper>

        <LoginInput
          placeholder="아이디를 입력해주세요"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        ></LoginInput>
        <LoginInput
          placeholder="비밀번호를 입력해주세요"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></LoginInput>
        <LoginInput
          placeholder="비밀번호를 다시 입력해주세요"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        ></LoginInput>
      </LoginFormContainer>
      <ButtonContainer>
        <Button
          bgColor={isFormComplete && isPasswordChecked ? "#1A1E1B" : "#747474"}
          type="submit"
          disabled={!isFormComplete}
        >
          회원가입
        </Button>
      </ButtonContainer>
    </>
  );
};
export default SignupForm;