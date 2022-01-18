import React from 'react';
import Main from "./pages/main/Main";
import Header from "./componants/Header/Header";
import {Route, Routes} from "react-router-dom";
import Result from "./pages/Result/Result";
import Info from "./pages/Info/Info";
import InfoRepository from "./pages/InfoRepository/InfoRepository";
const App = () => {
  return (
      <div>
          <Header/>
          <Routes>
              <Route path="/" element={<Main/>} />
              <Route path="/search/:name" element={<Result/>} />
              <Route path="/user/:name" element={<Info/>} />
              <Route path="/repository/:login/:name" element={<InfoRepository/>} />
          </Routes>
      </div>
  );
};

export default App;
