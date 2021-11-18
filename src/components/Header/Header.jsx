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
    <Segment inverted color="black" clearing>
      <Menu inverted  tertiary>
        <Menu.Item>
          <Link to="/">Home</Link>
        </Menu.Item>

        <Menu.Item>
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
        </Menu.Item>

        <Menu.Menu position="right">
          <Menu.Item>
            <Link to="" onClick={handleLogout}>
              Logout
            </Link>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
      <Header as="h1" textAlign="center" color="red">
        <Image src="https://i.ibb.co/vD8wqgj/bookout.png" />
        <Link to="/">Meet Your Classmates</Link>
        <Image src="https://i.ibb.co/K6JNMwG/bookoutflip.png" />
      </Header>
      {/* <Header as="h2" floated="right">
      <Link to="" onClick={handleLogout}>
          Logout
        </Link>
      </Header> */}

      {/* <Header as='h2' floated="right">
                    <Link to="/"><Icon name="home"></Icon></Link>
                    <Link to='' onClick={handleLogout}>MYC</Link>
                </Header> */}
      {/* <Header as="h2" floated="left">
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
      {/* </Header> */}
    </Segment>
  );
}
