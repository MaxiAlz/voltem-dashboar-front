
interface AvatarInitialsProps {
  name: string;
  lastName: string;
}

const AvatarInitials = ({ name, lastName }: AvatarInitialsProps) => {
  return (
    <div className="inline-flex items-center justify-center w-12 h-12 text-xl text-white bg-primary rounded-full">
      {name.slice(0, 1)}
      {lastName.slice(0, 1)}
    </div>
  );
};

export default AvatarInitials;
