import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <div className="container py-20">
      <h1 className="text-3xl font-bold mb-4">Page not found</h1>
      <Link to="/">Back home</Link>
    </div>
  );
};
