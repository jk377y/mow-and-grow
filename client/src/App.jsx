import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AuthorizedRoutes from './components/AuthorizedRoutes'
import Header from './components/Header'
import Home from './pages/Home'
import Schedule from './pages/Schedule'
function App() {
	return (
		<>
			<BrowserRouter>
				<Header />
				<Routes>
					<Route element={<AuthorizedRoutes/>}>
						<Route path="/schedule" element={<Schedule />} exact />
					</Route>
					<Route path="/" element={<Home />} />
				</Routes>
			</BrowserRouter>
		</>
	)
}
export default App