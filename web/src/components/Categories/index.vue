<template>
  <div>

    <div class="md-layout md-alignment-center-space-between">
      <h1 class="md-title">Categories</h1>
      <router-link to='/categories/new'>
        <md-button class="md-primary md-raised">Create category</md-button>
      </router-link>
    </div>

    <md-table
      v-if="categories.length > 0"
      v-model="categories"
      md-sort="name"
      md-sort-order="asc"
      md-fixed-header
      md-card
    >

      <md-table-row
        slot="md-table-row"
        slot-scope="{ item }"
      >

        <md-table-cell
          md-label="Name"
          md-sort-by="name"
        >
          {{ item.name }}
        </md-table-cell>

        <md-table-cell
          md-label="ID"
          md-sort-by="id"
          md-numeric
        >
          {{ item._id }}
        </md-table-cell>

      </md-table-row>
    </md-table>

    <md-empty-state
      v-if="categories.length <= 0"
      md-rounded
      md-icon="devices_other"
      md-label="Create your first category"
    >
      <router-link to='/categories/new'>
        <md-button class="md-primary md-raised">Create first category</md-button>
      </router-link>
    </md-empty-state>

  </div>
</template>

<script>
import categoriesMixin from '@/mixins/categoriesMixin'

export default {
  name: 'Categories',
  mixins: [categoriesMixin],
  computed: {
    categories: {
      get () {
        return this.getCategories
      },
      set () {
      }
    }
  }
}
</script>
