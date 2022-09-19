import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Homepage/Homepage";
import Blog from "../Pages/Blog";

import NotFound from "../Pages/NotFound";

export default function Links() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blog" element={<Blog />} />
      {/* Finally, catch all unmatched routes */}
      <Route path="*" element={<NotFound />} />;
    </Routes>
  );
}
