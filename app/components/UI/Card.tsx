export default function Card({ children }: { children: React.ReactNode }) {
    return (
        <div className="px-8 py-16 bg-background/80 backdrop-blur-2xl   border-accent rounded-xs shadow-lg">
            {children}
        </div>
    );
}   