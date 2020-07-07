<template>
  <v-content>
    <v-container v-for="type in types" :key="type" class="grey lighten-4" fluid>
      <v-subheader>{{ type }}</v-subheader>

      <v-row>
        <v-spacer></v-spacer>
        <v-col v-for="user in users" :key="user.id" cols="12" sm="12" md="12">
          <v-card hover shaped class="ma-2" height>
            <v-card-title>
              <v-list-item class="grow">
                <v-list-item-avatar color="grey darken-3">
                  <v-img class="elevation-6" :src="user.image"></v-img>
                </v-list-item-avatar>
                <v-list-item-title>{{ user.name }}</v-list-item-title>
              </v-list-item>
              <v-card-text>{{ user.latestMessage }}</v-card-text>
              <v-card-text>{{ user.since }}</v-card-text>
            </v-card-title>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-content>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import * as moment from "moment";

class User {
  public id = 1;
  public name = "Evan You";
  public latestMessage = "最新メッセージです。";
  public image =
    "https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light";
  public timeStamp = new Date();
  public since() {
    return moment(this.timeStamp).fromNow();
  }
}

@Component
export default class ShowAll extends Vue {
  public types: string[] = ["トーク一覧"];
  public cards: string[] = ["Good", "Best", "Finest", "Good", "Best", "Finest"];
  public users: User[] = [
    new User(),
    new User(),
    new User(),
    new User(),
    new User(),
    new User(),
  ];
  // ハッシュの書き方
  public socials: Array<{ [key: string]: string }> = [
    {
      icon: "mdi-facebook",
      color: "indigo",
    },
    {
      icon: "mdi-linkedin",
      color: "cyan darken-1",
    },
    {
      icon: "mdi-instagram",
      color: "red lighten-3",
    },
  ];

  public getImage(): number {
    const min = 550;
    const max = 560;

    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  // public newUser() {
  //   for (let i = 0; i < this.cards.length; i++) {
  //     return this.users.push(new User());
  //   }
  // }
}
</script>
