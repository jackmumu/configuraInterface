import { configuraInterface } from "../index";

describe("configuraInterface", () => {
  it("should be defined", () => {
    new configuraInterface({
      data: [{ id: "download", text: "下载" }],
      perm: ["download"],
      fileType: "ofd",
    });
    expect(configuraInterface.getButtons).toEqual([
      { id: "download", name: "download", text: "下载" },
    ]);
    configuraInterface.hide("download");
    expect(configuraInterface.getButtons).toEqual([]);
    configuraInterface.show("download");
    expect(configuraInterface.getButtons).toEqual([
      { id: "download", name: "download", text: "下载", hide: false },
    ]);
    configuraInterface.disabled("download");
    expect(configuraInterface.getButtons).toEqual([
      {
        id: "download",
        name: "download",
        text: "下载",
        disabled: true,
        hide: false,
      },
    ]);
  });
});
