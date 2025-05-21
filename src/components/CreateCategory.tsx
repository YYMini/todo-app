// src/components/CreateCategory.tsx
import { useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import { categoryState } from "../atoms";

interface IForm {
  category: string;
}

function CreateCategory() {
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const setCategories = useSetRecoilState(categoryState);

  const onValid = ({ category }: IForm) => {
    setCategories((prev) => {
      if (prev.includes(category)) return prev;
      return [...prev, category];
    });
    setValue("category", "");
  };

  return (
    <form onSubmit={handleSubmit(onValid)}>
      <input
        {...register("category", { required: "Please enter category" })}
        placeholder="New Category"
      />
      <button>Add Category</button>
    </form>
  );
}

export default CreateCategory;
