import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

export default {
    // Consult https://svelte.dev/docs#compile-time-svelte-preprocess
    // for more information about preprocessors
    compilerOptions: {
        compatibility: {
            componentApi: 4, // 👈 Aktifkan support untuk `new App()`
        },
    },
    preprocess: vitePreprocess(),
};
