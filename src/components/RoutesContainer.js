import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { subject } from "../analytics";

const RoutesContainer = ({ children }) => {
  const history = useHistory();

  useEffect(() => {
    if (history) {
      return history.listen((route) => {
        subject.next({ topic: "router", route });
      });
    }
  }, [history]);

  return children;
};

export default RoutesContainer;
