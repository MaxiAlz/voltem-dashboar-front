import Breadcrumb from '../../../components/Breadcrumbs/Breadcrumb';
import PageTitle from '../../../components/PageTitle';
import DefaultLayout from '../../../layout/DefaultLayout';

// type Props = {};

const HubsView = (/* props: Props */) => {
  return (
    <>
      <PageTitle title="Hubs | VOLTEM" />
      <DefaultLayout>
        <Breadcrumb pageName="Centrales" />
        <div>HubsView </div>
      </DefaultLayout>
    </>
  );
};

export { HubsView };
