import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { About } from "@/pages/About";
import { Experience } from "@/pages/Experience";
import { Projects } from "@/pages/Projects";
// import { Blog } from "@/pages/Blog";
// import { BlogPost } from "@/pages/BlogPost";
import { NotFound } from "@/pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<About />} />
          <Route path="experience" element={<Experience />} />
          <Route path="projects" element={<Projects />} />
          {/* <Route path="blog" element={<Blog />} /> */}
          {/* <Route path="blog/:slug" element={<BlogPost />} /> */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
