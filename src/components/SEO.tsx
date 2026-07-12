import { useEffect } from "react";
import { useLocation } from "react-router-dom";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalPath?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogType?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  twitterCard?: string;
  noindex?: boolean;
  schema?: Record<string, any> | Record<string, any>[];
  preloadImages?: string[];
}

export default function SEO({
  title,
  description,
  keywords,
  canonicalPath,
  ogTitle,
  ogDescription,
  ogImage,
  ogType = "website",
  twitterTitle,
  twitterDescription,
  twitterImage,
  twitterCard = "summary_large_image",
  noindex = false,
  schema,
  preloadImages,
}: SEOProps) {
  const location = useLocation();
  const siteUrl = "https://www.kanmanireadymades.in";
  
  // Format canonical path: strip trailing slash except for root path
  let formattedPath = location.pathname;
  if (formattedPath.endsWith("/") && formattedPath.length > 1) {
    formattedPath = formattedPath.slice(0, -1);
  }
  
  const currentCanonicalUrl = canonicalPath 
    ? `${siteUrl}${canonicalPath}` 
    : `${siteUrl}${formattedPath === "/" ? "" : formattedPath}`;

  useEffect(() => {
    // 1. Title
    document.title = title;

    // Helper to set/update meta tag
    const updateMeta = (nameAttr: string, nameValue: string, content: string | undefined) => {
      if (content === undefined) return;
      let el = document.querySelector(`meta[${nameAttr}="${nameValue}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(nameAttr, nameValue);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    // Helper to set/update link tag
    const updateLink = (rel: string, href: string | undefined) => {
      if (href === undefined) return;
      let el = document.querySelector(`link[rel="${rel}"]`);
      if (!el) {
        el = document.createElement("link");
        el.setAttribute("rel", rel);
        document.head.appendChild(el);
      }
      el.setAttribute("href", href);
    };

    // 2. Robots
    updateMeta("name", "robots", noindex ? "noindex, nofollow" : "index, follow");

    // 3. Primary SEO Description & Keywords
    updateMeta("name", "description", description);
    if (keywords) {
      updateMeta("name", "keywords", keywords);
    } else {
      // Remove keywords if not provided (avoid stale tags)
      const kwEl = document.querySelector('meta[name="keywords"]');
      if (kwEl) kwEl.remove();
    }

    // 4. Canonical URL
    updateLink("canonical", currentCanonicalUrl);

    // 5. Open Graph Meta Tags
    updateMeta("property", "og:title", ogTitle || title);
    updateMeta("property", "og:description", ogDescription || description);
    updateMeta("property", "og:url", currentCanonicalUrl);
    updateMeta("property", "og:type", ogType);
    updateMeta("property", "og:image", ogImage || `${siteUrl}/apple-touch-icon.png`);

    // 6. Twitter Meta Tags
    updateMeta("name", "twitter:title", twitterTitle || ogTitle || title);
    updateMeta("name", "twitter:description", twitterDescription || ogDescription || description);
    updateMeta("name", "twitter:image", twitterImage || ogImage || `${siteUrl}/apple-touch-icon.png`);
    updateMeta("name", "twitter:card", twitterCard);

    // 7. Structured Data (JSON-LD)
    const scriptId = "jsonld-structured-data";
    let script = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (schema) {
      if (!script) {
        script = document.createElement("script");
        script.id = scriptId;
        script.type = "application/ld+json";
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(schema);
    } else {
      if (script) {
        script.remove();
      }
    }

    // 8. Dynamic Image Preloading
    const preloadedEls: HTMLLinkElement[] = [];
    if (preloadImages && preloadImages.length > 0) {
      preloadImages.forEach((imgUrl) => {
        // Only preload if not already preloaded
        if (!document.querySelector(`link[rel="preload"][href="${imgUrl}"]`)) {
          const link = document.createElement("link");
          link.rel = "preload";
          link.as = "image";
          link.href = imgUrl;
          document.head.appendChild(link);
          preloadedEls.push(link);
        }
      });
    }

    // Clean up injected preloads on unmount/update
    return () => {
      preloadedEls.forEach((link) => {
        if (link.parentNode) {
          link.parentNode.removeChild(link);
        }
      });
    };
  }, [
    title,
    description,
    keywords,
    currentCanonicalUrl,
    ogTitle,
    ogDescription,
    ogImage,
    ogType,
    twitterTitle,
    twitterDescription,
    twitterImage,
    twitterCard,
    noindex,
    schema,
    siteUrl,
    preloadImages,
  ]);

  return null;
}

