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
        <Grid.Column textAlign="left" style={{ maxWidth: 450 }}>
          <Segment color="red" vertical>
            <h3>Username: {user.username}</h3>
          </Segment>
          <Segment vertical>
            <h3>Full Name: {user.fullName}</h3>
          </Segment>
          <Segment vertical>
            <h3>Location: {user.location}</h3>
          </Segment>
          <Segment vertical>
            <h3>Email: {user.email}</h3>
          </Segment>
          <Segment vertical>
          <h3>LinkedIn: <a href={user.linkedin} target="_blank">{user.linkedin}</a></h3>
          </Segment>
          <Segment vertical>
          <h3>Facebook: <a href={user.facebook} target="_blank">{user.facebook}</a></h3>
          </Segment>
          <Segment vertical>
          <h3>Instagram: < a href={user.instagram} target="_blank">{user.instagram}</a></h3>
          </Segment>
          <Segment vertical>
          <h3>Twitter: <a href={user.twitter} target="_blank">{user.twitter}</a></h3>
          </Segment>
          
          <Segment>
            <span> Bio: {user.bio}</span>
          </Segment>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}
