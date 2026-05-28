import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import URLScanner from "./pages/URLScanner";
import EmailScanner from "./pages/EmailScanner";
import History from "./pages/History";
import Layout from "./components/Layout";
import { Toaster } from "react-hot-toast";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        
        <Route path="/dashboard" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="url" element={<URLScanner />} />
          <Route path="email" element={<EmailScanner />} />
          <Route path="history" element={<History />} />
        </Route>
      </Routes>
      <Toaster position="bottom-right" toastOptions={{ style: { background: '#1e293b', color: '#f8fafc', border: '1px solid #334155' } }} />
    </Router>
  );
}

export default App;