import { NavBar } from "@/components/navbar";
import { WeatherMain } from "@/types/weather-main";
import axios from "axios";
import { Container } from "@/components/container";
import { DateInDay } from "@/utils/date-in-day";
import { format, fromUnixTime } from "date-fns";
import { WeatherIcon } from "@/components/weather-icon";
import { WeatherDetail } from "@/components/weather-detail";
// import { ForecastDetail } from "@/components/forecast-detail";

const Home = async () => {
	const { data }: { data: WeatherMain } = await axios.get(
		`https://api.openweathermap.org/data/2.5/forecast?q=Minsk&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}&units=metric&lang=ru&cnt=56`
	);

	const firstDay = new Date(data.list[0].dt_txt);
	const today = DateInDay(firstDay.getDay());
	const weather = data.list[0];
	const uniqueDate = [
		...new Set(
			data.list.map(
				(entry) => new Date(entry.dt * 1000).toISOString().split("T")[0]
			)
		),
	];

	console.log(uniqueDate);

	return (
		<div className='flex flex-col gap-4 bg-gray-100 min-h-screen'>
			<NavBar />
			<main className='px-3 max-w-7xl mx-auto flex flex-col gap-9 w-full pb-10 pt-4'>
				{/* погода на сегодня */}
				<section className='space-y-4'>
					<div>
						<h2 className='flex gap-1 text-2xl items-end'>
							<p>{today}</p>
							<p className='text-lg'>
								({format(firstDay, "dd.MM.yyyy")})
							</p>
						</h2>
						<Container className='gap-10 px-6 items-center'>
							{/* температура */}
							<div className='flex flex-col px-4 items-center'>
								<span className='text-5xl'>
									{Math.round(data.list[0].main.temp) ??
										"н/о"}
									°
								</span>
								<p className='text-xs space-x-1 whitespace-nowrap'>
									<span>Ощущается как</span>
									<span>
										{Math.round(
											data.list[0].main.feels_like
										) ?? "н/о"}
										°
									</span>
								</p>
								<p className='text-xs space-x-2'>
									<span>
										{Math.round(
											data.list[0].main.temp_min
										) ?? "н/о"}
										°↓
									</span>
									<span>
										{Math.round(
											data.list[0].main.temp_max
										) ?? "н/о"}
										°↑
									</span>
								</p>
							</div>

							{/* время и погодные иконки */}
							<div className='flex gap-10 sm:gap-16 overflow-x-auto w-full justify-between pr-3'>
								{data.list.map((item, idx) => (
									<div
										key={idx}
										className='flex flex-col justify-between gap-2 items-center text-xs font-semibold'>
										<p className='whitespace-nowrap'>
											{format(item.dt_txt, "H:mm")}
										</p>
										<WeatherIcon
											icon={item.weather[0].icon}
										/>
										<p>
											{Math.round(item.main.temp) ??
												"н/о"}
											°
										</p>
									</div>
								))}
							</div>
						</Container>
					</div>
					<div className='flex gap-4'>
						{/* левая часть */}
						<Container className='w-fit justify-center flex-col px-4 items-center'>
							<p className='capitalize text-center'>
								{data.list[0].weather[0].description}
							</p>
							<WeatherIcon icon={data.list[0].weather[0].icon} />
						</Container>
						{/* правая часть */}
						<Container className='bg-yellow-300/80 px-6 gap-4 justify-between overflow-x-auto'>
							<WeatherDetail
								visibility={`${weather.visibility ?? "1000"} м`}
								humidity={`${weather.main.humidity} %`}
								windSpeed={`${Math.round(
									weather.wind.speed
								)} м/с`}
								airPressure={`${weather.main.pressure} Па`}
								sunrise={`${format(
									fromUnixTime(data.city.sunrise),
									"H:mm"
								)}`}
								sunset={`${format(
									fromUnixTime(data.city.sunset),
									"H:mm"
								)}`}
							/>
						</Container>
					</div>
				</section>
				{/* прогноз на 7 дней */}
				<section className='flex w-full flex-col gap-4'>
					<p className='text-2xl'>Прогноз погоды на 7 дней</p>
					{/* <ForecastDetail
            weatherIcon=""
            date=""
            day=""
            temp={}
            feels_like={ }
            temp_min={ }
            temp_max={ }
            description=""
            visibility=""
            humidity=""
            windSpeed=""
            airPressure=""
            sunrise=""
            sunset=""
          /> */}
				</section>
			</main>
		</div>
	);
};

export default Home;
