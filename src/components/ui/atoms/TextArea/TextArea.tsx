import { FieldValues, Path, UseFormRegister } from "react-hook-form";

interface TextAreaProps<TFieldValues extends FieldValues> {
  name: Path<TFieldValues>; 
  placeholder?: string;
  register: UseFormRegister<TFieldValues>;
  required?: boolean;
  error: string;
}

export const TextArea = <TFieldValues extends FieldValues>({ name, placeholder, register, required, error }: TextAreaProps<TFieldValues>) => {

  const stylesInput = 'block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-white placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
  const errorInput = 'ring-red-500 border-red-500';

  return (
    <div>
      <textarea
        className={`${stylesInput} ${ error ? errorInput : '' }`}
        {...register(name)}
        placeholder={placeholder}
        required={required}
      />
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
};
