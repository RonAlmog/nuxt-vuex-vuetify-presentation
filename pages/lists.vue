<template>
  <div class="x">
      <h2>Lists</h2>


    <v-list>
        <v-list-item v-for="link in links" :key="link.text" router :to="link.route">
            <v-list-item-action>
                <v-icon>{{link.icon}}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
                <v-list-item-title>{{link.text}}</v-list-item-title>
            </v-list-item-content>
        </v-list-item>
    </v-list>


  </div>
</template>

<script>
export default {
    data() {
        return {
            links: [
                {icon: 'dashboard', text: 'Dashboard', route: '/'},
                {icon: 'folder', text: 'My Projects', route: '/projects'},
                {icon: 'person', text: 'Team', route: '/team'},
            ]
        }
    }

}
</script>

<style>

</style>