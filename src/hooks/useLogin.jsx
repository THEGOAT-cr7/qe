import { useState } from "react";
import { useDispatch } from "react-redux";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebase/config";
import { toast } from "react-toastify";
import { login as _login } from "../app/feature/userSlice";
import { doc, updateDoc } from "firebase/firestore";

export const useLogin = () => {
  const [isPending, setIsPending] = useState(false);
  const dispatch = useDispatch();

  const login = async (email, password) => {
    setIsPending(true);
    try {
      const res = await signInWithEmailAndPassword(auth, email, password);
      const user = res.user;
      if (!user) throw new Error("Authentication failed");

      const users = doc(db, "users", auth.currentUser.uid);
      await updateDoc(users, {
        online: true,
      });

      const userData = {
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
        photoURL: user.photoURL || null,
      };

      // localStorage.setItem("user", JSON.stringify(userData));
      dispatch(_login(userData));

      toast.success(`Welcome, ${user.displayName || "User"}`);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setIsPending(false);
    }
  };

  return { login, isPending };
};
