import React from "react";

const Figure = ({errors}) => {
	return (
		<svg height={250} width={200} className='figure-container'>
			{/* Rod */}
			<line x1={60} y1={20} x2={60} y2={230} />
			<line x1={20} y1={230} x2={100} y2={230} />
			<line x1={60} y1={20} x2={140} y2={20} />
			<line x1={140} y1={20} x2={140} y2={50} />
			{/* whole human from 50 to 230 , i.e. 180*/}

			{/* Circle */}
			{errors > 0 && <circle cx={140} cy={80} r={30} />}

			{/* Body */}
			{errors > 1 && <line x1={140} y1={110} x2={140} y2={170} />}

			{/* left arm */}
			{errors > 2 && <line x1={140} y1={140} x2={110} y2={110} />}
			{/* right arm */}
			{errors > 3 && <line x1={140} y1={140} x2={170} y2={110} />}

			{/* left leg */}
			{errors > 4 && <line x1={140} y1={170} x2={110} y2={200} />}
			{errors > 5 && <line x1={140} y1={170} x2={170} y2={200} />}

		</svg>
	);
}

export default Figure;