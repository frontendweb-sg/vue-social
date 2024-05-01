<template>
  <div class="grid h-screen grid-cols-2">
    <div class="col flex justify-center items-center flex-col">
      <slot name="left" />
    </div>
    <div class="col relative flex items-center justify-center">
      <slot name="right" />
    </div>
  </div>
</template>