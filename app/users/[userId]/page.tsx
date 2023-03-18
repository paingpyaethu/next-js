type Params = {
  params: {
    userId: string;
  };
};

import getUser from "@/lib/getUser";
import getUserPosts from "@/lib/getUserPosts";
import React from "react";

export default async function UserPage({ params: { userId } }: Params) {
  const userData: Promise<User> = getUser(userId);
  const userPostsData: Promise<Post[]> = getUserPosts(userId);

  const [user, userPosts] = await Promise.all([userData, userPostsData]);
  return (
    <>
      <h2>{user.name}</h2>
      <br />
      <UserPosts posts={userPosts} />
    </>
  );
}
