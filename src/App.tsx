import { Navigate, Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Collections, History, Plan } from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="history" element={<History />} />
        <Route path="plan" element={<Plan />} />
        <Route path="collections" element={<Collections />} />
      </Route>
      <Route index element={<Navigate to="/history" />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
