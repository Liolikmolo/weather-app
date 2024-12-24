import { DateAndTime } from "@/components/date-and-time";
import { HourlyForecast } from "@/components/hourly-forecast";
import Navbar from "@/components/navbar";
import { WeatherDetails } from "@/components/weather-details";
import { WeatherForecast } from "@/components/weather-forecast";
import { WeatherData } from "@/types/weather-data";
import axios from "axios";
// import { ForecastWeatherDetail } from "@/components/forecast-weather-detail";

export default async function Home() {
	const { data }: { data: WeatherData } = await axios.get(
		`https://api.openweathermap.org/data/2.5/forecast?q=Minsk&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}&units=metric&lang=ru`
	);

	console.log(data);

	return (
		<>
			<Navbar />
			<main className='flex justify-evenly flex-wrap mt-12 gap-14'>
				<DateAndTime />
				<WeatherDetails />
				<WeatherForecast />
				<HourlyForecast />
			</main>
		</>
	);
}
