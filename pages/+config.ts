import type { Config } from "vike/types";
import vikeReact from "vike-react/config";
import Layout from "../layouts/LayoutDefault.js";

// Default config (can be overridden by pages)
// https://vike.dev/config

export default {
  prerender: true,

  // https://vike.dev/Layout
  Layout,

  // https://vike.dev/head-tags
  title: "Wei's Profile",
  description: "Demo showcasing Vike",

  extends: [vikeReact],
} satisfies Config;
