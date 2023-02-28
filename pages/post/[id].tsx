import { useRouter } from "next/router";
import React from "react";

type Props = {};

const PostDetailPage = (props: Props) => {
  // contorller
  const router = useRouter();
  const { id } = router.query;

  // view
  return <div>PostDetailPage: {id}</div>;
};

export default PostDetailPage;
