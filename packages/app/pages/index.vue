<template>
  <div class="flex flex-col justify-center items-center h-screen gap-10">
    <div>
      <h1 class="text-3xl font-bold text-green-600 gap-1"> Nuxt3 monorepo 專案模板</h1>
      <a class="block text-green-600 text-center" href="">tailwind & element-plus 模板 </a>
    </div>
    <div class="flex justify-center gap-3">
      <button type="button" class="rounded py-1 px-2 mx-1 bg-red-600 border-red-800 hover:bg-red-700 hover:border-red-800">tailwindcss</button>
      <UiStateButton :color="'blue'">from ui component</UiStateButton>
      <el-button type="primary" @click="navigateTo('/one')" >go to page one</el-button>
    </div>
  </div>
 
</template>

<style lang="scss" scoped></style>
