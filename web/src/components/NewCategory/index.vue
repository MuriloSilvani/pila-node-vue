<template>
  <div>

    <div class="md-layout md-alignment-center-space-between">
      <h1 class="md-title">New Category</h1>
      <router-link to='/categories'>
        <md-button class="md-raised">Go back</md-button>
      </router-link>
    </div>

    <md-progress-bar md-mode="indeterminate" v-if="isLoadingCategory" />
    <form novalidate class="md-layout" @submit.prevent='validateCategory'>

      <md-card class="md-layout-item md-size-100">
        <div style="padding: 25px">

          <md-field
            :class='[{ "md-invalid": $v.form.name.$invalid && $v.form.name.$dirty }]'
          >
            <label>Name</label>
            <md-input
              v-model="form.name"
              required
              :disabled="isLoadingCategory"
            />
            <span class="md-error" v-if="!$v.form.name.required">Name is required</span>
          </md-field>

        </div>

        <md-card-actions>
          <md-button
            type="submit"
            class="md-primary"
            :disabled="isLoadingCategory"
          >
            Create category
          </md-button>
        </md-card-actions>

      </md-card>

    </form>

  </div>
</template>

<script>
import categoriesMixin from '@/mixins/categoriesMixin'

import { validationMixin } from 'vuelidate'
import {
  required,
  minLength
} from 'vuelidate/lib/validators'

export default {
  name: 'NewCategory',
  mixins: [categoriesMixin, validationMixin],
  data () {
    return {
      form: {
        name: null
      }
    }
  },
  validations: {
    form: {
      name: {
        required,
        minLength: minLength(3)
      }
    }
  },
  methods: {
    validateCategory () {
      this.$v.$touch()

      if (!this.$v.$invalid) {
        this.storeCategories(this.form)
      }
    }
  }
}
</script>
