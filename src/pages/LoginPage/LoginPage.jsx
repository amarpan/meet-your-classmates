import React, { useState } from "react";
import "./LoginPage.css";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import userService from "../../utils/userService";
import { useNavigate, Link } from "react-router-dom";
import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Message,
  Segment,
  Icon,
} from "semantic-ui-react";

let colors = [
  "red",
  "orange",
  "yellow",
  "olive",
  "green",
  "teal",
  "blue",
  "violet",
  "purple",
];

function getRand(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

export default function LoginPage(props) {
  const [error, setError] = useState("");
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  function handleChange(e) {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await userService.login(state);
      props.handleSignUpOrLogin();
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <>
      <Grid
        textAlign="center"
        style={{
          height: "100vh",
          background: "linear-gradient(#e66465, #9198e5)",
          fontFamily: "Josefin Sans",
        }}
        verticalAlign="middle"
      >
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as="h3" color="black" textAlign="center" style={{}}>
            <img src="/images/openbookstraight.png" />
            Log-in to Meet Your Classmates
            <img src="/images/openbookflip.png" />
          </Header>
          <Form onSubmit={handleSubmit}>
            <Segment
              style={{ background: "linear-gradient(#e66465, #9198e5)" }}
              color="blue"
              stacked
              tertiary
            >
              <Form.Input
                type="email"
                name="email"
                placeholder="email"
                value={state.email}
                onChange={handleChange}
                label="Email"
                required
              />
              <Form.Input
                name="password"
                type="password"
                placeholder="password"
                value={state.password}
                onChange={handleChange}
                label="Password"
                required
              />
              <Button
                animated="vertical"
                color="pink"
                fluid
                size="large"
                type="submit"
                className="btn"
              >
                <Button.Content visible>Login</Button.Content>
                <Button.Content hidden>
                  Let's go!
                  <img
                    src="https://emojis.slackmojis.com/emojis/images/1619738173/34112/fire_jump.gif?1619738173"
                    width="15"
                    height="15"
                  />
                </Button.Content>
              </Button>
            </Segment>
          </Form>
          <Message
            style={{
              background: "linear-gradient(#e66465, #9198e5)",
              color: "white",
              fontFamily: "Josefin Sans",
            }}
          >
            New to us?{" "}
            <Link
              style={{ color: "black", textDecoration: "underline" }}
              to="/signup"
            >
              Sign Up
            </Link>
          </Message>
          {error ? <ErrorMessage error={error} /> : null}
        </Grid.Column>
      </Grid>
    </>
  );
}
