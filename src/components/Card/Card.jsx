/* eslint-disable react/prop-types */

import styles from "./Card.module.css";

const Card = ({
	profile,
	dragStart,
	dragEnter,
	dragLeave,
	dragOver,
	dragDrop
}) => {
	return (
		<div
			className={styles.card}
			draggable={true}
			onDragStart={() => dragStart(profile)}
			onDragEnter={() => dragEnter()}
			onDragLeave={() => dragLeave()}
			onDragOver={dragOver}
			onDrop={() => dragDrop(profile)}
		>
			<div className={styles.splash}></div>
			<img src={profile.img} alt="" />
			<span className={styles.tag}>{profile.tag}</span>
		</div>
	);
};

export default Card;
