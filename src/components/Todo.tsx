import { useSetRecoilState, useRecoilValue } from "recoil";
import { IToDo, toDoState, categoryState } from "../atoms";

function ToDo({ text, category, id }: IToDo) {
  const setToDos = useSetRecoilState(toDoState);
  const allCategories = useRecoilValue(categoryState);

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

  return (
    <li>
      <span>{text}</span>
      {allCategories
        .filter((cat) => cat !== category)
        .map((cat) => (
          <button key={cat} name={cat} onClick={onClick}>
            {cat}
          </button>
        ))}
    </li>
  );
}

export default ToDo;
