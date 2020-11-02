<template>
  <div>

    <div class="md-layout md-alignment-center-space-between">
      <h1 class="md-title">New Launch</h1>
      <router-link to='/launches'>
        <md-button class="md-raised">Go back</md-button>
      </router-link>
    </div>

    <md-progress-bar md-mode="indeterminate" v-if="isLoadingLaunch" />
    <form novalidate class="md-layout" @submit.prevent='validateLaunch'>

      <md-card class="md-layout-item md-size-100">
        <div style="padding: 25px">

          <md-field
            :class='[{ "md-invalid": $v.form.category_id.$invalid && $v.form.category_id.$dirty }]'
          >
            <label>Category</label>
            <md-select
              v-model="form.category_id"
              required
              :disabled="isLoadingLaunch"
            >
              <md-option value=''>Select category</md-option>
              <md-option
                v-for="item in getCategories" :key="item._id"
                :value='item._id'
              >
                {{ item.name }}
              </md-option>
            </md-select>
            <span class="md-error" v-if="!$v.form.category_id.required">Category is required</span>
          </md-field>

          <md-field
            :class='[{ "md-invalid": $v.form.type.$invalid && $v.form.type.$dirty }]'
          >
            <label>Type</label>
            <md-select
              v-model="form.type"
              required
              :disabled="isLoadingLaunch"
            >
              <md-option
                :value='1'
              >
                +
              </md-option>
              <md-option
                :value='0'
              >
                -
              </md-option>
            </md-select>
            <span class="md-error" v-if="!$v.form.type.required">Type is required</span>
          </md-field>

          <md-field
            :class='[{ "md-invalid": $v.form.description.$invalid && $v.form.description.$dirty }]'
          >
            <label>Description</label>
            <md-input
              v-model="form.description"
              required
              :disabled="isLoadingLaunch"
            />
            <span class="md-error" v-if="!$v.form.description.required">Description is required</span>
          </md-field>

          <md-field
            :class='[{ "md-invalid": $v.form.value.$invalid && $v.form.value.$dirty }]'
          >
            <label>Value</label>
            <span class="md-prefix">P$</span>
            <md-input
              type='number'
              v-model="form.value"
              required
              :disabled="isLoadingLaunch"
            />
            <span class="md-error" v-if="!$v.form.value.required">Value is required</span>
          </md-field>

        </div>

        <md-card-actions>
          <md-button
            type="submit"
            class="md-primary"
            :disabled="isLoadingLaunch"
          >
            Create launch
          </md-button>
        </md-card-actions>

      </md-card>

    </form>

  </div>
</template>

<script>
import launchesMixin from '@/mixins/launchesMixin'
import categoriesMixin from '@/mixins/categoriesMixin'

import { validationMixin } from 'vuelidate'
import {
  required,
  minLength
} from 'vuelidate/lib/validators'

export default {
  name: 'NewLaunch',
  mixins: [launchesMixin, categoriesMixin, validationMixin],
  data () {
    return {
      form: {
        type: '',
        description: '',
        value: '',
        category_id: ''
      }
    }
  },
  validations: {
    form: {
      type: {
        required
      },
      description: {
        required,
        minLength: minLength(3)
      },
      value: {
        required
      },
      category_id: {
        required
      }
    }
  },
  methods: {
    validateLaunch () {
      this.$v.$touch()

      if (!this.$v.$invalid) {
        this.storeLaunches(this.form)
      }
    }
  }
}
</script>
