import Button from "../atoms/Button";
import Image from "next/image";
import { HiArrowCircleRight, HiArrowCircleLeft } from "react-icons/hi";
import { useEffect } from "react";

export default function HeadlineCard({
    image,
    title,
    description,
    url,
    index,
    setIndex,
}){
    useEffect(() => {
      if (index > 9) {
        setIndex(0);
      } else if (index < 0) {
        setIndex(9);
      }
    }, [index]);
  
    const onClickRight = () => {
      setIndex(index + 1);
    };
  
    const onClickleft = () => {
      setIndex(index - 1);
    };
  
    return (
      <div className="w-11/12 relative text-white">
        <div className="absolute left-0 top-0 rounded-tl-lg rounded-br-lg bg-red p-2">
          Hot News
        </div>
        <Button className="absolute inset-y-0 left-0 ml-5  hover:opacity-50">
          <HiArrowCircleLeft size={50} onClick={onClickleft} />
        </Button>
        <Button className="absolute inset-y-0 right-0 mr-5 hover:opacity-50 ">
          <HiArrowCircleRight size={50} onClick={onClickRight} />
        </Button>
        <Image className=" w-full rounded-lg h-96 " src={image} alt="headline" />
        <div className="mx-18 absolute inset-x-0 bottom-0 p-5 backdrop-blur-sm  bg-black bg-opacity-50 rounded-b-lg">
          <div className="border-b mb-2 font-bold truncate pb-2">{title}</div>
          <a href={url} className="line-clamp-2 text-sm hover:underline">
            {description}
          </a>
        </div>
      </div>
    );
  }