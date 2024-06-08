import { CreatePost, UpdatePost } from "../interface/post.interface";

const API = "http://localhost:3000/api";

export const getPostsRequest = async () => fetch(`${API}/posts`);

export const createPostRequest = async (post: CreatePost) =>
  fetch(`${API}/posts`, {
    method: "POST",
    body: JSON.stringify(post),
    headers: {
      "Content-Type": "application/json",
    },
  });

export const deletePostRequest = async (id: string) =>
  fetch(`${API}/posts/${id}`, {
    method: "DELETE",
  });

export const updatePostRequest = async (id: string, post: UpdatePost) =>
  fetch(`${API}/posts/${id}`, {
    method: "PUT",
    body: JSON.stringify(post),
    headers: {
      "Content-Type": "application/json",
    },
  });

export const getPostRequest = async (id: string) => fetch(`${API}/posts/${id}`);