import React, { useState, useEffect } from "react";
import AddPostForm from "../PostForm/PostForm";
import PostFeed from "../../components/PostFeed/PostFeed";
import Header from "../../components/Header/Header";
import * as postApi from "../../utils/postApi";

import { Grid } from "semantic-ui-react";

export default function Empty(props) {
  return (
    <Grid>
      <Grid.Row>
        <Grid.Column style={{ maxWidth: 450 }}>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}
