<template>
  <b-container>
    <b-row>
      <b-col sm="6" offset-sm="3">
        <b-row>
          <b-col>
            <h1>Project Entry</h1>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <b-form @submit="onSubmit" @reset="onReset">

              <b-form-group id="input-group-1" label="Name:" label-for="input-1">
                <b-form-input
                  id="input-1"
                  v-model="formData.name"
                  required
                  placeholder="Name"
                />
              </b-form-group>

              <b-form-group id="input-group-2" label="Description:" label-for="input-2">
                <b-form-textarea
                  id="textarea"
                  v-model="formData.description"
                  placeholder="Enter a description..."
                  rows="3"
                  max-rows="6"
                />
              </b-form-group>

              <b-form-group id="input-group-2" label="Color:" label-for="input-2">
                <input v-model="formData.color" type="color" />
              </b-form-group>

              <b-button type="submit" variant="primary">Submit</b-button>
              <b-button type="reset" variant="danger">Reset</b-button>
            </b-form>
          </b-col>
        </b-row>
      </b-col>
    </b-row> 
  </b-container>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'ProjectEntry',
  data() {
    return {
      formData: {
        name: '',
        description: '',
        color: ''
      }
    }
  },
  methods: {
    ...mapActions(['createProject']),
    onSubmit(e) {
      e.preventDefault()
      this.createProject(this.formData)
    },
    onReset() {

    }
  }
}
</script>
