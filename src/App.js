import './App.css';
import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
import Home from "./pages/home";
import CreatePost from "./pages/createpost";
import Post from "./pages/post";
function App() {
  return (
    <div className="App">
	<Router>
	<div className="navbar">
	<Link to = "/createpost">Create a Post.</Link>
	<Link to = "/">Home</Link>
	</div>
	<Switch>
		<Route path="/" exact component={Home} />
		<Route path="/createpost" exact component={CreatePost} />
		<Route path="/post/:id" exact component={Post} />
	</Switch>
	</Router>
	</div>
  );
}

export default App;
