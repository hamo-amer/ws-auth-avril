import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import LandPage from "./pages/LandPage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile/Profile";
import NotFound from "./pages/NotFound";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCurrentUser } from "./redux/actions/authActions";
import PrivateRoute from "./router/PrivateRoute";
import Error from "./components/Error";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);
  return (
    <div className='App'>
      <NavBar />
      <Error />
      <Routes>
        <Route path='/' element={<LandPage />} />
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />
        <Route
          path='profile'
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
