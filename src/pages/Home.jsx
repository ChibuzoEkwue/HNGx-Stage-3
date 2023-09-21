import { Link, useNavigate } from "react-router-dom";
import styles from "./Home.module.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import auth from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";

const Home = () => {
	const [loading, setLoading] = useState(false);

	const navigate = useNavigate();

	const formik = useFormik({
		initialValues: {
			email: "",
			password: "",
		},
		validationSchema: Yup.object({
			email: Yup.string()
				.email("Invalid email address")
				.max(20, "Email must be less than 20 characters or less")
				.required("Email is required"),
			password: Yup.string()
				.max(20, "Password must be less than 20 characters or less")
				.required("Password is required"),
		}),

		onSubmit: async (values) => {
			try {
				setLoading(true);
				const user = await signInWithEmailAndPassword(
					auth,
					values.email,
					values.password
				);

				setLoading(false);
				navigate("/gallery");
			} catch (error) {
				setLoading(false);
				console.log(error.message);
			}
		},
	});
	return (
		<div className={styles.home}>
			<div className={styles.loginForm}>
				<form onSubmit={formik.handleSubmit}>
					<h2>HNGx Gram</h2>
					<div className={styles.formContainer}>
						<label
							style={{
								color:
									formik.touched.email && formik.errors.email ? "#D83F31" : "",
							}}
						>
							{formik.touched.email && formik.errors.email
								? formik.errors.email
								: "Email"}
						</label>
						<input
							type="email"
							name="email"
							placeholder="Use user@example.com"
							value={formik.values.email}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
						/>
					</div>
					<div className={styles.formContainer}>
						<label
							style={{
								color:
									formik.touched.password && formik.errors.password
										? "#D83F31"
										: "",
							}}
						>
							{formik.touched.password && formik.errors.password
								? formik.errors.password
								: "Password"}
						</label>
						<input
							type="password"
							name="password"
							placeholder="1Password"
							value={formik.values.password}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
						/>
					</div>
					<button disabled={loading} type="submit">
						{loading ? "Loading" : "Login"}
					</button>
					<p>
						Don&apos;t have an account{" "}
						<Link to={"/create-account"}>Create one for free</Link>
					</p>
				</form>
			</div>
		</div>
	);
};

export default Home;
