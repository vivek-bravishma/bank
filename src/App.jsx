import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Product from "./pages/Product";
import Car from "./pages/Products/Car";
import HomeLoan from "./pages/Products/Home";
import Personal from "./pages/Products/Personal";
import Home from "./pages/Home";
import Header from "./components/Header";
import Login from "./pages/Login";

const AuthRoute = ({ component: Component, isAuthenticated, ...rest }) => {
  const userPresent = JSON.parse(localStorage.getItem("user")) ? true : false;
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
    element: <Product />,
  },
  {
    path: "/car-loan",
    element: <Car />,
  },
  {
    path: "/home-loan",
    element: <HomeLoan />,
  },
  {
    path: "/personal-loan",
    element: <Personal />,
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
        {/* <Navbar /> */}
        <Header />
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
