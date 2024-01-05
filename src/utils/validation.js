import { inputType } from "../constants/validationType";

export const validateInput = (type, str)=>{
    
    if(type === inputType.email){
        const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(str);
        return isEmailValid ? null : "Email is not valid";
    }
    if(type === inputType.password){
        const isPasswordValid =  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{8,15}$/.test(str);
        return isPasswordValid ? null : "Password is not valid";
    }
    if(type === inputType.name){
        const isNameValid = /^[a-zA-Z]+(?:[\s'-][a-zA-Z]+)*$/.test(str);
        return isNameValid ? null : "Name is not valid";
    }  
    return null;
}
