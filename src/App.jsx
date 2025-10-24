// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import AuthProvider from "./Providers/AuthProviders";
// import MainLayout from "./layouts/MainLayout";
// import PrivateRoute from "./routes/PrivatesRoutes";

// // Pages
// import Home from "./pages/Home";
// import Login from "./pages/Login";
// import Register from "./pages/Register";
// import ForgotPassword from "./pages/ForgotPassword";
// import ToyDetails from "./pages/ToyDetails";
// import MyProfile from "./pages/MyProfile";
// import ExtraPage from "./pages/ExtraPage";
// import NotFound from "./pages/NotFound";

// function App() {
//   return (
//     <AuthProvider>
//       <BrowserRouter>
//         <Routes>
//           {/* Public Routes with Layout */}
//           <Route element={<MainLayout />}>
//             <Route index element={<Home />} />
//             <Route path="login" element={<Login />} />
//             <Route path="register" element={<Register />} />
//             <Route path="forgot-password" element={<ForgotPassword />} />
//             <Route path="*" element={<NotFound />} />
//           </Route>

//           {/* Protected Routes */}
//           <Route element={<PrivateRoute />}>
//             <Route
//               path="/toy/:id"
//               element={
//                 <MainLayout>
//                   <ToyDetails />
//                 </MainLayout>
//               }
//             />
//             <Route
//               path="/my-profile"
//               element={
//                 <MainLayout>
//                   <MyProfile />
//                 </MainLayout>
//               }
//             />
//             <Route
//               path="/extra"
//               element={
//                 <MainLayout>
//                   <ExtraPage />
//                 </MainLayout>
//               }
//             />
//           </Route>
//         </Routes>
//       </BrowserRouter>
//     </AuthProvider>
//   );
// }

// export default App;
