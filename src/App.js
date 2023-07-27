import "./App.css";
import { MainContainer } from "./App.Styles";
import NavBar from "./Components/NavBar/NavBar";
import Login from "./Screens/Login/Login";
import HomePage from "./Screens/HomeScreen/HomePage";
import { Routes, Route, Navigate } from "react-router-dom";

import { useSelector } from "react-redux";
function App() {
  const user = useSelector((state) => state.user.email);

  return (
    <MainContainer>
      <NavBar />
      <Routes>
        <Route path={"/"} exact={true} element={<Login />} />
        <Route path="/homepage" element={<HomePage />} />
        {/*         <Route path="/homepage" element={<Navigate replace to="/homepage" />} /> */}
      </Routes>
    </MainContainer>
  );
}

export default App;
