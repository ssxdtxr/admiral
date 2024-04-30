import { Navigate, Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Collections, History, Plan } from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="plan" element={<Plan />} />
        <Route path="history" element={<History />} />
        <Route path="collections" element={<Collections />} />
      </Route>
      <Route index element={<Navigate to="/plan" />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
