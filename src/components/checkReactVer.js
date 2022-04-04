import React from "react";

require("react-dom");
window.React2 = require("react");
console.log(window.React1 === window.React2);

const checkReactVer = () => {
  return <div></div>;
};

export default checkReactVer;
