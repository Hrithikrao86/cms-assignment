import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

import {
  Page,
  Card,
  Title,
  Subtitle,
  Form,
  InputGroup,
  Label,
  Input,
  Button,
} from "./LoginStyles";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post("/auth/login", {
        email,
        password,
      });

      localStorage.setItem("token", response.data.token);

      navigate("/dashboard");
    } catch (error) {
      alert(error.response?.data?.message || "Login failed");
    }
  };

  return (
    <Page>
      <Card>
        <Title>Admin Login</Title>
        <Subtitle>Sign in to manage your CMS pages</Subtitle>

        <Form onSubmit={handleSubmit}>
          <InputGroup>
            <Label>Email</Label>

            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </InputGroup>

          <InputGroup>
            <Label>Password</Label>

            <Input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </InputGroup>

          <Button type="submit">Login</Button>
        </Form>
      </Card>
    </Page>
  );
}

export default Login;