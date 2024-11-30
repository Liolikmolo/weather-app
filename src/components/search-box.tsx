import React from 'react';
import { IoSearch } from 'react-icons/io5';

type Props = {
  value: string,
  onChange: React.ChangeEventHandler<HTMLInputElement>|undefined,
  onSubmit: React.FormEventHandler<HTMLFormElement>|undefined,
  className?: string 
}

const SearchBox = ({value, onChange, onSubmit}: Props) => {
  return (
    <form className='flex relative items-center justify-center h-10' onSubmit={onSubmit}>
      <input 
        type="text" 
        placeholder='Поиск локации' 
        className='px-4 py-2 w-[230px] border border-gray-300 rounded-l-md focus:outline-none focus:border-blue-500 h-full' 
        onChange={onChange}
        value={value}
        />
      <button className='px-4 py-[9px] bg-blue-500 text-white rounded-r-md focus:outline-none hover:bg-blue-600 whitespace-nowrap h-full'>
        <IoSearch/>
      </button>
    </form>
  )
}

export default SearchBox;