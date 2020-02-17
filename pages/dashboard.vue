<template>
  <div>
    <h2>Dashboard</h2>
    <v-row>
        <!-- default is 12, md and up will be 4 -->
        <v-col cols="12" md="4">
            <v-btn outline block class="primary">1</v-btn>
        </v-col>
        <v-col cols="12" md="4">
            <v-btn outline block class="primary">1</v-btn>
        </v-col>
        <v-col cols="12" md="4">
            <v-btn outline block class="primary">1</v-btn>
        </v-col>
    </v-row>
    <v-row>
        <!-- default is 6, sm and up will be 3 -->
        <v-col cols="6" sm="3">
            <v-btn outline block class="primary">one</v-btn>
        </v-col>
        <v-col cols="6" sm="3">
            <v-btn outline block class="primary">tow</v-btn>
        </v-col>
        <v-col cols="6" sm="3">
            <v-btn outline block class="primary">threee</v-btn>
        </v-col>
        <v-col cols="6" sm="3">
            <v-btn outline block class="primary">last one</v-btn>
        </v-col>
    </v-row>

  </div>
</template>

<script>
export default {};
</script>

<style>
</style>