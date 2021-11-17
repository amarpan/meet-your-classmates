import React from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Segment,
  Sidebar,
  Visibility,
} from "semantic-ui-react";

export default function PageHeader({ user, handleLogout }) {
  return (
    <Segment clearing>
      <Header as="h1" textAlign="center" color='red'>
      <Image src="https://www.writeabout.com/wp-content/themes/artikulo/images/students-share-students-icon.png" />
      <Link to="/">
          Meet Your Classmates
        </Link>
        <Image src="https://www.writeabout.com/wp-content/themes/artikulo/images/students-share-students-icon.png" />
      </Header >
      <Header as="h2" floated="right">
      <Link to="" onClick={handleLogout}>
          Logout
        </Link>
      </Header>

      {/* <Header as='h2' floated="right">
                    <Link to="/"><Icon name="home"></Icon></Link>
                    <Link to='' onClick={handleLogout}>MYC</Link>
                </Header> */}
      <Header as="h2" floated="left">
        <Link to={`/${user.username}`}>
          <Image
            avatar
            src={
              user.photoUrl
                ? user.photoUrl
                : "https://react.semantic-ui.com/images/wireframe/square-image.png"
            }
            avatar
          ></Image>
        </Link>
        {/* <Link to="/">
          <Icon name="home">Home</Icon>
        </Link> */}
      </Header>
    </Segment>
  );
}
