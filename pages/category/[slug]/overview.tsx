import { useRouter } from "next/router";
import React from "react";

const overview = () => {
  const router = useRouter();
  const { id, slug } = router.query;

  return <div>overview: {slug}</div>;
};

export default overview;
