import React from "react"
import { IoSearch } from "react-icons/io5"

type SearchProps = {
    value: string,
    onChange: React.ChangeEventHandler<HTMLInputElement> | undefined,
    onSubmit: React.FormEventHandler<HTMLFormElement> | undefined,
    className?: string
}

export const SearchBox = ({value, onChange, onSubmit}: SearchProps) => {
    return (
        <form
            onSubmit={onSubmit}
            className="flex relative items-center justify-center h-10">
            <input
                type="text"
                placeholder="Поиск места положения"
                onChange={onChange}
                value={value}
                className="px-4 py-2 w-[230px] border border-gray-300 rounded-l-md focus:outline-none focus:border-blue-500 h-full" />
            <button className="px-4 py-[9px] bg-blue-500 text-white rounded-r-md focus:outline-none hover:bg-blue-600 whitespace-nowrap h-full">
                <IoSearch/>
            </button>
        </form>
    )
}