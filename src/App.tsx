import { Routes, Route } from "react-router-dom";

import {
  Home,
  CreatePost,
} from "@/_root/pages";
import RootLayout from "./_root/RootLayout";
import { Toaster } from "@/components/ui/toaster";

import "./globals.css";

const App = () => {
  return (
    <main className="flex h-screen">
      <Routes>
        {/* public routes */}
        <Route element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="/create-post" element={<CreatePost />} />
        </Route>
      </Routes>

      <Toaster />
    </main>
  );
};

export default App;
