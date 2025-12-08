export default function Button({
  children,
  onClick,
  mode,
  type,
  className,
  style,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  mode?: "light" | "dark";
  type?: "submit";
    className?: string;
    style?: React.CSSProperties;
}) {
  return (
    <button
      className={`mt-2 px-2 py-1 rounded ${mode === "dark" ? "bg-primary text-background" : "bg-secondary text-foreground"} font-semibold cursor-pointer shadow hover:brightness-115 hover:shadow-xl active:translate-y-1 active:shadow-md active:scale-98 duration-150 transition-all ${className}`}
      onClick={onClick}
      type={type}
      style={style}
    >
      {children}
    </button>
  );
}
