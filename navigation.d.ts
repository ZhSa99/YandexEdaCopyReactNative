import { StackRootParamList, DrawerRootParamList } from './src/navigation/types'

declare global {
  namespace ReactNavigation {
    interface RootParamList extends BottomTabRootParamList{}
    interface RootParamList extends StackRootParamList {}
  }
}