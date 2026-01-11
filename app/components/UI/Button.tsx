export default function Button({
  children,
  onClick,
  type,
  className,
  style,
  disabled,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "submit";
  disabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <button
      className={`mt-2 px-2 py-1 rounded-sm font-semibold cursor-pointer shadow  hover:shadow-xl active:translate-y-1 active:shadow-md active:scale-98 duration-150 transition-all ${className}`}
      onClick={onClick}
      type={type}
      style={style}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
