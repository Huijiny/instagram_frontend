import React, { useState } from "react";
import AuthPresenter from "./AuthPresenter";
import useInput from "../../Hooks/useInput";
import { useMutation } from "react-apollo-hooks";
import { LOG_IN } from "./AuthQueries";
import { toast } from "react-toastify";


export default () => {
  const [action, setAction] = useState("logIn");
  const username = useInput("");
  const firstName = useInput("");
  const lastName = useInput("");
  const email = useInput("");
  
  /*
  const requestSecret = useMutation(LOG_IN, {
    update:(_, {data}) => {
       const { requestSecret } = data;
       if(!requestSecret) {
            toast.error("You don't have an account yet, plz create one");
            setTimeout(() => setAction("SignUp"), 3000);}
    }, //이부분 앞에서 '_'이 부분은 어떤걸 의미하는지?
    variables: { email: email.value }
  });
  
  const createAccount = useMutation(CREATE_ACCOUNT,{
      variables:{
          email: email.value,
          username: username.value,
          firstname: firstname.value,
          lastname: lastname.value
      }
  });

  const onSubmit = (e) => {
      e.preventDefault();
      
      if(action ==="logIn") {
          if(email.value !== ""){
              requestSecret();
          }else{
              toast.error("Email is required");
          }
      }else if(action === "signUp"){
          if(email.value!==""&&
          firstname.value!==""&&
          lastname.value!==""&&
          username.value!==""){
              createAccount();
          }else{
              toast.error("All field is required");
          }
      }
  }

  */
const onSubmit = e => {
    const requestSecret = true;
    e.preventDefault();
    
    if(requestSecret){
        toast.error("You don't have an account yet, plz create one");
        setTimeout(() => setAction("SignUp"), 3000);
    }
};   

  return (
    <AuthPresenter
      setAction={setAction}
      action={action}
      username={username}
      firstName={firstName}
      lastName={lastName}
      email={email}
      onSubmit={onSubmit}
    />
  );
};