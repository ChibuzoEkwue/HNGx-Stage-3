import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import CreateAccount from "./pages/CreateAccount";
import Protected from "./components/Protected";
import { useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import auth from "./firebase";

const App = () => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	
	// TO CHECK IF A USER IS CURRENTLY LOOGED IN OR NOT
	onAuthStateChanged(auth, (currentUser) => {
		if (currentUser === null) {
			setIsLoggedIn(false);
		} else {
			setIsLoggedIn(true);
		}
	});
	const router = createBrowserRouter([
		{
			path: "/",
			children: [
				{
					index: true,
					element: <Home />,
				},
				{
					path: "/create-account",
					element: <CreateAccount />,
				},
				{
					path: "/gallery",
					element: (
						<Protected isLoggedIn={isLoggedIn}>
							<Gallery />
						</Protected>
					),
				},
			],
		},
	]);
	return <RouterProvider router={router} />;
};

export default App;
