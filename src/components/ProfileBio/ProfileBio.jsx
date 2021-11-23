import React from "react";
import { Image, Grid, Segment } from "semantic-ui-react";

export default function ProfileBio({ user }) {
  return (
    <Grid textAlign="center" columns={2} className="Profile">
      <Grid.Row>
        <Grid.Column>
          <Image
            src={`${
              user.photoUrl
                ? user.photoUrl
                : "https://react.semantic-ui.com/images/wireframe/square-image.png"
            } `}
            avatar
            size="medium"
          />
        </Grid.Column>
        <Grid.Column
          textAlign="left"
          style={{ maxWidth: 450, fontSize: "12px" }}
        >
          <Segment color="red" vertical>
            <h4>Username: {user.username}</h4>
          </Segment>
          <Segment vertical>
            <h4>Full Name: {user.fullName}</h4>
          </Segment>
          <Segment vertical>
            <h4>Location: {user.location}</h4>
          </Segment>
          <Segment vertical>
            <h4>Email: {user.email}</h4>
          </Segment>
          <Segment vertical>
            <h4>
              LinkedIn:{" "}
              <a href={user.linkedin} target="_blank">
                {user.linkedin}
              </a>
            </h4>
          </Segment>
          <Segment vertical>
            <h4>
              Facebook:{" "}
              <a href={user.facebook} target="_blank">
                {user.facebook}
              </a>
            </h4>
          </Segment>
          <Segment vertical>
            <h4>
              Instagram:{" "}
              <a href={user.instagram} target="_blank">
                {user.instagram}
              </a>
            </h4>
          </Segment>
          <Segment vertical>
            <h4>
              Twitter:{" "}
              <a href={user.twitter} target="_blank">
                {user.twitter}
              </a>
            </h4>
          </Segment>

          <Segment>
            <span> Bio: {user.bio}</span>
          </Segment>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}
