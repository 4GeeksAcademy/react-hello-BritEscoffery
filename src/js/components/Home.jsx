import React, {useState} from "react";
import "../../styles/index.css";

//create your first component
const Home = () => {
const [clickedColor, setClickedColor] = useState("red");
	
const changeLight = (newColor) => {
		setClickedColor(newColor);
};

return (
	<div className = "traffic-housing">
		{/* Glow color: {clickedColor} */}
		<div className= {`light red ${clickedColor == "red" ? "glow" : ""}`} onClick={() => changeLight("red")} >
		
		</div>
		<div className={`light yellow ${clickedColor == "yellow" ? "glow" : ""}`} onClick={()=> changeLight("yellow")}>
		
		</div>
		<div className={`light green ${clickedColor == "green" ? "glow" : ""}`} onClick={()=> changeLight("green")}>
		
		</div>
	</div>

);
};

export default Home;