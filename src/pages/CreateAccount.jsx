import { Link } from "react-router-dom";
import styles from "./Home.module.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../firebase";
import { useState } from "react";

const CreateAccount = () => {
	const [loading, setLoading] = useState(false);

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
				const user = await createUserWithEmailAndPassword(
					auth,
					values.email,
					values.password
				);
				setLoading(false);
				console.log(user);
				alert('User account created')
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
					<h2>Create Account</h2>
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
							value={formik.values.password}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
						/>
					</div>
					<button type="submit" disabled={loading}>
						{loading ? "Loading" : "Create Account"}
					</button>
					<p>
						Have an account <Link to={"/"}>Login</Link>
					</p>
				</form>
			</div>
		</div>
	);
};

export default CreateAccount;
