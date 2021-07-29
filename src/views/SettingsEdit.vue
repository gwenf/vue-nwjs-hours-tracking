<template>
  <b-container>
    <b-row>
      <b-col sm="6" offsetSm="3">
        <h1>Settings</h1>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-form @submit.prevent="onSubmit" @reset="onReset">
          <b-form-group id="input-group-1" labelFor="input-1">
            <b-form-input
              v-model="firstName"
              id="input-1"
              required
              placeholder="First Name"
              class="my-3"
            />
            <b-form-input
              v-model="lastName"
              id="input-2"
              required
              placeholder="Last Name"
              class="my-3"
            />

            <b-form-input
              v-model="email"
              id="input-1"
              required
              placeholder="E-mail"
              class="my-3"
            />
            <b-form-input
              v-model="phone"
              id="input-2"
              required
              placeholder="Phone"
              class="my-3"
            />

            <hr />

            <b-form-input
              v-model="address.street1"
              id="input-1"
              required
              placeholder="Street Address"
              class="my-3"
            />
            <b-form-input
              v-model="address.street2"
              id="input-2"
              required
              placeholder="Street Address, Line 2 (Optional)"
              class="my-3"
            />
            <b-form-input
              v-model="address.city"
              id="input-1"
              required
              placeholder="City"
              class="my-3"
            />
            <b-form-input
              v-model="address.state"
              id="input-2"
              required
              placeholder="State"
              class="my-3"
            />
            <b-form-input
              v-model="address.zip"
              id="input-1"
              required
              placeholder="Zip"
              class="my-3"
            />
            <b-form-input
              v-model="address.country"
              id="input-2"
              required
              placeholder="Country"
              class="my-3"
            />
          </b-form-group>
          <b-btn variant="primary">
            Save
          </b-btn>
        </b-form>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'SettingsEdit',
  data () {
    return {
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
      address: {
        street1: '',
        street2: '',
        city: '',
        state: '',
        zip: null,
        country: ''
      }
    };
  },
  methods: {
    ...mapActions(['createUser']),
    onSubmit () {
      const payload = {
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        phone: this.phone,
        address: this.address
      };
      this.createUser(payload);
    },
    onReset () {

    }
  }
};
</script>

<style lang="scss" scoped>

</style>