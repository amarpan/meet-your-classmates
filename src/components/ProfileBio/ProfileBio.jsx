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
            size="small"
          />
        </Grid.Column>
        <Grid.Column textAlign="left" style={{ maxWidth: 450 }}>
          <Segment vertical>
            <h3>Username: {user.username}</h3>
          </Segment>
          <Segment vertical>
            <h3>Name: {user.fullName}</h3>
          </Segment>
          <Segment vertical>
            <h3>Location: {user.location}</h3>
          </Segment>
          <Segment vertical>
          <h3><a href={user.linkedin}>LinkedIn</a></h3>
          </Segment>
          <Segment vertical>
          <h3><a href={user.facebook}>Facebook</a></h3>
          </Segment>
          <Segment vertical>
          <h3><a href={user.instagram}>Instagram</a></h3>
          </Segment>
          <Segment vertical>
          <h3><a href={user.twitter}>Twitter</a></h3>
          </Segment>
          
          <Segment>
            <span> Bio: {user.bio}</span>
          </Segment>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}
