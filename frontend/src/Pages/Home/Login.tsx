import { TextField, Typography, Box, Container, Paper } from "@mui/material";
import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { validationSchema } from "../../schema/loginSchema";
import CustomButton from "../../components/Button";
import axiosInstance from "../../utils/axiosInstance";
import { ApiConstants } from "../../api/ApiConstants";
import { toast } from "react-toastify";

const Login: React.FC = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        const response = await axiosInstance.post(ApiConstants.LOGIN, values);
        console.log(response.data);
        toast.success("Login Successfull");
        localStorage.setItem("token", response.data.token);
        setTimeout(() => navigate("/landingPage"), 2000);
      } catch (error) {
        toast.error("Login Failed! Please try again.");
      }
    },
  });

  return (
    <Container maxWidth="xs">
      <Paper elevation={3} sx={{ padding: 4, borderRadius: 3, marginTop: 5 }}>
        <Typography variant="h4" gutterBottom textAlign="center" mb={3}>
          Login
        </Typography>
        <form onSubmit={formik.handleSubmit}>
          <Box display="flex" flexDirection="column" gap={1}>
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
            <CustomButton buttonText="Login" />

            <Typography variant="body2" mt={1}>
              Don't have an account?
              <Link to="/register">Register Now</Link>
            </Typography>
          </Box>
        </form>
      </Paper>
    </Container>
  );
};

export default Login;
