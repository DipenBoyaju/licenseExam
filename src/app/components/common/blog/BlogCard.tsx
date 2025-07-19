"use client";
import Image, { StaticImageData } from "next/image";
import blogImage from "./assets/blogImage.jpg";
import { FiArrowUpRight } from "react-icons/fi";
import { FaArrowRightLong } from "react-icons/fa6";
import { GoArrowUpRight } from "react-icons/go";
// import Router from 'next/router'
import { permanentRedirect, redirect, useRouter } from "next/navigation";
export type blogType = {
  id: string;
  title: string;
  description1: string;
  description2?: [];
  photo?: StaticImageData;
  author?: string;
  date?: string;
};

const BlogCard = ({
  id,
  title,
  description1,
  description2,
  photo,
  author,
  date,
}: blogType) => {
  const router = useRouter();
  return (
    <div
      className="w-max-[389px] max-sm:w-full  cursor-pointer hover:scale-95 transition-all duration-300 "
      onClick={() => router.push(`/blog/${id}`)}
    >
      <div className="relative border">
        <div className="h-[270px] ">
          <Image
            src={photo || ""}
            alt={title}
            width={389}
            height={349}
            className="rounded-lg h-full object-cover"
          ></Image>
        </div>

        <div className="absolute -right-5 -bottom-5 border-[#ffffff] bg-[#ffffff] border-[13px]   rounded-[28px] border-white-bg   bg-white-bg ">
          <div className="bg-[#F6540E] rounded-full w-full h-full p-4 ">
            <GoArrowUpRight className=" text-white text-[32px] " />
          </div>
        </div>
      </div>

      <div className="px-2  mt-6">
        <h3 className="font-semibold ">{title}</h3>

        <p className="font-light font-[#828282] text-[14px] mt-3 line-clamp-2">
          {description1}
        </p>

          {/* <div className="flex w-full justify-end my-6">
            <button className="font-semibold text-[12px] flex gap-4 items-center ">
              Read More <FaArrowRightLong />{" "}
            </button>
          </div> */}
      </div>
    </div>
  );
};
/* const BlogCard = () => {
  return (
    <div className="w-max-[389px] max-sm:w-[330px] ">
      <div className="relative border">
        <Image
          src={blogImage}
          alt="blog image"
          width={389}
          height={349}
          className="rounded-lg"
        ></Image>

        <div className="absolute -right-5 -bottom-5  border-[16px] rounded-3xl border-[#f7f7f7]   bg-[#f7f7f7] ">
          <div className="bg-blue rounded-full w-full h-full p-3 ">
            <GoArrowUpRight className=" text-white text-[48px] " />
          </div>
        </div>
      </div>

      <div className="px-2  mt-6">
        <h3 className="font-semibold ">
          Spotless Solutions: Mastering the Art of Clean - Your Ultimate
          Cleaning Guide
        </h3>

        <p className="font-light text-[14px] mt-3 line-clamp-2">
          Transform Your Space and Experience the Joy of Immaculate Living
        </p>

        <div className="flex w-full justify-end my-6">
          <button className="font-semibold text-[12px] flex gap-4 items-center ">
            Read More <FaArrowRightLong />{" "}
          </button>
        </div>
      </div>
    </div>
  );
};
 */
export default BlogCard;
