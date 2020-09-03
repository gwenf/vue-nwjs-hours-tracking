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
              Edit
            </b-btn>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
    <b-row class="mt-5 mb-4">
      <b-col sm="8" offsetSm="2">
        <h2>Profile Information</h2>
        <p>First Name: firstName</p>
        <p>Last Name: lastName</p>
        <p>Address 1: streetAddress</p>
        <p>Address 2: streetAddress2</p>
        <p>City: city</p>
        <p>State: state</p>
        <p>Zip Code: zip</p>
        <p>Countries: country</p>
        <p>Phone: phone</p>
        <p>E-mail: email</p>
      </b-col>
    </b-row>
    <b-row class="mt-5 mb-4">
      <b-col sm="8" offsetSm="2">
        <h2>Billing Information</h2>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
        
};
</script>

<style lang="scss" scoped>

</style>
