import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { DEFAULT_OG_IMAGE, SITE_URL } from "../utils/constants";

function normalizePath(path) {
  if (!path || path === "/") return "/";
  const ensuredLeadingSlash = path.startsWith("/") ? path : `/${path}`;
  return ensuredLeadingSlash.replace(/\/+$/, "");
}

function buildCanonical(path) {
  const normalizedPath = normalizePath(path);
  return normalizedPath === "/" ? `${SITE_URL}/` : `${SITE_URL}${normalizedPath}`;
}

function updateMeta(attribute, name, content) {
  const head = document.head;
  if (!head) return;

  const selector = `meta[${attribute}="${name}"]`;
  let tag = head.querySelector(selector);

  if (!content) {
    if (tag) tag.remove();
    return;
  }

  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(attribute, name);
    head.appendChild(tag);
  }

  tag.setAttribute("content", content);
}

function updateCanonicalLink(href) {
  const head = document.head;
  if (!head) return;

  let link = head.querySelector("link[rel='canonical']");

  if (!href) {
    if (link) link.remove();
    return;
  }

  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", "canonical");
    head.appendChild(link);
  }

  link.setAttribute("href", href);
}

function SEO({ title, description, keywords, canonicalPath, image = DEFAULT_OG_IMAGE, type = "website", noindex = false }) {
  const location = useLocation();

  useEffect(() => {
    const canonicalUrl = buildCanonical(canonicalPath || location.pathname);

    if (title) {
      document.title = title;
    }

    updateMeta("name", "description", description);
    updateMeta("name", "keywords", keywords);
    updateMeta("name", "robots", noindex ? "noindex, nofollow" : null);

    updateMeta("property", "og:title", title);
    updateMeta("property", "og:description", description);
    updateMeta("property", "og:type", type);
    updateMeta("property", "og:url", canonicalUrl);
    updateMeta("property", "og:image", image);

    updateCanonicalLink(canonicalUrl);
  }, [title, description, keywords, canonicalPath, location.pathname, image, type, noindex]);

  return null;
}

export default SEO;
