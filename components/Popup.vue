<template>
  <v-dialog max-width="600px">
    <template v-slot:activator="{ on }">
      <v-btn text class="success" v-on="on">Add new project</v-btn>
    </template>
    <v-card>
      <v-card-title>
        <h2>Add new Project</h2>
      </v-card-title>
      <v-card-text>
        <v-form class="px-3" ref="myform">
          <v-text-field label="Title" v-model="title" prepend-icon="folder" :rules="inputRules" validate-on-blur></v-text-field>
          <v-textarea label="Content" v-model="content" prepend-icon="edit" :rules="inputRules"></v-textarea>

          <v-menu
            v-model="menucal"
            :close-on-content-click="false"
            :nudge-right="40"
            transition="scale-transition"
            offset-y
            min-width="290px"
          >
            <template v-slot:activator="{ on }">
              <v-text-field v-model="due" label="Due Date" prepend-icon="event" readonly v-on="on" :rules="inputRules"></v-text-field>
            </template>
            <v-date-picker v-model="due" @input="menucal = false"></v-date-picker>
          </v-menu>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn class="success" text @click="submitForm">Add Project</v-btn>
          </v-card-actions>
        </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import format from 'date-fns/format'
export default {
  data() {
    return {
      menucal: false,
      title: "",
      content: "",
      due: null,
      inputRules: [
          v => v.length > 3 || 'Min length should be 3'
      ]
    };
  },
  methods: {
    submitForm() {
        if (this.$refs.myform.validate()){
            console.log('Submit', this.title)
        }
    }
  },
  computed: {
      formattedDate() {
          return this.due ? format(this.due, 'DD MMM YYYY')  : '';
      }
  }
};
</script>

<style>
</style>