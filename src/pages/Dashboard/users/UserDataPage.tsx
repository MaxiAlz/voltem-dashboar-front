import DefaultLayout from '../../../layout/DefaultLayout';
import PageTitle from '../../../components/PageTitle';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { HttpClient } from '../../../services/http/httpServiceInteface';
import { User } from '../../../types/user';
import httpService from '../../../services/http/httpService';
import Loader from '../../../common/Loader';
import BannerUserProfile from '../../../components/Avatar/BannerUserProfile';

export const UserDataPage = () => {
  let routerParams = useParams();
  const httpClient: HttpClient = httpService;
  const [currentUser, setcurrentUser] = useState<User>();

  const getUserById = async () => {
    try {
      const { data, ...rest } = await httpClient.get<User>(
        `user/${routerParams.id}`,
      );
      setcurrentUser(data);
      console.log('response :>> ', rest);
    } catch (error) {}
  };

  useEffect(() => {
    getUserById();
  }, []);

  return (
    <>
      <PageTitle title="Usuarios | VOLTEM" />
      <DefaultLayout>
        {!currentUser ? (
          <Loader />
        ) : (
          <>
            <BannerUserProfile userData={currentUser} />
            <div className="m-5"></div>
            <div className="overflow-hidden rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
              asd
            </div>
          </>
        )}
      </DefaultLayout>
    </>
  );
};
