<template>
    <div>
        <b-card class="footer" style="background-color: #242526; height: 8vh;">
            <v-footer style="height: 100%">
                <b-row align-v="center" style="height: 8vh">
                    <b-col align-self="center">
                        {{ new Date().getFullYear() }} — <strong>Joe Massaro</strong>
                    </b-col>
                </b-row>
            </v-footer>
        </b-card>
    </div>
</template>

<script>
export default {
    name: 'Footer'
}
</script>

<style scoped>
.card-body {
    padding-top: 0;
    padding-bottom: 0;
}
</style>