<template>
    <div>
        <h1 class="pageHeader">Projects</h1>
        
        <br/>

        <!-- Community Action Program of Evansville -->
        <b-card class="cardWidth" border-variant="light">
            <h3 class="mb-2">Community Action Program of Evansville</h3>
            <b-row no-gutters align-h="between">
                <b-col md="3">
                    <b-link href="https://jpm256.wordpress.com/" target="_blank">
                        <b-card-img class="mb-2" style="background-color: #F5F5F5; padding: 5px" src="https://jpm256.files.wordpress.com/2020/07/cape-logo.png?w=439" img-alt="CAPE"></b-card-img>
                    </b-link>
                </b-col>
                
                <b-col md="8" style="px-4">
                    <b-row no-gutters>
                        <b-col cols="3">
                            <h5 style="text-align: left">About:</h5>
                        </b-col>
                        <b-col cols="8">
                            <p style="text-align: left">Website built on WordPress for a non-profit organiztion in Evansville, IN</p>
                        </b-col>
                    </b-row>
                    <b-row no-gutters>
                        <b-col cols="3">
                            <h5 style="text-align: left">My role:</h5>
                        </b-col>
                        <b-col cols="8">
                            <ul style="text-align: left; padding-inline-start: 20px">
                                <li>Copied content from official website to my own website</li>
                                <li>Site built using free WordPress account, so no plugins or themes allowed</li>
                                <li>Created to offer CAPE a low-cost alternative to their existing website</li>
                            </ul>
                        </b-col>
                    </b-row>
                </b-col>
            </b-row>
            <b-row align-h="center" no-gutters>
                <b-col md="2">
                    <b-button style="width: 100%" variant="primary" onclick="this.blur();" href="https://jpm256.wordpress.com/" target="_blank">Visit</b-button>
                </b-col>
            </b-row>
        </b-card>

        <br/>

        <!-- First Baptist Church Dunkirk -->
        <b-card class="cardWidth" border-variant="light">
            <h3 class="mb-2">First Baptist Church Dunkirk</h3>
            <b-row no-gutters align-h="between">
                <b-col md="3">
                    <b-link href="https://dunkirkbaptist.org/" target="_blank">
                        <b-card-img class="mb-2" style="background-color: #003651; padding: 5px" src="https://dunkirkbaptist.org/wp-content/uploads/2017/12/fbcDunkirk_2.png" img-alt="DunkirkCCA"></b-card-img>
                    </b-link>
                </b-col>
                
                <b-col md="8" style="px-4">
                    <b-row no-gutters>
                        <b-col cols="3">
                            <h5 style="text-align: left">About:</h5>
                        </b-col>
                        <b-col cols="8">
                            <p style="text-align: left">Website built on WordPress for a church in Dunkirk, NY</p>
                        </b-col>
                    </b-row>
                    <b-row no-gutters>
                        <b-col cols="3">
                            <h5 style="text-align: left">My role:</h5>
                        </b-col>
                        <b-col cols="8">
                            <ul style="text-align: left; padding-inline-start: 20px">
                                <li>Updated WordPress plugins and themes</li>
                                <li>Added feature to allow cloning/duplicating posts to improve client's ease of use</li>
                            </ul>
                        </b-col>
                    </b-row>
                </b-col>
            </b-row>
            <b-row align-h="center" no-gutters>
                <b-col md="2">
                    <b-button style="width: 100%" variant="primary" onclick="this.blur();" href="https://dunkirkbaptist.org/" target="_blank">Visit</b-button>
                </b-col>
            </b-row>
        </b-card>

        <br/>

        <!-- Dunkirk Central Christian Academy -->
        <b-card class="cardWidth" border-variant="light">
            <h3 class="mb-3">Dunkirk Central Christian Academy</h3>
            <b-row no-gutters align-h="between">
                <b-col md="3">
                    <b-link href="https://dunkirkcca.org/" target="_blank">
                        <b-card-img class="mb-2" style="background-color: #F5F5F5; padding: 5px" src="https://dunkirkcca.org/wp-content/uploads/2018/02/logo2018small.png" img-alt="DunkirkCCA"></b-card-img>
                    </b-link>
                </b-col>
                
                <b-col md="8" style="px-4">
                    <b-row no-gutters>
                        <b-col cols="3">
                            <h5 style="text-align: left">About:</h5>
                        </b-col>
                        <b-col cols="8">
                            <p style="text-align: left">Website built on WordPress for a school in Dunkirk, NY</p>
                        </b-col>
                    </b-row>
                    <b-row no-gutters>
                        <b-col cols="3">
                            <h5 style="text-align: left">My role:</h5>
                        </b-col>
                        <b-col cols="8">
                            <ul style="text-align: left; padding-inline-start: 20px">
                                <li>Updated WordPress plugins and themes</li>
                                <li>Reformatted navigation bar and site content so each page matched the other pages</li>
                                <li>Resolved login issue where admin page of site was inaccessible by reverting to backup of site and fixing plugin issues</li>
                            </ul>
                        </b-col>
                    </b-row>
                </b-col>
            </b-row>
            <b-row align-h="center" no-gutters>
                <b-col md="2">
                    <b-button style="width: 100%" variant="primary" onclick="this.blur();" href="https://dunkirkcca.org/" target="_blank">Visit</b-button>
                </b-col>
            </b-row>
        </b-card>

        

        <br/>
    </div>
</template>

<script>
export default {
    name: 'Projects'
}
</script>

<style scoped>
.cardWidth {
    background-color: #404040;
}
</style>