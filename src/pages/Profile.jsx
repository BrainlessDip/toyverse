import React, { useContext } from "react";
import { AuthContext } from "./../provider/AuthProvider";

const Profile = () => {
  const { user } = useContext(AuthContext);
  return (
    <>
      <div className="flex justify-center items-center flex-col gap-4 my-10">
        <div className="bg-base-200 border-base-300 rounded-box rounded-3xl shadow-md w-xs border p-4 flex justify-between items-center flex-col gap-5">
          <img
            src={
              user.photoURL ||
              "https://img.icons8.com/?size=100&id=fUUEbUbXhzOA&format=png&color=ffffff"
            }
            className="rounded-3xl w-[100px] h-[100px]"
          />
          <h1>{user.displayName}</h1>
          <h1>Email: {user.email || "Not available"}</h1>
        </div>
        <div className="bg-base-200 border-base-300 rounded-box rounded-3xl shadow-md w-xs border p-4 flex justify-between items-start flex-col gap-5">
          <fieldset>
            <legend className="fieldset-legend text-2xl">Change Profile</legend>
            <form>
              <label className="label">Name</label>
              <input
                type="text"
                className="input focus:outline-0"
                name="name"
                defaultValue={user.displayName}
                placeholder="Name"
              />
              <label className="label">Photo URL</label>
              <input
                type="text"
                className="input focus:outline-0"
                name="photoURL"
                defaultValue={user.photoURL}
                placeholder="Photo URL"
              />
              <button className="btn btn-neutral mt-4 w-full">Change</button>
            </form>
          </fieldset>
        </div>
      </div>
    </>
  );
};

export default Profile;
