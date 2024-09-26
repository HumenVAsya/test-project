import { HashRouter, Route, Routes } from "react-router-dom";
import { App } from "./App";
import { ProductPage } from "./pages/ProductPage";
import { NotFoundPage } from "./pages/NotFaundPage"; 
import { ProductDetails } from "./pages/ProductDetails";

export const Root = () => (
  <HashRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<ProductPage />} />
        <Route path="product/:productId" element={<ProductDetails />} />
      </Route>
      <Route path="*" element={<NotFoundPage/>} />
    </Routes>
  </HashRouter>
);
