import './App.css';
import { Routes, Route} from "react-router-dom";
import Homepage from './pages/Homepage/Homepage';
import Aboutpage from './pages/Aboutpage/Aboutpage';
import Basketpage from "./pages/Basketpage/Basketpage";
import Notfoundpage from "./pages/Notfoundpage/Notfoundpage";
import Layout from './components/Layout/Layout';
import Description from './pages/Description/Description';

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Homepage />} />
            <Route path=":id" element={<Description />} /> 
            <Route path="about" element={<Aboutpage />} />
            <Route path="basket" element={<Basketpage />} />
            <Route path="*" element={<Notfoundpage />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}
export default App;
