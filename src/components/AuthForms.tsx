import * as Yup from "yup";

export const registerSchema = Yup.object({
  username: Yup.string() // username
    .min(3, "Username is too short")
    .max(20, "Username is too long")
    .matches(/^[a-zA-Z0-9_]+$/)
    .required("Username is required!"),

  email: Yup.string() // email
    .min(5, "Email is too short")
    .max(30, "Email is too long")
    .email("invalid email")
    .matches(/[@.]/)
    .required("Email is required!"),

  password: Yup.string() // password
    .min(8, "Password is too short")
    .max(30, "Password is too long")
    .matches(/[A-Z]/)
    .matches(/[a-z]/)
    .matches(/[@$!%*?&]/)
    .required("Password is required!"),

  confirmPassword: Yup.string() // password confirmation
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Password confirmation is required!"),
});

export const loginSchema = Yup.object({
  email: Yup.string() // email
    .min(5, "Email is too short")
    .max(30, "Email is too long")
    .email("invalid email")
    .matches(/[@.]/)
    .required("Email is required!"),

  password: Yup.string() // password
    .min(8, "Password is too short")
    .max(30, "Password is too long")
    .required("Password s required!"),
});
