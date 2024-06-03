import { useState } from 'react';
import CreateNewUserModal from '../../../components/Modal/CreateNewUserModal';
import TableUsers from '../../../components/Tables/TableUsers';
import DefaultLayout from '../../../layout/DefaultLayout';
import { CustomButton } from '../../../components/Buttons/CustomButtons';
import useAxios from '../../../hooks/useAxios';
import PageTitle from '../../../components/PageTitle';
import Pagination from '../../../components/Pagination';

export interface UserData {
  id: string;
  name: string;
  lastname: string;
  username: string;
  is_active: string;
}

export const UsersPage = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const { data, error, loading, setPagination, refetch, pagination } =
    useAxios<UserData>('user');

  const handlePageChange = (page: number) => {
    setPagination({ ...pagination, currentPage: page });
  };

  return (
    <>
      <PageTitle title="Usuarios | VOLTEM" />
      <DefaultLayout>
        <div className="flex justify-between place-items-center mb-5">
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

        <CreateNewUserModal
          openModal={openModal}
          setOpenModal={setOpenModal}
          afterSubmit={refetch}
        />
        <TableUsers data={data} />
        <Pagination pagination={pagination} onPageChange={handlePageChange} />
      </DefaultLayout>
    </>
  );
};
