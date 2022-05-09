import React, { useEffect } from 'react';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';

export const Auth = () => {

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === "/signin") {
      navigate("/signin/cliente");
    } else if (location.pathname === "/signup") {
      navigate("/signup/cliente");
    }
  }, [location.pathname, navigate]);

  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen px-3 py-10 lg:px-8 font-inter bg-brand-gray">
      <div className="w-full max-w-sm px-6 pb-8 mx-auto bg-white rounded-lg shadow-xl pt-14 md:px-8">
        <div className="flex items-center justify-center pb-6">
          <Link to="/" className="text-4xl font-extrabold tracking-wide text-center text-brand-green-500">PsicologiaMia.</Link>
        </div>
        <Outlet />
      </div>
    </div>
  );
};
