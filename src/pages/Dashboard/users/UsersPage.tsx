import { useState } from 'react';
import CreateNewUserModal from '../../../components/Modal/CreateNewUserModal';
import TableUsers from '../../../components/Tables/TableUsers';
import DefaultLayout from '../../../layout/DefaultLayout';
import { CustomButton } from '../../../components/Buttons/CustomButtons';
import useAxios from '../../../hooks/useAxios';
import { PaginatedData } from '../../../common/interfaces/PaginatedData';
import axiosInstance from '../../../util/axios';

export interface UserData {
  id: string,
  name: string,
  lastname: string,
  username: string,
  is_active: string
}


export const UsersPage = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const {data, error, loading, refetch} = useAxios<UserData>("user");
  

  
  return (
    <DefaultLayout>
       <div className="flex justify-between place-items-center mb-5 px-5">
          <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
            Usuarios
          </h4>
          <CustomButton
            onClick={() => {
              setOpenModal(true);
            }}
            text={'Nuevo usuario'}
            icon={'Add'}
            color={'primary'}
        />
        </div>
      
      <CreateNewUserModal openModal={openModal} setOpenModal={setOpenModal} afterSubmit={refetch}/>
      <TableUsers data={data?.items} />
    </DefaultLayout>
  );
};
