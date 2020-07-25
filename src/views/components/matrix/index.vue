<template>
  <div class="matrix">
    <div v-for="(row, r) in data" :key="r" class="row">
      <t-cell v-for="(cell, c) in row" :key="c"></t-cell>
    </div>
  </div>
</template>

<script lang="ts" src="./viewmodel.ts" />

