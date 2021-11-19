import React, { useState } from "react";

import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Segment,
  Icon,
  Label,
  Message,
} from "semantic-ui-react";

let questions = [
  "What does your computer setup look like?",
  "What would be your dream job?",
  "What is your favorite part about GA?",
  "What has been the hardest part of GA for you so far?",
  "What was your previous programming experience before GA?",
  "If you were a fruit, what would you be and why?",
  "Have you ever fallen asleep during a GA lecture?",
  "Favorite programming language? ",
  "Python or JavaScript?",
];

let colors = [
  // 9 colors total
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

let rand1 = questions[getRand(0, 9)];
let rand2 = questions[getRand(0, 9)];
let rand3 = questions[getRand(0, 9)];

export default function AddSurveyForm(props) {
  const [selectedFile, setSelectedFile] = useState("");
  const [state, setState] = useState({
    q1: rand1,
    a1: "",
    q2: rand2,
    a2: "",
    q3: rand3,
    a3: "",
  });

  function handleFileInput(e) {
    setSelectedFile(e.target.files[0]);
  }

  function handleChange(e) {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData();
    // formData.append("photo", selectedFile);
    formData.append("q1", state.q1);
    formData.append("a1", state.a1);
    formData.append("q2", state.q2);
    formData.append("a2", state.a2);
    formData.append("q3", state.q3);
    formData.append("a3", state.a3);
    props.handleAddPost(state); // calling our function!

    rand1 = questions[getRand(0, 5)];
    rand2 = questions[getRand(0, 5)];
    rand3 = questions[getRand(0, 5)];

    setState({
      q1: rand1,
      a1: "",
      q2: rand2,
      a2: "",
      q3: rand3,
      a3: "",
    });

    // Have to submit the form now! We need a function!
  }

  return (
    <Grid textAlign="center" style={{ height: "25vh" }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        {/* <Segment inverted color="gray" tertiary> */}
          <Form size="mini" autoComplete="off" onSubmit={handleSubmit}>
            {/* <Form.Input
              className="form-control"
              name="q1"
              value={state.q1}
              onChange={handleChange}
              label="Question #1"
              placeholder="Sample question 1?"
              readOnly
            /> */}
            <Form.Input
              icon="write"
              size="mini"
              className="form-control"
              name="a1"
              label={rand1}
              value={state.a1}
              placeholder="Answer to Question #1"
              onChange={handleChange}
              required
            />
            {/* <Form.Input
              className="form-control"
              name="q2"
              value={state.q2}
              onChange={handleChange}
              label="Question #2"
              placeholder="Sample question 2?"
              readOnly
            /> */}
            <Form.Input
              icon="write"
              size="mini"
              className="form-control"
              name="a2"
              label={rand2}
              value={state.a2}
              placeholder="Answer to Question #2"
              onChange={handleChange}
              required
            />
            {/* <Form.Input
              className="form-control"
              name="q3"
              value={state.q3}
              onChange={handleChange}
              label="Question #3"
              placeholder="Sample question 3?"
              readOnly
            /> */}
            <Form.Input
              icon="write"
              size="mini"
              className="form-control"
              name="a3"
              label={rand3}
              value={state.a3}
              placeholder="Answer to Question #3"
              onChange={handleChange}
              required
            />

            {/* <Form.Input // take this whole thing out if possible
              size="mini"
              className="form-control"
              type="file"
              name="photo"
              label="Upload a pic of something meaningful in your life, or a gif of how you're feeling right now"
              placeholder="Upload a picture of one of your favorite things in your survey"
              onChange={handleFileInput}
              required
            /> */}
            <Button animated color="green" type="submit" className="btn">
              <Button.Content visible>Add Survey</Button.Content>
              <Button.Content hidden>
                <Icon name="arrow right" />
                Submit
              </Button.Content>
            </Button>
          </Form>
        {/* </Segment> */}
      </Grid.Column>
    </Grid>
  );
}
