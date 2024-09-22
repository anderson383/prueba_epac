import { SubmitHandler, useForm } from "react-hook-form";
import { useItems } from "../../../hooks/post/useItems";
import { PostFormValuesType } from "../../../types/post.type";
import { Button } from "../../ui/atoms/Button/Button";
import { TextArea } from "../../ui/atoms/TextArea/TextArea";
import { TextField } from "../../ui/atoms/TextField/TextField";
import { useAddItem } from "../../../hooks/post/useAddItem";
import usePostRepository from "../../../hooks/repositories/usePostRepository";
import { ListItems } from "../../ui/molecules/ListItems/ListItems";
import { yupResolver } from '@hookform/resolvers/yup';
import { postValidationSchema } from "./validationSchema";
import { cleanString } from "../../../helpers/cleanString";

export const Home = () => {
  const repository = usePostRepository();
  const { data: items, error, isLoading } = useItems(repository.fetchItems);
  const { register, handleSubmit, reset, formState: { errors, isValid } } = useForm({
    resolver: yupResolver(postValidationSchema ),
    mode: "onBlur"
  });
  const mutation = useAddItem(repository.addItem);


  const onSubmit: SubmitHandler<PostFormValuesType> = (data) => {
    const find = items.find(item => cleanString(item.title) === cleanString(data.title) && cleanString(item.body) === cleanString(data.body));
    if (find) {
      alert('It must add a new item that is not on the list.');
    } else {
      mutation.mutate(data);
    }
    reset();
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className='flex justify-center bg-indigo-300'>
      <div className="w-1/2">
        <h1 className="text-white font-bold text-4xl my-5">Add New Item</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <TextField<PostFormValuesType> 
            name="title"  
            register={register}  
            placeholder="Title" required
            error={errors.title?.message}
          />
          <TextArea<PostFormValuesType>  
            name="body" 
            register={register} 
            placeholder="Body" 
            error={errors.body?.message}
          />
          <Button type="submit" disabled={!isValid} >Add item</Button>
        </form>
        <hr className="mt-5" />
        <h2 className="text-white text-3xl my-5">Items List</h2>
        <ListItems items={items} />
      </div>
    </div>
  );
};