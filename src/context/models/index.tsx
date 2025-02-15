import home, {HomeModel} from './home';

export type StoreModel = {
  home: HomeModel;
};

const model: StoreModel = {
  home,
};

export default model;
