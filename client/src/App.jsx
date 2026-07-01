import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Billing from "./pages/Billing";
import Preview from "./pages/Preview";
import SearchInvoice from "./pages/SearchInvoice";
import ViewInvoice from "./pages/ViewInvoice";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/billing" element={<Billing />} />
      <Route path="/preview" element={<Preview />} />
      <Route path="/search" element={<SearchInvoice />} />
      <Route path="/invoice/:id" element={<ViewInvoice />} />
    </Routes>
  );
}

export default App;