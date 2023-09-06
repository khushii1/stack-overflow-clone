import React from "react";

const Avatar = ({
  children,
  backgroundColor,
  px,
  py,
  color,
  borderRadius,
  fontSize,
  cursor,
}) => {
  const style = {
    backgroundColor,
    padding: `${py} ${px}`,
    color: color || "black",
    borderRadius,
    display:'flex',
    justifyContent:"center",
    alignItem:"center",
    fontSize,
    textAlign: "center",
    cursor: cursor || null,
    textDecoration: "none",
    height : "50px",
    marginTop:"30px",
    width:"50px"
  };

  return <div style={style}>{children}</div>;
};

export default Avatar;
