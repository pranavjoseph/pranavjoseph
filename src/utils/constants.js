/// Constants
const rawSiteUrl = import.meta.env.VITE_SITE_URL || "https://pranavjoseph.com";

export const SITE_URL = rawSiteUrl.replace(/\/+$/, "");
export const DEFAULT_OG_IMAGE = `${SITE_URL}/preview.png`;
export const BASE_URL = import.meta.env.VITE_BASE_URL || "/";
