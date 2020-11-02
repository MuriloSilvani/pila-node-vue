import { mapActions, mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'getLaunches',
      'getIdLaunch',
      'getLaunch',
      'isLoadingLaunch'
    ])
  },
  methods: {
    ...mapActions([
      'indexLaunches',
      'storeLaunches',
      'showLaunches',
      'updateLaunches',
      'destroyLaunches'
    ])
  },
  mounted () {
    this.indexLaunches()
  }
}
