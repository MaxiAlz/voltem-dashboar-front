import { useState } from 'react';
import CreateNewUserModal from '../../../components/Modal/CreateNewUserModal';
import TableUsers from '../../../components/Tables/TableUsers';
import DefaultLayout from '../../../layout/DefaultLayout';
import { CustomButton } from '../../../components/Buttons/CustomButtons';
import useAxios from '../../../hooks/useAxios';

interface Data {
  id: string,
  name: string,
  age: number,
}


export const UsersPage = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const {data, error, loading, refetch} = useAxios<Data>("usersd");
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
      
      <CreateNewUserModal openModal={openModal} setOpenModal={setOpenModal}/>
      <TableUsers />
    </DefaultLayout>
  );
};
