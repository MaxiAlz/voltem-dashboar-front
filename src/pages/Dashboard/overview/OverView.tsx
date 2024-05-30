import DefaultLayout from '../../../layout/DefaultLayout';
import CardDataStats from '../../../components/Cards/CardDataStats';
import ChartOne from '../../../components/Charts/ChartOne';
import ChartThree from '../../../components/Charts/ChartThree';

const OverView = () => {

  return (
    <DefaultLayout>
      {/* <h1>Hola: {user.user?.name}</h1>
      <button onClick={() => dispatch(setUser(userValues))}>dala laiik</button> */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
        <CardDataStats title="Usuarios totales" total="14" rate="0.95%" levelUp>
          <span className="material-symbols-outlined text-primary">group</span>
        </CardDataStats>
        <CardDataStats title="Hubs totales" total="32" rate="0.43%" levelUp>
          <span className="material-symbols-outlined text-primary">hub</span>
        </CardDataStats>
        <CardDataStats
          title="Facturacion mensual"
          total="$45,2K"
          rate="4.35%"
          levelUp
        >
          <span className="material-symbols-outlined text-primary">
            account_balance
          </span>
        </CardDataStats>
      </div>
      <div className=" flex">
        <div className="m-5">
          <ChartOne />
        </div>

        <div className="m-5">
          <ChartThree />
        </div>
      </div>
    </DefaultLayout>
  );
};

export { OverView };
