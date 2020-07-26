<template>
  <div>
    <div v-for="(row, r) in matrix" :key="r" class="row">
      <t-cell v-for="(cell, c) in row" :key="c" :state="cell"></t-cell>
    </div>
  </div>
</template>

<script lang="ts" src="./viewmodel.ts" />

