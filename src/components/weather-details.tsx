import React from "react";

export interface WeatherDetailProps {
	weatherIcon: string;
	date: string;
	day: string;
	temp: number;
	feels_like: number;
	temp_min: number;
	temp_max: number;
	description: string;
}

export const WeatherDetails = (props: WeatherDetailProps) => {
	return (
		<div className='w-[780px] h-[330px] rounded-3xl bg-gray-300'>
			<div className='flex flex-col w-[204px]'>
				<span className='bg-gradient-to-r from-zinc-800 to-white text-transparent font-bold text-7xl'>
					21C
				</span>
			</div>
			<div></div>
			<div></div>
		</div>
	);
};
