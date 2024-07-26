<template>
    <div :style="BG_Color">

        <div class="d-none d-lg-flex d-xl-none d-none d-xl-flex">
            <NaviDesktop />
            <v-container class="mt-10">
                <ProfileDestop />
                <SkillDestop />
                <ExperienceDesktop />
                <ProjectDesktop />
                <EducationDesktop />
                <Contact />
            </v-container>
        </div>

        <div class="d-flex d-sm-none d-none d-sm-flex d-md-none">
            <NaviMobile />
            <v-flex xs12 sm12>
                <v-flex>
                    <ProfileMobile />
                </v-flex>
                <v-flex>
                    <SkillMobile />
                </v-flex>
                <v-flex>
                    <ExperienceMobile />
                </v-flex>
                <v-flex>
                    <EducationMobile />
                </v-flex>
            </v-flex>
        </div>

    </div>
</template>


<script>

import NaviDesktop from './comp/Navigation/NaviDesktop.vue'
import NaviMobile from './comp/Navigation/NaviMobile.vue';

import ProfileDestop from './comp/ProfilePic/ProfileDestop.vue'
import ProfileMobile from './comp/ProfilePic/ProfileMobile.vue';

import SkillDestop from './comp/Skills/SkillDestop.vue'
import SkillMobile from './comp/Skills/SkillMobile.vue';

import ExperienceDesktop from './comp/Experience/ExperienceDesktop.vue';
import ExperienceMobile from './comp/Experience/ExperienceMobile.vue';

import ProjectDesktop from './comp/Project/ProjectDesktop.vue';

import EducationDesktop from './comp/Education/EducationDestop.vue';
import EducationMobile from './comp/Education/EducationMobile.vue';

import Contact from './comp/Contact/ContactDesktop.vue'

export default {
    data() {
        return {
            BG_Color: "background-color:" + this.$store.state.BG_Color
        }
    },
    components: {
        NaviDesktop,
        NaviMobile,
        ProfileDestop,
        ProfileMobile,
        SkillDestop,
        SkillMobile,
        ExperienceDesktop,
        ExperienceMobile,
        ProjectDesktop,
        EducationDesktop,
        EducationMobile,
        Contact
    }
}

</script>


<style>
/* width */
::-webkit-scrollbar {
    width: 2px;
}

/* Track */
::-webkit-scrollbar-track {
    background: #bcbbbb;
}

/* Handle */
::-webkit-scrollbar-thumb {
    background: #888;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
    background: #555;
}
</style>