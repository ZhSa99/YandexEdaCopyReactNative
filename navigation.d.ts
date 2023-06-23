import { BottomTabRootParamList } from "./src/navigation/types";

declare global {
  namespace ReactNavigation {
    interface RootParamList extends BottomTabRootParamList{}
  }
}