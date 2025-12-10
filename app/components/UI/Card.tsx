import Link from "next/link";

export default function Card({ content  }: { content: { title: string; description: string; img: string; vid: string }}) {
    return (
        <div className="w-full h-full overflow-hidden rounded-sm hover:shadow-md cursor-pointer justify-center flex flex-col relative transition-all duration-500 ease-in-out">
            <Link href={"#123"}  >
            {/* Background image */}
            <div
                className="absolute inset-0 w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url(${content.img})` }}
            />
            <div className="absolute inset-0 w-full h-full bg-white/75 backdrop-blur-sm rounded-sm" />
            {/* Content */}
            <div className="px-4 py-5 md:px-8 md:py-7 xl:p-14 relative items-center justify-center flex z-10">
                <video className="w-full h-auto object-cover rounded-sm aspect-video max-w-4xl"
                src={content.vid}
                autoPlay
                loop
                muted
                playsInline
                />
            </div>
            <div className={`px-4 py-2 sm:px-6`} style={{ position: "relative", zIndex: 10 }}>
                <div className="text-base -mt-5 w-full justify-center flex">
                    <div className="md:text-xl inline-block bg-white rounded-xs ">
                        <h2 className="text-foreground bg-black/5 px-2 lowercase home-title tracking-wide pt-0.5">{content.title}</h2>
                    </div>
                </div>
                <p className="hidden mt-2 text-sm text-foreground/80">{content.description}</p>
            </div>
            </Link>
        </div>
    );
}