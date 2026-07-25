import { Outlet } from "react-router-dom";
import { NavBar } from "./NavBar";

export const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-1">
        <Outlet />
      </main>
      <footer className="container py-8 text-sm text-muted">
        © {new Date().getFullYear()} Rayan Kamdem
      </footer>
    </div>
  );
};
