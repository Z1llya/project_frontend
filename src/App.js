import {Route, Routes,Navigate} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import PaidPage from "./pages/PaidPage";
import LoginPage from "./pages/LoginPage";
import Paid from "./components/Paid";
import AdminPage from "./pages/AdminPage";
import EditPage from "./pages/EditPage";

function App() {
  return (
    <div >
     <Routes>
         <Route path={''} element = {<MainLayout/>}>
             <Route path={'main'} element = {<PaidPage/>}/>
             <Route index element={<Navigate to={'login'}/>}/>
             <Route path={'login'} element={<LoginPage/>}/>
             <Route path={'paid'} element = {<Paid/>}/>
             <Route path={'admin/users'} element = {<AdminPage/>}/>
             <Route path={'editUser'} element = {<EditPage/>}/>
         </Route>
     </Routes>
    </div>
  );
}

export default App;
