import React from "react";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";

import store from "./store";
import SimpleBottomNavigation from "./components/bottomMenu";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Provider store={store()}>
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
        {/* Same as */}
        <SimpleBottomNavigation />
      </div>
    </Provider>
  );
}

export default App;
