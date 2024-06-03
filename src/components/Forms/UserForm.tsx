// TODO: Agregar useRef para que pueda enviar el formulario desde el boton del modal

import { FormikProps } from 'formik';

interface UserFormValues {
  name: string;
  lastname: string;
  // companyname: string;
  username: string;
  email: string;
  // adress: string;
  password: string;
}
interface UserFormProps {
  formik: FormikProps<UserFormValues>;
}

const UserForm = ({ formik }: UserFormProps) => {
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div className="">
          <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
            <div className="w-full xl:w-1/2">
              <label className="mb-1 block text-black dark:text-white">
                Nombre
              </label>
              <input
                id="name"
                name="name"
                onChange={formik.handleChange}
                value={formik.values.name}
                type="text"
                placeholder="Nombre"
                className={`w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary ${
                  formik.touched.name && formik.errors.name
                    ? 'border-red-500'
                    : ''
                }`}
              />
              {formik.touched.name && formik.errors.name ? (
                <div className="text-red-500">{formik.errors.name}</div>
              ) : null}
            </div>
            <div className="w-full xl:w-1/2 ">
              <label className="mb-1 block text-black dark:text-white">
                Apellido
              </label>
              <input
                id="lastname"
                name="lastname"
                onChange={formik.handleChange}
                value={formik.values.lastname}
                type="text"
                placeholder="Apellido"
                className={`w-full  rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary ${
                  formik.touched.lastname && formik.errors.lastname
                    ? 'border-red-500'
                    : ''
                }`}
              />
              {formik.touched.lastname && formik.errors.lastname ? (
                <div className="text-red-500">{formik.errors.lastname}</div>
              ) : null}
            </div>

          </div>

          {/* <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
            <div className="w-full xl:w-1/2">
              <label className="mb-1 block text-black dark:text-white">
                Empresa / Negocio
              </label>
              <input
                id="companyname"
                name="companyname"
                onChange={formik.handleChange}
                value={formik.values.companyname}
                type="text"
                placeholder="Nombre de empresa"
                className={`w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary ${
                  formik.touched.companyname && formik.errors.companyname
                    ? 'border-red-500'
                    : ''
                }`}
              />
              {formik.touched.companyname && formik.errors.companyname ? (
                <div className="text-red-500">{formik.errors.companyname}</div>
              ) : null}
            </div> */}

          <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
            <div className="w-full xl:w-1/2">
              <label className="mb-1 block text-black dark:text-white">
                Constraseña
              </label>
              <input
                id="password"
                name="password"
                onChange={formik.handleChange}
                value={formik.values.password}
                type="password"
                placeholder=""
                className={`w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary ${
                  formik.touched.password && formik.errors.password
                    ? 'border-red-500'
                    : ''
                }`}
              />
              {formik.touched.password && formik.errors.password ? (
                <div className="text-red-500">{formik.errors.password}</div>
              ) : null}
            </div> 
           

            <div className="w-full xl:w-1/2">
              <label className="mb-1 block text-black dark:text-white">
                Nombre de usuario
              </label>
              <input
                id="username"
                name="username"
                onChange={formik.handleChange}
                value={formik.values.username}
                type="text"
                placeholder="Nombre de usuario"
                className={`w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary ${
                  formik.touched.username && formik.errors.username
                    ? 'border-red-500'
                    : ''
                }`}
              />
              {formik.touched.username && formik.errors.username ? (
                <div className="text-red-500">{formik.errors.username}</div>
              ) : null}
            </div>
          </div>
          </div>
          <div className="mb-4.5">
            <label className="mb-1 block text-black dark:text-white">
              Email
            </label>
            <input
              id="email"
              name="email"
              onChange={formik.handleChange}
              value={formik.values.email}
              type="email"
              placeholder="Escribir email"
              className={`w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary ${
                formik.touched.email && formik.errors.email
                  ? 'border-red-500'
                  : ''
              }`}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="text-red-500">{formik.errors.email}</div>
            ) : null}
          </div>

          {/* <div className="mb-4.5">
            <label className="mb-1 block text-black dark:text-white">
              Direccion
            </label>
            <input
              id="adress"
              name="adress"
              onChange={formik.handleChange}
              value={formik.values.adress}
              type="text"
              placeholder="Direccion del cliente"
              className={`w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary ${
                formik.touched.adress && formik.errors.adress
                  ? 'border-red-500'
                  : ''
              }`}
            />
            {formik.touched.adress && formik.errors.adress ? (
              <div className="text-red-500">{formik.errors.adress}</div>
            ) : null}
          </div>
        </div> */}
      </form>
    </div>
  );
};

export { UserForm };
