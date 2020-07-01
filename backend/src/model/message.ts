import User from "./user";

export default class message {
  public user: User;
  public timestamp: number = 0;
  public text: string;

  constructor(user: User, text: string) {
    this.user = user;
    this.text = text;
  }
}
