import { createContext, useEffect, useState } from "react";
import { CreatePost, Post, UpdatePost } from "../interface/post.interface";
import {
  createPostRequest,
  deletePostRequest,
  getPostsRequest,
  updatePostRequest,
} from "../api/posts";

interface PostContextValue {
  posts: Post[];
  createPost: (post: CreatePost) => Promise<void>;
  deletePost: (id: string) => Promise<void>;
  updatePost: (id: string, post: UpdatePost) => Promise<void>;
}

export const PostContext = createContext<PostContextValue>({
  posts: [],
  createPost: async () => {
    throw new Error("createPost() not implemented");
  },
  deletePost: async () => {
    throw new Error("deletePost() not implemented");
  },
  updatePost: async () => {
    throw new Error("updatePost() not implemented");
  },
});

interface Props {
  children: React.ReactNode;
}

export const PostProvider: React.FC<Props> = ({ children }) => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    getPostsRequest()
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, []);

  const createPost = async (post: CreatePost) => {
    const response = await createPostRequest(post);
    const data = await response.json();
    setPosts([...posts, data]);
  };

  const deletePost = async (id: string) => {
    const response = await deletePostRequest(id);
    console.log(response)
    if (response.status === 204) {
      setPosts(posts.filter((post) => post._id !== id));
    }
  };

  const updatePost = async (id: string, post: UpdatePost) => {
    const response = await updatePostRequest(id, post);
    const data = await response.json();
    console.log(data)
    setPosts(
      posts.map((post) => (post._id === id ? { ...post, ...data } : post))
    );
  };

  return (
    <PostContext.Provider value={{ posts, createPost, deletePost, updatePost }}>
      {children}
    </PostContext.Provider>
  );
};