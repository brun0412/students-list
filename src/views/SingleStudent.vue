<script setup>

import studentData from '../data';
import { useRoute } from 'vue-router';

const route=useRoute();

const studentId=parseInt(route.params.id);

const selectedStudent=studentData.find(student => student.id === studentId);

</script>

<template>

    <RouterLink class="badge badge-outline" to="/">Back to list</RouterLink>
    <div class="studentinfo flex flex-col items-center content-center">
        <div class="avatar">
            <div class="w-24 rounded">
                <img :src="selectedStudent.avatar" />
            </div>
        </div>
        <h1 class="text-2xl font-bold">name: {{ selectedStudent.firstName }} {{ selectedStudent.lastName }}</h1>
        <h3 class="badge badge-primary mb-2">email: {{ selectedStudent.email }}</h3>
        <h3  class="badge badge-primary badge-dash">Phone: {{ selectedStudent.phone }}</h3>
        <div class="list">
            <div class="list-row" v-for="course in selectedStudent.courses">
                {{ course.courseName }} - {{ course.courseCode }}
            </div>
        </div>
    </div>

</template>

<style scoped>

</style>