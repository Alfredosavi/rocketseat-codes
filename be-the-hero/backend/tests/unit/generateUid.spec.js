const generateUid = require("../../src/utils/generateUid");

describe("Generate Unique ID", () => {
  it("should generate an Unique ID", () => {
    const id = generateUid();

    expect(id).toHaveLength(8);
  });
});
