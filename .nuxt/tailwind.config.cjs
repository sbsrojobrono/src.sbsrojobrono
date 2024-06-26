// generated by the @nuxtjs/tailwindcss <https://github.com/nuxt-modules/tailwindcss> module at 5/1/2024, 1:26:29 PM
const configMerger = require("/workspaces/src.sbsrojobrono/node_modules/@nuxtjs/tailwindcss/dist/runtime/merger.mjs");

const inlineConfig = {"content":[],"theme":{"extend":{}},"plugins":[]};

const config = [
require("./../tailwind.config.js")
].reduce((prev, curr) => configMerger(curr, prev), configMerger(inlineConfig, { content: ["/workspaces/src.sbsrojobrono/components/**/*.{vue,js,jsx,mjs,ts,tsx}","/workspaces/src.sbsrojobrono/components/global/**/*.{vue,js,jsx,mjs,ts,tsx}","/workspaces/src.sbsrojobrono/components/**/*.{vue,js,jsx,mjs,ts,tsx}","/workspaces/src.sbsrojobrono/layouts/**/*.{vue,js,jsx,mjs,ts,tsx}","/workspaces/src.sbsrojobrono/pages/**/*.{vue,js,jsx,mjs,ts,tsx}","/workspaces/src.sbsrojobrono/plugins/**/*.{js,ts,mjs}","/workspaces/src.sbsrojobrono/composables/**/*.{js,ts,mjs}","/workspaces/src.sbsrojobrono/utils/**/*.{js,ts,mjs}","/workspaces/src.sbsrojobrono/{A,a}pp.{vue,js,jsx,mjs,ts,tsx}","/workspaces/src.sbsrojobrono/{E,e}rror.{vue,js,jsx,mjs,ts,tsx}","/workspaces/src.sbsrojobrono/app.config.{js,ts,mjs}"] }));

module.exports = (() => {const cfg=config;cfg["plugins"]["0"] = {};;return cfg;})()
