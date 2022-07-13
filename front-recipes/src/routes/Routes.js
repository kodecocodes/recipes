import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { DetailsPage } from "../pages/DetailsPage";
import { HomePage } from "../pages/HomePage";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/detail/:id" element={<DetailsPage />}></Route>
      {/* Redirect if no page */}
      <Route path="*" element={<Navigate to="/" replace />}></Route>
    </Routes>
  );
};
