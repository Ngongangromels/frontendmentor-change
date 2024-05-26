export type Response<T> = {
  data?: T;
  error?: string;
};
export type Post = {
  id: number;
  userId: number;
  user: User;
  title: string;
  body: string;
};

export type Comment = {
  id: number;
  body: string;
};

export type User = {
  id: number;
  username: string;
};

async function getUserById(userId: number): Promise<User> {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  );
  return response.json();
}

export async function getAllPost(): Promise<Response<Post[]>> {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts?_page=1&_per_page=5"
    );
    const posts = await response.json();
    const data = await Promise.all(
      (posts as Post[]).map(async (post) => {
        const user = await getUserById(post.userId);
        return {
          id: post.id,
          userId: post.userId,
          user,
          title: post.title,
          body: post.body,
        };
      })
    );
    return {
      data,
    };
  } catch (e) {
    return {
      error: (e as Error)?.message ?? "Impossible to fetch all posts",
    };
  }
}

export async function getCommentsByPostId(
  postId: number
): Promise<Response<Comment[]>> {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/comments?postId=${postId}`
    );
    const comments = await response.json();

    return {
      data: comments?.map((comment: any) => ({
        id: comment.id,
        body: comment.body,
      })),
    };
  } catch (e) {
    return {
      error:
        (e as Error)?.message ??
        `impossible to fetch all comments for post with id ${postId}`,
    };
  }
}
