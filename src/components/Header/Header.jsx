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
    
    <Segment inverted color="black" clearing >
      
      <Menu inverted  tertiary >
      <Link to="/">
      <Menu.Item >
          Home
        </Menu.Item>
        </Link>

        {/* <Menu.Item >
          <Link to="/">Home</Link>
        </Menu.Item> */}
<Link to={`/${user.username}`}>
        <Menu.Item style={{paddingTop:8}}>
          
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
          <Menu.Item position="right">
            
              Logout
           
          </Menu.Item>
          </Link>
        </Menu.Menu>
      </Menu>
      <Header as="h1" textAlign="center" color="red">
        <Image src="https://i.ibb.co/vD8wqgj/bookout.png" />
        <Link style={{textDecoration:'none', color:"skyblue", fontFamily: "Josefin Sans" }} to="/">Meet Your Classmates</Link>
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
