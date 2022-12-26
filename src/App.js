import { Route, Routes, Link } from "react-router-dom"
import TestPage1 from "./routes/TestPage1"
import TestPage2 from "./routes/TestPage2"

export default function App() {
	return (
		<>
			<nav>
				<ul>
					<li>
						<Link to="./routes/TestPage1.js" />
						testPage1
					</li>
					<li>
						<Link to="./routes/TestPage2.js" />
						testPage2
					</li>
				</ul>
			</nav>
			<Routes>
				<Route path="/TestPage1" element={<TestPage1 />}></Route>
				<Route path="/TestPage2" element={<TestPage2 />}></Route>
			</Routes>
		</>
	)
}
