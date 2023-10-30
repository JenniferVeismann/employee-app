import { BrowserRouter, Route, Routes } from "react-router-dom";
import EmployeesTable from "./components/EmployeesTable";
import MainPage from "./components/MainPage";
import Navigation from "./components/Navigator";
import TribesTable from "./components/TribesTable";



function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
     
        <Route path="/" element={<MainPage/>}/>
        <Route path="/employees" element={<EmployeesTable />} />
        <Route path="/tribes" element={<TribesTable />} />
       
      </Routes>
    </BrowserRouter>
  );
}
export default App;
