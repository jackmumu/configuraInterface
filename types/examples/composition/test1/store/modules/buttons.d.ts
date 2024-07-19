declare const _default: {
    namespaced: boolean;
    state: () => {
        buttons: never[];
    };
    getters: {
        buttons: (state: any) => any;
    };
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
