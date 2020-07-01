import axios from "axios";
import { AxiosRequestConfig } from "axios";
import qs from "qs";

export default class LineAccessToke {
  private accessToken: string | null = null;

  public nullTest() {
    return null;
  }

  public get() {
    return this.accessToken;
  }

  public async axiosPost() {
    this.accessToken = "";
    const credentials = {
      client_id: process.env.CHANNEL_ID,
      client_secret: process.env.CHANNEL_SECRET,
      grant_type: "client_credentials",
    };

    // 型定義をしないとmethodの型相違でエラーになる
    const param: AxiosRequestConfig = {
      data: qs.stringify(credentials),
      method: "post",
      url: "https://api.line.me/v2/oauth/accessToken",
    };

    const res = await axios(param);
    const at = res.data.access_token;
    this.accessToken = at;
    console.log(res.data.sccess_token);
    return at;
  }
}
