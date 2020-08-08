<template>
    <div>
        <h1 class="pageHeader">Contact</h1>
        <br/>

        <b-card border-variant="dark">
          <b-row no-gutters>
            <b-col md="4">
              <b-card-img src="http://localhost/joe-website/beer.jpg" img-alt="Pic of Joe"></b-card-img>
            </b-col>
            <b-col md="8">
              <h3>Joe Massaro</h3>
              <b-button variant="primary" onclick="this.blur();" href="https://www.linkedin.com/in/massarojoe/" target="_blank">See Me on LinkedIn!</b-button>
              <br/><br/>
              <h5>massaro.jp256@gmail.com</h5>
              <b-button variant="success" onclick="this.blur();" href="mailto:massaro.jp256@gmail.com?subject=Project%20Proposal">Send Me an Email!</b-button>
              <br/><br/>
              <h5>(812) 304-9419</h5>
              <b-row align-h="center">
                <b-col class="float-right" cols="6">
                  <b-button variant="info" href="tel://+18123049419">Call Me!</b-button>
                </b-col>
                <b-col cols="6">
                  <b-button variant="warning" href="sms://+18123049419">Text Me!</b-button>
                </b-col>
              </b-row>
            </b-col>
          </b-row>
        </b-card>
        <br/><br/>
    </div>
</template>

<script>
export default {
    name: "Contact"
}
</script>

<style scoped>

</style>