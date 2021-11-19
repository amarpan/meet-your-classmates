import React, { useState } from "react";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import { Button, Form, Grid, Header, Image, Segment, Icon, Message } from "semantic-ui-react";
import userService from "../../utils/userService";
import { useNavigate, Link } from "react-router-dom";

let colors = [ // 9 colors total
  "red",
  "orange",
  "yellow",
  "olive",
  "green",
  "teal",
  "blue",
  "violet",
  "purple"
]

function getRand(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

export default function SignUpPage(props) {
  const navigate = useNavigate(); // <- programtically navigate to a different route

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

    // Forms with Files only we have to do, everything else can be json
    //Take our state
    // create a formData object, for our fetch request
    const formData = new FormData();
    // adding our photo to the FormData, its key will be called photo
    formData.append("photo", selectedFile);

    // now we must do the same thing with the rest of our state
    for (let key in state) {
      formData.append(key, state[key]);
    }
    // if you log out formData, you won't see anything
    // console.log(formData, " < -This will show nothing")
    // You can look inside by doing this
    console.log(formData.forEach((item) => console.log(item)));

    try {
      // For requests that are sending over a photo, we must send formData
      await userService.signup(formData); // after we get a response from the server

      props.handleSignUpOrLogin(); // decodes our token in localstorage, and sets the users information in our App.js state
      navigate("/"); // navigates to the home page route
    } catch (err) {
      setError(err.message);
    }
  }

  function handleFileInput(e) {
    console.log(e.target.files);
    setSelectedFile(e.target.files[0]);
  }

  return (
    <Grid textAlign="center" style={{ height: "100vh" }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h3" color="orange" textAlign="center">
          <Image src="https://www.writeabout.com/wp-content/themes/artikulo/images/students-share-students-icon.png" />{" "}
          Sign Up for Meet Your Classmates
          <Image src="https://i.ibb.co/K6JNMwG/bookoutflip.png" />{" "}
        </Header>
        <Form autoComplete="off" onSubmit={handleSubmit}>
          <Segment inverted color="blue" stacked tertiary>
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
            <Button animated type="submit" className="btn" color="orange">
            <Button.Content visible>Sign-Up</Button.Content>
      <Button.Content hidden>
        <Icon name='arrow right' />Let's go!
      </Button.Content>
            </Button>
          </Segment>
          {error ? <ErrorMessage error={error} /> : null}
        </Form>
        <Message>
            Already a member? <Link to="/login">Login</Link>
          </Message>
          {error ? <ErrorMessage error={error} /> : null}
      </Grid.Column>
    </Grid>
  );
}
