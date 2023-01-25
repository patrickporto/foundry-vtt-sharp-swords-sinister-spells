import { SHARPSWORDSSINISTERSPELLS } from "./constants.js";

Hooks.on("init", async () => {
    (CONFIG as any).SHARPSWORDSSINISTERSPELLS = SHARPSWORDSSINISTERSPELLS
});

Hooks.on("ready", async () => {
    console.log("This code runs once core initialization is ready and game data is available.");
});
