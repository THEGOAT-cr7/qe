import React, { useEffect, useState } from "react";
import { db } from "../firebase/config";
import { collection, onSnapshot } from "firebase/firestore";
import { toast } from "react-toastify";

function Home() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(db, "users"),
      (snapshot) => {
        const userList = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setUsers(userList);
      },
      (error) => {
        toast.error("Real-time error: " + error.message);
      }
    );

    return () => unsubscribe(); // 🔁 Clean up listener
  }, []);

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Left panel */}
      <div className="w-full md:w-3/4 p-6 bg-gray-100">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-black">
          Xush kelibsiz!
        </h1>
        <p className="text-base md:text-lg text-gray-700">
          Bu chap tomondagi kontent. Bu yerga sahifadagi asosiy ma'lumotlar
          yoziladi.
        </p>
      </div>

      {/* Right panel - Real-time User List */}
      <div className="w-full md:w-1/4 p-6 bg-white border-t md:border-t-0 md:border-l border-gray-300 flex flex-col">
        <h2 className="text-xl font-semibold text-center mb-4 text-black">
          Foydalanuvchilar
        </h2>
        <div className="flex flex-col gap-4 overflow-y-auto max-h-[500px] pr-2">
          {users.length === 0 ? (
            <p className="text-center text-gray-500">
              Hozircha foydalanuvchi yo‘q :)
            </p>
          ) : (
            users.map((user) => (
              <div
                key={user.id}
                className="p-4 border bg-[#101828] rounded shadow-sm flex items-center gap-4"
              >
                <div className="relative">
                  <img
                    src={user.photoURL}
                    alt="avatar"
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <span
                    className={`w-3 h-3 border-2 absolute bottom-0 right-0 rounded-full ${
                      user.online ? "bg-green-400" : "bg-red-400"
                    }`}
                  ></span>
                </div>
                <div>
                  <p className="text-lg font-medium text-white">
                    {user.displayName || "No Name"}
                  </p>
                  <p className="text-sm text-white">
                    {user.online
                      ? "Online"
                      : user.lastSeen
                      ? `Oxirgi marta ${new Date(
                          user.lastSeen
                        ).toLocaleTimeString("uz-UZ", {
                          hour: "2-digit",
                          minute: "2-digit",
                        })} da chiqib ketgan`
                      : "Offline"}
                  </p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
