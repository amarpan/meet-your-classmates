import React, { useState, useEffect } from "react";
import AddPostForm from "../../components/AddPostForm/AddPostForm";
import PostFeed from "../../components/PostFeed/PostFeed";
// import PostForm from "../../components/PostForm/PostForm";
import Header from "../../components/Header/Header";
import Empty from "../../components/Empty/Empty"
import * as postApi from "../../utils/postApi";

import { Grid, Divider } from "semantic-ui-react";

export default function Feed(props) {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState("");

  async function handleAddPost(post) {
    try {
      console.log(post);
      const data = await postApi.create(post);
      console.log(data.post, " This is new survey", data, " data variable");
      // setPosts( posts => [data.post, ...posts])
      setPosts([data.post, ...posts]);
    } catch (err) {
      setError(err.message);
      console.log(err);
      setError(err.message);
    }
  }

  async function getPosts(showLoading) {
    try {
      //   showLoading ? setLoading(true) : setLoading(false)
      const data = await postApi.getAll();
      setPosts([...data.posts]);
      //   setLoading(false);
    } catch (err) {
      setError(err.message);
      console.log(err, " this is the error");
    }
  }

  useEffect(() => {
    getPosts();
  }, []); // <- useEffect with the empty array this makes the getPosts function call when the component is loaded
  // on the page

  return (
    <Grid>
       <Grid.Row>
        <Grid.Column style={{ maxWidth: 450 }}>
        </Grid.Column>
      </Grid.Row>
        <Grid.Row>
        <Grid.Column style={{ maxWidth: 450 }}>
          <AddPostForm handleAddPost={handleAddPost} />
          const DividerExampleDivider = () => <Divider />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column style={{ maxWidth: 450 }}>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column style={{ maxWidth: 500 }}>
          <PostFeed
            posts={posts}
            isProfile={false}
            numPhotosCol={3}
            // loading={loading}
            user={props.user}
            // addLike={addLike}
            // removeLike={removeLike}
          />
        </Grid.Column>
      </Grid.Row>
   
    </Grid>
  );
}
