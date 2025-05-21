import { recoilPersist } from "recoil-persist";

export const { persistAtom } = recoilPersist({
  key: "recoilLocalStorage",
  storage: localStorage,
});
