import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} - Job Less`;
  }, []);
};

export default useTitle;
