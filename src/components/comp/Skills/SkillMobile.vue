<template>
    <v-flex class="mx-6 mx-sm-16">
        <v-flex class="d-flex justify-center mt-8">
            <span class="text-h3" :class="TextBold">Skills</span>
        </v-flex>

        <v-flex class="d-flex justify-center my-3">
            <span class="caption text-wrap" :class="TextBold">Here are some of my skills, which I
                have been
                working on web
                development.</span>
        </v-flex>

        <v-flex class="mt-8">
            <Skills Heading="Frontend" :SkillsArr="FrontEnd_SkillsArr" />
        </v-flex>

        <v-flex class="mt-8">
            <Skills Heading="Programming Languages" :SkillsArr="Programming_lang" />
        </v-flex>

        <v-flex class="mt-8">
            <Skills Heading="Other Tools" :SkillsArr="OtherTools" />
        </v-flex>

        <v-flex class="mt-8">
            <Skills Heading="Backend" :SkillsArr="BackEnd_Arr" />
        </v-flex>
    </v-flex>
</template>


<script>
import Skills from './SkillsMob.vue'
export default {
    data() {
        return {
            TextBold: this.$store.state.TextBold,
            BackEnd_Arr: [
                { Skills: "Oracle", color: "grey", icon: "mdi mdi-database-arrow-down" },
                { Skills: "MySql, MarioDB", color: "orange", icon: "mdi mdi-language-html5" },
                { Skills: "MSSql", color: "orange", icon: "mdi mdi-language-html5" },
                // { Skills: "", color: "orange", icon: "mdi mdi-language-html5" },
                { Skills: "Postgress", color: "orange", icon: "mdi mdi-language-html5" },
            ],
            FrontEnd_SkillsArr: [
                { Skills: "HTML", color: "orange", icon: "mdi mdi-language-html5" },
                { Skills: "CSS", color: "blue", icon: "mdi mdi-language-css3" },
                { Skills: "Vue Js", color: "green", icon: "mdi mdi-vuejs" },
                {
                    Skills: "JavaScript",
                    color: "yellow",
                    icon: "mdi mdi-language-javascript",
                },
                { Skills: "BootStrap5", color: "red", icon: "mdi mdi-bootstrap" },
            ],
            Programming_lang: [
                {
                    Skills: "C, C++",
                    color: "indigo lighten-4",
                    icon: "mdi mdi-language-c",
                },
                {
                    Skills: "C#",
                    color: "deep-purple lighten-2",
                    icon: "mdi mdi-language-html5",
                },
                { Skills: "Java", color: "orange", icon: "mdi mdi-language-java" },
                { Skills: "Golang", color: "blue", icon: "mdi mdi-language-go" },
                { Skills: "Python", color: "yellow", icon: "mdi mdi-language-python" },
            ],
            OtherTools: [
                { Skills: "Git", color: "orange", icon: "mdi mdi-git" },
                {
                    Skills: "vs Code",
                    color: "blue",
                    icon: "mdi mdi-microsoft-visual-studio-code",
                },
                {
                    Skills: "figma",
                    color: "indigo lighten-4",
                    icon: "mdi mdi-electron-framework",
                },
                {
                    Skills: "Postman",
                    color: "orange",
                    icon: "mdi mdi-face-man-outline",
                },
            ],
        }
    },
    components: {
        Skills,
    }
}
</script>