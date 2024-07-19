import type { options, Button } from "./types";
export declare class configuraInterface {
    static data: any;
    static allBtn: any;
    constructor(options: options);
    static get getButtons(): any;
    static traverseDeepButton: (data: Array<Button>, perm: Array<string>, fileType: string) => void;
    static removeHide: (buttons: Array<Button>) => Array<Button>;
    /**
     * 修改按钮的状态
     * @param btn
     */
    static emitModifyButton: (btn: Button) => void;
    static setStoreButtons: () => void;
    static traverseDeep: (id: string, data: Array<Button>, attr: Button) => void;
    static hide(id: string): any;
    static show(id: string): any;
    static disabled(id: string): any;
    static undisabled(id: string): any;
}
