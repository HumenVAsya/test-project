import { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Loader } from "./components/Loader/Loader";

export const App = () => {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 400);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <>
          <main>
            <Outlet />
          </main>
        </>
      )}
    </div>
  );
};
