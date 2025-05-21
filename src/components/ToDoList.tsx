import { useRecoilState, useRecoilValue } from "recoil";
import { categoryState, selectedCategoryState, toDoSelector } from "../atoms";
import CreateToDo from "./CreateToDo";
import CreateCategory from "./CreateCategory";
import ToDo from "./Todo";

function ToDoList() {
  const toDos = useRecoilValue(toDoSelector);
  const [categories, setCategories] = useRecoilState(categoryState);
  const [selectedCategory, setSelectedCategory] = useRecoilState(
    selectedCategoryState
  );

  const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
    setSelectedCategory(event.currentTarget.value);
  };

  return (
    <div>
      <h1>To Dos</h1>
      <hr />
      <select value={selectedCategory} onInput={onInput}>
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>
      <CreateCategory />
      <CreateToDo />
      <ul>
        {toDos.map((toDo) => (
          <ToDo key={toDo.id} {...toDo} />
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
