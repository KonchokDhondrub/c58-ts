import * as Yup from "yup";

export const registerSchema = Yup.object({
  username: Yup.string() // username
    .min(3, "too short")
    .max(20, "too long")
    .matches(/^[a-zA-Z0-9_]+$/)
    .required("username is required!"),

  email: Yup.string() // email
    .min(5, "too short")
    .max(30, "too long")
    .email("Invalid email")
    .matches(/[@.]/)
    .required("email is required!"),

  password: Yup.string() // password
    .min(8, "Too short")
    .max(30, "too long")
    .matches(/[A-Z]/)
    .matches(/[a-z]/)
    .matches(/[@$!%*?&]/)
    .required("password id required!"),

  confirmPassword: Yup.string() // password confirmation
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("password confirmation is required!"),
});

export const loginSchema = Yup.object({
  email: Yup.string() // email
    .min(5, "too short")
    .max(30, "too long")
    .email("invalid email")
    .matches(/[@.]/)
    .required("email is required!"),

  password: Yup.string() // password
    .min(8, "Too short")
    .max(30, "too long")
    .required("password id required!"),
});
