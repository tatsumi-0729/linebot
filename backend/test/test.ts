import { assert } from "chai";
import { describe, it } from "mocha";
import LineAccessToken from "../src/entity/line_access_token";

import * as dotenv from "dotenv";
dotenv.config();

describe("line_access_test", () => {
  it("null_test", () => {
    const lineAccessToken = new LineAccessToken();
    assert.isNull(lineAccessToken.nullTest());
  });
});

describe("line_access_test", () => {
  it("env", () => {
    assert.isTrue(process.env.CHANNEL_ID !== null);
    assert.isTrue(process.env.CHANNEL_SECRET !== null);
  });
  it("get_test", async () => {
    const lineAccessToken = new LineAccessToken();
    assert.isNull(lineAccessToken.get());
    assert.isNotNull(await lineAccessToken.axiosPost());
    assert.isNotNull(lineAccessToken.get());
  });
});
