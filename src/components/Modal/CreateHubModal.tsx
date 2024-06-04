import Modal from './Modal';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { errorMesagges } from '../../common/errorMesages/errorMessages';
import axiosInstance from '../../util/axios';
import { notify } from '../../hooks/notify';
import { HubForm } from '../Forms/HubForm';

const validationSchema = Yup.object({
  name: Yup.string().required(errorMesagges.required),
});

interface Props {
  openModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  afterSubmit?: () => void;
}

const CreateHubModal = ({
  openModal,
  setOpenModal,
  afterSubmit,
}: Props) => {
  const formik = useFormik({
    initialValues: {
      name: '',
    },
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        await axiosInstance.post('hub', values);
        notify({ message: 'se guardo con exito', type: 'success' });
        setOpenModal(false);
        resetForm();
        if (afterSubmit) {
          afterSubmit();
        }
      } catch (err) {
        console.error(err);
        notify({ message: 'occurio un error', type: 'error' });
      }
    },
  });

  return (
    <>
      <Modal
        isModalOpen={openModal}
        closeModal={() => {
          setOpenModal(false);
          formik.resetForm();
        }}
        title={'Crear Hub'}
        successTitle={'Crear Hub'}
        icon={'send'}
        handleSubmit={formik.handleSubmit}
      >
        <HubForm formik={formik} />
      </Modal>
    </>
  );
};

export default CreateHubModal;
