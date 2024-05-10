import "./App.css";
import Events from "./components/Events";
import Newsfeed from "./components/Newsfeed";
import Hero from "./layout/Hero/Hero";
// import Homepage from "./pages/Homepage";

function App() {
	return (
		<>
			{/* <Homepage /> */}
			<Hero />
			<Events />
			<Newsfeed />
		</>
	);
}

export default App;
