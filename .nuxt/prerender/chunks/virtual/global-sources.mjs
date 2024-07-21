const sources = [
    {
        "context": {
            "name": "sitemap:urls",
            "description": "Set with the `sitemap.urls` config."
        },
        "urls": [],
        "sourceType": "user"
    },
    {
        "context": {
            "name": "nuxt:pages",
            "description": "Generated from your static page files.",
            "tips": [
                "Can be disabled with `{ excludeAppSources: ['nuxt:pages'] }`."
            ]
        },
        "urls": [
            {
                "loc": "/akciok"
            },
            {
                "loc": "/dekoracio"
            },
            {
                "loc": "/fuggony"
            },
            {
                "loc": "/"
            },
            {
                "loc": "/kapcsolat"
            },
            {
                "loc": "/lakastextil"
            },
            {
                "loc": "/rovidaru"
            },
            {
                "loc": "/sotetito"
            }
        ],
        "sourceType": "app"
    },
    {
        "context": {
            "name": "nuxt:prerender",
            "description": "Generated at build time when prerendering.",
            "tips": [
                "Can be disabled with `{ excludeAppSources: ['nuxt:prerender'] }`."
            ]
        },
        "urls": [
            {
                "loc": "/rovidaru"
            },
            {
                "loc": "/fuggony"
            },
            {
                "loc": "/dekoracio"
            },
            {
                "loc": "/"
            },
            {
                "loc": "/lakastextil"
            },
            {
                "loc": "/akciok"
            },
            {
                "loc": "/kapcsolat"
            },
            {
                "loc": "/sotetito"
            }
        ],
        "sourceType": "app"
    }
];

export { sources };
//# sourceMappingURL=global-sources.mjs.map
