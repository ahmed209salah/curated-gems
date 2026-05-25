// Tiny helper to set <title>, meta description, and OG tags from React effects.
export function setPageMeta({
  title,
  description,
  url,
}: {
  title: string;
  description: string;
  url?: string;
}) {
  if (typeof document === "undefined") return;
  document.title = title;

  const ensureMeta = (selector: string, create: () => HTMLMetaElement) => {
    let el = document.head.querySelector<HTMLMetaElement>(selector);
    if (!el) {
      el = create();
      document.head.appendChild(el);
    }
    return el;
  };

  const desc = ensureMeta('meta[name="description"]', () => {
    const m = document.createElement("meta");
    m.name = "description";
    return m;
  });
  desc.setAttribute("content", description);

  const ogTitle = ensureMeta('meta[property="og:title"]', () => {
    const m = document.createElement("meta");
    m.setAttribute("property", "og:title");
    return m;
  });
  ogTitle.setAttribute("content", title);

  const ogDesc = ensureMeta('meta[property="og:description"]', () => {
    const m = document.createElement("meta");
    m.setAttribute("property", "og:description");
    return m;
  });
  ogDesc.setAttribute("content", description);

  const twTitle = ensureMeta('meta[name="twitter:title"]', () => {
    const m = document.createElement("meta");
    m.name = "twitter:title";
    return m;
  });
  twTitle.setAttribute("content", title);

  const twDesc = ensureMeta('meta[name="twitter:description"]', () => {
    const m = document.createElement("meta");
    m.name = "twitter:description";
    return m;
  });
  twDesc.setAttribute("content", description);

  if (url) {
    const ogUrl = ensureMeta('meta[property="og:url"]', () => {
      const m = document.createElement("meta");
      m.setAttribute("property", "og:url");
      return m;
    });
    ogUrl.setAttribute("content", url);
  }
}
