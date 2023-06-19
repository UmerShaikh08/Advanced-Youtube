import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Head from "./components/Head";
import Body from "./components/Body";
import VideoCard from "./components/VideoCard";
import VideoContainer from "./components/VideoContainer";
import WatchPage from "./components/WatchPage";
import SearchPage from "./components/SearchPage";

// const Myrouter = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     // errorElement: <div>hlo</div>,
//     children: [
//       {
//         path: "/head",
//         element: <Head />,
//         children: [
//           {
//             path: "/head/search",
//             element: <SearchPage />,
//             errorElement: <div>hlo</div>,
//           },
//         ],
//       },
//       {
//         path: "/",
//         element: <Body />,
//         errorElement: <div>hlo</div>,
//         children: [
//           {
//             path: "/",
//             element: <VideoContainer />,
//             errorElement: <div>hlo</div>,
//           },
//           {
//             path: "watch/:id",
//             element: <WatchPage />,
//             errorElement: <div>hlo</div>,
//           },
//         ],
//       },
//     ],
//   },
// ]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <RouterProvider router={Myrouter} /> */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
