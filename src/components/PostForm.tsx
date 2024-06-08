import { ChangeEvent, FormEvent, useState } from "react";
import { createPostRequest } from "../api/posts";

function PostForm() {
  const [post, setPost] = useState({
    title: "",
    content: "",
    authorId: 1,
  });
  //const { createPost } = usePosts();

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(post);
    const res = await createPostRequest(post);
    const data = await res.json();
    console.log(data);
    //await createPost(post);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="title"
        type="text"
        placeholder="Write a post"
        onChange={handleChange}
        className="border-2 border-gray-700 p-2 rounded-lg bg-zinc-800 block w-full my-2"
      />

      <textarea
        name="content"
        rows={3}
        onChange={handleChange}
        className="border-2 border-gray-700 p-2 rounded-lg bg-zinc-800 block w-full my-2"
        placeholder="Write a content"
      ></textarea>

      {/* <label className="inline-flex items-center gap-x-2">
        <input
          type="checkbox"
          value={post.done ? 1 : 0}
          onChange={() =>
            setPost({
              ...post,
              done: !post.done,
            })
          }
          className="form-checkbox h-5 w-5 text-indigo-600 transition duration-150 ease-in-out "
        />
        <span>Done</span>
      </label> */}

      <button type="submit" className="bg-indigo-500 px-3 block py-2 w-full">
        Post
      </button>
    </form>
  );
}

export default PostForm;
