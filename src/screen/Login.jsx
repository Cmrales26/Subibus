import { ScrollView } from "react-native";
import React from "react";
import HeaderLogin from "../components/Login/HeaderLogin";
import LoginOptions from "../components/Login/LoginOptions";

const Login = () => {
  return (
    <ScrollView>
      <HeaderLogin />
      <LoginOptions />
    </ScrollView>
  );
};

export default Login;
