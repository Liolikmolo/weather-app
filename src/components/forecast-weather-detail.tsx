import React from 'react';
import { WeatherContainer } from './weather-container';
import { WeatherIcon } from './weather-icon';
import { WeatherDetail, WeatherDetailProps } from './weather-detail';

export interface ForecastWeatherDetailProps extends WeatherDetailProps {
    weatherIcon: string,
    date: string,
    day: string,
    temp: number,
    feels_like: number,
    temp_min: number,
    temp_max: number,
    description: string
}

export const ForecastWeatherDetail = (props: ForecastWeatherDetailProps) => {
  return (
    <WeatherContainer className='gap-4'>
        {/* левая секция */}
        <section className='flex gap-4 items-center px-4'>
            <div>
                <WeatherIcon icon={props.weatherIcon}/>
                <p>{props.date}</p>
                <p className='text-sm'>{props.day}</p>
            </div>
            <div className="flex flex-col px-4 items-center">
                <span className="text-5xl">{Math.floor(props.temp)??'н/о'}°</span>
                <p className="text-xs space-x-1 whitespace-nowrap">
                  <span>Ощущается как</span>
                  <span>{Math.floor(props.feels_like)??'н/о'}°</span>
                </p>
                <p className=' capitalize'>{props.description}</p>
                <p className="text-xs space-x-2">
                  <span>{Math.floor(props.temp_min)??'н/о'}°↓</span>
                  <span>{Math.floor(props.temp_max)??'н/о'}°↑</span>
                </p>
            </div>
        </section>
        {/* правая секция  */}
        <section className=' overflow-x-auto flex justify-between gap-4 px-4 w-full pr-10'>
            <WeatherDetail {...props}/>
        </section>
    </WeatherContainer>
  )
}