import Modal from './Modal';
import { UserForm } from '../Forms';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { errorMesagges } from '../../common/errorMesages/errorMessages';
import axiosInstance from '../../util/axios';
import { notify } from '../../hooks/notify';


const userValidationSchema = Yup.object({
  lastname: Yup.string()
    .required(errorMesagges.required)
    .min(2, errorMesagges.shorterText),
  name: Yup.string().required(errorMesagges.required),
  // companyname: Yup.string().required(errorMesagges.required),
  username: Yup.string().required(errorMesagges.required),
  email: Yup.string()
    .email(errorMesagges.invalidEmail)
    .required(errorMesagges.required),
  // address: Yup.string().required(errorMesagges.required),
  password: Yup.string().required(errorMesagges.required)
});


interface Props {
  openModal: boolean
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>
  afterSubmit?: () => void
}

const CreateNewUserModal = ({openModal, setOpenModal, afterSubmit }:Props) => {
  

  const formik = useFormik({
    initialValues: {
      name: '',
      lastname: '',
      username: '',
      email: '',
      password:''
    },
    validationSchema: userValidationSchema,
    onSubmit: async (values, { resetForm }) => {
      console.log(values)
      try{
        await axiosInstance.post("user", values);
        notify({message: "se guardo con exito", type:"success"})
        setOpenModal(false);
        resetForm()
        if (afterSubmit) {
          afterSubmit();
        }
      }
      catch(err){
        console.log(err)
        notify({message: "occurio un error", type:"error"})
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
