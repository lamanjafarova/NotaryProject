import { Route, Routes } from "react-router-dom";
import Header from "./layouts/header";
import AddCustomer from "./pages/add-customer";
import HomePage from "./pages/homepage";
import "./App.scss"
import Footer from "./layouts/footer";
import Details from "./pages/details";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/add-customer" element={<AddCustomer />} />
        <Route path="/home/:_id" element={<Details />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
