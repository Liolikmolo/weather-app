import React from "react";
import location from "@/assets/icons/location.svg";
import Image from "next/image";

type Props = {
	value: string;
	onChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
	onSubmit: React.FormEventHandler<HTMLFormElement> | undefined;
	className?: string;
};

const SearchBox = ({ value, onChange, onSubmit }: Props) => {
	return (
		<form
			className='flex items-center justify-between h-16 w-[1176px]'
			onSubmit={onSubmit}>
			<input
				type='text'
				placeholder='Поиск места расположения...'
				className='border-[1px] border-solid border-black rounded-[40px] shadow-md bg-slate-300 h-14 w-[803px] text-slate-800 pl-3 text-lg'
				onChange={onChange}
				value={value}
			/>
			<button
				type='submit'
				className='w-72 h-14 shadow-md bg-green-400 rounded-[40px] text-white font-extrabold text-xl flex justify-evenly items-center'>
				<Image
					src={location}
					width={35}
					height={35}
					alt='location'
				/>
				Текущее место
			</button>
		</form>
	);
};

export default SearchBox;
