export const Input = ({
  type = "text",
  value = "",
  name,
  onChange,
  placeholder,
}: {
  type: "text" | "email" | "password" | "number";
  value: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}) => {
  return (
    <input
      type={type}
      value={value}
      name={name}
      onChange={onChange}
      placeholder={placeholder}
      className="border-2 border-purple-200 bg-white rounded-full py-2 px-4 outline-none focus:border-orange-500 transition-colors"
    />
  );
};
