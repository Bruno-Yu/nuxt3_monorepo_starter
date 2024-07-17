# Nuxt3 + TypeScript + Tailwind + Pinia + element-plus Monorepo starter

> Nuxt3 monorepo 開發模板 ( Nuxt3 + TypeScript + Tailwind + Pinia + element-plus ) Node18
## 注意事項: 
1. 此為 nuxt3 monorepo 專案，可使用共用的 repo 共享檔案，同時也可調用共用樣式 ui 元件 ( Nuxt3 layer 功能 )
2. 由於同時有 Tailwindcss 以及 element-plus 這兩個 css 框架，為避免樣式衝突，請小心管理此二者樣式
3. 此專案有加上自訂的本地圖片壓縮工具 compress，若需要設定對應壓縮斷點與樣式可在 compress-setting 中設定，搭配 CustomImg 使用
4. 承上由於有加上自訂的壓縮圖工具，目前圖檔預設需放置在 public/assets/img 中，其壓縮後的圖檔會放在 public/assets/compressImg
5. 承上說明，請使用 CustomImg 替代 img 可以有效壓縮圖片以避免載入過慢的問題

## 使用技術

1. Nuxt3
2. Node18
3. Typescript
4. Pinia ( 有加 pinia-plugin-persistedstate )
5. Tailwind
6. element-plus
7. mathjs
8. dayjs
9. i18n

## 使用 lint 風格
1. nuxt-lint

## 安裝指令

```bash
pnpm install
```

## 執行 app 開發環境

```bash
pnpm app dev
```

