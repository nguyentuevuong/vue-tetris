<template>
  <div class="state">
    <div class="speaker" :class="{ 'on': !$store.mute, 'off': $store.mute }"></div>
    <div class="pause" :class="{ 'active': $store.pause, 'inactive': !$store.pause }"></div>
    <t-time></t-time>
  </div>
</template>

<script lang="ts" src="./viewmodel.ts" />
