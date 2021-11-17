import React from "react";
import { Card, Icon, Image, Divider } from "semantic-ui-react";
import { Link } from "react-router-dom";
function PostCard({ post, isProfile, user, removeLike, addLike, addDislike, removeDislike }) {
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
  const clickHandler =
    likeIndex > -1
      ? () => removeLike(post.likes[likeIndex]._id)
      : () => addLike(post._id);

  const clickHandlerDis =
      dislikeIndex > -1
        ? () => removeDislike(post.dislikes[dislikeIndex]._id)
        : () => addDislike(post._id);

  // if the logged in user is not in the post.likes array
  // heart should grey
  // onClick of the heart should addLike

  return (
    <Card key={post._id} raised style={{ height: 380 }}>
        <Card.Content textAlign="left">
          <Card.Content>
            <Link to={`/${post.user.username}`}>
              <Image
                size="tiny"
                avatar
                src={
                  post.user.photoUrl
                    ? post.user.photoUrl
                    : "https://react.semantic-ui.com/images/wireframe/square-image.png"
                }
              />
              {post.user.username} ({post.user.fullName})
            </Link>
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
            <Image
              size="tiny"
              style={{ width: 100, height: 50 }}
              src={`${post.photoUrl}`}
              wrapped
              ui={true}
              floated="right"
            />
            <Icon
          name={"thumbs up outline"}
          size="large"
          color={likeColor}
          onClick={clickHandler}
        />
        {post.likes.length} Likes {""} 
        <Icon
          name={"thumbs down outline"}
          size="large"
          color={dislikeColor}
          onClick={clickHandlerDis}
        />
        {post.dislikes.length} Dislikes
          </Card.Content>
        </Card.Content>
      )}

      
    </Card>
  );
}

export default PostCard;
