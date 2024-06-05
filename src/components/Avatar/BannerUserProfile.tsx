import AvatarInitials from './AvatarInitials';

// interface Props {
//   userData: User;
// }

const BannerUserProfile = ({ userData }: any) => {
  return (
    <div className="overflow-hidden rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="mt-4 flex md:flex-row sm:flex-col md:justify-evenly items-center ">
        <div className="flex flex-col items-center">
          <AvatarInitials
            textSize="4xl"
            width="20"
            name={userData?.name}
            lastName={userData?.lastname}
          />
          <h3 className="mb-1.5 text-2xl font-semibold text-black dark:text-white mt-5">
            {userData?.name.toUpperCase()} {userData?.lastname.toUpperCase()}
          </h3>
          <p className="font-medium">{userData?.email}</p>
        </div>

        <div className="">
          <div className=" mt-4.5 mb-5.5 grid max-w-94 grid-cols-3 rounded-md border border-stroke py-2.5 shadow-1 dark:border-strokedark dark:bg-[#37404F]">
            <div className="flex flex-col items-center justify-center gap-1 border-r border-stroke px-4 dark:border-strokedark xsm:flex-row">
              <span className="font-semibold text-black dark:text-white">
                259
              </span>
              <span className="text-sm">Posts</span>
            </div>
            <div className="flex flex-col items-center justify-center gap-1 border-r border-stroke px-4 dark:border-strokedark xsm:flex-row">
              <span className="font-semibold text-black dark:text-white">
                129K
              </span>
              <span className="text-sm">Followers</span>
            </div>
            <div className="flex flex-col items-center justify-center gap-1 px-4 xsm:flex-row">
              <span className="font-semibold text-black dark:text-white">
                2K
              </span>
              <span className="text-sm">Following</span>
            </div>
          </div>

          <h4 className="font-semibold text-black dark:text-white">
            Descripcion
          </h4>
          <div className="lg:max-w-171.5 md:max-w-100">
            <p className="my-4.5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque posuere fermentum urna, eu condimentum mauris tempus
              ut. Donec fermentum blandit aliquet. Etiam dictum dapibus
              ultricies. Sed vel aliquet libero. Nunc a augue fermentum,
              pharetra ligula sed, aliquam lacus.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerUserProfile;
