import React from "react";

const Error = ({ title, message }) => {
  return (
    <div
      className="places-category"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>{title}</h1>
      <p>{message}</p>
    </div>
  );
};

export default Error;
