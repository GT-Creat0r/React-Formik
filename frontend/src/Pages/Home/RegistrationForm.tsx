import React from "react";
import { TextField, Container, Typography, Box, Paper } from "@mui/material";
import { useFormik } from "formik";
import Select from "react-select";
import { Link, useNavigate } from "react-router-dom";
import { validationSchema } from "../../schema/registerSchema";
import CustomButton from "../../components/Button";
import axiosInstance from "../../utils/axiosInstance";
import { ApiConstants } from "../../api/ApiConstants";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const genderOptions = [
  { value: "Male", label: "Male" },
  { value: "Female", label: "Female" },
  { value: "Other", label: "Other" },
];

const RegistrationForm: React.FC = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      address: "",
      gender: "",
      // phoneNumber: "",
      //dateOfBirth: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        const response = await axiosInstance.post(
          ApiConstants.User.REGISTER,
          values
        );
        console.log(response.data);
        toast.success("Registration Completed Successfully!!");
        setTimeout(() => navigate("/login"), 2000);
      } catch (error) {
        toast.error("Registration Failed! Please try again.");
      }
    },
  });

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ padding: 4, borderRadius: 3, marginTop: 5 }}>
        <Typography variant="h4" gutterBottom textAlign="center">
          Registration Form
        </Typography>
        <form onSubmit={formik.handleSubmit}>
          <Box display="flex" flexDirection="column" gap={2}>
            <TextField
              fullWidth
              label="First Name"
              name="firstName"
              value={formik.values.firstName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                formik.touched.firstName && Boolean(formik.errors.firstName)
              }
              helperText={formik.touched.firstName && formik.errors.firstName}
            />
            <TextField
              fullWidth
              label="Last Name"
              name="lastName"
              value={formik.values.lastName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.lastName && Boolean(formik.errors.lastName)}
              helperText={formik.touched.lastName && formik.errors.lastName}
            />
            <TextField
              fullWidth
              label="Email"
              name="email"
              type="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
            <TextField
              fullWidth
              label="Password"
              name="password"
              type="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />
            {/* <TextField
              fullWidth
              label="Phone Number"
              name="phoneNumber"
              value={formik.values.phoneNumber}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                formik.touched.phoneNumber && Boolean(formik.errors.phoneNumber)
              }
              helperText={
                formik.touched.phoneNumber && formik.errors.phoneNumber
              }
            /> */}
            <TextField
              fullWidth
              label="Address"
              name="address"
              value={formik.values.address}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.address && Boolean(formik.errors.address)}
              helperText={formik.touched.address && formik.errors.address}
            />
            {/* <TextField
              fullWidth
              label="Date of Birth"
              name="dateOfBirth"
              type="date"
              slotProps={{ inputLabel: { shrink: true } }}
              value={formik.values.dateOfBirth}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                formik.touched.dateOfBirth && Boolean(formik.errors.dateOfBirth)
              }
              helperText={
                formik.touched.dateOfBirth && formik.errors.dateOfBirth
              }
            /> */}
            <Select
              options={genderOptions}
              onChange={(selectedOption) =>
                formik.setFieldValue("gender", selectedOption?.value)
              }
              onBlur={() => formik.setFieldTouched("gender", true)}
              value={genderOptions.find(
                (option) => option.value === formik.values.gender
              )}
              placeholder="Select Gender"
            />
            {formik.touched.gender && formik.errors.gender && (
              <Typography color="error" variant="body2">
                {formik.errors.gender}
              </Typography>
            )}
            <CustomButton buttonText="Register" />
            <Typography variant="body2" mt={2}>
              Already have an account?
              <Link to="/login">Login</Link>
            </Typography>
          </Box>
        </form>
      </Paper>
    </Container>
  );
};

export default RegistrationForm;
