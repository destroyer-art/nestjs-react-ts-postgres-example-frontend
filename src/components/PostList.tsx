import { usePosts } from "../context/usePosts";
import PostItem from "./PostItem";

function PostsList() {
  const { posts } = usePosts();

  if (!posts.length)
    return <p className="text-center text-xl font-bold my-4">No posts Yet</p>;

  return (
    <div>
      {posts.map((post) => (
        <PostItem post={post} key={post._id} />
      ))}
    </div>
  );
}

export default PostsList;