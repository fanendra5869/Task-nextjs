"use client";
import styled from "styled-components";
import TextField from "@mui/material/TextField";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import { useFormik, FormikHelpers } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/navigation";
import Button from "@/app/component/button";
import Header from "@/app/component/Header";
import Card from "@/app/component/Card";
import "@/app/login/login.css";
import Facebook from "next-auth/providers/facebook";

const Maindiv = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

interface FormValues {
  name: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
}

// Validation schema using Yup
const validationSchema = Yup.object({
  name: Yup.string()
    .required("First Name is required")
    .min(2, "First Name should be at least 2 characters"),
  email: Yup.string()
    .email("Enter a valid email")
    .required("Email is required"),
  phone: Yup.string()
    .matches(/^[0-9]+$/, "Phone number must be digits")
    .required("Phone number is required"),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters"),
  confirmPassword: Yup.string()
    .required("Confirm Password is required")
    .oneOf([Yup.ref("password")], "Passwords must match"),
});

export default function Home() {
  const session = useSession();
  console.log(session);
  const router = useRouter();

  // Initialize Formik with TypeScript types for values and submit handler
  const formik = useFormik<FormValues>({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: validationSchema,
    onSubmit: (
      values: FormValues,
      { setSubmitting }: FormikHelpers<FormValues>
    ) => {
      // Simulate form submission and handle success or error
      try {
        // Simulate API call
        console.log("Form data", values);
        setSubmitting(true);
        // Simulate success, then navigate to home
        router.push("/"); // Redirect to home page after success
      } catch (error) {
        console.error("Sign-up failed", error);
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <>
      <Maindiv>
        <Card>
          <Header>SignUp</Header>
          <form onSubmit={formik.handleSubmit}>
            <TextField
              id="outlined-basic"
              sx={{
                marginBottom: "18px",
                width: "100%",
              }}
              label="Name"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur} // triggers form validation on blur
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
              variant="outlined"
            />
            <TextField
              sx={{
                marginBottom: "18px",
                width: "100%",
              }}
              id="outlined-basic"
              label="Email"
              name="email"
              type="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur} // triggers form validation on blur
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
              variant="outlined"
            />
            <TextField
              id="outlined-basic"
              sx={{
                marginBottom: "18px",
                width: "100%",
              }}
              label="Phone"
              name="phone"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur} // triggers form validation on blur
              error={formik.touched.phone && Boolean(formik.errors.phone)}
              helperText={formik.touched.phone && formik.errors.phone}
              variant="outlined"
            />
            <TextField
              sx={{
                marginBottom: "18px",
                width: "100%",
              }}
              style={{ width: "100%", marginBottom: "18px" }}
              id="outlined-basic"
              label="Password"
              name="password"
              type="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur} // triggers form validation on blur
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
              variant="outlined"
            />
            <TextField
              sx={{
                marginBottom: "18px",
                width: "100%",
              }}
              style={{ width: "100%", marginBottom: "18px" }}
              id="outlined-basic"
              label="Confirm Password"
              type="password"
              name="confirmPassword"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur} // triggers form validation on blur
              error={
                formik.touched.confirmPassword &&
                Boolean(formik.errors.confirmPassword)
              }
              helperText={
                formik.touched.confirmPassword && formik.errors.confirmPassword
              }
              variant="outlined"
            />
            <Button
              type="submit"
              disabled={formik.isSubmitting || !formik.isValid}
            >
              SignUp
            </Button>
          </form>
          <p style={{ color: "black" }}>
            Already have an account?
            <Link
              style={{ color: "lightblue", marginLeft: "5px" }}
              href={"/login"}
            >
              Login
            </Link>
          </p>
          <div
            style={{
              display: "flex",
              width: "100%",
              alignItems: "center",
              marginTop: "30px",
            }}
          >
            <hr style={{ width: "100%", color: "black" }}></hr>
            <p style={{ color: "black" }}>or</p>
            <hr
              style={{
                width: "100%",
                color: "black",
              }}
            ></hr>
          </div>
          <div className="btnDiv">
            <div className="btnDiv1">
              <img src="" alt="" />
            </div>
            <div className="btnDiv2">
              <button id="googlebtn" onClick={() => signIn("google")}>
                Login with Google
              </button>
            </div>
          </div>
          <div className="btnDiv">
            <div className="btnDiv1">
              <img src="" alt="" />
            </div>
            <div className="btnDiv2">
              <button id="googlebtn" onClick={() => signIn("facebook")}>
                Login with FaceBook
              </button>
            </div>
          </div>
        </Card>
      </Maindiv>
    </>
  );
}
