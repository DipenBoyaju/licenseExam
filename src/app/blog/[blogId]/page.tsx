import React, { cache } from "react";
import Image from "next/image";
import { blogData } from "../../constant/constant";
import { Metadata } from "next";


const getBlogById = cache((id: string) => {
  return blogData.find((blog) => blog.id === id);
});


export async function generateStaticParams() {
  return blogData.map(blog => ({
    blogId: blog.id,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { blogId: string };
}): Promise<Metadata> {
  const blog = getBlogById(params.blogId);
  return {
    title:  blog ? blog.title : 'Default Blog Title',
    description:blog?.description1
  };
}





const SingleBlogPage = ({ params }: { params: { blogId: string } }) => {
  const blog = getBlogById(params.blogId);


  /*  const router = useRouter();
  if (blog == undefined) {
    router.push("/blog");
  } */

  // console.log({ blog });

  return (
    <>
      {blog && (
        <section className="bg-[#f7f7f7] pb-[64px] pt-10  lg:pt-[160px]x ">
          <div className="container text-[#484747]  flex flex-col gap-4 sm:gap-8 lg:gap-16 mt-16">
            <div>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold lg:max-w-[60%]">
                {blog?.title}
              </h2>
              <div className="mt-8 text-[#484747] border-l-4  border-l-[#484747] px-3">
                <h3 className="text-[20px]">{blog?.author}</h3>
                <p className="text-[14px]">{blog?.date}</p>
              </div>
            </div>
            <div>
              {blog?.description1.split("\n").map((text) => (
                <p key={text} className="">
                  {text}
                </p>
              ))}
            </div>
            <div className="h-auto lg:h-[600px] w-full border">
              <Image
                alt={blog!.title}
                src={blog!.photo}
                className="rounded-lg h-full w-full object-cover"
                height={600}
              ></Image>
            </div>

            <div className="flex flex-col gap-4 sm:gap-8 lg:gap-16">
              {Array.isArray(blog.description2)
                ? blog.description2.map((desc) => (
                    <div key={desc.title}>
                      <h3 className="text-[18px] sm:text-xl lg:text-2xl font-semibold">
                        {desc.title}
                      </h3>

                      <p className="mt:1 sm:mt-3 max-sm:text-sm">
                        {" "}
                        {desc?.subtitle}
                      </p>
                      <ul className="list-decimal">
                        {desc.descriptionList.map((d) => (
                          <li key={d} className="ml-6 max-sm:text-sm">
                            {d}
                          </li>
                        ))}{" "}
                      </ul>
                    </div>
                  ))
                : ""}
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default SingleBlogPage;
