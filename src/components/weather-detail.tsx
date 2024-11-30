import React from 'react'
import { FiDroplet } from 'react-icons/fi'
import { IoEyeOutline } from 'react-icons/io5'

export type WeatherDetailProps = {
    visibility: string,
    humidity: string,
    windSpeed: string,
    airPressure: string,
    sunrise: string,
    sunset: string
}

export const WeatherDetail = ({visibility, humidity, windSpeed, airPressure, sunrise, sunset}: WeatherDetailProps) => {
  return (
    <>
        <SingleWeatherDetail 
        icon={<IoEyeOutline/>}
        information='Видимость'
        value={visibility}
        />
        <SingleWeatherDetail 
        icon={<FiDroplet/>}
        information='Влажность'
        value={humidity}
        />
        <SingleWeatherDetail 
        icon={<IoEyeOutline/>}
        information='Ветер'
        value={windSpeed}
        />
        <SingleWeatherDetail 
        icon={<IoEyeOutline/>}
        information='Давление'
        value={airPressure}
        />
        <SingleWeatherDetail 
        icon={<IoEyeOutline/>}
        information='Рассвет'
        value={sunrise}
        />
        <SingleWeatherDetail 
        icon={<IoEyeOutline/>}
        information='Закат'
        value={sunset}
        />
    </>
  )
}

export type SingleWeatherDetailProps = {
    information: string,
    icon: React.ReactNode,
    value: string
}

const SingleWeatherDetail = ({information, icon, value}: SingleWeatherDetailProps) => {
    return (
        <div className='flex flex-col justify-between gap-2 items-center text-xs font-semibold text-black/80'>
            <p className=' whitespace-nowrap'>{information}</p>
            <div className='text-3xl'>{icon}</div>
            <p>{value}</p>
        </div>
    )
}