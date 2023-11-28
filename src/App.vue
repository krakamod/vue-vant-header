<script setup lang="ts">
const categories = Array.from({ length: 10 }, (_, i) => {
  const categoryId = i + 1;
  const items = Array.from({ length: Math.floor(Math.random() * 9) + 2 }, (_, j) => {
    return {
      id: (categoryId - 1) * 10 + j + 1,
      name: `Item ${(categoryId - 1) * 10 + j + 1}`,
    };
  });

  return {
    id: categoryId,
    name: `Category ${categoryId}`,
    items,
  };
});

const categoryIds = categories.map((category) => category.name);
</script>

<template>
  <div class="header-placeholder" />
  <main class="main">
    <van-index-bar :index-list="categoryIds" :sticky="false">
      <div v-for="category in categories" :key="category.id">
        <van-index-anchor :index="category.name">{{ category.name }}</van-index-anchor>
        <van-cell v-for="item in category.items" :key="item.id" :title="item.name" />
      </div>
    </van-index-bar>
  </main>
</template>

<style>
  :root {
    --header-height: 40px;
  }

  .header-placeholder {
    height: var(--header-height);
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background-color: var(--color-background);
    z-index: 1;
  }

  .main {
    padding-top: calc(var(--header-height) + 20px);
  }

  .van-index-bar__sidebar {
    top: 0;
    left: 0;
    flex-direction: row;
    transform: initial;
    padding: 10px 2rem;
    overflow-x: auto;
    white-space: nowrap;
  }

  .van-index-anchor {
    margin-top: calc(-1 * (var(--header-height) + 20px));
    padding-top: calc(var(--header-height) + 20px);
  }
</style>
