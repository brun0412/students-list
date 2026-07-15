<script setup>

import studentData from '../data';
import { RouterLink } from 'vue-router';

</script>

<template>

    <main class="container mx-auto px-4 py-8">
        <h1 class="text-3xl font-semibold">Students List</h1>

        <div class="overflow-x-auto">
            <table class="table">
                <!-- head -->
                <thead>
                <tr>
                    <th>Full Name</th>
                    <th>Student Number</th>
                </tr>
                </thead>
                <tbody>
                    <tr v-for="student in studentData">
                        <td>
                            <RouterLink :to="`/student/${student.id}`">
                                {{ student.firstName }} {{ student.lastName }}
                            </RouterLink>
                        </td>
                        <td>
                            <RouterLink :to="`/student/${student.id}`">
                                {{ student.studentNumber }}
                            </RouterLink>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </main>

</template>

<style scoped>

</style>