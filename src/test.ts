import { configuraInterface } from "./index";
const c = new configuraInterface({
  data: [{ id: "e", text: "33" }],
  perm: ["e"],
  fileType: "ofd",
});
console.log(c);
expect(configuraInterface.getButtons).toBe([{ id: "e", text: "33" }]);
