<template>
    <div class="mx-3  mx-sm-16">
        <v-layout class="mt-8">
            <v-flex class="d-flex justify-center">
                <span class="text-h3" :class="TextBold">Education</span>
            </v-flex>
        </v-layout>

        <v-layout class="d-flex justify-center mt-5">
            <v-flex>
                <p :class="TextBold" class="text-center"> My education has been a journey of self-discovery
                    and
                    growth. My educational details are as follows.</p>
            </v-flex>
        </v-layout>

        <v-layout class="d-flex justify-center">
            <v-flex xs12 sm12>
                <v-card :color="BG_Color" class="rounded-xl custom-Card">
                    <v-card-title>
                        <v-layout>
                            <v-flex sm2>
                                <img src="@/assets/college.png" alt="Fortune Logo" height="60px" class="elevation-7">
                            </v-flex>

                            <v-flex sm10 class="mt-n2">
                                <v-flex>
                                    <span class="caption" :class="TextBold">Dr S Ramadoss
                                        Arts and Science College</span>
                                </v-flex>
                                <v-divider :width="235" color="white"></v-divider>
                                <v-flex lg12 class="mt-n2">
                                    <span class="caption" :class="TextBold">Bachelor of Science -
                                        Mathematics</span>
                                </v-flex>
                                <v-flex lg12 class="mt-n3">
                                    <span class="caption" :class="TextBold">Aug 2019 - Apr 2022</span>
                                </v-flex>
                            </v-flex>
                        </v-layout>
                    </v-card-title>

                    <v-card-text>
                        <v-flex lg12 xl12>
                            <span :class="TextBold" style="font-size: 17px;">Grade: 7.4 CGPA</span>
                        </v-flex>

                        <v-flex lg12 xl12>
                            <span :class="TextBold">
                                I completed my undergraduate studies at Dr S Ramadoss Arts and Science College with a
                                CGPA
                                of 7.4.
                            </span>
                        </v-flex>
                    </v-card-text>
                </v-card>
            </v-flex>
        </v-layout>

        <v-layout class="d-flex justify-center mt-6">
            <v-flex lg8>
                <v-card :color="BG_Color" class="rounded-xl custom-Card">
                    <v-card-title>
                        <v-layout>
                            <v-flex sm2>
                                <img src="@/assets/sarawathi.png" alt="Fortune Logo" height="50px"
                                    class="elevation-7 mt-2">
                            </v-flex>

                            <v-flex sm1></v-flex>

                            <v-flex lg11 sm10 class="mt-n2">
                                <v-flex lg12>
                                    <span class="caption" :class="TextBold">Sri Saraswathi Vidhyalaya
                                        MT.HT.SEC
                                        School</span>
                                </v-flex>
                                <v-divider :width="235" color="white"></v-divider>
                                <v-flex lg12 class="mt-n2">
                                    <span class="caption " :class="TextBold">HSC(XII)</span>
                                </v-flex>
                                <v-flex lg12 class="mt-n3">
                                    <span class="caption" :class="TextBold">Jun 2017 - Mar 2019</span>
                                </v-flex>
                            </v-flex>
                        </v-layout>
                    </v-card-title>

                    <v-card-text>
                        <v-flex lg12>
                            <span class="" :class="TextBold" style="font-size: 17px;">Grade: 63%</span>
                        </v-flex>

                        <v-flex lg12>
                            <span class="" :class="TextBold">
                                I completed my class 12 high school education at Sri Saraswathi Vidhyalaya Matriculation
                                Higher
                                Secondary School.
                            </span>
                        </v-flex>

                    </v-card-text>
                </v-card>
            </v-flex>
        </v-layout>

        <v-layout class="d-flex justify-center mt-6 SkillAnimeEx">
            <v-flex lg8>
                <v-card :color="BG_Color" class="rounded-xl custom-Card">
                    <v-card-title>
                        <v-layout>
                            <v-flex sm1>
                                <img src="@/assets/fatima.png" alt="Fortune Logo" height="50px"
                                    class="elevation-7 mt-4">
                            </v-flex>

                            <v-flex sm1></v-flex>

                            <v-flex lg11 sm10 class="">
                                <v-flex lg12>
                                    <span class="caption" :class="TextBold">Fatima Matric
                                        Hr.Sec.School-Virudhachalam</span>
                                </v-flex>
                                <v-divider :width="235" color="white"></v-divider>
                                <v-flex lg12 class="mt-n2">
                                    <span class="caption" :class="TextBold">SSLC(X)</span>
                                </v-flex>
                                <v-flex lg12 class="mt-n3">
                                    <span class="caption" :class="TextBold">Jun 2016 - Mar 2017</span>
                                </v-flex>
                            </v-flex>
                        </v-layout>
                    </v-card-title>

                    <v-card-text>
                        <v-flex lg12>
                            <span class="" :class="TextBold" style="font-size: 17px;">Grade: 75%</span>
                        </v-flex>

                        <v-flex lg12>
                            <span class="" :class="TextBold">
                                I completed my class 12 high school education at Fatima Matriculation
                                Hr.Sec.School-Virudhachalam.
                            </span>
                        </v-flex>

                    </v-card-text>
                </v-card>
            </v-flex>
        </v-layout>
    </div>
</template>


<script>
export default {
    name: "EducationMobile",
    data() {
        return {
            BG_Color: this.$store.state.BG_Color,
            TextBold: this.$store.state.TextBold,
        }
    }
}
</script>

<!-- <style>
.SkillAnimeEx {
    position: relative;
    animation-name: Animation;
    animation-duration: 1s;

}

@keyframes Animation {
    from {
        top: 10px;
    }

    to {
        top: 20px;
    }
}
</style> -->