<template>
  <div class="right-board">
    <div v-if="!isShopEmpty">
      <div>Id: {{ shop.id }}</div>
      <div>Название: {{ shop.objectName }}</div>
      <div>Адрес: {{ shop.address }}</div>
      <div>Адрес регистрации: {{ shop.legalAddress }}</div>
      <div>Округ: {{ shop.admArea }}</div>
      <div>Тип проверки: {{ shop.jobType }}</div>
      <div>Почта: {{ shop.email }}</div>
      <div>
        Название проверяющей организации: {{ shop.nameOfLicensingAuthority }}
      </div>
    </div>
    <div v-else class="right-board__no-selected">
      Выберите место для проверки лицензии алкоголя
    </div>
  </div>
</template>

<script>
export default {
  name: "RightBoard",
  props: {
    shop: {
      type: Object,
      required: true
    }
  },
  computed: {
    isShopEmpty() {
      return Object.keys(this.shop).length === 0;
    }
  },
  methods: {
    yesNo(value) {
      if (value) {
        return "+";
      } else {
        return "-";
      }
    }
  }
};
</script>

<style scoped>
.right-board {
  font-size: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: var(--dark_100);
}

.right-board .right-board__no-selected {
  font-size: 26px;
  text-align: center;
}
</style>
