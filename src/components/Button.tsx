export default function Button({
  onClick,
  children,
  className,
}: {
  onClick: () => void;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <button
      onClick={onClick}
      className={`text-black w-full py-2 font-semibold bg-white rounded-xl hover:bg-zinc-800 hover:text-white transition-colors duration-200 ${className}`}
    >
      {children}
    </button>
  );
}
