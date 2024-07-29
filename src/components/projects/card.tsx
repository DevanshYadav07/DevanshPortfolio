"use client"
import Image, { StaticImageData } from "next/image";
import { useRouter } from 'next/navigation';


interface CardProps {
  image: StaticImageData;
  title: string;
  liveUrl: string;
  codeUrl: string;
  description: string;
  techs: string[];
}

const Card: React.FC<CardProps> = ({ image, title, liveUrl, codeUrl, description, techs }): JSX.Element => {


  const router = useRouter();
  const handleClick = () => {

    // Redirect to /project/[title] route
    localStorage.setItem('selectedProject', JSON.stringify({
      title,
      liveUrl,
      codeUrl,
      description,
      image: image.src,
      techs,

    }));
    router.push(`/project/${encodeURIComponent(title)}`);
  };
  return (
    <div className="w-full shadow-xl flex flex-col p-12 my-5 rounded-lg hover:scale-105 duration-300"

    >
      <Image
        className="w-[200px] mt-[-3rem] mx-auto bg-white rounded-md object-cover"
        src={image}
        alt={title}
      />
      <h2 className="text-xl font-bold text-center py-3">{title}</h2>

      <button className="bg-[#2596be] w-[200px] rounded-md font-medium mx-auto my-6 px-6 py-3 text-black">
        <a href={liveUrl} target="_blank" rel="noreferrer"> Live Demo    </a>

      </button>

      <button type="button" className="bg-black text-[#2596be] w-[200px] rounded-md font-medium mx-auto px-6 py-3"
        onClick={handleClick} >
        Know More
      </button>
    </div>
  );
};

export default Card;
