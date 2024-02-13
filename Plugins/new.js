const axios = require("axios");

let mergedCommands = [
    "hi",
    "alive",
];

module.exports = {
    name: "new",
    alias: [...mergedCommands],
    uniquecommands: [
        "hi",
        "alive",
    ],
    description: "All new Commands",
    start: async (
        Atlas,
        m,
        {
            text, args, prefix, inputCMD, mentionedJid, mentionByTag, doReact
        }
    ) => {
        function randomNumberPicker(min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min);
        }
        switch (inputCMD) {
            case "hi":
                await doReact("👋");
                const hi = [
                    "Hi There I Am *Sizuka*. A Whatsapp Bot Modified By Ironman",
                ];
                const hiData = hi[Math.floor(Math.random() * hi.length)];

                await Atlas.sendMessage(
                    m.from,
                    {
                        image: {
                            url: botImage3
                        }, caption: `*${hi}*`
                    },
                    {
                        quoted: m
                    }
                );
                break;

            case "alive":
                await doReact("👀");
                const alive = [
                    "Hey Dear User I am *Alive*",
                ];

                const aliveData = alive[Math.floor(Math.random() * alive.length)];

                await Atlas.sendMessage(
                    m.from,
                    {
                        image: {
                            url: botImage3
                        }, caption: `*${alive}*`
                    },
                    {
                        quoted: m
                    }
                );
                break;
        }
    },
};
#81FF00