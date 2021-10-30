import React from "react";

const NotFound = () => {
  return (
    <div className="mt-5">
      <h1 className="text-danger fw-bold">404</h1>
      <p className="text-danger fw-bold">Page Not Found</p>
      <img
        className="w-50"
        src="https://i.ibb.co/0X6b0Bp/404-Error.gif"
        alt=""
      />
    </div>
  );
};

export default NotFound;
