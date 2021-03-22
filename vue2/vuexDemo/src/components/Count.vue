<template>
  <div >
    <h1>{{ msg }}</h1>
    <hr>
    <h1>{{ $store.state.count }} --- {{count}}</h1>
    <p>
      <button @click="add(10)">add</button>
      <button @click="minus">minus</button>
    </p>
    <p>
      <button @click="addAction(10)">Action add</button>
      <button @click="minusAction">Action minus</button>
    </p>
  </div>
</template>

<script>
import store from '@/vuex/store'
import { mapState, mapMutations, mapActions } from 'vuex'
export default {
  name: 'Count',
  data () {
    return {
      msg: 'hello vuex'
    }
  },
  store,
  methods: {
    ...mapMutations(['add', 'minus']),
    ...mapActions(['addAction', 'minusAction'])
  },
  // 方法1 直接使用 computed
  // computed: {
  //   count () {
  //     return this.$store.state.count
  //   }
  // },
  // 方法2 使用mapState
  // computed: mapState({
  //   count: state => state.count
  // }),

  // 方法3 使用数组
  computed: {
    ...mapState(['count'])
    // ...mapGetters(['count']),
  }
}
</script>
