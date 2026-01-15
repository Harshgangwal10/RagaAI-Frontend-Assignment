export const DUMMY_CREDENTIALS = {
  email: "admin@healthcare.com",
  password: "admin123",
};

export const DUMMY_DASHBOARD_DATA = {
  patients: 1240,
  doctors: 85,
  appointments: 320,
  clinics: 12,
};

export const authenticateUser = (email: string, password: string) => {
  if (
    email === DUMMY_CREDENTIALS.email &&
    password === DUMMY_CREDENTIALS.password
  ) {
    return {
      email: email,
      name: "Admin User",
    };
  }
  return null;
};
