<template>
  <router-view />
</template>

<style>
body{
  font-size: 22px;
  line-height: 28px;
  height: 100vh;
  margin: 0;
}
::-webkit-scrollbar {
    width: 6px;
    height: 6px;
}
/* Track */
::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
    -webkit-border-radius: 6px;
    border-radius: 6px;
}
/* Handle */
::-webkit-scrollbar-thumb {
    -webkit-border-radius: 6px;
    border-radius: 6px;
    background: rgba(255,0,0,0.8);
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.5);
}
::-webkit-scrollbar-thumb:window-inactive {
    background: rgba(255,0,0,0.4);
}
#app {
  font-family: 'Roboto', 'PT Sans Caption', sans-serif;
  font-weight: 500;
  box-sizing: border-box;
  color: #000000;
}
</style>
