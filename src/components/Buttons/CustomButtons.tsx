interface ButtonsProps {
  handleSubmit: () => void;
  text: String;
  type?: 'button' | 'submit' | 'reset';
  icon?: String;
  color?: 'primary' | 'black' | 'secondary';
}

const CustomButton = ({
  handleSubmit,
  type,
  text,
  icon,
  color,
}: ButtonsProps) => {
  return (
    <button
      // className="inline-flex items-center justify-center gap-2.5 bg-black py-4 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
      className={`inline-flex items-center justify-center gap-2.5 bg-${
        color ?? 'primary'
      } py-4 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10`}
      onClick={handleSubmit}
      type={type}
    >
      {icon && <span className="material-symbols-outlined">{icon}</span>}
      {text}
    </button>
  );
};

export { CustomButton };
