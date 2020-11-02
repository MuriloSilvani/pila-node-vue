<template>
  <div>

    <div class='md-layout md-alignment-center-space-between'>
      <h1 class='md-title'> Categories </h1>
      <router-link to='/categories/new'>
        <md-button class='md-primary md-raised'>Create category</md-button>
      </router-link>
    </div>

    <md-progress-bar md-mode="indeterminate" v-if="isLoadingCategory" />
    <md-table
      v-if='categories.length > 0'
      v-model='categories'
      md-sort='_id'
      md-sort-order='asc'
      md-fixed-header
      md-card
      style='margin: 0'
    >

      <md-table-row
        slot='md-table-row'
        slot-scope='{ item }'
      >

        <md-table-cell
          md-label='Name'
          md-sort-by='name'
        >
          {{ item.name }}
        </md-table-cell>

        <md-table-cell
          md-label='ID'
          md-sort-by='_id'
          md-numeric
        >
          {{ item._id }}
        </md-table-cell>

        <md-table-cell
          style='width: 10px'
        >
          <md-button @click="confirmEdit(item._id)" class="md-icon-button md-dense md-raised">
            <md-icon>edit</md-icon>
          </md-button>
        </md-table-cell>

        <md-table-cell
          style='width: 10px'
        >
          <md-button @click="confirmDelete(item._id)" class="md-icon-button md-dense md-raised">
            <md-icon>delete</md-icon>
          </md-button>
        </md-table-cell>

      </md-table-row>
    </md-table>

    <md-empty-state
      v-if='categories.length <= 0'
      md-rounded
      md-icon='devices_other'
      md-label='Create your first category'
    >
      <router-link to='/categories/new'>
        <md-button class='md-primary md-raised'>Create first category</md-button>
      </router-link>
    </md-empty-state>

    <md-dialog-confirm
      :md-active.sync="dialogDelete"
      md-title="Delete category?"
      md-confirm-text="Confirm"
      md-cancel-text="Cancel"
      @md-cancel='dialogDelete = false'
      @md-confirm="destroyCategories(id)" />

  </div>
</template>

<script>
import categoriesMixin from '@/mixins/categoriesMixin'

export default {
  name: 'Categories',
  mixins: [categoriesMixin],
  data () {
    return {
      dialogDelete: false,
      dialogEdit: false,
      id: null
    }
  },
  computed: {
    categories: {
      get () {
        return this.getCategories
      },
      set () {
      }
    }
  },
  methods: {
    confirmEdit (_id) {
      this.id = _id
      alert('wip')
    },
    confirmDelete (_id) {
      this.id = _id
      this.dialogDelete = true
    }
  }
}
</script>
