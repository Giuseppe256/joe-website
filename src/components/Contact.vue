<template>
    <div>
        <h1 class="pageHeader">Contact</h1>
        <br/>

        <b-card class="cardWidth" border-variant="dark">
          <b-row no-gutters>
            <b-col md="4">
              <!-- <b-card-img class="mb-2" src="http://68.253.114.20/joe-website/beer.jpg" img-alt="Pic of Joe"></b-card-img> -->
              <b-card-img class="mb-2" src="http://192.168.1.66:8080/beer.jpg" img-alt="Pic of Joe"></b-card-img>
            </b-col>
            <b-col md="8">
              <b-container fluid class="mb-2">
                <h3>Joe Massaro</h3>
                <b-button variant="primary" onclick="this.blur();" href="https://www.linkedin.com/in/massarojoe/" target="_blank">See Me on LinkedIn!</b-button>
              </b-container>
              
              <b-container fluid class="mb-2">
                <h5>massaro.jp256@gmail.com</h5>
                <b-button variant="success" onclick="this.blur();" href="mailto:massaro.jp256@gmail.com?subject=Project%20Proposal">Send Me an Email!</b-button>
              </b-container>

              <b-container fluid>
                <h5>(812) 304-9419</h5>
                <b-row align-h="center">
                  <b-col sm="2">
                    <b-button class="mb-2" variant="info" onclick="this.blur();" href="tel://+18123049419">Call Me!</b-button>
                  </b-col>
                  <b-col sm="2">
                    <b-button variant="warning" onclick="this.blur();" href="sms://+18123049419">Text Me!</b-button>
                  </b-col>
                </b-row>
              </b-container>
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
.cardWidth {
    background-color: #404040;
}
</style>