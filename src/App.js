import React from "react";
import BusinessList from "./components/BusinessList/BusinessList";
import SearchBar from "./components/SearchBar/SearchBar";

import "./App.css";




function App() {
  return (
    <div className="App">
      <SearchBar />
      <BusinessList />
    </div>
  );
}

export default App;
