import * as yup from "yup"

export const LoginFormValidation = yup.object().shape({
 email:yup.string().email().required() ,
 password: yup.string().required().min(4).max(8) ,
})