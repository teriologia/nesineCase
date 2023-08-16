import React, { CSSProperties } from "react";
import FadeLoader from "react-spinners/FadeLoader";
import './loadingstyles.css'

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

interface LoadingProps {}

const Loading = (props: LoadingProps) => {
  return (
    <div className="loading">
      <FadeLoader color="#5A5A5A" loading={true} cssOverride={override} />
      <p className="fetchingText">Fetching Data...</p>
    </div>
  );
};

export default Loading;
