export default function manifest() {
  return {
    name: "Semil Khedawala",
    short_name: "Semil Khedawala",
    start_url: "/",
    display: "standalone",
    background_color: "#1E283A",
    theme_color: "#1E283A",
    icons: [
      {
        src: "/images/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/images/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
