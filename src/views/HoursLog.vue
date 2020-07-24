<template>
  <b-container class="hours-log-page">
    <b-row>
      <b-col sm="8" offset-sm="2">
        <b-row class="mt-5 mb-4">
          <b-col>
            <h1>Hours Log</h1>
          </b-col>
          <b-col>
            <b-btn variant="primary" @click="$router.push({name: 'TimeEntry'})">
              + Add Entry
            </b-btn>
          </b-col>
        </b-row>

        <b-row>
          <b-col>
            <b-table striped hover :items="items"></b-table>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: 'HoursLog',
  components: {
  },
  data() {
    return {
      items: [
        {
          project_name: 'Company #1',
          date: 'May 12, 2020',
          start_time: '7:00 am',
          end_time: '11:00 am'
        },
      ]
    }
  }
};
</script>
