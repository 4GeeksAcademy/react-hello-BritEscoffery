import React, {useState} from "react";


//create your first component
const Home = () => {
const [clickedColor, setClickedColor] = useState("red");
	
const changeLight = (newColor) => {
		setClickedColor(newColor);
};

return (
	<div className = "traffic-housing">
		<div className ={`red ${clickedColor == "red" ? "glow" : ""}`} onClick={() => changeLight("red")} >
		</div>
		<div className={`yellow ${clickedColor == "yellow" ? "glow" : ""}`} onClick={()=> changeLight("green")}>
		</div>
		<div className={`green ${clickedColor == "green" ? "glow" : ""}`}>
		</div>
	</div>

);
};

export default Home;