import { Route, Routes, Link } from "react-router-dom"
import TestPage1 from "./routes/TestPage1"
import TestPage2 from "./routes/TestPage2"

export default function App() {
	return (
		<>
			<nav>
				<ul>
					<li>
						<Link to="/TestPage1">TestPage1</Link>
					</li>
					<li>
						<Link to="/TestPage2">testPage2</Link>
					</li>
				</ul>
			</nav>
			<Routes>
				<Route path="/" element={<h1>heck</h1>}></Route>
				<Route path="/TestPage1" element={<TestPage1 />}></Route>
				<Route path="/TestPage2" element={<TestPage2 />}></Route>
			</Routes>
		</>
	)
}
//No routes matched location "/users"
