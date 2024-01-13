import { Route, Routes } from "react-router-dom";
import Home from "./views/home/home";
import Detail from "./views/detail/detail";
import Create from "./views/create/create";
import Landing from "./views/landing/landing";

function App() {
  return (
    <div>
      <Routes>
      <Route exact path="/" element={<Landing/>} />
        <Route path="/driver/:id" element={<Detail/>} />
        <Route exact path="/home" element={<Home/>} />
        <Route path="/create" element={<Create/>} />
      </Routes>
    </div>
  );
}

export default App;