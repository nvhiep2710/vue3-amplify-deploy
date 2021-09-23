<template lang="pug">
ul.pagination
  li(
    v-for='pageNumber in pagesCount',
    :key='pageNumber',
    :class='["pageItem", { active: isActive(pageNumber) }]'
  )
    a.pageLink(@click='onPageChange(pageNumber)') {{ pageNumber }}
</template>

<script>
import { computed, toRefs } from 'vue'
import { LIMIT_LIST } from '@/assets/constants'

export default {
  name: 'Pagination',
  props: {
    page: { type: Number, required: true },
    count: { type: Number, required: true },
  },
  emits: {
    'page-change': index => typeof index === 'number',
  },
  setup(props, { emit }) {
    const { count, page } = toRefs(props)
    const pagesCount = computed(() => Math.ceil(count.value / LIMIT_LIST))
    const isActive = index => page.value === index
    const onPageChange = index => emit('page-change', index)

    return {
      pagesCount,
      isActive,
      onPageChange,
    }
  },
}
</script>
<style lang="scss" scoped>
.pagination {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 20px 0 50px;

  > li.pageItem {
    list-style: none;
    padding: 5px;
    cursor: pointer;

    > a {
      &:hover {
        text-decoration: underline;
      }
    }
  }

  .active {
    font-weight: 600;
  }
}
</style>
