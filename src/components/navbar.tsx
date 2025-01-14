'use client';

import { MdMyLocation, MdOutlineLocationOn, MdWbSunny } from "react-icons/md";
import { SearchBox } from "./searchbox";
import { useState } from "react";
import axios from "axios";

type NavBarProps = { location?: string };
const API_KEY = process.env.NEXT_PUBLIC_WEATHER_KEY;

export const NavBar = ({ location }: NavBarProps) => {
    
    const [city, setCity] = useState('');
    const [place, setPlace] = useState('Молодечно');
    const [suggestions, setSuggestions] = useState<string[]>([]);
    const [error, setError] = useState('');
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [loadingCity, setLoadingCity] = useState(false);

    const handleInputChange = async (value: string) => {
        setCity(value);
        if (value.length >= 3) {
            try {
                const response = await axios.get(`https://api.openweathermap.org/data/2.5/find?q=${value}&appid=${API_KEY}&lang=ru`);
                const suggestion = response.data.list.map((item: any) => item.name);
                setSuggestions(suggestion);
                setError('');
                setShowSuggestions(true);
            }
            catch (error) {
                setSuggestions([]);
                setShowSuggestions(false);
                console.log(error);
            }
        } else {
            setSuggestions([]);
            setShowSuggestions(false);
        }
    };

    const handleSuggestionClick = (value: string) => {
        setCity(value);
        setShowSuggestions(false);
    };

    const handleSubmitSearch = (event: React.FormEvent<HTMLFormElement>) => {
        setLoadingCity(true);
        event.preventDefault();
        if (suggestions.length == 0) {
            setError('Location not found');
            setLoadingCity(false);
        } else {
            setError('');
            setTimeout(() => {
                setLoadingCity(false);
                setPlace(city);
                setShowSuggestions(false);
            }, 500)
        }
    };

    const handleCurrentLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(async (position) => {
                const { latitude, longitude } = position.coords;
                try {
                setLoadingCity(true);
                    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`);
                    setTimeout(() => {
                        setLoadingCity(false);
                        setPlace(response.data.name);
                    }, 500);
                }
                catch (error) {
                    setLoadingCity(false);
                    console.log(error);
            }
            });
        }
    }


    return (
        <>
            <nav className="shadow-sm  sticky top-0 left-0 z-50 bg-white">
                <div className="h-[80px] w-full flex justify-between items-center max-w-7xl px-3 mx-auto">
                    <p className="flex items-center justify-center gap-2">
                        <h2 className="text-gray-500 text-3xl">Сайт о погоде</h2>
                        <MdWbSunny className="text-3xl mt-1 text-yellow-300"/>
                    </p>
                    <section className="flex gap-2 items-center">
                        <MdMyLocation
                            title="Ваше текущее место нахождения"
                            onClick={handleCurrentLocation}
                            className="text-2xl text-gray-400 hover:opacity-80 cursor-pointer" />
                        <MdOutlineLocationOn className="text-3xl" />
                        <p className="text-slate-900/80 text-sm">{location}</p>
                        <div className="relative hidden md:flex">
                            <SearchBox
                                value={city}
                                onSubmit={handleSubmitSearch}
                                onChange={(e) => {handleInputChange(e.target.value)}}
                            />
                            <SuggestionBox
                                {...{
                                    showSuggestions,
                                    suggestions,
                                    handleSuggestionClick,
                                    error
                                }}
                            />
                        </div>
                        
                    </section>
                </div>
            </nav>
            <section className="flex   max-w-7xl px-3 md:hidden">
                <div className="relative">
                    <SearchBox
                        value={city}
                        onSubmit={handleSubmitSearch}
                        onChange={(e) => {handleInputChange(e.target.value)}}
                    />
                    <SuggestionBox
                        {...{
                            showSuggestions,
                            suggestions,
                            handleSuggestionClick,
                            error
                        }}
                    />
                </div>
            </section>
        </>
        
    )
}

const SuggestionBox = ({ showSuggestions, suggestions, handleSuggestionClick, error }: { showSuggestions: boolean; suggestions: string[]; handleSuggestionClick: (item: string) => void; error: string }) => {
    return (
        <>
            {((showSuggestions && suggestions.length > 1) || error) && (
                <ul className="mb-4 bg-white absolute border top-[44px] left-0 border-gray-300 rounded-md min-w-[200px]  flex flex-col gap-1 py-2 px-2">{error && suggestions.length < 1 && (
                    <li className="text-red-500 p-1">{error}</li>
                )}
            {suggestions.map((item, i) => (
                    <li
                        key={i}
                        onClick={() => handleSuggestionClick(item)}
                        className="cursor-pointer p-1 rounded   hover:bg-gray-200"
                    >{item}</li>
                ))}
                </ul>
            )}
        </>
    );    
}