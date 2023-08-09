// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      title: "Kompack.id",
      meta: [
        {
          charset: "utf-8",
        },
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1",
        },
        { hid: "description", name: "description", content: "Kompack.id" },
        {
          name: "format-detection",
          content: "telephone=no",
        },
      ],
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Inter:wght@500&family=Poppins:ital,wght@0,400;0,500;0,600;1,400;1,700&display=swap",
        },
        {
          rel: "icon",
          type: "image/x-icon",
          href: "/favicon.icon",
        },
        {
          rel: "stylesheet",
          href: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css",
        },
      ],
      script: [
        {
          src: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js",
          type: "text/javascript",
        },
      ],
    },
  },
});
