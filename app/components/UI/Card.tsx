import Link from "next/link";

export default function Card({
  content,
  main,
}: {
  content: {
    title: string;
    slug: string;
    description: string;
    img: string;
    vid: string;
    brief?: string;
  };
  main?: boolean;
}) {
  return (
    <div className="group w-full h-full overflow-hidden rounded-sm hover:shadow-md cursor-pointer justify-center flex flex-col relative transition-all duration-500 ease-in-out">
      <Link href={"/projects/" + content.slug} className="w-full h-full">
        {/* Background image */}
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center opacity-70"
          style={{ backgroundImage: `url(${content.img})` }}
        />
        <div
          className={
            `absolute inset-0 w-full h-full ` +
            (main
              ? "bg-background/75 backdrop-blur"
              : " bg-foreground/75 backdrop-blur")
          }
        />

        {/* Content */}
        <div className="px-4 py-5 md:px-8 md:py-7 xl:p-14 relative items-center justify-center flex z-10 ">
          <video
            className="w-full h-auto object-cover rounded-sm aspect-video max-w-4xl "
            src={content.vid}
            autoPlay
            loop
            muted
            playsInline
          />
        </div>
        <div
          className={`px-4 py-2 sm:px-6`}
          style={{ position: "relative", zIndex: 10 }}
        >
          <div className="text-base -mt-5 w-full justify-center flex">
            <div className={`md:text-xl inline-block rounded-xs ` + (main ? "group-hover:bg-background transition-all duration-700" : "")} >
              <h2
                className={
                  `group-hover:bg-foreground/5 px-4 lowercase home-title tracking-wide pt-0.5 transition-all duration-700` +
                  (main ? " text-foreground" : " text-background")
                }
              >
                {content.title}
              </h2>
            </div>
          </div>
        </div>
      </Link>
      {/* Overlay moved outside Link */}
      {!main && content.brief && (
        <div className="absolute inset-0 z-99 w-full h-full bg-foreground/95 text-background flex flex-col opacity-0 items-start justify-center text-center group-hover:opacity-100 transition-opacity duration-600 pointer-events-none">
          <p className="pt-12 md:pt-16 lg:pt-24 text-sm md:text-base lg:text-lg px-4 sm:px-6 md:px-10 xl:px-16 w-full h-full  ">
            {content.brief}
          </p>
          <p className="home-title px-4 pb-10 lg:pb-16 mx-auto text-sm sm:text-base">click for more details</p>
        </div>
      )}
    </div>
  );
}
