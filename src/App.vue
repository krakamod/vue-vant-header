<script setup lang="ts">
const categories = [{
  id: 1,
  name: 'Category 1',
  items: [{
    id: 1,
    name: 'Item 1',
  }, {
    id: 2,
    name: 'Item 2',
  }],
}, {
  id: 2,
  name: 'Category 2',
  items: [{
    id: 3,
    name: 'Item 3',
  }, {
    id: 4,
    name: 'Item 4',
  }],
}, {
  id: 3,
  name: 'Category 3',
  items: [{
    id: 5,
    name: 'Item 5',
  }, {
    id: 6,
    name: 'Item 6',
  }],
}, {
  id: 4,
  name: 'Category 4',
  items: [{
    id: 7,
    name: 'Item 7',
  }, {
    id: 8,
    name: 'Item 8',
  }],
}, {
  id: 5,
  name: 'Category 5',
  items: [{
    id: 9,
    name: 'Item 9',
  }, {
    id: 10,
    name: 'Item 10',
  }],
}, {
  id: 6,
  name: 'Category 6',
  items: [{
    id: 11,
    name: 'Item 11',
  }, {
    id: 12,
    name: 'Item 12',
  }],
}, {
  id: 7,
  name: 'Category 7',
  items: [{
    id: 13,
    name: 'Item 13',
  }, {
    id: 14,
    name: 'Item 14',
  }],
}, {
  id: 8,
  name: 'Category 8',
  items: [{
    id: 15,
    name: 'Item 15',
  }, {
    id: 16,
    name: 'Item 16',
  }],
}, {
  id: 9,
  name: 'Category 9',
  items: [{
    id: 17,
    name: 'Item 17',
  }, {
    id: 18,
    name: 'Item 18',
  }],
}, {
  id: 10,
  name: 'Category 10',
  items: [{
    id: 19,
    name: 'Item 19',
  }, {
    id: 20,
    name: 'Item 20',
  }],
}];

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
