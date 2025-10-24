import React from "react";

const Loader = () => {
  return (
    <div className="flex items-center justify-center min-h-[30vh]">
      <div className="radial-progress text-primary" style={{ "--value": 60 }}>
        Loading
      </div>
    </div>
  );
};

export default Loader;
