import { assert } from "chai";
import { describe, it } from "mocha";

import Message from "../../src/model/message";
import User from "../../src/model/user";
import MessageRepository from "../../src/repository/messageRepository";

describe("message_test", () => {
  it("store", () => {
    const user = new User("7");
    const message = new Message(user, "Hello!!");

    const mr = new MessageRepository();
    mr.store(message);

    assert.equal(1, mr.userCount());
    assert.equal(1, mr.messageCount());

    const message2 = new Message(user, "Hello!!");

    mr.store(message2);

    assert.equal(1, mr.userCount());
    assert.equal(2, mr.messageCount());
  });

  it("user", () => {
    const user1 = new User("1");
    const user2 = new User("2");

    const mr = new MessageRepository();
    mr.store(new Message(user1, "text1"));
    mr.store(new Message(user2, "text2"));

    assert.equal(2, mr.getUserList().length);
  });

  it("userList", () => {
    const user1 = new User("1");
    const user2 = new User("2");

    const mr = new MessageRepository();
    mr.store(new Message(user1, "text1"));
    mr.store(new Message(user2, "text2"));
    mr.store(new Message(user1, "text3"));

    assert.equal(2, mr.getMessageList(user1).length);
    assert.equal(1, mr.getMessageList(user2).length);
  });
});
