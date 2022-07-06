import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import MainLayout from "./layout/MainLayout";
import Login from "./pages/user/login/Login";
import Register from "./pages/user/register/Register";
import FundingList from "./pages/funding/list/FundingList";
import MyPage from "./pages/user/mypage/MyPage";
import AdminLayout from "./layout/AdminLayout";
import AdminHome from "./pages/admin/home/AdminHome";
import AdminFunding from "./pages/admin/funding/Funding";
import AdminMember from "./pages/admin/member/Member";
import Test from "./pages/user/register/AdressApi";


import "./style/reset.css";
<<<<<<< HEAD
import SupportBoard from './pages/support/notice/SupportBoard';
=======
import SupportBoard from "./pages/support/notice/SupportBoard";
import RegisterForm from "./pages/user/register/RegisterForm";
>>>>>>> main

// 최초 작업자: 권능
// 2022-06-29
// 리액트 프로젝트 구조 및 레이아웃 구조
function App() {
  return (
    <Routes>
      {/* 메인레이아웃 */}
<<<<<<< HEAD
      <Route path="/" element={<MainLayout/>}>
        <Route path="" element={<Home/>}/>
        <Route path="/funding" element={<FundingList/>}/>
        <Route path="/mypage" element={<MyPage/>}/>
        <Route path="/supportboard" element={<SupportBoard/>}/>

=======
      <Route path="/" element={<MainLayout />}>
        <Route path="" element={<Home />} />
        <Route path="/funding" element={<FundingList />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/supportboard" element={<SupportBoard />} />
>>>>>>> main
      </Route>
      
      {/* 로그인 */}
      <Route path="/login" element={<Login />} />
      <Route path="/test" element={<Test />} />
      
      {/* 회원가입 */}
      <Route path="/register" element={<RegisterForm />} />
      <Route path="/register_join" element={<Register />} />
      <Route path="/login" element={<Login/>}/>

      {/* 회원가입 */}
      <Route path="/register" element={<Register/>}/>

      {/* 운영자레이아웃 */}
      <Route path="/admin" element={<AdminLayout />}>
        <Route path="" element={<AdminHome />} />
        <Route path="/admin/funding" element={<AdminFunding />} />
        <Route path="/admin/member" element={<AdminMember />} />
      </Route>
    </Routes>
  );
}

export default App;