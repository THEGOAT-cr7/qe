import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLogout } from "../hooks/useLogout";
import { db } from "../firebase/config";
import { collection, getDocs } from "firebase/firestore";
import { toast } from "react-toastify";
import { Chat } from "../components/Chat";

function Home() {
  const { isPending, logout } = useLogout();
  const { user } = useSelector((store) => store.user);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const snapshot = await getDocs(collection(db, "users"));
        const userList = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setUsers(userList);
      } catch {
        toast.error("Error in fetching users", error);
      }
    };
    fetchUsers();
  }, []);

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* left panel */}
      <div className="w-full md:w-3/4 p-6 bg-gray-100">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-black">
          Xush kelibsiz!
        </h1>
        <p className="text-base md:text-lg text-gray-700">
          Bu chap tomondagi kontent. Bu yerga sahifadagi asosiy ma'lumotlar
          yoziladi.
        </p>
      </div>

      {/* right panel */}
      {/* right panel */}
      <div className="w-full md:w-1/4 p-6 bg-white border-t md:border-t-0 md:border-l border-gray-300 flex flex-col justify-between">
        <div>
          <h1 className="text-center text-black text-xl font-semibold">
            Foydalanuvchilar ro'yxati
          </h1>
          {users.length === 0 ? (
            <p className="text-center text-black">
              Hozircha foydalanuvchi yo'q:)
            </p>
          ) : (
            <ul className="flex flex-col gap-1 mt-5 max-h-[300px] overflow-y-auto pr-2">
              {users.map((user) => (
                <li
                  key={user.id}
                  className="p-4 border bg-[#101828] rounded shadow-sm flex items-center gap-4"
                >
                  <div className="relative">
                    <img
                      src={user.photoURL}
                      alt="avatar"
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <span
                      className={`${
                        user.online
                          ? "w-3 h-3 border-2 bg-green-400 absolute bottom-0 right-0 rounded-full"
                          : "bg-black/50"
                      }`}
                    ></span>
                    <span
                      className={`${
                        !user.online
                          ? "w-3 h-3 border-2 bg-red-400 absolute bottom-0 right-0 rounded-full"
                          : "bg-gray-500"
                      }`}
                    ></span>
                  </div>
                  <div>
                    <p className="text-lg font-medium text-white">
                      {user.displayName || "No Name"}
                    </p>
                    <p className="text-sm text-white">
                      {user.email || "No Email"}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Chat component bottom joyda */}
        <div className="mt-6">
          <Chat room="General" />
        </div>
      </div>
    </div>
  );
}

export default Home;
