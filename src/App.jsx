import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hooks from "./Component/Hooks";
import Map from "./Component/Map";
import Parent from "./Component/Parent";
import Rest from "./Component/Rest";
import Priyanshu from "./Component/Student/Priyanshu";
import Navbar from "./Component/Home/Navbar";
import Footer from "./Component/Home/Footer";
import LendingPage from "./Component/Home/LendingPage";
import Form from "./Component/Form";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<LendingPage />} />

        <Route path="/hooks" element={<Hooks />} />
        <Route path="/map" element={<Map />} />
        <Route path="/parent" element={<Parent />} />
        <Route path="/rest" element={<Rest />} />
        <Route path="/form" element={<Form />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
