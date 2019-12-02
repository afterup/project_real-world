<template>
  <div class="base-button">
    <button class="btn">
      <slot name="btn-name"></slot>
    </button>
  </div>
</template>

<style scoped>
.btn {
  border-radius: 20px;
  background-color: rgb(186, 210, 231);
}

.btn:hover {
  background-color: rgb(169, 180, 211);
  transform: scaleX(1px);
}
</style>
