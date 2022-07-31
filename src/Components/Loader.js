import React from "react";
import MoonLoader from "react-spinners/MoonLoader";

const Loader = () => {
   return (
      <div
         style={{ marginTop: "200px" }}
         className="d-flex justify-content-center"
      >
         <MoonLoader size={70} />
      </div>
   );
};

export default Loader;
