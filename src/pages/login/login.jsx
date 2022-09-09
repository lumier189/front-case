import React, { useRef, useState } from "react";
import Template from '../../template/main';
import RegisterForm from "./components/registerForm";
import LoginForm from "./components/loginForm";
import Card from "../../template/components/card";

function Login() {
  return (
    <Template>
      <div className="container py-5">
        <div className="row">
          <Card className="col-6">
            <RegisterForm />
          </Card>
          <Card className="col-6 d-flex flex-column justify-content-center heit">
            <LoginForm />
          </Card>
        </div>
      </div>
    </Template >
  );
}

export default Login;