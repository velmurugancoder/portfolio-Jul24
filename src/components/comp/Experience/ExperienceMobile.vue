<template>
    <v-layout class="d-flex justify-center flex-wrap mt-8  mx-sm-8">
        <v-flex xs12 sm12 class="d-flex justify-center">
            <span class="text-h3 white--text font-weight-bold">Experience</span>
        </v-flex>

        <v-flex xs10 sm11 class="mt-8" :class="TextBold">
            Here I present my journey as a full-stack web developer, highlighting
            my extensive experience in blockchain, finance, and mentorship.
            Through my portfolio, I showcase the diverse projects and technologies
            I've mastered, demonstrating my expertise in web development and
            beyond.
        </v-flex>

        <v-flex xs11 sm11 class="mt-8">
            <v-card :color="BG_Color" elevation="4" class="rounded-xl custom-Card">
                <v-card-title class="mx-2">
                    <v-layout>
                        <v-flex xs2 sm2 class="mt-4">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7gkUHkp7pdOsVOmGB_KJ2ILaluxfkrPUdY2k30dDrTg&s"
                                alt="Fortune Logo" height="" class="elevation-7" />
                        </v-flex>
                        <v-flex xs11 sm9 class="ml-2 mt-2">
                            <v-flex xs12 sm12>
                                <span class="text-h6" :class="TextBold">Junior
                                    Software developer</span>
                            </v-flex>
                            <v-divider :width="245" color="white"></v-divider>
                            <v-flex xs12 sm12 class="mt-n2">
                                <span class="caption" :class="TextBold">Flattrade</span>
                                <span class="caption ml-3" :class="TextBold">2023 June - Till</span>
                            </v-flex>
                        </v-flex>
                    </v-layout>

                    <v-flex xs12 sm12 class="mt-2">
                        <p class="caption" :class="TextBold">
                            As a junior software developer at Fortune Capital Services, I
                            bring a year of experience in full-stack development.
                            Proficient in Vue.js, HTML, and CSS, I craft sleek and
                            intuitive user interfaces. On the backend, I excel in Golang
                            and am skilled in managing PostgreSQL, MySQL, and MSSQL
                            databases. In the fast-paced trading environment, I thrive on
                            optimizing algorithms and enhancing user experiences.
                            Committed to continuous learning, I stay updated with the
                            latest technologies to drive innovation.
                        </p>
                    </v-flex>
                </v-card-title>
            </v-card>
        </v-flex>
    </v-layout>
</template>

<script>
export default {
    data() {
        return {
            BG_Color: this.$store.state.BG_Color,
            TextBold: this.$store.state.TextBold,
        }
    },
    mounted() {
        console.log(this.$vuetify.breakpoint);
    }
}
</script>


<style scoped>
img {
    width: 100%;
    height: auto;
}
</style>