import styles from "./Loading.module.css";
import LoadingSkeleton from "./LoadingSkeleton";

const Loading = () => {
	return (
		<div className={styles.loading}>
			{[1, 2, 3, 4, 5].map((num) => (
				<LoadingSkeleton key={num} />
			))}
		</div>
	);
};

export default Loading;
