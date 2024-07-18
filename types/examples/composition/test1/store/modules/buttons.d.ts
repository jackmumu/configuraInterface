declare const _default: {
    namespaced: boolean;
    state: () => {
        buttons: {
            buttons: never[];
        };
    };
    getters: {};
    actions: {
        getButtons: ({ commit }: {
            commit: any;
        }) => Promise<void>;
    };
    mutations: {
        buttons(state: any, buttons: any): void;
    };
};
export default _default;
