import { ObjectSchema, string, object, ref } from "yup";

import { IUserSignUp } from "@app/interfaces";

export const signUpSchema: ObjectSchema<IUserSignUp> = object()
  .shape({
    username: string()
      .email("Your email must be a valid email")
      .required("Your username is required")
      .defined(),
    password: string()
      .required("A password is required")
      .min(10, "Must contain a t least 10 characters.")
      .defined(),
    confirmPassword: string()
      .oneOf([ref("password")], "Password does not match.")
      .required("Confirm password is required")
      .defined(),
  })
  .defined();
