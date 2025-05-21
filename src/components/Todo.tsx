import { useSetRecoilState } from "recoil";
import { IToDo, toDoState } from "../atoms";

function ToDo({ text, category, id }: IToDo) {
  const setToDos = useSetRecoilState(toDoState);

  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = event;
    setToDos((oldToDos) => {
      const targetIndex = oldToDos.findIndex((toDo) => toDo.id === id);
      const newToDo = { text, id, category: name };
      return [
        ...oldToDos.slice(0, targetIndex),
        newToDo,
        ...oldToDos.slice(targetIndex + 1),
      ];
    });
  };

  // unique category buttons excluding current
  const categories = ["TO_DO", "DOING", "DONE"].filter((c) => c !== category);

  return (
    <li>
      <span>{text}</span>
      {categories.map((c) => (
        <button key={c} name={c} onClick={onClick}>
          {c}
        </button>
      ))}
    </li>
  );
}

export default ToDo;
