import React, { useState } from "react";
import IHome from "../initialView/IHome";
import TopHeader from "../TopHeader";

const VideoHome = () => {
  const [search,setSearch] = useState('')
  return (
    <>
      <TopHeader video={true} setSearch={setSearch} />
      <IHome searchUrl={search} />
    </>
  );
};

export default VideoHome;
