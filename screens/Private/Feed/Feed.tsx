import PageTitle from "@src/components/title/PageTitle";

import Post from "@src/layouts/posts/Post";
import PostGroup from "@src/layouts/posts/PostGroup";

export default function Feed() {
  return (
    <div>
      <PageTitle title="my feed" key={'feed'}/>
      <PostGroup>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </PostGroup>
    </div>
  );
}
