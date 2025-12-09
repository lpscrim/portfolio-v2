import Image from "next/image";

export default function Card({ content , bottom }: { content: { title: string; description: string; img: string }, bottom: boolean }) {
    return (
        <div className="w-full h-full overflow-hidden rounded-sm shadow-md justify-center flex flex-col relative">
            {/* Background image */}
            <div
                className="absolute inset-0 w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url(${content.img})` }}
            />
            <div className="absolute inset-0 w-full h-full bg-white/30 backdrop-blur-2xl rounded-sm" />
            {/* Content */}
            <div className="px-4 py-5 md:px-8 md:py-7 xl:p-14 relative items-center justify-center flex z-10">
                <Image 
                    src={content.img} 
                    alt={content.title} 
                    width={800} 
                    height={400} 
                    className="w-full h-auto object-cover rounded-sm aspect-video max-w-4xl"
                />
            </div>
            <div className={bottom ? `px-2 py-2` : `px-4 py-2 sm:px-6`} style={{ position: "relative", zIndex: 10 }}>
                <h3 className="text-base -mt-6 text-foreground w-full text-center">{content.title}</h3>
                <p className="hidden mt-2 text-sm text-foreground/80">{content.description}</p>
            </div>
        </div>
    );
}