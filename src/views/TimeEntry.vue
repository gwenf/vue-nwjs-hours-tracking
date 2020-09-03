<template>
  <b-container>
    <b-row>
      <b-col sm="6" offsetSm="3">
        <b-row>
          <b-col>
            <h1>New Time Entry</h1>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <b-form @submit="onSubmit" @reset="onReset">
              <b-form-group id="input-group-0" label="Project:" labelFor="input-0">
                <v-select
                  v-model="formData.project"
                  :options="getProjects"
                />
              </b-form-group>

              <b-form-group id="input-group-1" label="Start Date:" labelFor="input-1">
                <date-picker v-model="formData.startDate" type="datetime" />
              </b-form-group>

              <b-form-group id="input-group-2" label="End Date:" labelFor="input-2">
                <date-picker v-model="formData.endDate" type="datetime" />
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
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'TimeEntry',
  data () {
    return {
      formData: {
        project: '',
        startDate: '',
        endDate: ''
      }
    };
  },
  computed: {
    ...mapGetters(['getProjects'])
  },
  mounted () {
    this.readProjects();
  },
  methods: {
    ...mapActions(['createTimeEntry', 'readProjects']),
    onSubmit (e) {
      e.preventDefault();
      this.createTimeEntry(this.formData);
    },
    onReset () {
    }
  }
};
</script>
