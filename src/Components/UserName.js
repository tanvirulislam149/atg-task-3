import React, { useState } from "react";

const UserName = ({ u, setUserId }) => {
   const [imgError, setImgError] = useState(true);

   return (
      <div>
         <div
            key={u.id}
            style={{ backgroundColor: "lightgray" }}
            className="fs-5 my-2"
         >
            <div
               onClick={() => setUserId(u.id)}
               className="d-flex align-items-center"
            >
               <img
                  style={{
                     width: "50px",
                     height: "50px",
                     borderRadius: "50%",
                  }}
                  className="m-2"
                  src={u?.avatar}
                  onError={({ currentTarget }) => {
                     if (imgError) {
                        setImgError(false);
                        currentTarget.src =
                           "https://cdn-icons-png.flaticon.com/512/149/149071.png";
                     }
                  }}
               />
               <p className="my-0 ms-1">
                  {u?.profile?.firstName} {u?.profile?.lastName}
               </p>
            </div>
         </div>
      </div>
   );
};

export default UserName;
