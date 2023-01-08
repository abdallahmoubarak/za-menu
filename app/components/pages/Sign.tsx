import { useSignIn, useSignUp } from "@/hooks/useAuth";
import { useState } from "react";
import Button from "../Button";
import Input from "../Input";
import InputsContainer from "../InputsContainer";

export default function Sign() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [msg, setMsg] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSignUp, setIsSignUp] = useState<boolean>(false);

  const { mutate: signUp } = useSignUp({ setMsg, setIsLoading });
  const { mutate: signIn } = useSignIn({ setMsg, setIsLoading });

  return (
    <>
      <div className="flex flex-col items-center justify-center max-w-[26rem] mx-auto p-4 sign-container sm:border-xl sm:border sm:[0_0_10px_-4px_rgba(0,0,0,0.3)] sm:rounded-2xl sm:mt-8">
        <InputsContainer>
          {isSignUp && <Input name={"Name"} value={name} setValue={setName} />}
          <Input name={"Email"} value={email} setValue={setEmail} />
          <Input
            name={"Password"}
            value={password}
            setValue={setPassword}
            inputType={"password"}
          />
          <div className="text-red">{msg}</div>
          <Button
            text={isSignUp ? "Sign Up" : "Sign In"}
            isLoading={isLoading}
            onClick={() =>
              isSignUp
                ? signUp({ name, email, password })
                : signIn({ email, password })
            }
          />
        </InputsContainer>
      </div>
      {/* <style jsx>{`
    @media only screen and (min-width: 600px) {
    .sign-container {
      
      ${styles.transitionAll3s};
    }
    .sign-container:hover {
      ${styles.boxshadowHover};
      ${styles.transitionAll3s};
    }
  }
`}</style> */}
    </>
  );
}
