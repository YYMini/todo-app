import { atom, selector } from "recoil";
import { persistAtom } from "./recoil-persist";

export interface IToDo {
  text: string;
  id: number;
  category: string;
}

export const toDoState = atom<IToDo[]>({
  key: "toDo",
  default: [],
  effects_UNSTABLE: [persistAtom],
});

export const categoryState = atom<string[]>({
  key: "category",
  default: ["TO_DO", "DOING", "DONE"],
  effects_UNSTABLE: [persistAtom],
});

export const selectedCategoryState = atom<string>({
  key: "selectedCategory",
  default: "TO_DO",
  effects_UNSTABLE: [persistAtom],
});

export const toDoSelector = selector({
  key: "toDoSelector",
  get: ({ get }) => {
    const toDos = get(toDoState);
    const category = get(selectedCategoryState);
    return toDos.filter((toDo) => toDo.category === category);
  },
});
