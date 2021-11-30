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
      <Menu inverted tertiary>
        <Link to="/">
          <Menu.Item>Home</Menu.Item>
        </Link>

        <Link to={`/${user.username}`}>
          <Menu.Item style={{ paddingTop: 8 }}>
            <Image
              avatar
              src={
                user.photoUrl
                  ? user.photoUrl
                  : "https://react.semantic-ui.com/images/wireframe/square-image.png"
              }
              avatar
            ></Image>
          </Menu.Item>
        </Link>

        <Menu.Menu position="right">
          <Link to="" onClick={handleLogout}>
            <Menu.Item position="right">Logout</Menu.Item>
          </Link>
        </Menu.Menu>
      </Menu>
      <Header as="h1" textAlign="center" color="red">
        <img src="/images/openbookstraight.png" />

        <Link
          style={{
            textDecoration: "none",
            color: "skyblue",
            fontFamily: "Josefin Sans",
          }}
          to="/"
        >
          Meet Your Classmates
        </Link>
        <img src="/images/openbookflip.png" />
      </Header>
    </Segment>
  );
}
