<template>
  <div class="button">
    <button @click="(evt) => $emit('click', evt)">{{icon}}</button>
    <div v-if="text">{{text}}</div>
    <template v-else></template>
  </div>
</template>

<script lang="ts" src="./viewmodel.ts" />
