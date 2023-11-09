
export const checkValidate=(email,password,fullName)=>{
  const isEmailValid=  (/^([a-zA-Z0-9+_%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email)&& email!=="");
  const  isPasswordValid=(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)&& password!=="");
  const  isFullNameValid= (/(^[a-zA-Z][a-zA-Z\s]{0,20}[a-zA-Z]$)/.test(fullName) && fullName!=='');


  if(!isEmailValid) return "Email is not valid";
  if(!isPasswordValid) return "password is not valid";
  if(!isFullNameValid) return "Enter a valid full name";

  return null;
};

export const checkValidate2=(email,password,fullName)=>{
  const isEmailValid=  (/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/.test(email) && email!=="");
  const  isPasswordValid=((/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password) && password!==""));
  const  isFullNameValid= (/(^[a-zA-Z][a-zA-Z\s]{0,20}[a-zA-Z]$)/.test(fullName) && fullName!=='');

  if(!isEmailValid) return "Email is not valid";
  if(!isPasswordValid) return "password is not valid";
  if(!isFullNameValid) return "Enter a valid full name";

  return null;
};