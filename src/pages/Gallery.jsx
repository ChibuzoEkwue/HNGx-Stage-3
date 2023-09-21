import styles from "./Gallery.module.css";
import Header from "../components/Header/Header";
import { useEffect, useState } from "react";
import Card from "../components/Card/Card";
import Loading from "../components/Loading/Loading";

const profiles = [
	{
		id: 1,
		img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1528&q=80",
		tag: "Blog",
	},
	{
		id: 2,
		img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
		tag: "Tech",
	},
	{
		id: 3,
		img: "https://images.unsplash.com/photo-1488161628813-04466f872be2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1528&q=80",
		tag: "Blog",
	},
	{
		id: 4,
		img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
		tag: "Tech",
	},
	{
		id: 5,
		img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
		tag: "Blog",
	},
	{
		id: 6,
		img: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
		tag: "Blog",
	},
	{
		id: 7,
		img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1376&q=80",
		tag: "Tech",
	},
	{
		id: 8,
		img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
		tag: "Tech",
	},
	{
		id: 9,
		img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1522&q=80",
		tag: "Blog",
	},
	{
		id: 10,
		img: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1440&q=80",
		tag: "Blog",
	},
];
const Gallery = () => {
	// const [isLoading, setIsLoading] = useState(true);
	const [filteredData, setFilteredData] = useState(profiles);
	const [dragStartId, setDragStartId] = useState({});

	// const Load = () => {
	// 	setIsLoading(false);
	// 	setFilteredData(profiles);
	// };

	// useEffect(() => {
	// 	const myTimeout = setTimeout(Load, 500);

	// 	return clearTimeout(myTimeout);
	// }, []);

	// FUNCTION FOR THE SEARCH FUNCTIONALITY
	const searchTag = (query) => {
		setFilteredData((prev) => {
			let clones = [...prev];
			if (query === "") {
				return profiles;
			}
			return clones.filter((clone) => {
				return clone.tag.toLowerCase().includes(query.toLowerCase());
			});
		});
	};

	// FUNCTION FOR THE SWAP DRAG AND DROP FEATURE
	const swapImages = (from, end) => {
		setFilteredData((prev) => {
			//GET THE CURRENT LOCATION IN THE ARRAY WHICH IS DRAGGED
			const index1 = prev.findIndex((element) => element.id === from.id);
			//GET THE CURRENT LOCATION IN THE ARRAY WHERE IT IS DROPPED
			const index2 = prev.findIndex((element) => element.id === end.id);
			let clone = [...prev];
			// SWAP BOTH ELEMENTS
			clone[index1] = end;
			clone[index2] = from;
			return clone;
		});
	};

	//THESE FUNCTION IS CALLED WHEN AN ITEM IS DRAGGED

	const dragStart = (profile) => {
		setDragStartId(profile);
	};

	//THESE FUNCTION IS CALLED WHEN AN ITEM WHICH IS DRAGGED IS PLACED OVER ANOTHER ELEMENT
	// KIND OF LIKE CSS HOVER WE CAN USE IT TO FOR ANINAMTION WHEN AN ITEM IS PLACED ONTOP OF ANOTHER

	const dragEnter = () => {};

	//THESE FUNCTION IS CALLED WHEN AN ITEM WHICH IS DRAGGED HAS LEFT AN ELEMENT ON WHICH IT A DRAG ITEM WAS ONTOP
	
	const dragLeave = () => {};
	// FOR DROP TO WORK 
	const dragOver = (e) => {
		e.preventDefault();
	};

	// THESE FUNCTION IS CALLED WHEN AN ITEM IS DROPPED ONTOP 
	const dragDrop = (profile) => {
		swapImages(dragStartId, profile);
	};

	return (
		<div>
			<Header onSearch={searchTag} />
			<section className="container">
				{/* {isLoading && <Loading />} */}
				<div className={styles.gallery}>
					<div className={styles.profile}>
						{filteredData.map((profile) => (
							<Card
								key={profile.id}
								profile={profile}
								dragStart={dragStart}
								dragEnter={dragEnter}
								dragLeave={dragLeave}
								dragOver={dragOver}
								dragDrop={dragDrop}
							/>
						))}
					</div>
				</div>
			</section>
		</div>
	);
};

export default Gallery;
