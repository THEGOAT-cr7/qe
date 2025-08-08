import { collection, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase/config";

export const useCollection = (colName) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, colName), (snapshot) => {
      const result = [];
      snapshot.forEach((doc) => {
        result.push({ id: doc.id, ...doc.data() });
      });
      setData(result);
    });

    return () => unsubscribe();
  }, [colName]);

  return { data };
};
