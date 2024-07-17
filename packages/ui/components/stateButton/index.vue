<template>
  <div :class="`inline-block box-border py-2 px-2.5 border rounded border-solid  text-[14px] ${colorList[color]}`">
    <slot></slot>
  </div>
</template>
<script lang='ts' setup>

const {color} = defineProps({
  color: {
    type: String,
    default: 'blue',
  },
})

const colorList = {
  blue: 'text-[#4fa6ff] bg-[#ecf5ff]  border-[#dcedff]',
  grey: 'text-[#9c9bab] bg-[#f4f4f5] border-[#ececee]',
  green: 'text-[#6cc441] bg-[#f0f9eb] border-[#e2f3d9]',
  red: 'text-[#cf1010] bg-[#f9ebeb] border-[#f3d9d9]',
  orange: 'text-[#c48541] bg-[#f9f5eb] border-[#f3ebd9]',
}

</script>
<style lang='scss' scoped></style>