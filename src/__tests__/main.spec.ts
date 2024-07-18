import { configuraInterface } from "../index";
function sum(a: number, b: number): number {
  return a + b;
}
describe("sum", () => {
  it("adds 1 + 2 to equal 3", () => {
    expect(sum(1, 2)).toBe(3);
  });
});
describe("configuraInterface", () => {
  it("should be defined", () => {
    const c = new configuraInterface({
      data: [{ id: "e", text: "33" }],
      perm: ["e"],
      fileType: "ofd",
    });
    console.log(c);
    expect(configuraInterface.getButtons).toEqual([{ id: "e", name: "e", text: "33" }]);
  });
});
