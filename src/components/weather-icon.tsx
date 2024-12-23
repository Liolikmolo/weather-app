import Image from "next/image"

export const WeatherIcon = (props: React.HTMLProps<HTMLDivElement> & {icon: string}) => {
    return (
        <div {...props} className="relative h-20 w-20">
            <Image
                src={`https://openweathermap.org/img/wn/${props.icon}@2x.png`}
                alt="icon"
                width={100}
                height={100 }
                className="absolute w-full h-full"/>
        </div>
    )
}