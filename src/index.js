// index.js
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import About from "./components/About";
import ProductsList from "./components/ProductsList";
import ProductDetails from "./components/ProductDetails";
import ErrPage from "./components/ErrPage";
import HomePage from "./components/HomePage";
import Footer from "./components/Footer";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrPage />,
    children: [
      {
        index: true, // This will render Main on the home page
        element: <HomePage />,
      },

      {
        index: true,
        element: <Footer />,
      },

      {
        path: "product",
        element: <ProductsList />,
      },
      {
        path: "details/:productId",
        element: <ProductDetails />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "*",
        element: <ErrPage />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();


// {*/الطريقه القديمه*}

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <Router>
//       <App>
//         <Switch>
//           <Route exact path="/" component={Main} />
//           <Route path="/product" component={ProductsList} />
//           <Route path="/details/:productId" component={ProductDetails} />
//           <Route path="/about" component={About} />
//           <Route path="/cart/:productId" component={Cart} />
//           <Route component={ErrPage} /> {/* This will catch all other routes */}
//         </Switch>
//       </App>
//       <Footer /> {/* Footer will be shown on all pages */}
//     </Router>
//   </React.StrictMode>
// );
