<template>
    <div>
        <v-app-bar elevation="0" fixed :color="BG_Color">
            <div class="MainDiv-custom">
                <v-layout>
                    <v-flex xs1>
                        <v-icon class="mdi mdi-text-account mt-2" color="white" size="30" @click="OpenDrawer"></v-icon>
                        <div class="Sub-Child">
                            <v-navigation-drawer v-model="MobileDrawer" width="200" :color="BG_Color">
                                <v-flex class="ml-2 white--text font-weight-bold caption pa-3">About</v-flex>
                                <v-flex class="ml-2 white--text font-weight-bold caption pa-3">Skills</v-flex>
                                <v-flex class="ml-2 white--text font-weight-bold caption pa-3">Experience</v-flex>
                                <v-flex class="ml-2 white--text font-weight-bold caption pa-3">Projects</v-flex>
                                <v-flex class="ml-2 white--text font-weight-bold caption pa-3">Education</v-flex>
                                <v-flex class="ml-2 white--text font-weight-bold caption pa-3">Contact</v-flex>
                            </v-navigation-drawer>
                        </div>
                    </v-flex>
                    <v-flex xs11 class="ml-4 white--text font-weight-bold text-h6 mt-1">
                        Protfolio
                        <v-icon class="mdi mdi-hand-heart-outline ml-1 mb-1" color="white" size="15"></v-icon>
                    </v-flex>
                </v-layout>
            </div>
        </v-app-bar>
    </div>
</template>

<style>
.MainDiv-custom {
    position: relative;
    height: 100%;
    width: 100%;
}

.Sub-Child {
    position: absolute;
    height: 280px;
    top: 50px;
    left: -16px;
}
</style>


<script>
export default {
    name: "NaviMobile",
    data() {
        return {
            BG_Color: this.$store.state.BG_Color, //Background color
            MobileDrawer: true,
        }
    },
    methods: {
        OpenDrawer() {
            this.MobileDrawer = true
        }
    }
}
</script>