import { useRouter } from "next/router";
import React from "react";

type Props = {};

const CategoryDetailPage = (props: Props) => {
  // contorller
  const router = useRouter();
  const { id, slug } = router.query;

  // view
  return <div>CategoryDetailPage: {slug}</div>;
};

export default CategoryDetailPage;
