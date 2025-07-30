import { useState } from "react";
import { useDispatch } from "react-redux";
import { auth } from "../firebase/config";
import { signOut } from "firebase/auth";

import { toast } from "react-toastify";
import { logOut } from "../app/feature/userSlice";

export const useLogout = () => {
  const [isPending, setIsPending] = useState(false);
  const dispatch = useDispatch();

  const logout = async () => {
    setIsPending(true);
    try {
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
