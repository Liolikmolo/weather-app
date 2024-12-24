"use client";
import React from "react";
import SearchBox from "./search-box";
// import { MdMyLocation, MdOutlineLocationOn, MdWbSunny } from "react-icons/md";
// import SearchBox from "./search-box";

type Props = {};

const Navbar = ({}: Props) => {
	return (
		<nav className='sticky top-0 left-0 z-50 h-16 w-full flex justify-between items-center mt-16'>
			<div className='flex flex-col'>
				<input
					className="me-2 h-9 w-24 appearance-none rounded-[40px] bg-gray-300 before:pointer-events-none before:absolute before:mt-1 before:h-7 before:w-7 before:rounded-full before:bg-black before:content-[''] checked:bg-primary hover:cursor-pointer focus:outline-none focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-switch-3 focus:before:shadow-black/60 focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:bg-primary checked:focus:before:ms-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-switch-3 checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:bg-white/25 dark:checked:bg-primary"
					type='checkbox'
					role='switch'
					id='flexSwitchCheckDefault'
				/>
				<label
					className='inline-block ps-[0.15rem] hover:cursor-pointer text-black font-extrabold text-lg'
					htmlFor='flexSwitchCheckDefault'>
					Light mode
				</label>
			</div>
			<SearchBox />
		</nav>
	);
};

export default Navbar;
