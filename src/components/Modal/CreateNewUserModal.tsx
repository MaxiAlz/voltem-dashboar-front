import Modal from './Modal';
import { UserForm } from '../Forms';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { errorMesagges } from '../../common/errorMesages/errorMessages';


const userValidationSchema = Yup.object({
  lastname: Yup.string()
    .required(errorMesagges.required)
    .min(2, errorMesagges.shorterText),
  name: Yup.string().required(errorMesagges.required),
  companyname: Yup.string().required(errorMesagges.required),
  username: Yup.string().required(errorMesagges.required),
  email: Yup.string()
    .email(errorMesagges.invalidEmail)
    .required(errorMesagges.required),
  adress: Yup.string().required(errorMesagges.required),
});


interface Props {
  openModal: boolean,
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>
}

const CreateNewUserModal = ({openModal, setOpenModal}:Props) => {
  

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
    onSubmit: (values, { resetForm }) => {
      alert(JSON.stringify(values, null, 2));
      resetForm()
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

export default CreateNewUserModal;
