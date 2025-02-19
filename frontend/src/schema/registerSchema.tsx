import * as Yup from 'yup';

export const validationSchema = Yup.object({
  firstName: Yup.string().min(2, "First Name must be at least 2 characters").required("First Name is required"),
  lastName: Yup.string().min(2, "Last Name must be at least 2 characters").required("Last Name is required"),
  email: Yup.string().email("Invalid email format").required("Email is required"),
  password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
  address: Yup.string().required("Address is required"),
  gender: Yup.string().oneOf(["Male", "Female", "Other"], "Select a valid gender").required("Gender is required"),
  // phoneNumber: Yup.string().matches(/^\d{10}$/, "Phone number must be 10 digits").required("Phone number is required"),
  //dateOfBirth: Yup.string().required("Date of Birth is required"),
});