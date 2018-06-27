<template>
  <div class="layout">
    <div class="layout-t">
      <div class="layout-main">
        <v-header></v-header>
        <router-view/>
      </div>
    </div>
    <!-- <div class="layout-b">
      <v-Footer></v-Footer>
    </div> -->
  </div>
</template>

<script>
import Header from './common/Header/Header';
import Footer from './common/Footer/Footer'
export default {
  name: 'App',
  components:{
    'v-header':Header,
    'v-Footer':Footer
  }
}
</script>

<style>

</style>
