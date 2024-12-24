import React from "react"

export type WeatherDetailProps = {
    visibility: string,
    humidity: string,
    windSpeed: string,
    airPressure: string,
    sunrise: string,
    sunset: string
}

export type SingleWeatherDetailProps = {
    information: string,
    icon: React.ReactNode,
    value: string
}