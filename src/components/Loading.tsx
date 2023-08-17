import React from "react";

const style: React.CSSProperties = {
  border: "var(--gap-s) solid var(--color-3)",
  borderRightColor: "var(--color-4)",
  width: "var(--gap-md)",
  height: "var(--gap-md)",
  borderRadius: "50%",
  animation: "spin 1s infinite",
};

const Loading = () => {
  return <div style={style}></div>;
};

export default Loading;
