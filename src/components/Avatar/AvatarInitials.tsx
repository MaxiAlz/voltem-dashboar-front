interface AvatarInitialsProps {
  name: string;
  lastName: string;
  width?: string;
  textSize?: string;
}

const AvatarInitials = ({
  name,
  lastName,
  width = '12',
  textSize = 'xl',
}: AvatarInitialsProps) => {
  return (
    <div
      className={`inline-flex items-center justify-center w-${width}  h-${width}  text-${textSize}   text-white font-medium bg-primary rounded-full`}
    >
      {name?.slice(0, 1).toUpperCase()}
      {lastName?.slice(0, 1).toUpperCase()}
    </div>
  );
};

export default AvatarInitials;

//
