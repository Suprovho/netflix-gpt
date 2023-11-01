
export const checkValidate=(email,password,fullName)=>{
  const isEmailValid=  /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/.test(email);
  const  isPasswordValid=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
  const  isFullNameValid= /(^[A-Za-z]{3,16})([ ]{0,1})([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})/.test(fullName);

  if(!isEmailValid) return "Email is not valid";
  if(!isPasswordValid) return "password is not valid";
  if(!isFullNameValid) return "Enter a valid full name";

  return null;
};