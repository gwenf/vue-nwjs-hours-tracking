<template>
  <b-container class="hours-log-page">
    <b-row>
      <b-col sm="8" offset-sm="2">
        <b-row class="mt-5 mb-4">
          <b-col>
            <h1>Projects</h1>
          </b-col>
          <b-col>
            <b-btn @click="$router.push({name: 'ProjectEntry'})" variant="primary">
              + Add New Project
            </b-btn>
          </b-col>
        </b-row>

        <b-row>
          <b-col>
            <v-select
              :options="[{label: 'Canada', code: 'ca'}]"
            />
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  name: 'Projects',
  computed: {
    ...mapState(['projects'])
  },
  mounted() {
    this.readProjects()
  },
  methods: {
    ...mapActions(['readProjects'])
  }
}
</script>
