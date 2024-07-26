<template>
    <div class="mx-sm-10 mx-md-16">
        <v-flex class="d-flex justify-center" md12>
            <div class="Custom-StyleMobile">
                <v-img
                    src="https://img.freepik.com/premium-photo/happy-3d-cartoon-man-using-laptop-siting-transparent-white-background_973886-187.jpg"
                    alt="" :width="this.$vuetify.breakpoint.width >= 500 ? 400 : 300"></v-img>
            </div>
        </v-flex>

        <v-flex class="my-6"></v-flex>

        <v-flex class="mx-6">
            <span class="text-h5" :class="TextBold">
                Hi, I am <br />
                Velmurugan Aruljothi <br />
                I am a <span class="blue--text">{{ DynamicValue }}</span>
                <span v-if="Synmbol"> {{ BarSynmbol }} </span>
            </span>
        </v-flex>

        <v-flex class="text-md-body-1 mx-6 my-8" :class="TextBold">
            I am a seasoned full-stack developer at Fortune Capital Services,
            bringing a wealth of experience in crafting robust and scalable web
            applications. With expertise spanning both frontend and backend
            technologies, I thrive in delivering innovative solutions that drive
            business growth and enhance user experiences. My passion for
            technology and dedication to excellence make me a valuable asset in
            any development project
        </v-flex>

        <v-flex class="d-flex justify-center">
            <v-btn x-large color="indigo darken-2" class="rounded-xl text-capitalize" :class="TextBold"
                style="background: -webkit-linear-gradient(225deg, rgb(132, 0, 255) 0%, rgb(230, 0, 255) 100%);">
                View My Resume</v-btn>
        </v-flex>
        <v-flex></v-flex>
    </div>

</template>

<script>
export default {
    mounted() {
        this.ChangeUserDetails("D");
        console.log(this.$vuetify.breakpoint.width);
    },
    methods: {
        delay(milliseconds) {
            return new Promise((resolve) => setTimeout(resolve, milliseconds));
        },

        async ChangeUserDetails(value) {
            this.DynamicValue = "";
            var Job;
            switch (value) {
                case "D":
                    Job = this.FullStackDeveloper;
                    break;
                case "F":
                    Job = this.FreeLancer;
                    break;
                case "M":
                    Job = this.Mentor;
                    break;
            }

            for (let index = 0; index < Job.length; index++) {
                this.DynamicValue += Job[index];
                await this.delay(250);
            }

            if (value == "D") {
                this.ChangeUserDetails("F");
            } else if (value == "F") {
                this.ChangeUserDetails("M");
            } else {
                this.ChangeUserDetails("D");
            }
        },
    },
    data() {
        return {
            TextBold: this.$store.state.TextBold,
            BG_Color: "background-color:" + this.$store.state.BG_Color,
            Synmbol: true,
            BarSynmbol: "|",
            DynamicValue: "",
            FullStackDeveloper: [
                "F",
                "u",
                "l",
                "l",
                " ",
                "S",
                "t",
                "a",
                "c",
                "k",
                " ",
                "D",
                "e",
                "v",
                "e",
                "l",
                "o",
                "p",
                "e",
                "r",
                ".",
            ],
            FreeLancer: ["F", "r", "e", "e", "l", "a", "n", "c", "e", "r", "."],
            Mentor: ["M", "e", "n", "t", "o", "r", "."],
        };
    },
};
</script>


<style>
.Custom-StyleMobile {
    margin-top: 80px;
    border-radius: 50%;
    border: 4px solid rgb(133, 76, 230);
    overflow: hidden;
}

/* .Custom-StyleMobile img {
    border-radius: 50%;
    display: block;
} */
</style>