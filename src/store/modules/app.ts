import { Module } from "vuex";
import { toastController } from '@ionic/vue';

interface AppState {
  showToast: boolean,
  toastMessage: string
}

interface toastParams {
  message: string,
  color: string
}

const appModule: Module<AppState, any> = {
  namespaced: true,
  state: {
    showToast: true,
    toastMessage: 'tetet'
  },
  mutations: {
    showToast(state: AppState, message: string) {
      state.toastMessage = message;
      state.showToast = true;
    },
    hideToast(state: AppState) {
      state.toastMessage = '';
      state.showToast = false;
    },
    async setToast (state: AppState, options: toastParams) {
      const toast = await toastController.create({
        message: options.message,
        duration: 1500,
        position: 'top',
        color: options.color
      });

      await toast.present();
    }
  },
  actions: {
    showToast({ commit }, options: toastParams) {
      commit('setToast', options)
    }
  }
};

export default appModule;