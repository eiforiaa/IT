<template>
  <div class="sidebar">
    <SidebarRow
      v-for="(shop, index) in shops"
      :key="shop.id"
      :id="shop.id"
      :row-number="index + 1"
      :title="shop.objectName"
      @change-shop="$emit('change-shop', $event)"
    />
  </div>
</template>

<script>
import SidebarRow from "./SidebarRow.vue";

export default {
  name: "Sidebar",
  components: {
    SidebarRow
  },
  props: {
    shops: {
      type: Array,
      required: true
    }
  }
};
</script>

<style scoped>
.sidebar {
  overflow-y: auto;
  height: 100%;
  background: var(--dark_100);
  border-right: 1px solid var(--ultramarine_80);
}
</style>
