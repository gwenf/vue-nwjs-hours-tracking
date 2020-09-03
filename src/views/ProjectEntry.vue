<template>
  <b-container>
    <b-row>
      <b-col sm="6" offsetSm="3">
        <b-row>
          <b-col>
            <h1>Project Entry</h1>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <b-form @submit="onSubmit" @reset="onReset">

              <b-form-group id="input-group-1" label="Name:" labelFor="input-1">
                <b-form-input
                  v-model="formData.name"
                  id="input-1"
                  required
                  placeholder="Name"
                />
              </b-form-group>

              <b-form-group id="input-group-2" label="Description:" labelFor="input-2">
                <b-form-textarea
                  v-model="formData.description"
                  id="textarea"
                  placeholder="Enter a description..."
                  rows="3"
                  maxRows="6"
                />
              </b-form-group>

              <b-form-group id="input-group-2" label="Color:" labelFor="input-2">
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
  data () {
    return {
      formData: {
        name: '',
        description: '',
        color: ''
      }
    };
  },
  methods: {
    ...mapActions(['createProject']),
    onSubmit (e) {
      e.preventDefault();
      this.createProject(this.formData);
    },
    onReset () {

    }
  }
};
</script>
