<template>
  <div>
    <appSubheader title="Works" :bcItem="bcItems">
      <div
        v-if="filterItems"
        class="flex items-center justify-center gap-[3.5rem] mt-[10rem]"
      >
        <div
          @click="filter('')"
          class="text-base text-primaryLight pb-[2rem] uppercase relative after:absolute after:left-[50%] after:translate-x-[-50%] after:bottom-0 after:w-[140%] after:h-[0.6rem] after:rounded-tl-[0.5rem] after:rounded-tr-[0.5rem] active:after:bg-primary"
        >
          All
        </div>
        <div
          v-for="(item, index) in filterItems"
          :key="index"
          @click="filter(item.name)"
          class="text-base text-primaryLight pb-[2rem] uppercase relative after:absolute after:left-[50%] after:translate-x-[-50%] after:bottom-0 after:w-[140%] after:h-[0.6rem] after:rounded-tl-[0.5rem] after:rounded-tr-[0.5rem] active:after:bg-primary"
        >
          <svg-icon v-if="item.icon" :name="item.icon" class="mr-[1rem]" />
          {{ item.name }}
        </div>
      </div>
    </appSubheader>
    <div class="container">
      <div v-if="filteredItems.length < 1" class="text-center">
        There is no works...
      </div>
    </div>
    <TransitionGroup
      v-if="filteredItems.length"
      tag="div"
      name="fade"
      class="container my-[10rem] grid grid-cols-2 gap-[10rem]"
    >
      <work-card
        v-for="(work, index) in filteredItems"
        :key="index"
        :workData="work"
        :class="work.tag"
      >
        {{ work }}
      </work-card>
    </TransitionGroup>
  </div>
</template>

<script>
import AppSubheader from '@/components/common/appSubheader.vue'
import WorkCard from '~/components/workCard.vue'
export default {
  components: {
    AppSubheader,
    WorkCard,
  },
  async asyncData({ store }) {
    return {
      workDatas: await store.state.works,
    }
  },

  data() {
    return {
      // workDatas: [],
      bcItems: [{ name: 'Home' }],
      filterItems: [
        { name: 'UI/UX Design' },
        { name: 'UI Development' },
        { name: 'Frontend Development' },
        { name: 'Awards', icon: 'iconAward' },
      ],
      selectedFilter: '',
    }
  },
  computed: {
    filteredItems: function () {
      const filter = this.selectedFilter
      return this.workDatas.filter(function (item) {
        return item.tag.includes(filter)
      })
    },
  },
  mounted() {},
  methods: {
    filter: function (tag) {
      this.selectedFilter = tag
    },
  },
}
</script>

<style lang="scss" scoped>
.fade-move,
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
}

.fade-enter-from {
  opacity: 0;
  transform: scaleY(0.01) translate(30px, 0);
}
.fade-leave-to {
  opacity: 0;
  transform: scaleY(0.01) translate(30px, 0);
}

.fade-leave-active {
  position: absolute;
}
</style>
