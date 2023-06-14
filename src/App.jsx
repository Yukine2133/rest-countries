import { BrowserRouter, Routes, Route } from "react-router-dom";
import Details from "./components/Details";
import Homepage from "./components/Homepage";
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/details/:name" element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
