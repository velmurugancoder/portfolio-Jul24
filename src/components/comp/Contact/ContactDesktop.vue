<template scoped>
    <div>
        <v-layout class="mt-8 d-flex justify-center">
            <v-flex lg12 class="d-flex justify-center">
                <span class="text-h3" :class="TextBold">Contact</span>
            </v-flex>
        </v-layout>

        <v-flex lg12 class="mt-3">
            <span class="d-flex justify-center" :class="TextBold">Feel free to reach out to me for any
                questions or
                opportunities!</span>
        </v-flex>

        <v-flex lg12 class="d-flex justify-center mt-5">
            <v-card width="600" :color="BG_Color" class="elevation-12 rounded-xl custom-Card">
                <v-card-title class="rounded-xl" :class="TextBold">
                    Email Me 🚀
                </v-card-title>
                <v-card-text>
                    <v-flex lg12 class="mx-4">
                        <v-text-field outlined dense class="Custom-Text-FieldColor" label="Your Email" solo>
                        </v-text-field>
                    </v-flex>
                    <v-flex lg12 class="mx-4">
                        <v-text-field outlined dense label="Your Name" solo>
                        </v-text-field>
                    </v-flex>
                    <v-flex lg12 class="mx-4">
                        <v-text-field outlined dense label="Subject" solo>
                        </v-text-field>
                    </v-flex>
                    <v-flex lg12 class="mx-4">
                        <v-textarea outlined Solo label="Message"></v-textarea>
                    </v-flex>
                    <v-flex lg12 class="mx-4">
                        <v-btn rounded block x-large
                            style="background: -webkit-linear-gradient(225deg, rgb(132, 0, 255) 0%, rgb(230, 0, 255) 100%);"
                            :class="TextBold" class="white--text font-weight-bold text-capitalize">
                            send
                        </v-btn>
                    </v-flex>
                </v-card-text>
            </v-card>
        </v-flex>
    </div>
</template>

<script>
export default {
    name: "ContacT",
    data() {
        return {
            BG_Color: this.$store.state.BG_Color,
            TextBold: this.$store.state.TextBold,
        }
    }
}
</script>

<style scoped></style>
