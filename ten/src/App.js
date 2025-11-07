import { Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./main/Home";
import About from "./main/About";
import Contacts from "./main/Contacts";
import NotFound from "./main/NotFound";
import Category from "./main/Category";
import Recipe from "./main/Recipe";

function App() {
  const text = {
    title: "Welcome to TheMealDB",
    description: "Welcome to TheMealDB: An open, crowd-sourced database of recipes from around the world. We offer a free recipe API for anyone wanting to use it, with additional premium features if required."
  }
  return (
    <>
     <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About text={text} />} />
        <Route path="contacts" element={<Contacts />} />
        <Route path="category/:name" element={<Category />} />
        <Route path="meal/:id" element={<Recipe />} />
        <Route path="*" element={<NotFound />} />
      </Route>
     </Routes>
    </>
  );
}

export default App;
