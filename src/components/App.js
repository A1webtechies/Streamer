import React, { useEffect } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";

import "./App.css";
import Header from "./Header/Header";
import StreamList from "./Stream/streemlist/StreamList";
import StreamShow from "./Stream/showstreem/ShowStream";
import CreateStream from "./Stream/createstreem/CreateStream";
import DeleteStream from "./Stream/deletestreem/DeleteStream";
import EditStream from "./Stream/editstreem/EditStream";

const App = () => {
  useEffect(() => {
    M.AutoInit();
  });
  return (
    <div>
      <BrowserRouter>
        <Header />
        <div className="container">
          <Route path="/" exact component={StreamList} />
          <Route path="/stream/show" exact component={StreamShow} />
          <Route path="/stream/new" exact component={CreateStream} />
          <Route path="/stream/edit" exact component={EditStream} />
          <Route path="/stream/delete" component={DeleteStream} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
