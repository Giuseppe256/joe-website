<template>
    <div>
        <b-card class="footer" style="background-color: #242526" height="150">
            <v-footer>
                <b-row>
                    <b-col>
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
</style>