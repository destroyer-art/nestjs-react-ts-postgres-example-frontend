import { Post } from "../interface/post.interface";
import { IoTrash } from "react-icons/io5";
import { MdUpdate } from "react-icons/md";
import { usePosts } from "../context/usePosts";

interface Props {
  post: Post;
}

function PostItem({ post }: Props) {
  const { deletePost, updatePost } = usePosts();

  return (
    <div className="bg-gray-900 p-2 my-2 flex justify-between hover:bg-gray-800 hover:cursor-pointer">
      <div>
        <h3 className="font-bold">{post.title}</h3>
        <p className="text-slate-400">{post.content}</p>
      </div>
      <div className="flex gap-x-2">
        <button
          onClick={() => {
            if (!window.confirm("Are you sure you want to delete it?")) return;
            deletePost(post._id);
          }}
        >
          <IoTrash className="hover:text-red-500" />
        </button>
        <button onClick={() => updatePost(post._id, { done: !post.done })}>
          {post.done ? (
            <MdUpdate className="hover:text-green-500" />
          ) : (
            <MdUpdate className="text-gray-500" />
          )}
        </button>
      </div>
    </div>
  );
}

export default PostItem;