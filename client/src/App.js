import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/admin/Dashboard";
import ExamAdmin from "./pages/admin/ExamAdmin";
import ExamView from "./pages/admin/ExamView";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
      {/* <Routes>
      <Route path="/" element={<Homepage/>} /> 
        <Route path="/log" element={<Login />} />
      </Routes> */}

      <Routes>
      <Route path="/" element={<Dashboard/>} /> 
        <Route path="/exam" element={<ExamAdmin/>} />
        <Route path="/examview" element={<ExamView />} />
      </Routes>
    </BrowserRouter>  
  );
}

export default App;
