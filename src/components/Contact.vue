<template>
    <div>
        <h1 class="pageHeader">Contact</h1>
        <br/>
        <b-container fluid>
        <b-form @submit="onSubmit" @reset="onReset" v-if="show">
            <b-row no-gutters>
              <b-col>
            <b-form-group id="input-group-1" label="First Name:" label-for="input-1" label-cols-md="2" label-align="right">
                <b-form-input
                id="input-1"
                v-model="form.firstName"
                required
                placeholder="Enter first name"
                class="pt-2"
                ></b-form-input>
            </b-form-group>
              </b-col>
              <b-col>
            <b-form-group id="input-group-2" label="Last Name:" label-for="input-2" label-cols-md="2" label-align="right">
                <b-form-input
                id="input-2"
                v-model="form.lastName"
                required
                placeholder="Enter last name"
                class="pt-2"
                ></b-form-input>
            </b-form-group>
              </b-col>
            </b-row>

            <b-form-group
                id="input-group-3"
                label="Email address:"
                label-for="input-3"
                label-cols-md="1"
                label-align="right"
            >
                <b-form-input
                id="input-3"
                v-model="form.email"
                type="email"
                required
                placeholder="Enter email"
                class="pt-2"
                ></b-form-input>
            </b-form-group>
          
            

            <b-form-group id="input-group-4" label="Message:" label-for="input-4" label-cols-md="1" label-align="right">
                <b-form-textarea
                id="input-4"
                v-model="form.message"
                type="text"
                required
                placeholder="Describe your project"
                rows="5"
                class="pt-2"
                ></b-form-textarea>
            </b-form-group>

            <b-button type="submit" variant="primary">Submit</b-button>
            <b-button type="reset" variant="danger">Reset</b-button>
        </b-form>
        </b-container>
    </div>
</template>

<script>
export default {
    name: "Contact",
    data() {
      return {
        form: {
          email: '',
          name: '',
          food: null,
          checked: []
        },
        foods: [{ text: 'Select One', value: null }, 'Carrots', 'Beans', 'Tomatoes', 'Corn'],
        show: true
      }
    },
    methods: {
      onSubmit(evt) {
        evt.preventDefault()
        alert(JSON.stringify(this.form))
      },
      onReset(evt) {
        evt.preventDefault()
        // Reset our form values
        this.form.firstName = ''
        this.form.lastName = ''
        this.form.email = ''
        this.form.message = ''
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
}
</script>

<style scoped>

</style>