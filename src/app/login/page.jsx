"use client";
import styled from "styled-components";
import TextField from "@mui/material/TextField";
import Link from "next/link";
import { signIn, useSession } from "next-auth/react";
import "./login.css";
import Button from "@/app/component/button";
import Header from "@/app/component/Header";
import Card from "@/app/component/Card";


const Maindiv = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;


export default function Home() {
  const session = useSession();
  console.log(session);
  return (
    <>
      <Maindiv>
        <Card>
          <Header>Login</Header>
          <TextField
            sx={{
              marginBottom: "18px",
              width: "100%",
            }}
            id="outlined-basic"
            label="Email"
            type="email"
            variant="outlined"
          />
          <TextField
            sx={{
              marginBottom: "18px",
              width: "100%",
            }}
            style={{ width: "100%", padding: "px" }}
            id="outlined-basic"
            label="Password"
            type="password"
            variant="outlined"
          />
        
          <Button type="submit"><Link href={"/"}>Login</Link></Button>
          
          
          <p style={{ color: "black" }}>
            Don't have an account?
            <Link
              style={{ color: "lightblue", marginLeft: "5px" }}
              href={"/signup"}
            >
              SignUp
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
                backgroundColor: "black",
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
        </Card>
      </Maindiv>
    </>
  );
}
