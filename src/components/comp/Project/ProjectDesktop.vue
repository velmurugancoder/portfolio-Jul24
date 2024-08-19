<template>
    <div>
        <v-layout class="my-8">
            <v-flex class="text-h3 white--text font-weight-bold d-flex justify-center" lg12>
                <span class="">Projects</span>
            </v-flex>
        </v-layout>

        <v-layout class="mt-3 d-flex justify-center">
            <v-flex lg8 class="mt-8">
                <v-card :color="BG_Color" elevation="4" class="rounded-xl custom-Card">
                    <v-card-title class="mx-3">
                        <v-layout>
                            <v-flex lg2>
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7gkUHkp7pdOsVOmGB_KJ2ILaluxfkrPUdY2k30dDrTg&s"
                                    alt="Fortune Logo" height="80px" class="elevation-7" />
                            </v-flex>
                            <v-flex lg11 class="ml-2 mt-2">
                                <v-flex lg12>
                                    <span class="text-h5" :class="TextBold">Junior Software developer</span>
                                </v-flex>
                                <v-divider :width="300" color="white"></v-divider>
                                <v-flex lg12 class="mt-n2">
                                    <span class="caption" :class="TextBold">Fortune Capital Services Private
                                        Limited |
                                        Flattrade</span>
                                </v-flex>
                                <v-flex lg12 class="mt-n3">
                                    <span class="caption" :class="TextBold">2023 June - Till</span>
                                </v-flex>
                            </v-flex>
                        </v-layout>

                        <v-flex lg12>
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
    </div>
</template>

<script>
export default {
    data() {
        return {
            BG_Color: this.$store.state.BG_Color,
            TextBold: this.$store.state.TextBold,
        };
    },
};
</script>

<!-- 
<style>
.Custom-Style-Project {
    border-radius: 50%;
    border: 4px solid rgb(133, 76, 230);
    overflow: hidden;
}
</style> -->