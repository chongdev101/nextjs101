import { useRouter } from "next/router";
import React from "react";

type Props = {};

const PostDetailPage = (props: Props) => {
  // contorller
  const router = useRouter();
  const { id } = router.query;


  // const
  // let

  //   const postId = id as string;

  // view
  return <div>PostDetailPage: {id}</div>;
};

export default PostDetailPage;
