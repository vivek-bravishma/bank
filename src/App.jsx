import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Product from "./pages/Product";
import Products from "./pages/Products";
import Services from "./pages/Services";
import Login from "./pages/Login";

const PrivateRoute = ({
  path,
  component: Component,
  isAuthenticated,
  ...rest
}) => {
  const userPresent = JSON.parse(localStorage.getItem("users")) ? true : false;
  return userPresent ? Component : <Navigate to="/login" replace />;
};

const AuthRoute = ({ component: Component, isAuthenticated, ...rest }) => {
  const userPresent = JSON.parse(localStorage.getItem("users")) ? true : false;
  console.log("user==> ", userPresent);
  return userPresent ? <Navigate to="/" /> : Component;
};

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <AuthRoute component={<Login />} />,
  },
  {
    path: "/products",
    element: <Products />,
  },
  {
    path: "/product/:productId",
    element: <Product/>,
  },
  // {
  //   path: "/about",
  //   element: <About />,
  // },
  // {
  //   path: "/dashboard",
  //   element: (
  //     <>
  //       <PrivateRoute component={<Home3 />} />
  //     </>
  //   ),
  // },
];

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={`/${route.path}`}
              element={route.element}
            />
          ))}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
