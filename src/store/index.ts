import { createStore } from 'vuex';
import appModule from './modules/app';
import userRoutes from './modules/user/userRoutes';

const store = createStore({
  modules: {
    counter: userRoutes,
    app: appModule,
  },
});

export default store;
