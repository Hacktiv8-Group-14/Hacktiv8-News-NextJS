import Link from "next/link";

export default function Title (props) {
    const {title, link} = props

    return (
        <div className="w-11/12">
            <div className="flex p-3 justify-between items-center border-b ">
            <div className="font-bold text-2xl">{title}</div>
            <Link href={link}><div className="text-sky-600 hover:underline">See all</div></Link>
            </div>
        </div>

    )
}