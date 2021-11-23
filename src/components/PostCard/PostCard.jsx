import React from "react";
import {
  Card,
  Icon,
  Image,
  Divider,
  Reveal,
  Button,
  Segment,
  Accordion,
} from "semantic-ui-react";
import { Link } from "react-router-dom";
import * as postApi from "../../utils/postApi";

let colors = [
  "red",
  "orange",
  "green",
  "teal",
  "blue",
  "violet",
  "purple",
  "gray",
];
function getRand(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function PostCard({
  post,
  isProfile,
  user,
  removeLike,
  addLike,
  addDislike,
  removeDislike,
  deletePost,
}) {
  const likeIndex = post.likes.findIndex(
    (eachLike) => eachLike.username === user.username
  );

  const dislikeIndex = post.dislikes.findIndex(
    (eachDislike) => eachDislike.username === user.username
  );

  const likeColor = likeIndex > -1 ? "blue" : "grey";
  const dislikeColor = dislikeIndex > -1 ? "red" : "grey";

  const clickHandler = () =>
    likeIndex > -1 ? removeLike(post.likes[likeIndex]._id) : addLike(post._id);

  const clickHandlerDis = () =>
    dislikeIndex > -1
      ? removeDislike(post.dislikes[dislikeIndex]._id)
      : addDislike(post._id);

  const clickHandlerPost = () => deletePost(post._id);

  return (
    <Card color="blue" key={post._id} raised>
      <Card.Content
        style={{
          background: "linear-gradient(#e66465, #9198e5, #e66465, #9198e5)",
        }}
        textAlign="left"
      >
        <Reveal animated="move down">
          <Reveal.Content visible>
            <Button.Group color="grey">
              <Button>Who</Button>
              <Button>could</Button>
              <Button>it</Button>
              <Button>possibly</Button>
              <Button>be?</Button>
            </Button.Group>
          </Reveal.Content>
          <Reveal.Content hidden>
            <Card.Header>
              <Link style={{ color: "yellow" }} to={`/${post?.user?.username}`}>
                <Image
                  size="large"
                  avatar
                  src={
                    post?.user?.photoUrl
                      ? post?.user?.photoUrl
                      : "https://react.semantic-ui.com/images/wireframe/square-image.png"
                  }
                />
                {post?.user?.username} ({post?.user?.fullName})
              </Link>
            </Card.Header>
          </Reveal.Content>
        </Reveal>

        <Segment
          style={{ backgroundColor: "white", color: "black" }}
          inverted
          tertiary
          size="tiny"
        >
          <Card.Content style={{ fontFamily: "Josefin Sans" }}>
            <Divider />
            <Card.Description style={{ fontFamily: "Josefin Sans" }}>
              <h4
                style={{
                  color: "gray",
                  fontFamily: "Josefin Sans",
                  fontSize: "18px",
                }}
              >
                {post.q1}
              </h4>
            </Card.Description>
            <Card.Description
              style={{
                color: "blue",
                fontFamily: "Josefin Sans",
                fontSize: "18px",
              }}
              textAlign="right"
            >
              {post.a1}
            </Card.Description>
            <Card.Description>
              <h4
                style={{
                  color: "gray",
                  fontFamily: "Josefin Sans",
                  fontSize: "18px",
                }}
              >
                {post.q2}
              </h4>
            </Card.Description>
            <Card.Description
              style={{
                color: "blue",
                fontFamily: "Josefin Sans",
                fontSize: "18px",
              }}
              textAlign="right"
            >
              {post.a2}
            </Card.Description>
            <Card.Description>
              <h4
                style={{
                  color: "gray",
                  fontFamily: "Josefin Sans",
                  fontSize: "18px",
                }}
              >
                {post.q3}
              </h4>
            </Card.Description>
            <Card.Description
              style={{
                color: "blue",
                fontFamily: "Josefin Sans",
                fontSize: "18px",
              }}
              textAlign="right"
            >
              {post.a3}
            </Card.Description>
  
          </Card.Content>
          <Card.Content
            style={{ background: "linear-gradient(#e66465, #9198e5)" }}
            extra
          >
            <Divider />
            <Icon
              name={"thumbs up"}
              size="large"
              color={likeColor}
              onClick={clickHandler}
            />
            {post.likes.length} Likes {""}
            <Icon
              name={"thumbs down"}
              size="large"
              color={dislikeColor}
              onClick={clickHandlerDis}
            />
            {post.dislikes.length} Dislikes {""}
            {post.user._id === user._id ? (
              <Icon
                name="delete"
                style={{ float: "right" }}
                onClick={clickHandlerPost}
              />
            ) : (
              ""
            )}
            <Divider />
          </Card.Content>
        </Segment>
      </Card.Content>
    </Card>
  );
}

export default PostCard;
