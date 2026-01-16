import type { ValidationError } from "../types";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const validateLoginForm = (email: string, password: string): ValidationError => {
  const errors: ValidationError = {};

  if (!email.trim()) errors.email = "Email is required";
  else if (!EMAIL_REGEX.test(email)) errors.email = "Invalid email address";

  if (!password) errors.password = "Password is required";
  else if (password.length < 3) errors.password = "Password must be at least 3 characters";

  return errors;
};

export const isFormValid = (errors: ValidationError) => !Object.keys(errors).length;
