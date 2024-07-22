import { Routes, Route } from "react-router-dom";
import Darkeye from "./pages/Darkeye";
import Tadak from "./pages/Tadak";
import Menubar from "./pages/Menubar";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Menubar />}>
        <Route path="/darkeye" element={<Darkeye />}></Route>
        <Route path="/tadak" element={<Tadak />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
