import { mapActions, mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'getCategories',
      'getIdCategory',
      'getCategory',
      'isLoadingCategory'
    ])
  },
  methods: {
    ...mapActions([
      'indexCategories',
      'storeCategories',
      'showCategories',
      'updateCategories',
      'destroyCategories'
    ])
  },
  mounted () {
    this.indexCategories()
  }
}
