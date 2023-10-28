import {
  createBrowserRouter,
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Header from "./230926/Header";
import Home from "./230926/Home";
import About from "./230926/About";
import NotFound from "./230926/404";
import User from "./230926/User";
import Redirect from "./230926/Redirect";
import UserDetail from "./230926/UserDetail";
import App from "./App";
import Error from "./230926/Error";
import Comment from "./230926/Comment";
import Kdt from "./230926/Kdt";
import Codingon from "./230926/Codingon";
import NewStudent from "./230926/NewStudent";
import Navbar from "./230926/Navbar";
import StudentAns from "./230926/StudentAns";

// export default function Router() {
//   return (
//     <>
//       <BrowserRouter>
//         <Header />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/user" element={<User />} />
//           <Route path="/user/:userId" element={<UserDetail />} />
//           <Route path="/redirect" element={<Redirect />} />
//           <Route path="*" element={<NotFound />} />
//         </Routes>
//       </BrowserRouter>
//     </>
//   );
// }

// const Router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     children: [
//       { path: "", element: <Home />, errorElement: <Error /> },
//       { path: "/about", element: <About /> },
//       { path: "/redirect", element: <Redirect /> },
//     ],
//     errorElement: <NotFound />,
//   },
//   {
//     path: "/user",
//     element: <App />,
//     children: [
//       { path: "", element: <User /> },
//       {
//         path: ":userId",
//         element: <UserDetail />,
//         children: [{ path: "comment", element: <Comment /> }],
//       },
//       { path: "redirect", element: <Redirect /> },
//     ],
//   },
// ]);

// const Router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     children: [],
//     errorElement: <NotFound />,
//   },
//   {
//     path: "/student/kdt",
//     element: <Kdt />,
//     errorElement: <NotFound />,
//   },
//   {
//     path: "/student/codingon",
//     element: <Codingon />,
//     errorElement: <NotFound />,
//   },
//   {
//     path: "/student/new",
//     element: <NewStudent />,
//     errorElement: <NotFound />,
//   },
// ]);

// export default Router;

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />} />
        <Route path="/student/:name" element={<StudentAns />} />
      </Routes>
    </BrowserRouter>
  );
}
