import { Provider } from "react-redux";
import "./App.css";
import Body from "./components/Body";
import store from "./utils/Store";
import { Route, Routes } from "react-router-dom";
import WatchPage from "./components/Video/WatchPage";
import SearchPage from "./components/search/SearchPage";
import MainContainer from "./components/MainContainer";
import Head from "./components/common/Head";

function App() {
  return (
    <Provider store={store}>
      <div className="App relative w-full h-full box-border m-0 p-0 ">
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
