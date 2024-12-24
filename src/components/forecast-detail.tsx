import { ForecastDetailProps } from "@/types/forecast-detail";
import { Container } from "./container";
import { WeatherIcon } from "./weather-icon";
import { WeatherDetail } from "./weather-detail";


export const ForecastDetail = (props: ForecastDetailProps) => {
    return (
        <Container className="gap-4">
            {/* левая секция */}
            <section className="flex gap-4 items-center px-4">
                <div>
                    <WeatherIcon icon={props.weatherIcon} />
                    <p>{props.date}</p>
                    <p className="text-sm">{ props.day}</p>
                </div>
                <div className="flex flex-col px-4 items-center">
                    <span className="text-5xl">{Math.round(props.temp) ?? 'н/о'}°</span>
                    <p className="text-xs space-x-1 whitespace-nowrap">
                        <span>Ощущается как</span>
                        <span>{ Math.round(props.feels_like)??'н/о'}°</span>
                    </p>
                    <p className="capitalize">{props.description}</p>
                    <p className="text-xs space-x-2">
                        <span>{ Math.round(props.temp_min)??'н/о'}°↓</span>
                        <span>{ Math.round(props.temp_max)??'н/о'}°↑</span>
                    </p>
                </div>
            </section>
            {/* правая секция */}
            <section className="overflow-x-auto flex justify-between gap-4 px-4 w-full pr-10">
                <WeatherDetail {...props} />
            </section>
        </Container>
    )
}