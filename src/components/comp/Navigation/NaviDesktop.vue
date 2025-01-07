<template>
    <v-app-bar elevation="0" fixed :color="BG_Color">
        <v-layout class="mx-16">
            <v-flex lg9 xl7 md class="d-flex justify-center">
                <span class="white--text font-weight-bold">
                    <v-icon class="mdi mdi-hand-heart-outline" color="white" size="23"></v-icon>
                </span>
                <span class="px-6 white--text font-weight-bold">Protfolio</span>
                <span class="px-6 white--text font-weight-bold" style="cursor: pointer;">About</span>
                <span class="px-6 white--text font-weight-bold" style="cursor: pointer;">Skills</span>
                <span class="px-6 white--text font-weight-bold" style="cursor: pointer;">Experience</span>
                <span class="px-6 white--text font-weight-bold" style="cursor: pointer;">Projects</span>
                <span class="px-6 white--text font-weight-bold" style="cursor: pointer;">Education</span>
                <!-- <span class="px-6 white--text font-weight-bold" style="cursor: pointer;"
                    @click="$NavigationScroll('Contact')">Contact</span> -->
                <span class="px-6 white--text font-weight-bold" style="cursor: pointer;">Contact</span>
            </v-flex>
            <v-flex lg3 xl2 md5 class="d-flex justify-space-around">
                <v-btn @click="RotueToGitHub" outlined rounded :x-small="this.$vuetify.breakpoint.width <= 1500"
                    :small="this.$vuetify.breakpoint.width > 1500" color="indigo" class="white--text font-weight-bold">
                    Github Profile
                </v-btn>
                <V-btn outlined rounded :x-small="this.$vuetify.breakpoint.width <= 1500"
                    :small="this.$vuetify.breakpoint.width > 1500" color="indigo" class="font-weight-bold">
                    My Certifications
                </V-btn>
            </v-flex>
        </v-layout>
    </v-app-bar>
</template>


<script>
export default {
    name: "NaviG",
    data() {
        return {
            BG_Color: this.$store.state.BG_Color
        }
    },
    methods: {
        RotueToGitHub() {
            window.open('https://github.com/velmurugancoder', '_blank')
        },
        scrollToCard(cardRef) {
            // Call the globally available NavigationScroll function
            this.$NavigationScroll(cardRef);
        },
    }
}
</script>