import React, { useState } from "react";

const UserDetails = ({ id, user }) => {
   //    const [imgError, setImgError] = useState(true);

   const singleUser = user?.find((u) => u.id === id);
   console.log(singleUser);

   return (
      <div className="w-50 text-center">
         <h3 className="bg-info py-3">User Details</h3>
         {singleUser ? (
            <div>
               <img
                  style={{
                     width: "150px",
                     height: "150px",
                     borderRadius: "50%",
                  }}
                  className="m-2"
                  src={singleUser?.avatar}
                  onError={({ currentTarget }) => {
                     //  if (imgError) {
                     //     setImgError(false);
                     currentTarget.src =
                        "https://cdn-icons-png.flaticon.com/512/149/149071.png";
                     //  }
                     //  setImgError(true);
                  }}
               />
               <h3>{singleUser?.profile?.username}</h3>
               <div
                  style={{
                     marginTop: "50px",
                     marginLeft: "100px",
                     marginRight: "100px",
                     textAlign: "left",
                  }}
               >
                  <div
                     style={{
                        backgroundColor: "lightgray",
                        border: "2px solid black",
                        padding: "10px",
                     }}
                  >
                     <p className="m-0">{singleUser?.Bio}</p>
                  </div>
                  <p className="mb-0 mt-4 fw-bold">Full Name</p>
                  <div
                     style={{
                        backgroundColor: "lightgray",
                        border: "2px solid black",
                        padding: "10px",
                     }}
                  >
                     <p className="m-0">
                        {singleUser?.profile?.firstName}{" "}
                        {singleUser?.profile?.lastName}
                     </p>
                  </div>
                  <p className="mb-0 mt-4 fw-bold">Job Title</p>
                  <div
                     style={{
                        backgroundColor: "lightgray",
                        border: "2px solid black",
                        padding: "10px",
                     }}
                  >
                     <p className="m-0">{singleUser?.jobTitle}</p>
                  </div>
                  <p className="mb-0 mt-4 fw-bold">Email</p>
                  <div
                     style={{
                        backgroundColor: "lightgray",
                        border: "2px solid black",
                        padding: "10px",
                     }}
                  >
                     <p className="m-0">{singleUser?.profile?.email}</p>
                  </div>
               </div>
            </div>
         ) : (
            <div>
               {" "}
               <h2>Click on the user name to see details</h2>
            </div>
         )}
      </div>
   );
};

export default UserDetails;
