import "./App.css";
import Home from "./components/Home/Home";
import { Routes, Route } from "react-router-dom";
import InsertEmployee from "./components/InsertEmployee/InsertEmployee";
import AppBar from "./components/AppBar/AppBar";
import ContextProvider from "./context/ContextProvider";
import SendEmail from "./components/SendEmail/SendEmail";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <ContextProvider>
      <AppBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/insertEmployee" element={<InsertEmployee />} />
        <Route path="/sendEmail" element={<SendEmail />} />
      </Routes>
      <Footer />
    </ContextProvider>
  );
}

export default App;
