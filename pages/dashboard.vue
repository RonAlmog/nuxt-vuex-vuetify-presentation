<template>
  <v-content>
    <h2>Dashboard</h2>

    <v-row class="mb-3">
      <v-tooltip top>
        <template v-slot:activator="{ on }">
          <v-btn small flat color="grey" @click="sortBy('title')" v-on="on">
            <v-icon left small>folder</v-icon>
            <span class="caption lower-case">By project name</span>
          </v-btn>
        </template>
        <span>Sort by project name or something like that</span>
      </v-tooltip>

      <v-tooltip top>
        <template v-slot:activator="{ on }">
          <v-btn small flat color="grey" @click="sortBy('person')" v-on="on">
            <v-icon left small>person</v-icon>
            <span class="caption lower-case">By person</span>
          </v-btn>
        </template>
        <span>Sort by person name</span>
      </v-tooltip>
    </v-row>
    <v-card flat class v-for="project in projects" :key="project.title">
      <v-row :class="`pa-3 project ${project.status}`">
        <v-col cols="12" md="6">
          <div class="caption grey--text">Project Title</div>
          <div>{{project.title}}</div>
        </v-col>
        <v-col cols="6" sm="4" md="2">
          <div class="caption grey--text">Person</div>
          <div>{{project.person}}</div>
        </v-col>
        <v-col cols="6" sm="4" md="2">
          <div class="caption grey--text">Due By</div>
          <div>{{project.due}}</div>
        </v-col>
        <v-col cols="2" sm="4" md="2" class="right">
          <div>
            <v-chip
              small
              :class="`${project.status} v-chip--active white--text caption my-2`"
            >{{project.status}}</v-chip>
          </div>
        </v-col>
      </v-row>
      <v-divider></v-divider>
    </v-card>
  </v-content>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        {
          title: "Design a new website",
          person: "The Net Ninja",
          due: "1st Jan 2019",
          status: "ongoing",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!"
        },
        {
          title: "Code up the homepage",
          person: "Chun Li",
          due: "10th Jan 2019",
          status: "complete",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!"
        },
        {
          title: "Design video thumbnails",
          person: "Ryu",
          due: "20th Dec 2018",
          status: "complete",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!"
        },
        {
          title: "Create a community forum",
          person: "Gouken",
          due: "20th Oct 2018",
          status: "overdue",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!"
        }
      ]
    };
  },
  methods: {
    sortBy(prop) {
      this.projects.sort((a, b) => (a[prop] < b[prop] ? -1 : 1));
    }
  }
};
</script>

<style>
.project.complete {
  border-left: 6px solid #3cd1c2;
}
.project.ongoing {
  border-left: 6px solid orange;
}
.project.overdue {
  border-left: 6px solid tomato;
}
.v-chip.complete {
  background: #3cd1c2;
}
.v-chip.ongoing {
  background: #ffaa2c;
}
.v-chip.overdue {
  background: #f83e70;
}
</style>