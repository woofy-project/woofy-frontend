import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainContents from "./components/home/MainContents";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainContents />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
