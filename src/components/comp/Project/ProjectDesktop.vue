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
                            <v-flex lg2 class="d-flex justify-center">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7gkUHkp7pdOsVOmGB_KJ2ILaluxfkrPUdY2k30dDrTg&s"
                                    alt="Fortune Logo" height="80px" class="elevation-7" />
                            </v-flex>
                            <v-flex lg11 class="ml-0 mt-2">
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
                            <v-list-item>
                                <v-list-item-content :class="TextBold" class="text-sm-body-2 text-wrap pa-0">
                                    Worked on multiple web and app-based projects,
                                    utilizing Golang, Vue.js, and SQL to
                                    implement various features. Key Projects & Contributions:

                                    <ul style="padding-top: 10px;">
                                        <li class="my-2">Staff Mapping: Developed a staff addition screen using CRUD
                                            operations for
                                            employee
                                            database management.</li>
                                        <li class="my-2">
                                            Ledger Screen: Designed a ledger display screen for client details,
                                            implementing
                                            Go
                                            routines for improved performance.
                                        </li>

                                        <li class="my-2">API Token History Screen & Address Change: Contributed to API
                                            screens and
                                            address
                                            verification modules in the Wall application.</li>

                                        <li class="my-2">Scheduler Development: Developed Golang-based schedulers for
                                            syncing Bhav
                                            copy,
                                            surveillance alerts, and fund movements.</li>

                                        <li class="my-2">Surveillance Application: Designed UI for actions taken and
                                            improved
                                            workflow
                                            efficiency.</li>

                                        <li class="my-2">Move Fund Enhancement: Enhanced fund transfer process between
                                            MCX and NCL
                                            using
                                            REST
                                            APIs and routing.</li>

                                        <span class="my-2 text-lg-h6 font-weight-bold">Self-Projects</span>
                                        <li class="my-2">Med App: Developed a medical shop management app using Golang,
                                            Vue.js, and
                                            SQL.
                                            Portfolio Website: Built a personal portfolio website showcasing my skills
                                            and
                                            projects
                                            with Vue.js.</li>
                                        <li class="my-2">Todo List & Weather App: Created a todo list and weather
                                            application using
                                            Vue.js
                                            and Golang.</li>

                                        <span class="my-2 text-lg-h6 font-weight-bold">Company Projects</span>
                                        <li class="my-2"> BO & FO Data Sync Service: Implemented synchronization of
                                            client details
                                            using
                                            Go
                                            routines, PostgreSQL, MSSQL, and MySQL. Developed error handling and re-push
                                            functionality.</li>
                                        <li class="my-2">Steps Application: Introduced and implemented GORM for data
                                            handling,
                                            created an
                                            ORS
                                            portal for bug tracking, and managed project development using Agile
                                            methodologies</li>
                                    </ul>
                                </v-list-item-content>
                            </v-list-item>


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