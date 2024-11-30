import Navbar from "@/components/navbar";
import { WeatherData } from "@/types/weather-data";
import axios from "axios";
import { dateInDay } from "@/utils/date-in-day";
import {format, fromUnixTime} from 'date-fns';
import { WeatherContainer } from "@/components/weather-container";
import { WeatherIcon } from "@/components/weather-icon";
import { WeatherDetail } from "@/components/weather-detail";
import { ForecastWeatherDetail } from "@/components/forecast-weather-detail";

export default async function Home() {

  const {data}: {data: WeatherData} = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=Minsk&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}&units=metric&lang=ru`);

  console.log(data)
  const firstDate = new Date(data.list[0].dt_txt);
  const firstDay = dateInDay(firstDate.getDay());
  const weather = data.list[0];

  const uniqueDate = [
    ... new Set(
      data.list.map((entry) => new Date(entry.dt*1000).toISOString().split('T')[0])
    )
  ]

  console.log(uniqueDate)

  return (
    <div className="flex flex-col gap-4 bg-gray-100 min-h-screen">
      <Navbar/>
      <main className="px-3 max-w-7xl mx-auto flex flex-col gap-9 w-full pb-10 pt-4">
        {/* погода сегодня */}
        <section className="space-y-4">
          <div>
            <h2 className="flex gap-1 text-2xl items-end">
              <p>{firstDay}</p>
              <p className="text-lg">({format(firstDate, "dd.MM.yyyy")})</p>
            </h2>
            <WeatherContainer className="gap-10 px-6 items-center">
              {/* температура */}
              <div className="flex flex-col px-4 items-center">
                <span className="text-5xl">{Math.floor(data.list[0].main.temp)??'н/о'}°</span>
                <p className="text-xs space-x-1 whitespace-nowrap">
                  <span>Ощущается как</span>
                  <span>{Math.floor(data.list[0].main.feels_like)??'н/о'}°</span>
                </p>
                <p className="text-xs space-x-2">
                  <span>{Math.floor(data.list[0].main.temp_min)??'н/о'}°↓</span>
                  <span>{Math.floor(data.list[0].main.temp_max)??'н/о'}°↑</span>
                </p>
              </div>
              {/* время и погодные иконки */}
              <div className="flex gap-10 sm:gap-16 overflow-x-auto w-full justify-between pr-3">
                {data.list.map((item, idx) => (
                  <div key={idx} className="flex flex-col justify-between gap-2 items-center text-xs font-semibold">
                    <p className="whitespace-nowrap">{format(item.dt_txt, "H:mm")}</p>
                    <WeatherIcon icon={item.weather[0].icon}/>
                    <p>{Math.floor(item.main.temp)??'н/о'}°</p>
                  </div>
                ))}
              </div>
            </WeatherContainer>
          </div>
          <div className="flex gap-4">
            {/* left */}
            <WeatherContainer className="w-fit justify-center flex-col px-4 items-center">
              <p className=" capitalize text-center">{data.list[0].weather[0].description}</p>
              <WeatherIcon icon={data.list[0].weather[0].icon}/>
            </WeatherContainer>
            {/* right */}
            <WeatherContainer className="bg-yellow-300/80 px-6 gap-4 justify-between overflow-x-auto">
                <WeatherDetail 
                visibility={`${weather.visibility ?? '1000'} м`}
                humidity={`${weather.main.humidity} %`}
                windSpeed={`${Math.floor(weather.wind.speed)} м/с`} 
                airPressure={`${weather.main.pressure} Па`}
                sunrise={`${format(fromUnixTime(data.city.sunrise), 'H:mm')}`}
                sunset={`${format(fromUnixTime(data.city.sunset), 'H:mm')}`}
                />
            </WeatherContainer>
          </div>
        </section>
        {/* прогноз на 7 дней */}
        <section className="flex w-full flex-col gap-4">
          <p className="text-2xl">Прогноз на 7 дней</p>
          {/* <ForecastWeatherDetail /> */}
        </section>
      </main>
    </div>
  );
}

