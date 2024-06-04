import { FormikProps } from 'formik';

interface HubFormValues {
    name: string;
}
interface UserFormProps {
    formik: FormikProps<HubFormValues>;
}

const HubForm = ({ formik }: UserFormProps) => {
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
                                className={`w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary ${formik.touched.name && formik.errors.name
                                        ? 'border-red-500'
                                        : ''
                                    }`}
                            />
                            {formik.touched.name && formik.errors.name ? (
                                <div className="text-red-500">{formik.errors.name}</div>
                            ) : null}
                        </div>

                    </div>
                </div>
            </form>
        </div>
    );
};

export { HubForm };
