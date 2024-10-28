import { HashRouter, Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import Home from "./pages/Home";
import Sub from "./pages/Sub";

function App() {
  return (
    <HashRouter>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/webtoon/:id" element={<Sub />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
