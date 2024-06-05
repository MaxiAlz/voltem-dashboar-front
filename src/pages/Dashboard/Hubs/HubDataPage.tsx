// import { useState } from 'react';
import PageTitle from '../../../components/PageTitle';
import DefaultLayout from '../../../layout/DefaultLayout';
// import { useParams } from 'react-router-dom';
import CardDataStats from '../../../components/Cards/CardDataStats';
import CardMonitorData from '../../../components/Cards/CardMonitorData';
import ChartOne from '../../../components/Charts/ChartOne';
import ChartThree from '../../../components/Charts/ChartThree';
import ChartTwo from '../../../components/Charts/ChartTwo';

const HubDataPage = () => {
  // let routerParams = useParams();
  // const httpClient: HttpClient = httpService;
  // const [currentHub, setcurrentHub] = useState();
  return (
    <>
      <PageTitle title="Ver Hub | VOLTEM" />
      <DefaultLayout>
        <div className="overflow-hidden rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="mt-4 flex md:flex-row sm:flex-col md:justify-evenly items-center ">
            <div className="flex flex-col items-center">
              <span className="material-symbols-outlined text-primary text-5xl">
                hub
              </span>
              <h3 className="mb-1.5 text-2xl font-semibold text-black dark:text-white mt-5">
                Nombre de Hub
              </h3>
              <p className="font-medium">id: 25685D</p>
            </div>

            <div className="">
              <h4 className="font-semibold text-black dark:text-white">
                Descripcion
              </h4>
              <div className="lg:max-w-171.5 md:max-w-100">
                <p className="my-4.5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Pellentesque posuere fermentum urna, eu condimentum mauris
                  tempus ut. Donec fermentum blandit aliquet. Etiam dictum
                  dapibus ultricies. Sed vel aliquet libero. Nunc a augue
                  fermentum, pharetra ligula sed, aliquam lacus.
                </p>
                <article className="flex">
                  <div className="m-5">
                    <span className="font-semibold text-black dark:text-white">
                      Responsable:
                    </span>
                    <span className="text-sm"> Nombre de usuario</span>
                  </div>
                  <div className="m-5">
                    <span className="font-semibold text-black dark:text-white">
                      Negocio:
                    </span>
                    <span className="text-sm"> Nombre de negocioo</span>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
        <div className="m-5"></div>

        <div className="overflow-hidden rounded-sm p-5 border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
            <CardMonitorData
              title="Humedad"
              number="62,52%"
              icon="water_drop"
            />
            <CardMonitorData
              title="Temperatura"
              number="42,3 °C"
              icon="thermometer"
            />
            <CardMonitorData title="Pluviometro" number="12 mm" icon="Rainy" />
            <CardMonitorData
              title="Anemometro"
              number="14 Km/h"
              icon="wind_power"
            />
          </div>

          <div className="m-5"></div>
          <ChartTwo />
          <div className="m-5"></div>
          <ChartOne />
          <div className="m-5"></div>
          <ChartThree />
        </div>
      </DefaultLayout>
    </>
  );
};

export default HubDataPage;
