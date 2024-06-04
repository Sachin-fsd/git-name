import { Outlet, Navigate } from "react-router-dom";


function AuthLayout() {
  const loggedIn = localStorage.getItem("loggedIn")

  return (
    <>
      {loggedIn ? (
        <Navigate to="/" />
      ) : (
        <>
          <section>
            <Outlet />
          </section>

        </>
      )}
    </>
  );
}
export default AuthLayout