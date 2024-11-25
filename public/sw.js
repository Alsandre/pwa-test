if (!self.define) {
    let e,
        s = {};
    const n = (n, a) => (
        (n = new URL(n + ".js", a).href),
        s[n] ||
            new Promise((s) => {
                if ("document" in self) {
                    const e = document.createElement("script");
                    (e.src = n), (e.onload = s), document.head.appendChild(e);
                } else (e = n), importScripts(n), s();
            }).then(() => {
                let e = s[n];
                if (!e) throw new Error(`Module ${n} didn’t register its module`);
                return e;
            })
    );
    self.define = (a, c) => {
        const i = e || ("document" in self ? document.currentScript.src : "") || location.href;
        if (s[i]) return;
        let t = {};
        const r = (e) => n(e, i),
            o = { module: { uri: i }, exports: t, require: r };
        s[i] = Promise.all(a.map((e) => o[e] || r(e))).then((e) => (c(...e), t));
    };
}
define(["./workbox-4754cb34"], function (e) {
    "use strict";
    importScripts(),
        self.skipWaiting(),
        e.clientsClaim(),
        e.precacheAndRoute(
            [
                {
                    url: "/_next/app-build-manifest.json",
                    revision: "ef7c4fb485c6f3af8a55ed745bbf1b2c",
                },
                {
                    url: "/_next/static/USd8jRhqDIrsInHX64SHn/_buildManifest.js",
                    revision: "c155cce658e53418dec34664328b51ac",
                },
                {
                    url: "/_next/static/USd8jRhqDIrsInHX64SHn/_ssgManifest.js",
                    revision: "b6652df95db52feb4daf4eca35380933",
                },
                {
                    url: "/_next/static/chunks/117-f13dc4f3b1ab72a0.js",
                    revision: "USd8jRhqDIrsInHX64SHn",
                },
                {
                    url: "/_next/static/chunks/app/_not-found/page-4b9eb8aab41bf6df.js",
                    revision: "USd8jRhqDIrsInHX64SHn",
                },
                {
                    url: "/_next/static/chunks/app/layout-39e719f96898eb87.js",
                    revision: "USd8jRhqDIrsInHX64SHn",
                },
                {
                    url: "/_next/static/chunks/app/page-fe8e09713698776c.js",
                    revision: "USd8jRhqDIrsInHX64SHn",
                },
                {
                    url: "/_next/static/chunks/fd9d1056-49ca28257eb7a92c.js",
                    revision: "USd8jRhqDIrsInHX64SHn",
                },
                {
                    url: "/_next/static/chunks/framework-f66176bb897dc684.js",
                    revision: "USd8jRhqDIrsInHX64SHn",
                },
                {
                    url: "/_next/static/chunks/main-app-e7252d6284f1375c.js",
                    revision: "USd8jRhqDIrsInHX64SHn",
                },
                {
                    url: "/_next/static/chunks/main-e079d33f27af3a10.js",
                    revision: "USd8jRhqDIrsInHX64SHn",
                },
                {
                    url: "/_next/static/chunks/pages/_app-72b849fbd24ac258.js",
                    revision: "USd8jRhqDIrsInHX64SHn",
                },
                {
                    url: "/_next/static/chunks/pages/_error-7ba65e1336b92748.js",
                    revision: "USd8jRhqDIrsInHX64SHn",
                },
                {
                    url: "/_next/static/chunks/polyfills-42372ed130431b0a.js",
                    revision: "846118c33b2c0e922d7b3a7676f81f6f",
                },
                {
                    url: "/_next/static/chunks/webpack-fb23b048da25670c.js",
                    revision: "USd8jRhqDIrsInHX64SHn",
                },
                { url: "/_next/static/css/371086c97ce8e88c.css", revision: "371086c97ce8e88c" },
                {
                    url: "/_next/static/media/4473ecc91f70f139-s.p.woff",
                    revision: "78e6fc13ea317b55ab0bd6dc4849c110",
                },
                { url: "/apple-touch-icon.png", revision: "5b3bb5b1acd5faadbc03b424a0dedf8f" },
                { url: "/desktop-screenshot.png", revision: "e5b4b665faaac39a4a81e3d001d75de1" },
                { url: "/favicon-96x96.png", revision: "32f27dfc036315af9ad3674a16fd1a84" },
                { url: "/favicon.ico", revision: "a0b11b16eba33237478c841caaee4605" },
                { url: "/favicon.svg", revision: "e418ced03745923ca4a45609188df3f5" },
                { url: "/icon-144x144.png", revision: "ca2ec8414c89f61e0adaaa2fcc52b0c7" },
                { url: "/icon-192x192.png", revision: "7f44a34f2e6550a296e6b7a414184f76" },
                { url: "/icon-512x512.png", revision: "9ebda3f785ac70616d77d83b1cc0ab30" },
                { url: "/manifest.json", revision: "4ac509fac211ecc97ad229281bb4c47b" },
                { url: "/mobile-screenshot.png", revision: "05e845e6cb884caaca720c0ae2dacb71" },
            ],
            { ignoreURLParametersMatching: [] },
        ),
        e.cleanupOutdatedCaches(),
        e.registerRoute(
            "/",
            new e.NetworkFirst({
                cacheName: "start-url",
                plugins: [
                    {
                        cacheWillUpdate: async ({ request: e, response: s, event: n, state: a }) =>
                            s && "opaqueredirect" === s.type
                                ? new Response(s.body, {
                                      status: 200,
                                      statusText: "OK",
                                      headers: s.headers,
                                  })
                                : s,
                    },
                ],
            }),
            "GET",
        ),
        e.registerRoute(
            /^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,
            new e.CacheFirst({
                cacheName: "google-fonts-webfonts",
                plugins: [new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 31536e3 })],
            }),
            "GET",
        ),
        e.registerRoute(
            /^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,
            new e.StaleWhileRevalidate({
                cacheName: "google-fonts-stylesheets",
                plugins: [new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 })],
            }),
            "GET",
        ),
        e.registerRoute(
            /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
            new e.StaleWhileRevalidate({
                cacheName: "static-font-assets",
                plugins: [new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 })],
            }),
            "GET",
        ),
        e.registerRoute(
            /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
            new e.StaleWhileRevalidate({
                cacheName: "static-image-assets",
                plugins: [new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 })],
            }),
            "GET",
        ),
        e.registerRoute(
            /\/_next\/image\?url=.+$/i,
            new e.StaleWhileRevalidate({
                cacheName: "next-image",
                plugins: [new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 })],
            }),
            "GET",
        ),
        e.registerRoute(
            /\.(?:mp3|wav|ogg)$/i,
            new e.CacheFirst({
                cacheName: "static-audio-assets",
                plugins: [
                    new e.RangeRequestsPlugin(),
                    new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
                ],
            }),
            "GET",
        ),
        e.registerRoute(
            /\.(?:mp4)$/i,
            new e.CacheFirst({
                cacheName: "static-video-assets",
                plugins: [
                    new e.RangeRequestsPlugin(),
                    new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
                ],
            }),
            "GET",
        ),
        e.registerRoute(
            /\.(?:js)$/i,
            new e.StaleWhileRevalidate({
                cacheName: "static-js-assets",
                plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })],
            }),
            "GET",
        ),
        e.registerRoute(
            /\.(?:css|less)$/i,
            new e.StaleWhileRevalidate({
                cacheName: "static-style-assets",
                plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })],
            }),
            "GET",
        ),
        e.registerRoute(
            /\/_next\/data\/.+\/.+\.json$/i,
            new e.StaleWhileRevalidate({
                cacheName: "next-data",
                plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })],
            }),
            "GET",
        ),
        e.registerRoute(
            /\.(?:json|xml|csv)$/i,
            new e.NetworkFirst({
                cacheName: "static-data-assets",
                plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })],
            }),
            "GET",
        ),
        e.registerRoute(
            ({ url: e }) => {
                if (!(self.origin === e.origin)) return !1;
                const s = e.pathname;
                return !s.startsWith("/api/auth/") && !!s.startsWith("/api/");
            },
            new e.NetworkFirst({
                cacheName: "apis",
                networkTimeoutSeconds: 10,
                plugins: [new e.ExpirationPlugin({ maxEntries: 16, maxAgeSeconds: 86400 })],
            }),
            "GET",
        ),
        e.registerRoute(
            ({ url: e }) => {
                if (!(self.origin === e.origin)) return !1;
                return !e.pathname.startsWith("/api/");
            },
            new e.NetworkFirst({
                cacheName: "others",
                networkTimeoutSeconds: 10,
                plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })],
            }),
            "GET",
        ),
        e.registerRoute(
            ({ url: e }) => !(self.origin === e.origin),
            new e.NetworkFirst({
                cacheName: "cross-origin",
                networkTimeoutSeconds: 10,
                plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 3600 })],
            }),
            "GET",
        );
});
