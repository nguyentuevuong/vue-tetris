<template>
  <div class="control">
    <div class="pad">
      <div class="option">
        <t-button class="small pause" text="Pause(P)" v-on:click="pause"></t-button>
        <t-button class="small sound" text="Sound(S)" v-on:click="mute"></t-button>
        <t-button class="small reset" text="Reset(R)" v-on:click="reset"></t-button>
      </div>
      <div class="accept">
        <t-button class="large" text="Drop(SPACE)" v-on:click="drop"></t-button>
      </div>
    </div>
    <div class="joystick">
      <t-button class="left" icon="◀" v-on:click="left"></t-button>
      <t-button class="up" icon="↻" data-icon="▲" v-on:click="rotate"></t-button>
      <t-button class="right" icon="▶" v-on:click="right"></t-button>
      <t-button class="down" icon="▼" v-on:click="down"></t-button>
    </div>
  </div>
</template>

<script lang="ts" src="./viewmodel.ts" />
