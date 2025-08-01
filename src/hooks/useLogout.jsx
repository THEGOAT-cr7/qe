import { useState } from "react";
import { useDispatch } from "react-redux";
import { auth } from "../firebase/config";
import { signOut } from "firebase/auth";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase/config";

import { toast } from "react-toastify";
import { logOut } from "../app/feature/userSlice";

export const useLogout = () => {
  const [isPending, setIsPending] = useState(false);
  const dispatch = useDispatch();

  const logout = async () => {
    setIsPending(true);
    try {
      if (auth.currentUser) {
        const uid = auth.currentUser.uid;
        const userRef = doc(db, "users", uid);
        await updateDoc(userRef, { online: false });
      }

      await signOut(auth);
      dispatch(logOut());
      toast.success(`Logged out successfully!`);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setIsPending(false);
    }
  };

  return { logout, isPending };
};
