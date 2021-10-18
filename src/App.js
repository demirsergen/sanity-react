import { BrowserRouter, Route } from "react-router-dom";
import AllPosts from "./components/AllPosts.js";
import OnePost from "./components/OnePost.js";
import About from './components/About';
import './App.css';

function App() {
  return (
     <BrowserRouter>
      <div>
        <Route component={AllPosts} path="/" exact />
        <Route component={OnePost} path="/:slug" />
        <Route component={About} path="/About" />
      </div>
    </BrowserRouter>
  );
}

export default App;
