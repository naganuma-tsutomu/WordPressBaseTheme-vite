import { defineConfig } from "vite";
import liveReload from "vite-plugin-live-reload";
import { viteStaticCopy } from 'vite-plugin-static-copy'

export default defineConfig({
  plugins: [
    liveReload("./src/*.php"),
    viteStaticCopy({
      targets: [
        // // node_modulesのファイルをコピーする例
        // {
        //   src: "node_modules/chart.js/dist/chart.js",
        //   dest: "js/chart.js",
        // },
        // resourcesのファイルをコピーする例
        {
          src: "src/*", // ← 最後の*がないとpublic/build内のディレクトリがおかしくなる
          dest: "./",
        },
      ],
    }),
  ],
  build: {
    // outDir に .vite/manifest.json を出力
    manifest: true,
    rollupOptions: {
      // デフォルトの .html エントリーを上書き
      input: "./index.js",
    },
    outDir: "./dist",
  },
});
