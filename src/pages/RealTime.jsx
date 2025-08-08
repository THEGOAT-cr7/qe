import React, { Fragment } from "react";
import { useCollection } from "../hooks/useCollection";

function RealTime() {
  const { data: users } = useCollection("users");

  if (!users) {
    return <h1 className="text-3xl">Loading...</h1>;
  }

  return (
    <div className="flex flex-wrap gap-4">
      {users.map((user) => (
        <Fragment key={user.id}>
          <div
            className={`avatar ${
              user.online ? "avatar-online" : "avatar-offline"
            }`}
          >
            <div className="w-24 rounded-full">
              <img
                src={user.photoURL}
                alt={user.displayName || "user avatar"}
              />
            </div>
          </div>
        </Fragment>
      ))}
    </div>
  );
}

export default RealTime;
