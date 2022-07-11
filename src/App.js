import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Homepage";
import Dashboard from "./pages/Dashboard";
import APIs from "./pages/Dashboard/Apis";
import API from "./pages/Dashboard/Apis/Api";
import DashboardLayout from "./components/Dashboard/DashboardLayout";
import "./App.css";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="dashboard">
              <Route element={<DashboardLayout />}>
                <Route index element={<Dashboard />} />

                <Route path="apis">
                  {/* APIs archive page */}
                  <Route index element={<APIs />} />

                  <Route path=":apiID" element={<API />}>
                    {/* API entry page */}
                  </Route>
                </Route>
              </Route>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
