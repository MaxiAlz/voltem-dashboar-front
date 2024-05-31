import { ReactNode } from 'react';

interface ModalProps {
  isModalOpen: boolean;
  closeModal: () => void;
  handleSubmit: () => void;
  title: String;
  children: ReactNode;
  successTitle: String;
  icon?: String;
}

const Modal = ({
  title = 'Modal Title',
  children,
  successTitle = 'Aceptar',
  icon,
  isModalOpen,
  closeModal,
  handleSubmit,
}: ModalProps) => {
  return (
    isModalOpen && (
      <div
        className="relative z-999"
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
      >
        <div className="fixed inset-0 bg-black dark:bg-opacity-90 bg-opacity-60 transition-opacity w-full "></div>
        <div className="fixed inset-0 z-99999 w-screen overflow-y-auto ">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <div className="relative transform overflow-hidden rounded-lg bg-white dark:border-strokedark dark:bg-boxdark  text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
              <div className=" px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center  sm:mt-0 sm:text-left">
                    <div className="flex justify-between">
                      <h3
                        className="text-lg font-semibold text-black dark:text-white"
                        id="modal-title"
                      >
                        {title}
                      </h3>
                      <button
                        onClick={closeModal}
                        className="w-8 h-8  text-primary rounded-full hover:bg-primary hover:bg-opacity-30 "
                      >
                        x
                      </button>
                    </div>

                    <div className="mt-2">{children}</div>
                  </div>
                </div>
              </div>

              <div className=" px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6 ">
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="inline-flex w-full justify-center  rounded-md bg-primary px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-opacity-90 sm:ml-3 sm:w-auto"
                >
                  {icon && (
                    <span className="material-symbols-outlined px-1">
                      {icon}
                    </span>
                  )}
                  <span> {successTitle}</span>
                </button>
                <button
                  type="button"
                  onClick={closeModal}
                  className="mt-3 inline-flex w-full justify-center rounded-md bg-white dark:text-black px-3 py-2 text-sm font-semibold  shadow-sm ring-1 ring-inset ring-primary hover:bg-opacity-90 sm:mt-0 sm:w-auto"
                >
                  Cancelar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default Modal;
