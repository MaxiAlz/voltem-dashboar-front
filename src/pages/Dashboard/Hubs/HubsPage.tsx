import { useState } from 'react';
import { CustomButton } from '../../../components/Buttons/CustomButtons';
import PageTitle from '../../../components/PageTitle';
import DefaultLayout from '../../../layout/DefaultLayout';
import useAxios from '../../../hooks/useAxios';
import TableHubs from '../../../components/Tables/TableHubs';
import Pagination from '../../../components/Pagination';
import CreateHubModal from '../../../components/Modal/CreateHubModal';

export interface HubData {
  id: string;
  name: string;
  unique_id: string;
}

const HubsPage = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const { data, error, loading, setPagination, refetch, pagination } =
    useAxios<HubData>('hub');

  const handlePageChange = (page: number) => {
    setPagination({ ...pagination, currentPage: page });
  };

  return (
    <>
      <PageTitle title="Hubs | VOLTEM" />
      <DefaultLayout>
        <div className="flex justify-between place-items-center mb-5">
          <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
            Hubs
          </h4>
          <CustomButton
            onClick={() => {
              setOpenModal(true);
            }}
            text={'Nuevo Hub'}
            icon={'Add'}
            color={'primary'}
          />
        </div>
        <CreateHubModal
          openModal={openModal}
          setOpenModal={setOpenModal}
          afterSubmit={refetch}
        />
        <TableHubs data={data} />
        <Pagination pagination={pagination} onPageChange={handlePageChange} />
      </DefaultLayout>
    </>
  );
};

export { HubsPage };
