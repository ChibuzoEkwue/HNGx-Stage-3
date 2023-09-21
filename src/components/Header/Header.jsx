import { signOut } from "firebase/auth";

import auth from "../../firebase";

import styles from "./Header.module.css";
import { useNavigate } from "react-router-dom";

const Header = ({ onSearch }) => {
	const navigate = useNavigate();
	const logoutHandler = async () => {
		try {
			await signOut(auth);
			navigate("/");
		} catch (error) {
			console.log(error.message);
		}
	};
	return (
		<header className={styles.header}>
			<nav className="container">
				<div className={styles.navItems}>
					<h2>HNGx gram</h2>
					<div className={styles.search}>
						<input
							type="text"
							placeholder="Search tag eg tech or blog"
							onChange={(e) => onSearch(e.target.value)}
						/>
					</div>
					<button onClick={logoutHandler}>Log Out</button>
				</div>
			</nav>
		</header>
	);
};

export default Header;
