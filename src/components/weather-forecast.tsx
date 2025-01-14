import React from "react";
import { FiDroplet } from "react-icons/fi";
import { IoEyeOutline } from "react-icons/io5";

export type WeatherDetailProps = {
	visibility: string;
	humidity: string;
	windSpeed: string;
	airPressure: string;
	sunrise: string;
	sunset: string;
};

export const WeatherForecast = ({
	visibility,
	humidity,
	windSpeed,
	airPressure,
	sunrise,
	sunset,
}: WeatherDetailProps) => {
	return <div className='w-[414px] h-[366px] rounded-3xl bg-gray-300'></div>;
};
