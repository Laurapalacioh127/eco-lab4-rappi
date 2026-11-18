export const Button = ({
  secondary,
  onClick,
  children,
  disabled = false,
}: {
  secondary?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
  disabled?: boolean;
}) => {
  return (
    <button
    className={` ${secondary ? "border-2 border-purple-700 text-purple-700 hover:bg-purple-700 hover:text-white" : "bg-purple-700 text-white hover:bg-orange-500"} disabled:bg-gray-200 disabled:text-gray-400 disabled:border-gray-200 disabled:cursor-default rounded-full py-2 px-5 font-medium cursor-pointer transition-all shadow-sm`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
