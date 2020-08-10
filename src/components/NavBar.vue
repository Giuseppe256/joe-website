<template>
    <div>
        <b-navbar type="dark" sticky class="border-bottom-white" style="background-color: #242526">
            <b-navbar-nav>
                <router-link :to="{ name: 'Home' }">
                    <b-nav-item href="/Home">Home</b-nav-item>
                </router-link>

                <router-link :to="{ name: 'Projects' }">
                    <b-nav-item href="/Projects">Projects</b-nav-item>
                </router-link>

                <router-link :to="{ name: 'Contact' }">
                    <b-nav-item href="/Contact">Contact</b-nav-item>
                </router-link>
            </b-navbar-nav>
        </b-navbar>
    </div>
</template>

<script>
    export default {
        name: 'NavBar',
    }
</script>

<style scoped>
</style>