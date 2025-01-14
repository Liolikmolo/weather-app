import React from "react";

export const HourlyForecast = (
	props: React.HTMLProps<HTMLDivElement> & { icon: string }
) => {
	return (
		<div
			{...props}
			className='w-[870px] h-[366px] bg-gray-300 rounded-3xl'></div>
	);
};
