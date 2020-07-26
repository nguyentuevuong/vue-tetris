<template>
  <div class="time">
    <span class="minute">{{ minute }}</span>
    <span class="dot" v-bind:class="{ 'active': dot, 'inactive': !dot }">:</span>
    <span class="secon">{{ secon }}</span>
  </div>
</template>

<script lang="ts" src="./viewmodel.ts" />
