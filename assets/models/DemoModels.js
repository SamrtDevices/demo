import Beatle from 'beatle';

export default {
    store: {
        demoList: undefined,
    },
    actions: {
        getDemoList: {
            exec: () => {
                return Beatle.getApp('app').ajax.get(window.CONFIG.prefix + '/api/proxy/retdata');
            },
            callback: (nextStore, payload) => {
                nextStore.demoList = payload.data;
            }
        }
    }
}