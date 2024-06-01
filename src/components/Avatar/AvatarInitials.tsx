
interface AvatarInitialsProps {
  name: string;
  lastName: string;
}

const AvatarInitials = ({ name, lastName }: AvatarInitialsProps) => {
  return (
    <div className="inline-flex items-center justify-center w-12 h-12 text-xl text-white font-medium bg-primary rounded-full">
      {name.slice(0, 1).toUpperCase()}
      {lastName.slice(0, 1).toUpperCase()}
    </div>
  );
};

export default AvatarInitials;
