import React from "react";
import {
  Card,
  Icon,
  Image,
  Divider,
  Reveal,
  Button,
  Segment,
  Accordion
} from "semantic-ui-react";
import { Link } from "react-router-dom";
// import { rawListeners } from "../../../models/post";
import * as postApi from "../../utils/postApi";

let colors = [
  // 9 colors total
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
  deletePost
}) {
  // We need to know if the logged in user is in the post.likes array
  // if they are then they've clicked on the like
  // heart should be red
  // onClick of the heart should be removeLike

  // Search the post.likes array, if you there is a match in the username
  // return the index of that like to the liked variable, if not return -1 to liked variable
  const likeIndex = post.likes.findIndex(
    (eachLike) => eachLike.username === user.username
  );

  const dislikeIndex = post.dislikes.findIndex(
    (eachDislike) => eachDislike.username === user.username
  );

  // if the user is in the post.likes array, that means liked is a index number from that array,
  // so the user has clikced on the heart, so the heart should be red,
  // if nothing was found then liked is -1 so the heart should be grey,
  // which means the logged in user is not in the post.likes array
  const likeColor = likeIndex > -1 ? "green" : "grey";
  const dislikeColor = dislikeIndex > -1 ? "red" : "grey";

  // removeLike needs to accept the like id
  const clickHandler = () => likeIndex > -1
      ?  removeLike(post.likes[likeIndex]._id)
      :  addLike(post._id);
  

  const clickHandlerDis = () =>  dislikeIndex > -1
      ? removeDislike(post.dislikes[dislikeIndex]._id)
      : addDislike(post._id);
  

  const clickHandlerPost = () => deletePost(post._id)

  // if the logged in user is not in the post.likes array
  // heart should grey
  // onClick of the heart should addLike
    console.log(post.user._id, "<--post.user._id")
    console.log(user._id, "<--user._id")
  return (
    // <Segment>
    <Card color="blue"/*{colors[getRand(0, 8)]}*/ key={post._id} raised>
      <Card.Content style={{backgroundColor:"skyblue"}} textAlign="left">
      {/* <Accordion>
        <Accordion.Title
          // active={activeIndex === 0}
          index={0}
          // onClick={this.handleClick}
        >
          <Icon name='dropdown' />
          What is a dog?
        </Accordion.Title>
        <Accordion.Content>
          <p>
            A dog is a type of domesticated animal. Known for its loyalty and
            faithfulness, it can be found as a welcome guest in many households
            across the world.
          </p>
        
        </Accordion.Content>
        </Accordion>
        <Accordion>
          <Accordion.Title>
          <Icon name='dropdown' />
          Can you guess the user?
          </Accordion.Title>
          <Accordion.Content>
            <p>
            test
            </p>
          </Accordion.Content>
        </Accordion> */}
        
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
            <Link to={`/${post?.user?.username}`}>
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
        
        <Segment  inverted/*{colors[getRand(0, 9)]}*/ tertiary size="tiny">
          <Card.Content>
            <Divider />
            <Card.Description>
              <h4>{post.q1}</h4>
            </Card.Description>
            <Card.Description textAlign="right">{post.a1}</Card.Description>
            <Card.Description>
              <h4>{post.q2}</h4>
            </Card.Description>
            <Card.Description textAlign="right">{post.a2}</Card.Description>
            <Card.Description>
              <h4>{post.q3}</h4>
            </Card.Description>
            <Card.Description textAlign="right">{post.a3}</Card.Description>
            {/* <Image
              size="tiny"
              style={{ width: 100, height: 50 }}
              src={`${post.photoUrl}`}
              wrapped
              ui={true}
              floated="right"
            /> */}
            
          </Card.Content>
          <Card.Content style={{backgroundColor:"skyblue"}} extra>
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
            {post.user._id === user._id 
             ? <Icon 
              name="delete" 
              style={{ float: "right" }}
              onClick={clickHandlerPost} 
              />
              : ""
            }
             <Divider />

          </Card.Content>
        </Segment>
      </Card.Content>
    </Card>
  );
}

export default PostCard;
