<template>
  <v-app>
    <v-snackbar v-model="snackbar" :timeout="4000" top color="success">
      <span>Awsome, new project!!!</span>
      <v-btn text color="white" @click="snackbar=false">Close</v-btn>
    </v-snackbar>
    <v-navigation-drawer v-model="drawer" :mini-variant="miniVariant" :clipped="clipped" fixed app>
      <v-list>
        <v-list-item v-for="(item, i) in items" :key="i" :to="item.to" router exact>
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-row>
        <v-col cols="12" class="text-center my-3">
          <Popup @projectAdded="snackbar=true"></Popup>
        </v-col>
      </v-row>
      

    </v-navigation-drawer>
    <v-app-bar :clipped-left="clipped" fixed app dense class="indigo">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-btn icon @click.stop="miniVariant = !miniVariant">
        <v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
      </v-btn>
      <v-btn icon @click.stop="clipped = !clipped">
        <v-icon>mdi-application</v-icon>
      </v-btn>
      <v-btn icon @click.stop="fixed = !fixed">
        <v-icon>mdi-minus</v-icon>
      </v-btn>
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <v-btn icon @click.stop="rightDrawer = !rightDrawer">
        <v-icon>mdi-menu</v-icon>
      </v-btn>

      <v-menu>
        <template v-slot:activator="{ on }">
          <v-btn color="primary" dark text v-on="on">
            <v-icon left>expand_more</v-icon>
             <span>Dropdown</span>
            </v-btn>
        </template>
        <v-list>
          <v-list-item @click="dothis">
            <v-list-item-title>Option 1</v-list-item-title>
          </v-list-item>
          <v-list-item @click="dothis">
            <v-list-item-title>Option 2</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>

    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <v-navigation-drawer v-model="rightDrawer" :right="right" temporary fixed>
      <v-list>
        <v-list-item @click.native="right = !right">
          <v-list-item-action>
            <v-icon light>mdi-repeat</v-icon>
          </v-list-item-action>
          <v-list-item-title>Switch drawer (click me)</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-footer :fixed="fixed" app>
      <span>&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
import Popup from '@/components/Popup';
export default {
  components: {
    Popup
  },
  methods: {
    dothis() {
      // do nothing
    }
  },
  data() {
    return {
      snackbar: false,
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: "mdi-apps",
          title: "Welcome",
          to: "/"
        },
        {
          icon: "storefront",
          title: "Inspire",
          to: "/inspire"
        },
        {
          icon: "cake",
          title: "Text",
          to: "/text"
        },
        {
          icon: "check_box",
          title: "Buttons",
          to: "/buttons"
        },
        {
          icon: "sports",
          title: "Breakpoints",
          to: "/breakpoints"
        },
        {
          icon: "sync_alt",
          title: "Navbars",
          to: "/navbars"
        },
        {
          icon: "domain",
          title: "Grid",
          to: "/grid"
        },
        {
          icon: "list",
          title: "Lists",
          to: "/lists"
        },
        {
          icon: "face",
          title: "About",
          to: "/about"
        },
        {
          icon: "dashboard",
          title: "Dashboard",
          to: "/dashboard"
        },
        {
          icon: "traffic",
          title: "Team",
          to: "/team"
        },
        {
          icon: "my_location",
          title: "Projects",
          to: "/projects"
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: "Vuetify.js"
    };
  }
};
</script>
