<template>

    <v-card class="rounded-xl custom-Card " height="250px" :color="BG_Color" elevation="4">
        <div v-if="this.$vuetify.breakpoint.name == true">
            <v-card-title class="text-h5 white--text font-weight-bold d-flex justify-center">{{ Heading
                }}</v-card-title>
            <v-card-text class="mt-3" v-if="Heading == 'Frontend' || 'Programming Languages'">
                <v-layout class="d-flex justify-space-around">
                    <v-flex class="d-flex justify-center" lg3 v-for="(_, index) in Arr1" :key="index">
                        <v-btn outlined color="white">
                            <v-icon :color="Arr1[index].color" size="20">{{ Arr1[index].icon
                                }}</v-icon>
                            {{ Arr1[index].Skills }}
                        </v-btn>
                    </v-flex>
                </v-layout>

                <v-layout>
                    <v-flex class="d-flex justify-space-around mt-6" v-for="(_, idx) in Arr2" :key="idx" lg6>
                        <v-btn outlined color="white">
                            <v-icon :color="Arr2[idx].color" size="20">{{ Arr2[idx].icon }}</v-icon>
                            {{ Arr2[idx].Skills }}
                        </v-btn>
                    </v-flex>
                </v-layout>
            </v-card-text>

            <v-card-text v-if="Heading == 'Other Tools' || 'Backend'" class="mt-n8">
                <v-layout class="d-flex justify-space-around">
                    <v-flex class="d-flex justify-center" lg3 v-for="(_, index) in Arr3" :key="index">
                        <v-btn outlined color="white">
                            <v-icon :color="Arr3[index].color" size="20">{{ Arr3[index].icon
                                }}</v-icon>
                            {{ Arr3[index].Skills }}
                        </v-btn>
                    </v-flex>
                </v-layout>
                <v-layout>
                    <v-flex class="d-flex justify-center mt-6" v-for="(_, index) in Arr4" :key="index" lg12>
                        <v-btn outlined color="white">
                            <v-icon :color="Arr4[index].color" size="20">{{ Arr4[index].icon
                                }}</v-icon>
                            {{ Arr4[index].Skills }}l
                        </v-btn>
                    </v-flex>
                </v-layout>
            </v-card-text>
        </div>

        <div v-else>
            <v-card-title class="text-h5 white--text font-weight-bold d-flex justify-center">{{ Heading
                }}</v-card-title>
            <v-card-text class="mt-3" v-if="Heading == 'Frontend' || 'Programming Languages'">
                <v-layout class="flex-wrap">
                    <v-flex class="d-flex justify-center" xs4 v-for="(_, index) in Arr1" :key="index">
                        <v-btn outlined color="white">
                            <v-icon :color="Arr1[index].color" size="20">{{ Arr1[index].icon
                                }}</v-icon>
                            {{ Arr1[index].Skills }}
                        </v-btn>
                    </v-flex>
                    <!-- <v-flex xs4 sm4></v-flex> -->
                </v-layout>

                <v-layout class="flex-wrap">
                    <v-flex class="d-flex justify-space-around mt-6" v-for="(_, idx) in Arr2" :key="idx" xs12 sm12>
                        <v-btn outlined color="white">
                            <v-icon :color="Arr2[idx].color" size="20">{{ Arr2[idx].icon }}</v-icon>
                            {{ Arr2[idx].Skills }}
                        </v-btn>
                    </v-flex>
                </v-layout>
            </v-card-text>

            <v-card-text v-if="Heading == 'Other Tools' || 'Backend'" class="mt-n12">
                <v-layout class="flex-wrap">
                    <v-flex class="d-flex justify-center my-1" xs12 sm12 v-for="(_, index) in Arr3" :key="index">
                        <v-btn outlined color="white">
                            <v-icon :color="Arr3[index].color" size="20">{{ Arr3[index].icon
                                }}</v-icon>
                            {{ Arr3[index].Skills }}
                        </v-btn>
                    </v-flex>
                </v-layout>
                <v-layout class="flex-wrap">
                    <v-flex class="d-flex justify-center my-1" xs12 v-for="(_, index) in Arr4" :key="index" sm12>
                        <v-btn outlined color="white">
                            <v-icon :color="Arr4[index].color" size="20">{{ Arr4[index].icon
                                }}</v-icon>
                            {{ Arr4[index].Skills }}
                        </v-btn>
                    </v-flex>
                </v-layout>
            </v-card-text>
        </div>

    </v-card>

</template>


<script>
export default {
    name: "SkIll",
    data() {
        return {
            BG_Color: this.$store.state.BG_Color,
            Arr1: [],
            Arr2: [],
            Arr3: [],
            Arr4: [],
        }
    },
    props: {
        Heading: String,
        SkillsArr: Array
    },
    methods: {
        FrontAndBack() {
            if (this.Heading != 'Other Tools' && this.Heading != 'Backend') {
                this.Arr1 = this.SkillsArr.slice(0, 3)
                this.Arr2 = this.SkillsArr.slice(3)
            } else {
                this.Arr3 = this.SkillsArr.slice(0, 3)
                this.Arr4 = this.SkillsArr.slice(3)

            }
        }
    },
    mounted() {
        //This method for to mapping the Skills In the Card
        this.FrontAndBack()
    }

}

</script>


<!-- <style>
.custom-Card {
    border: 2px solid rgb(133, 76, 230) !important;
}
</style> -->