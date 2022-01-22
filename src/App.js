import React from "react";
import "./App.css";
import { APIContextProvider } from "./apicontext";
// import acceptcontext from "./acceptcontext";
import Users from "./user";

export default function App() {
  return (
    <APIContextProvider>
  
      <div className="App">
        <h1>Hello</h1>
        <Users />
      </div>
      
    </APIContextProvider>
  );
}
