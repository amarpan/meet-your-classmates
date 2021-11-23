import React, { useState, useEffect } from "react";
import { Grid } from "semantic-ui-react";
import Loading from "../../components/Loader/Loader";
import ProfileBio from "../../components/ProfileBio/ProfileBio";
import PostFeed from "../../components/PostFeed/PostFeed";
import { useParams } from "react-router-dom";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import userService from "../../utils/userService";
import * as likesApi from "../../utils/likesApi";
import * as dislikesApi from "../../utils/dislikesApi";
import * as postsApi from "../../utils/postApi";


export default function ProfilePage(props) {
  const [posts, setPosts] = useState([]);
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  const { username } = useParams();

  useEffect(() => {

    getProfile();
  }, [username]);

  async function getProfile() {
    try {
      const data = await userService.getProfile(username);
      setPosts(data.posts);
      setUser(data.user);
      setLoading(false);
    } catch (err) {
      setError(err.message);
    }
  }

  async function addLike(postId) {
    try {
      const data = await likesApi.createLike(postId);
      console.log(data, " <- this is data the response from likes create");
      getProfile();
    } catch (err) {
      console.log(err);
      setError(err.message);
    }
  }

  async function addDislike(postId) {
    try {
      const data = await dislikesApi.createDislike(postId);
      console.log(data, " <- this is data the response from dislikes create");
      getProfile();
    } catch (err) {
      console.log(err);
      setError(err.message);
    }
  }

  async function removeLike(likesId) {
    try {
      const data = await likesApi.removeLike(likesId);
      console.log(data, " <- this is data the response from likes delete");
      getProfile(false);
    } catch (err) {
      console.log(err);
      setError(err.message);
    }
  }

  async function removeDislike(dislikesId) {
    try {
      const data = await dislikesApi.removeDislike(dislikesId);
      console.log(data, " <- this is data the response from dislikes delete");
      getProfile(false);
    } catch (err) {
      console.log(err);
      setError(err.message);
    }
  }

  async function deletePost(postId){
    try {
      const data = await postsApi.deletePost(postId);
      console.log(data, " <- this is data the response from likes create");
      getProfile();
    } catch (err) {
      console.log(err);
      setError(err.message);
    }
  }

  if (error) {
    return <ErrorMessage error={error} />;
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <Grid style={{background: "linear-gradient(#e66465, #9198e5)"}}>
      <Grid.Row>
        <Grid.Column>
          <ProfileBio user={user} />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column >
          <PostFeed
            isProfile={true}
            posts={posts}
            numPhotosCol={3}
            user={props.user}
            addLike={addLike}
            removeLike={removeLike}
            addDislike={addDislike}
            removeDislike={removeDislike}
            deletePost={deletePost}
          />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}
