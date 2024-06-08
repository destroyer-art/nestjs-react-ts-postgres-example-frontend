export interface Post {
  _id: string;
  title: string;
  content?: string;
  done?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

export type CreatePost = Omit<Post, "_id" | "createdAt" | "updatedAt">;

export type UpdatePost = Partial<CreatePost>;