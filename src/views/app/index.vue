<template>
  <div class="app" v-bind:class="{mobile}" v-bind:style="{ transform }">
    <div class="title">{{ $store.name }}</div>
    <t-react></t-react>
    <t-control></t-control>
  </div>
</template>

<script lang="ts" src="./viewmodel.ts" />
