import {
	WeatherDetailProps,
	SingleWeatherDetailProps,
} from "@/types/weather-detail";
import { FiDroplet } from "react-icons/fi";

export const WeatherDetail = ({
	visibility,
	humidity,
	windSpeed,
	airPressure,
	sunrise,
	sunset,
}: WeatherDetailProps) => {
	return (
		<>
			<SingleWeatherDetail
				icon={<FiDroplet />}
				information='Видимость'
				value={visibility}
			/>
			<SingleWeatherDetail
				icon={<FiDroplet />}
				information='Влажность'
				value={humidity}
			/>
			<SingleWeatherDetail
				icon={<FiDroplet />}
				information='Скорость ветра'
				value={windSpeed}
			/>
			<SingleWeatherDetail
				icon={<FiDroplet />}
				information='Давление'
				value={airPressure}
			/>
			<SingleWeatherDetail
				icon={<FiDroplet />}
				information='Восход'
				value={sunrise}
			/>
			<SingleWeatherDetail
				icon={<FiDroplet />}
				information='Закат'
				value={sunset}
			/>
		</>
	);
};

const SingleWeatherDetail = ({
	information,
	icon,
	value,
}: SingleWeatherDetailProps) => {
	return (
		<div className='flex flex-col justify-between gap-2 items-center text-xs font-semibold text-black/80'>
			<p className='whitespace-nowrap'>{information}</p>
			<div className='text-3xl'>{icon}</div>
			<p>{value}</p>
		</div>
	);
};
