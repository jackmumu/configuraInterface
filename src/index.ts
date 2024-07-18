import type { options, Button } from "./types";
import { isSubset } from "./util";
export class configuraInterface {
  static data: any;
  static allBtn: any;
  constructor(options: options) {
    const { data, perm, fileType } = options;
    configuraInterface.traverseDeepButton(data, perm, fileType);
    configuraInterface.data = configuraInterface.removeHide(
      configuraInterface.data
    );
  }
  static get getButtons() {
    return configuraInterface.data;
  }
  static traverseDeepButton = (
    data: Array<Button>,
    perm: Array<string>,
    fileType: string
  ) => {
    data.forEach((item: Button, i: number) => {
      if (item.children) {
        this.traverseDeepButton(item.children, perm, fileType);
      }
      if (item.permMark && !isSubset(item.permMark, perm)) {
        item.hide = true;
      }
      if (fileType && item.viewType && !item.viewType.includes(fileType)) {
        delete data[i];
      }
      !item.name && (item.name = item.id);
    });
    configuraInterface.data = data;
    // 目的是为了得到一个备份，隐藏按钮后，store中buttons已经没有这个按钮，从备份allBtn中得到按钮显示出来
    configuraInterface.allBtn = JSON.parse(JSON.stringify(data));
  };
  static removeHide = (buttons: Array<Button>): Array<Button> => {
    return buttons.filter((btn: Button) => {
      if (!btn) return;
      if (btn.children) {
        btn.children = this.removeHide(btn.children);
      }
      if (!btn.hide) {
        return btn;
      }
    });
  };
  /**
   * 修改按钮的状态
   * @param btn
   */
  static emitModifyButton = (btn: Button) => {
    const id = btn.id;
    this.traverseDeep(id, configuraInterface.allBtn, btn);
    this.setStoreButtons();
  };
  static setStoreButtons = () => {
    // 不要直接操作allBtn,隐藏的元素会被删除
    const _allBtn = JSON.parse(JSON.stringify(configuraInterface.allBtn));
    configuraInterface.data = this.removeHide(_allBtn);
  };
  static traverseDeep = (id: string, data: Array<Button>, attr: Button) => {
    data.forEach((item: Button) => {
      if (!item) return;
      if (item.id === id) {
        // 不合并children属性
        let attrWithoutChildren = { ...attr };
        delete attrWithoutChildren.children;
        Object.assign(item, attrWithoutChildren);
      }
      if (item.children) {
        this.traverseDeep(id, item.children, attr);
      }
    });
  };
  static hide(id: string) {
    configuraInterface.emitModifyButton({ id: id, hide: true });
    return configuraInterface.getButtons;
  }
  static show(id: string) {
    configuraInterface.emitModifyButton({ id: id, hide: false });
    return configuraInterface.getButtons;
  }
  static disabled(id: string) {
    configuraInterface.emitModifyButton({ id: id, disabled: true });
    return configuraInterface.getButtons;
  }
  static undisabled(id: string) {
    configuraInterface.emitModifyButton({ id: id, disabled: false });
    return configuraInterface.getButtons;
  }
}
