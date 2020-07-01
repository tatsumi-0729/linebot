import Message from "../model/message";
import User from "../model/user";

export default class MessageRepository {
  private userList: User[] = [];
  private messageList: Message[] = [];

  public store(message: Message) {
    this.messageList.push(message);
    // 配列usersに渡されたidが存在しなければプッシュ
    if (!this.userList.find((u) => u.userId === message.user.userId)) {
      this.userList.push(message.user);
    }
  }

  public userCount(): number {
    return this.userList.length;
  }

  public messageCount(): number {
    return this.messageList.length;
  }

  public getUserList() {
    return this.userList;
  }

  public getMessageList(user: User): Message[] {
    return this.messageList.filter((m) => m.user.equals(user));
  }
}
