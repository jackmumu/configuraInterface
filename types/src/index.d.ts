import type { options, Button } from "./types";
export declare class configuraInterface {
    static data: any;
    static allBtn: any;
    constructor(options: options);
    get getButtons(): any;
    traverseDeepButton: (data: Array<Button>, perm: Array<string>, fileType: string) => void;
    removeHide: (buttons: Array<Button>) => Array<Button>;
    /**
     * 修改按钮的状态
     * @param btn
     */
    emitModifyButton: (btn: Button) => void;
    setStoreButtons: () => void;
    traverseDeep: (id: string, data: Array<Button>, attr: Button) => void;
}
