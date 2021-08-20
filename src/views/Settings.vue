<template>
  <b-container class="settings-page">
    <b-row class="mt-5 mb-4">
      <b-col sm="8" offsetSm="2">
        <b-row class="mt-5 mb-4">
          <b-col>
            <h1>Settings</h1>
          </b-col>
          <b-col>
            <b-btn variant="primary" @click="$router.push({name: 'SettingsEdit'})">
              {{ user ? 'Edit' : 'Create User' }}
            </b-btn>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
    <b-row v-if="user" class="mt-5 mb-4">
      <b-col sm="8" offsetSm="2">
        <h2>Profile Information</h2>
        <p>First Name: {{ user.firstName }}</p>
        <p>Last Name: {{ user.lastName }}</p>
        <p>Address 1: {{ user.address.street1 }}</p>
        <p>Address 2: {{ user.address.street2 }}</p>
        <p>City: {{ user.address.city }}</p>
        <p>State: {{ user.address.state }}</p>
        <p>Zip Code: {{ user.address.zip }}</p>
        <p>Countries: {{ user.address.country }}</p>
        <p>Phone: {{ user.phone }}</p>
        <p>E-mail: {{ user.email }}</p>
      </b-col>
    </b-row>
    <b-row v-if="user" class="mt-5 mb-4">
      <b-col sm="8" offsetSm="2">
        <h2>Billing Information</h2>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState(['user'])
  }
};
</script>
