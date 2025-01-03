import clsx from "clsx";
import React from "react";
import { twMerge } from "tailwind-merge";

export const Container = (props: React.HTMLProps<HTMLDivElement>) => {
    return (
        <div {...props} className={twMerge(clsx('w-full bg-white border rounded-xl flex py-4 shadow-sm', props.className))}>
        </div>
    )
}