import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";
function PostCard({ post, isProfile, user }) {
  // We need to know if the logged in user is in the post.likes array
  // if they are then they've clicked on the like
  // heart should be red
  // onClick of the heart should be removeLike

  // Search the post.likes array, if you there is a match in the username
  // return the index of that like to the liked variable, if not return -1 to liked variable
//   const likeIndex = post.likes.findIndex(
//     (eachLike) => eachLike.username === user.username
//   );

  // if the user is in the post.likes array, that means liked is a index number from that array,
  // so the user has clikced on the heart, so the heart should be red,
  // if nothing was found then liked is -1 so the heart should be grey,
  // which means the logged in user is not in the post.likes array
//   const likeColor = likeIndex > -1 ? "red" : "grey";

  // removeLike needs to accept the like id
//   const clickHandler =
//     likeIndex > -1
//       ? () => removeLike(post.likes[likeIndex]._id)
//       : () => addLike(post._id);

  // if the logged in user is not in the post.likes array
  // heart should grey
  // onClick of the heart should addLike

  return (
    <Card key={post._id} raised>
      {isProfile ? (
        ""
      ) : (
        <Card.Content textAlign="left">
          <Card.Header>
            <Link to={`/${post.user.username}`}>
              <Image
                size="large"
                avatar
                src={
                  post.user.photoUrl
                    ? post.user.photoUrl
                    : "https://react.semantic-ui.com/images/wireframe/square-image.png"
                }
              />
              {post.user.username}
            </Link>
          </Card.Header>
        </Card.Content>
      )}
      <Image src={`${post.photoUrl}`} wrapped ui={false} />
      <Card.Content>
        <Card.Description>{post.q1}</Card.Description>
        <Card.Description>{post.a1}</Card.Description>
        <Card.Description>{post.q2}</Card.Description>
        <Card.Description>{post.a2}</Card.Description>
        <Card.Description>{post.q3}</Card.Description>
        <Card.Description>{post.a3}</Card.Description>
      </Card.Content>
      <Card.Content extra textAlign={"right"}>
      </Card.Content>
    </Card>
  );
}

export default PostCard;
