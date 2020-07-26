<template>
  <div class="react">
    <t-border v-bind:types="classNames"></t-border>
    <div class="screen">
      <div class="panel">
        <t-matrix class="matrix" :matrix="$store.matrix.display"></t-matrix>
        <div class="info">
          <t-digit :score="0"></t-digit>
          <t-digit :level="1"></t-digit>
          <t-digit :speed="1"></t-digit>
          <t-block></t-block>
          <t-state></t-state>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./viewmodel.ts" />

