import Head from "../Head";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import Store from "../../utils/Store";
import { StaticRouter } from "react-router-dom/server";

test("header should be load ", () => {
  render(
    <StaticRouter>
      <Provider store={Store}>
        <Head />
      </Provider>
    </StaticRouter>
  );
});
