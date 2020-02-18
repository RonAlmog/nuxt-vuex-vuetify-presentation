<template>
  <div>
    <h2>Team</h2>

    <v-row>
      <v-col cols="12" sm="6" md="4" lg="3" v-for="person in team" :key="person.name">
        <v-card tile class="text-center ma-1">
          <v-responsive class="pt-4">
            <v-avatar size="100" class="grey lighten-2">
              <!-- <img :src="person.avatar"> -->
              <img src="~/assets/images/avatar-1.png">
            </v-avatar>
          </v-responsive>
          <v-card-text>
            <div class="subheading">
              {{person.name}}
            </div>
            <div class="grey--text">
              {{person.role}}
            </div>
          </v-card-text>
          <v-card-actions>
            <v-btn text color="grey">
              <v-icon left small>message</v-icon>
              <span>Message</span>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      team: [
        { name: "The Net Ninja", role: "Web developer", avatar: '~/assets/images/avatar-1.png' },
        { name: "Ryu", role: "Graphic designer" , avatar: '~/assets/images/avatar-2.png'},
        { name: "Chun Li", role: "Web developer", avatar: '~/assets/images/avatar-3.png' },
        { name: "Gouken", role: "Social media maverick", avatar: '~/assets/images/avatar-4.png' },
        { name: "Yoshi", role: "Sales guru", avatar: '~/assets/images/about.jpg' }
      ]
    };
  }
};
</script>

<style>
</style>