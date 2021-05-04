<template>
  <Layout>
    <Sidebar
      slot="sidebar"
      :shops="shopsList"
      @change-shop="handleChangeShop"
    />
    <RightBoard slot="rightBoard" :shop="activeShop" />
  </Layout>
</template>

<script>
import Layout from "./components/Layout.vue";
import Sidebar from "./components/Sidebar.vue";
import RightBoard from "./components/RightBoard.vue";
import axios from "axios";

export default {
  name: "App",
  components: {
    Layout,
    Sidebar,
    RightBoard
  },
  data() {
    return {
      activeShopId: null,
      shopsList: null
    };
  },
  mounted() {
    axios
      .get("http://localhost:2017/public/shops")
      .then(response => (this.shopsList = response.data.shops));
  },
  computed: {
    activeShop() {
      const fallback = {};
      if (!this.activeShopId) {
        return fallback;
      }

      return (
        this.shopsList.find(({ id }) => id === this.activeShopId) || fallback
      );
    }
  },
  methods: {
    handleChangeShop({ id }) {
      this.activeShopId = id;
    }
  }
};
</script>

<style>
body {
  margin: 0;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  font-family: "Reggae One", cursive, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #802bb1;
  background: var(--ultramarine_80);
}

:root {
  --dark_100: #2d283e; /*#0b0c10; */
  --dark_80: #802bb1;
  --gray: #802bb1;
  --ultramarine_100: #66fcf1;
  --ultramarine_80: #edf5e1;
}

html {
  height: 100%;
  /* display: flex; */
}
</style>
