import { WeatherDetailProps } from "./weather-detail";

export interface ForecastDetailProps extends WeatherDetailProps {
    weatherIcon: string,
    date: string,
    day: string,
    temp: number,
    feels_like: number,
    temp_min: number,
    temp_max: number,
    description: string
}