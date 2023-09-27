import {Routes,Route,Link} from "react-router-dom"
import HomePage from './pages/HomePage'
import EditPage from "./pages/EditPage"
import CreatePage from "./pages/CreatePage"
import "./App.css"
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <div>
      <nav>
        <div style={{padding:"20px"}}>
          <Link style={{textDecoration: 'none'}} to="/"><h2>PhoneX</h2></Link>
        </div>
      </nav>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/edit/:id" element={<EditPage />}/>
        <Route path="/create" element={<CreatePage />} />
      </Routes>
      <ToastContainer />
    </div>
  )
}

export default App
