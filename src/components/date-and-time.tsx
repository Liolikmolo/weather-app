import clsx from "clsx";
import React from "react";
import { twMerge } from "tailwind-merge";

export const DateAndTime = (props: React.HTMLProps<HTMLDivElement>) => {
	return (
		<div
			{...props}
			className={twMerge(
				clsx(
					"w-[510px] h-[330px] rounded-3xl bg-gray-300 flex flex-col justify-center items-center",
					props.className
				)
			)}>
			<h2 className='font-bold text-4xl text-gray-800'>Minsk</h2>
			<p className='font-bold text-8xl text-gray-800 mt-8'>09:30</p>
			<p className='font-normal text-xl text-gray-800'>Tuesday, 31 Aug</p>
		</div>
	);
};
