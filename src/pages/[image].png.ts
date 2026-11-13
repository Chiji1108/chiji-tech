import type { APIRoute, GetStaticPaths } from "astro";
import { ImageResponse } from "takumi-js/response";
import me from "@/assets/me.jpg?inline";

// The favicon, the home-screen icon and the card every page shares, all
// drawn from the one photo at build time. Takumi's built-in font is Geist,
// the site's own.
const images = {
  favicon: {
    width: 96,
    height: 96,
    html: `<img src="${me}" tw="h-full w-full rounded-full">`,
  },
  // iOS rounds the corners itself.
  "apple-touch-icon": {
    width: 180,
    height: 180,
    html: `<img src="${me}" tw="h-full w-full">`,
  },
  og: {
    width: 1200,
    height: 630,
    html: `<div tw="flex h-full w-full flex-col items-center justify-center bg-zinc-50">
      <img src="${me}" tw="h-60 w-60 rounded-full border-8 border-zinc-200">
      <div tw="mt-10 font-semibold text-7xl text-zinc-900 tracking-tight">Shingo Chijiiwa</div>
      <div tw="mt-5 text-3xl text-zinc-500 tracking-widest">CHIJI TECH</div>
    </div>`,
  },
};

export const getStaticPaths: GetStaticPaths = () =>
  Object.entries(images).map(([image, props]) => ({
    params: { image },
    props,
  }));

export const GET: APIRoute<(typeof images)[keyof typeof images]> = ({
  props: { html, ...size },
}) => new ImageResponse(html, size);
