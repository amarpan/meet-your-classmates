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
  "How many monitors do you have and what size are they?",
  "What computer and OS are you using for GA?",
  "What is your dream programming job?",
  "What has been your favorite part about GA?",
  "What are you going to miss the most about GA?",
  "What has been the hardest part of GA for you so far?",
  "What VS Code theme do you use?",
  "Front-End or Back-End?",
  "Have you ever fallen asleep during a GA lecture?",
  "Favorite programming language?",
  "Python or JavaScript?",
  "If you could sum up GA SEI in one word, what would it be?",
  "Django or Express?",
  "What has been your favorite unit so far?",
  "How many all-nighters have you pulled trying to survive GA SEI?",
  "Before leaving GA, what's something you'd like to say to your classmates or instructors?",
  "If you had to do GA SEI all over again (God forbid), what would you do differently?",
  "In your opinion, how could GA SEI be better?",
  "Favorite song to get in the zone and program to?",
  "What git command(s) do you always forget?",
  "Mac, Windows, or Linux?",
  "How many lectures have you had to rewatch?",
  "Who has been your favorite person at GA?",
  "What's the first thing you're going to do when GA SEI is over?",
  "What programming principles are you still iffy about / need more practice with?",
  "MongoDB or PostgreSQL?",
  "Why do you think it's called 'General Assembly?'",
  "Flexbox or CSS Grid",
  "Regular functions or arrow functions?",
  "Google oAuth, Token-based, or Django built-in authorization?",
  "How many times have you had to attend office hours?",
  "What was the hardest deliverable (or one that you skipped)?",
  "Programming by yourself or working in a group?",
  "Will you ever be the same after GA?",
  "If you could add a custom emoji/gif to Slack, what would it be?",
  "Favorite time of the day/night to code?",
];

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

let rand1 = questions[getRand(0, 36)];
let rand2 = questions[getRand(0, 36)];
let rand3 = questions[getRand(0, 36)];

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
    props.handleAddPost(state);

    rand1 = questions[getRand(0, 36)];
    rand2 = questions[getRand(0, 36)];
    rand3 = questions[getRand(0, 36)];

    setState({
      q1: rand1,
      a1: "",
      q2: rand2,
      a2: "",
      q3: rand3,
      a3: "",
    });
  }

  return (
    <Grid inverted color="white" textAlign="center" verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 400, fontFamily: "Josefin Sans" }}>
        <Form
          size="mini"
          autoComplete="off"
          onSubmit={handleSubmit}
          style={{ color: "white" }}
        >
          <Form.Input
            color="white"
            icon="write"
            size="big"
            className="form-control"
            name="a1"
            label={rand1}
            value={state.a1}
            placeholder="Answer to Question #1"
            onChange={handleChange}
            required
          />
          <Form.Input
            icon="write"
            size="big"
            className="form-control"
            name="a2"
            label={rand2}
            value={state.a2}
            placeholder="Answer to Question #2"
            onChange={handleChange}
            required
          />

          <Form.Input
            icon="write"
            size="big"
            className="form-control"
            name="a3"
            label={rand3}
            value={state.a3}
            placeholder="Answer to Question #3"
            onChange={handleChange}
            required
          />

          <Button
            animated="vertical"
            color="green"
            type="submit"
            className="btn"
          >
            <Button.Content visible>Add Survey</Button.Content>
            <Button.Content hidden>
              <img
                src="https://emojis.slackmojis.com/emojis/images/1613367715/12976/fox_jump.gif?1613367715"
                width="15"
                height="15"
              />
              Submit
              <img
                src="https://emojis.slackmojis.com/emojis/images/1619571094/33817/jumping_fox.gif?1619571094"
                width="15"
                height="15"
              />
            </Button.Content>
          </Button>
        </Form>
      </Grid.Column>
    </Grid>
  );
}
