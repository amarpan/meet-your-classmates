import React, { useState } from "react";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Segment,
  Icon,
  Message,
} from "semantic-ui-react";
import userService from "../../utils/userService";
import { useNavigate, Link } from "react-router-dom";

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

export default function SignUpPage(props) {
  const navigate = useNavigate();

  const [error, setError] = useState("");
  const [state, setState] = useState({
    username: "",
    email: "",
    password: "",
    passwordConf: "",
    fullName: "",
    location: "",
    linkedin: "",
    facebook: "",
    instagram: "",
    twitter: "",
    bio: "",
  });

  const [selectedFile, setSelectedFile] = useState("");

  function handleChange(e) {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData();
    formData.append("photo", selectedFile);

    for (let key in state) {
      formData.append(key, state[key]);
    }
    console.log(formData.forEach((item) => console.log(item)));

    try {
      await userService.signup(formData);

      props.handleSignUpOrLogin();
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  }

  function handleFileInput(e) {
    console.log(e.target.files);
    setSelectedFile(e.target.files[0]);
  }

  return (
    <Grid
      textAlign="center"
      style={{
        background: "linear-gradient(#e66465, #9198e5)",
        fontFamily: "Josefin Sans",
      }}
      verticalAlign="middle"
    >
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header
          style={{ fontFamily: "Josefin Sans" }}
          as="h3"
          color="black"
          textAlign="center"
        >
          <Image src="https://www.writeabout.com/wp-content/themes/artikulo/images/students-share-students-icon.png" />{" "}
          Sign Up for Meet Your Classmates
          <Image src="https://i.ibb.co/K6JNMwG/bookoutflip.png" />{" "}
        </Header>
        <Form
          autoComplete="off"
          onSubmit={handleSubmit}
          style={{ color: "pink" }}
        >
          <Segment
            style={{
              background: "linear-gradient(#e66465, #9198e5, #e66465, #9198e5)",
            }}
            color="blue"
            stacked
            tertiary
          >
            <Form.Input
              name="username"
              placeholder="cutie123"
              value={state.username}
              onChange={handleChange}
              color="yellow"
              label="Username"
              required
            />
            <Form.Input
              type="email"
              name="email"
              placeholder="fruity124@aol.com"
              value={state.email}
              onChange={handleChange}
              label="Email"
              required
            />
            <Form.Input
              name="password"
              type="password"
              placeholder="123password456"
              value={state.password}
              onChange={handleChange}
              label="Password"
              required
            />
            <Form.Input
              name="passwordConf"
              type="password"
              placeholder="123password456"
              value={state.passwordConf}
              onChange={handleChange}
              label="Confirm Password"
              required
            />
            <Form.Input
              name="fullName"
              placeholder="Richard Dickson"
              value={state.fullName}
              onChange={handleChange}
              label="Full Name"
              required
            />
            <Form.Input
              name="location"
              placeholder="Raccoon City, CA, USA"
              value={state.location}
              onChange={handleChange}
              label="Location"
              required
            />
            <Form.Input
              name="linkedin"
              placeholder="https://www.linkedin.com/in/user"
              value={state.linkedin}
              onChange={handleChange}
              label="LinkedIn (OPTIONAL)"
            />
            <Form.Input
              name="facebook"
              placeholder="https://www.facebook.com/user"
              value={state.facebook}
              onChange={handleChange}
              label="Facebook (OPTIONAL)"
            />
            <Form.Input
              name="instagram"
              placeholder="https://www.instagram.com/user"
              value={state.instagram}
              onChange={handleChange}
              label="Instagram (OPTIONAL)"
            />
            <Form.Input
              name="twitter"
              placeholder="https://twitter.com/user"
              value={state.twitter}
              onChange={handleChange}
              label="Twitter (OPTIONAL)"
            />

            <Form.TextArea
              label="bio"
              name="bio"
              placeholder="The GOAT"
              onChange={handleChange}
              label="Bio"
              required
            />
            <Form.Field>
              <Form.Input
                type="file"
                name="photo"
                placeholder="upload image"
                onChange={handleFileInput}
                label="Profile Picture"
                required
              />
            </Form.Field>
            <Button
              animated="vertical"
              type="submit"
              className="btn"
              color="pink"
              style={{ fontFamily: "Josefin Sans" }}
            >
              <Button.Content visible>Sign-Up</Button.Content>
              <Button.Content hidden>
                Let's go!
                <img
                  src="https://emojis.slackmojis.com/emojis/images/1618879340/31931/floating-rock_jump.gif?1618879340"
                  width="15"
                  height="15"
                />
              </Button.Content>
            </Button>
          </Segment>
          {error ? <ErrorMessage error={error} /> : null}
        </Form>
        <Message
          style={{
            background: "linear-gradient(#e66465, #9198e5)",
            color: "white",
          }}
        >
          Already a member?{" "}
          <Link
            style={{ color: "black", textDecoration: "underline" }}
            to="/login"
          >
            Login
          </Link>
        </Message>
        {error ? <ErrorMessage error={error} /> : null}
      </Grid.Column>
    </Grid>
  );
}
