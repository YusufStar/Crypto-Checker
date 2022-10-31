import Detail from "Pages/Detail";
import Home from "Pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Home />}/>
        <Route path="/detail/:id" element={<Detail />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
