<template>
  <b-container>
    <b-row>
      <b-col sm="6" offsetSm="3">
        <h1>Settings</h1>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-form @submit="onSubmit" @reset="onReset">
          <b-form-group id="input-group-1" label="Name:" labelFor="input-1">
            <b-form-input
              v-model="formData.firstName"
              id="input-1"
              required
              placeholder="Name"
            />
            <b-form-input
              v-model="formData.lastName"
              id="input-2"
              required
              placeholder="Name"
            />
          </b-form-group>
        </b-form>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: 'SettingsEdit',
  data () {
    return {
      formData: {
        firstName: '',
        lastName: ''
      }
    };
  } 
};
</script>

<style lang="scss" scoped>

</style>