<template>
  <div id="app" v-bind:style="{ transform }">
    <div class="react">
      <div class="top-border">
        <div class="left">
          <div v-for="i in [1,2,3,4,5]" :key="i" class="dot"></div>
        </div>
        <div class="right">
          <div v-for="i in [1,2,3,4,5]" :key="i" class="dot"></div>
        </div>
      </div>
      <div class="screen">
        <div class="panel">
          <t-matrix></t-matrix>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./viewmodel.ts" />
