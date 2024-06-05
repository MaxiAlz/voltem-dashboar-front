// import React, { ReactNode, useEffect, useState } from 'react';

interface CardMonitorDataProps {
  title: string;
  icon?: string;
  number: string;
}

const CardMonitorData = ({ title, number, icon }: CardMonitorDataProps) => {
  return (
    <div className="flex flex-col items-center justify-between max-w-screen-xsm  rounded-sm border border-stroke bg-white py-6 px-7.5 shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="flex">
        {icon && (
          <span className="material-symbols-outlined text-primary">{icon}</span>
        )}
        <h5 className="text-title-sm font-bold text-black dark:text-white">
          {title}
        </h5>
      </div>
      <span className="text-4xl font-medium m-4 ">{number}</span>
      <span className="text-sm text-primary">
        Ultima actualizacion: {new Date().toLocaleTimeString()}{' '}
      </span>
    </div>
  );
};

export default CardMonitorData;
