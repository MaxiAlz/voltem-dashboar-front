import { useState } from 'react';
import Modal from './Modal';
import { CustomButton } from '../Buttons/CustomButtons';
import { UserForm } from '../Forms';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { errorMesagges } from '../../common/errorMesages/errorMessages';

const userValidationSchema = Yup.object({
  lastname: Yup.string()
    .required(errorMesagges.required)
    .min(5, errorMesagges.shorterText),
  name: Yup.string().required(errorMesagges.required),
  companyname: Yup.string().required(errorMesagges.required),
  username: Yup.string().required(errorMesagges.required),
  email: Yup.string()
    .email(errorMesagges.invalidEmail)
    .required(errorMesagges.required),
  adress: Yup.string().required(errorMesagges.required),
});

const CreateNewUSerModal = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);

  const formik = useFormik({
    initialValues: {
      name: '',
      lastname: '',
      companyname: '',
      username: '',
      email: '',
      adress: '',
    },
    validationSchema: userValidationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <>
      <CustomButton
        onClick={() => setOpenModal(true)}
        text={'Nuevo usuario'}
        icon={'Add'}
        color={'primary'}
      />
      <Modal
        isModalOpen={openModal}
        closeModal={() => setOpenModal(false)}
        title={'Crear usuario'}
        successTitle={'Crear usuario'}
        icon={'send'}
        handleSubmit={formik.handleSubmit}
      >
        <UserForm formik={formik} />
      </Modal>
    </>
  );
};

export default CreateNewUSerModal;
