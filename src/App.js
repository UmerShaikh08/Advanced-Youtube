import { Provider } from "react-redux";
import "./App.css";
import Head from "./components/Head";
import Body from "./components/Body";
import store from "./utils/Store";
import Sidebar from "./components/Sidebar";
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  Route,
  Routes,
} from "react-router-dom";
import VideoContainer from "./components/VideoContainer";
import WatchPage from "./components/WatchPage";
import SearchPage from "./components/SearchPage";
import MainContainer from "./components/MainContainer";

function App() {
  // const Myrouter = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <Head />,
  //   },
  //   {
  //     path: "/",
  //     element: <Body />,
  //     children: [
  //       {
  //         path: "/",
  //         element: <VideoContainer />,
  //       },
  //       {
  //         path: "/watch/:id",
  //         element: <WatchPage />,
  //       },
  //       {
  //         path: "/search",
  //         element: <SearchPage />,
  //       },
  //     ],
  //   },
  // ]);
  return (
    <Provider store={store}>
      <div className="App w-full h-full box-border m-0 p-0 overflow-x-hidden">
        <Head />
        <Routes>
          <Route path="/" element=<Body />>
            {/* <Route path="/" element=<Sidebar /> /> */}
            <Route path="/" element=<MainContainer /> />
            <Route path="/watch/:id" element=<WatchPage /> />
            <Route path="/search/:id" element=<SearchPage /> />
          </Route>
        </Routes>
      </div>
    </Provider>
  );
}

export default App;
