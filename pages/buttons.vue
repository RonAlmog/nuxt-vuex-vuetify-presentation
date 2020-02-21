<template>
  <div>
  <H1>Buttons</H1>
    <v-btn>Click Me</v-btn>
    <v-btn class="pink white--text">Click Me pink</v-btn>
    <v-btn color="pink" dark>Click Me again</v-btn>
    <v-btn color="pink" dark depressed>I'm depressed</v-btn>
    <v-btn text color="pink">I am flat / Text</v-btn>
    <br><br>
    <v-btn color="pink" dark>
        <v-icon left>email</v-icon>
        Email me
    </v-btn>
    <v-btn color="pink" dark>
        Find me
        <v-icon right>room</v-icon>
    </v-btn>
    <br>
    https://material.io/resources/icons/?style=baseline

   <br><br>
   <v-btn color="pink" small dark>
        <span>Find small</span>
        <v-icon right small>room</v-icon>
    </v-btn>

   <br><br>
   <v-btn color="pink" large dark>
        <span>Large email</span>
        <v-icon right large>email</v-icon>
    </v-btn>

    <br><br>
   <v-btn fab depressed color="purple" small dark>
        <v-icon>favorite</v-icon>
    </v-btn>



  </div>





</template>

<script>
export default {

}
</script>

<style>

</style>