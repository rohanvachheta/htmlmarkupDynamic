import React from "react";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import AutoGrid from "./page/home/Home";
import CSSGrid from "./page/Forms";
import RecordsPage from "./page/Records";

import store from "./store";
import HeaderMenu from "./components/headerMenu";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Provider store={store()}>
      <DndProvider backend={HTML5Backend}>
        <div className="app">
          <ToastContainer
            position="bottom-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
          <Router>
            <div>
              <HeaderMenu />
              <Switch>
                <Route exact path="/">
                  <AutoGrid />
                </Route>
                <Route path="/forms">
                  <CSSGrid />
                </Route>
                <Route path="/records">
                  <RecordsPage />
                </Route>
              </Switch>
            </div>
          </Router>
        </div>
      </DndProvider>
    </Provider>
  );
}

export default App;
