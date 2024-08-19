<template>
    <v-layout class="mx-6 mt-16">
        <v-flex lg7>
            <v-flex lg12>
                <span class="text-h4 " :class="TextBold">
                    Hi, I am <br />
                    Velmurugan Aruljothi <br />
                    I am a {{ DynamicValue }}
                    <span v-if="Synmbol"> {{ BarSynmbol }} </span>
                </span>
            </v-flex>
            <v-flex lg12 class="text-md-body-1  my-8" :class="TextBold">
                I am a seasoned full-stack developer at Fortune Capital Services,
                bringing a wealth of experience in crafting robust and scalable web
                applications. With expertise spanning both frontend and backend
                technologies, I thrive in delivering innovative solutions that drive
                business growth and enhance user experiences. My passion for
                technology and dedication to excellence make me a valuable asset in
                any development project
            </v-flex>
            <v-flex lg6>
                <v-btn rounded x-large
                    style="background: -webkit-linear-gradient(225deg, rgb(132, 0, 255) 0%, rgb(230, 0, 255) 100%);"
                    class=" text-capitalize" :class="TextBold">
                    View My Resume</v-btn>
            </v-flex>
        </v-flex>
        <v-flex></v-flex>
        <v-flex lg4>
            <img src="https://img.freepik.com/premium-photo/happy-3d-cartoon-man-using-laptop-siting-transparent-white-background_973886-187.jpg"
                alt="" height="450vh" />
        </v-flex>
    </v-layout>

</template>

<script>
export default {
    mounted() {
        this.ChangeUserDetails("D");
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
