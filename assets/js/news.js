(function () {
  const PRESS_DATA_URL = "assets/data/news.json";
  const TRAILER_DATA_URL = "assets/data/trailers.json";
  const fallbackData = window.GPUN_MEDIA_DATA || {};
  const dataFallbacks = {
    [PRESS_DATA_URL]: fallbackData.press,
    [TRAILER_DATA_URL]: fallbackData.trailers,
  };
  const useTrailerThumbnailLinks = window.location.protocol === "file:";
  const pressGrid = document.querySelector("[data-press-grid]");
  const pressStatus = document.querySelector("[data-press-status]");
  const trailerGrid = document.querySelector("[data-trailer-grid]");
  const trailerStatus = document.querySelector("[data-trailer-status]");

  if (!pressGrid && !trailerGrid) {
    return;
  }

  const formatDate = (value) => {
    if (!value) {
      return "";
    }

    const date = new Date(`${value}T00:00:00`);
    if (Number.isNaN(date.getTime())) {
      return value;
    }

    return new Intl.DateTimeFormat("ko-KR", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    }).format(date);
  };

  const setStatus = (element, message) => {
    if (!element) {
      return;
    }

    element.textContent = message;
    element.hidden = !message;
  };

  const setPressStatus = (message) => {
    setStatus(pressStatus, message);
  };

  const setTrailerStatus = (message) => {
    setStatus(trailerStatus, message);
  };

  const appendText = (parent, tagName, className, text) => {
    const element = document.createElement(tagName);
    if (className) {
      element.className = className;
    }
    element.textContent = text;
    parent.appendChild(element);
    return element;
  };

  const getYouTubeId = (item) => {
    if (item.videoId) {
      return item.videoId;
    }

    if (!item.url) {
      return "";
    }

    try {
      const parsed = new URL(item.url);
      if (parsed.hostname.includes("youtu.be")) {
        return parsed.pathname.replace("/", "");
      }

      if (parsed.hostname.includes("youtube.com")) {
        return parsed.searchParams.get("v") || "";
      }
    } catch {
      return "";
    }

    return "";
  };

  const normalizeItems = (payload) => {
    const rawItems = Array.isArray(payload) ? payload : payload.items;
    if (!Array.isArray(rawItems)) {
      return [];
    }

    return rawItems
      .filter((item) => item && item.visible !== false && item.title && item.url)
      .sort((a, b) => (Number(a.order) || 9999) - (Number(b.order) || 9999));
  };

  const loadFallbackItems = (dataUrl) => {
    const fallbackPayload = dataFallbacks[dataUrl];
    if (!fallbackPayload) {
      return null;
    }

    return normalizeItems(fallbackPayload);
  };

  const loadItems = (dataUrl) => {
    const fallbackItems = loadFallbackItems(dataUrl);
    if (window.location.protocol === "file:" && fallbackItems) {
      return Promise.resolve(fallbackItems);
    }

    return fetch(dataUrl, { cache: "no-store" }).then((response) => {
      if (!response.ok) {
        throw new Error(`Failed to load ${dataUrl}`);
      }
      return response.json();
    }).then(normalizeItems).catch((error) => {
      if (fallbackItems) {
        return fallbackItems;
      }

      throw error;
    });
  };

  const scrollToHashTarget = () => {
    if (!window.location.hash) {
      return;
    }

    const rawId = window.location.hash.slice(1);
    let targetId = rawId;

    try {
      targetId = decodeURIComponent(rawId);
    } catch {
      targetId = rawId;
    }

    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ block: "start" });
    }
  };

  const queueHashScroll = () => {
    requestAnimationFrame(scrollToHashTarget);
  };

  window.addEventListener("hashchange", queueHashScroll);

  const createPressCard = (item) => {
    const card = document.createElement("a");
    card.className = "news-card";
    card.href = item.url;
    card.target = "_blank";
    card.rel = "noopener noreferrer";

    const imageWrap = document.createElement("span");
    imageWrap.className = "news-card-image";

    if (item.thumbnail) {
      const image = document.createElement("img");
      image.src = item.thumbnail;
      image.alt = item.thumbnailAlt || "";
      image.loading = "lazy";
      imageWrap.appendChild(image);
    } else {
      imageWrap.classList.add("news-card-image-empty");
      imageWrap.setAttribute("aria-label", "No thumbnail");
    }

    const copy = document.createElement("span");
    copy.className = "news-card-copy";

    const meta = [item.category, item.source, formatDate(item.date)].filter(Boolean).join(" · ");
    appendText(copy, "span", "news-card-meta", meta || "PRESS");
    appendText(copy, "strong", "", item.title);
    appendText(copy, "span", "", item.summary || "");

    card.append(imageWrap, copy);
    return card;
  };

  const createTrailerCard = (item) => {
    const card = document.createElement("article");
    card.className = "trailer-card";

    const videoId = getYouTubeId(item);
    const thumbnail = item.thumbnail || (videoId ? `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg` : "");
    const videoWrap = document.createElement("div");
    videoWrap.className = "trailer-video";

    if (videoId && !useTrailerThumbnailLinks) {
      const iframe = document.createElement("iframe");
      iframe.src = `https://www.youtube-nocookie.com/embed/${videoId}`;
      iframe.title = item.title;
      iframe.loading = "lazy";
      iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
      iframe.allowFullscreen = true;
      videoWrap.appendChild(iframe);
    } else if (thumbnail) {
      const fallbackLink = document.createElement("a");
      fallbackLink.className = "trailer-thumb-link";
      fallbackLink.href = item.url;
      fallbackLink.target = "_blank";
      fallbackLink.rel = "noopener noreferrer";

      const image = document.createElement("img");
      image.src = thumbnail;
      image.alt = item.thumbnailAlt || item.title;
      image.loading = "lazy";
      fallbackLink.appendChild(image);
      videoWrap.appendChild(fallbackLink);
    } else {
      videoWrap.classList.add("trailer-video-empty");
      videoWrap.setAttribute("aria-label", "No video preview");
    }

    const copy = document.createElement("div");
    copy.className = "trailer-card-copy";

    const meta = [item.category, item.source, formatDate(item.date)].filter(Boolean).join(" · ");
    appendText(copy, "span", "news-card-meta", meta || "TRAILER");
    appendText(copy, "strong", "", item.title);
    appendText(copy, "span", "", item.summary || "");

    const link = document.createElement("a");
    link.className = "trailer-link";
    link.href = item.url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.textContent = "YouTube에서 보기";
    copy.appendChild(link);

    card.append(videoWrap, copy);
    return card;
  };

  if (pressGrid) {
    loadItems(PRESS_DATA_URL)
      .then((items) => {
        pressGrid.replaceChildren();

        if (!items.length) {
          pressGrid.classList.add("news-grid-empty");
          setPressStatus("표시할 프레스 자료가 없습니다.");
          return;
        }

        items.forEach((item) => {
          pressGrid.appendChild(createPressCard(item));
        });

        setPressStatus("");
      })
      .catch(() => {
        pressGrid.replaceChildren();
        setPressStatus("프레스 데이터를 불러오지 못했습니다. 잠시 후 다시 확인해 주세요.");
      })
      .finally(queueHashScroll);
  }

  if (trailerGrid) {
    loadItems(TRAILER_DATA_URL)
      .then((items) => {
        trailerGrid.replaceChildren();

        if (!items.length) {
          trailerGrid.classList.add("trailer-grid-empty");
          setTrailerStatus("표시할 트레일러가 없습니다.");
          return;
        }

        items.forEach((item) => {
          trailerGrid.appendChild(createTrailerCard(item));
        });

        setTrailerStatus("");
      })
      .catch(() => {
        trailerGrid.replaceChildren();
        setTrailerStatus("트레일러 데이터를 불러오지 못했습니다. 잠시 후 다시 확인해 주세요.");
      })
      .finally(queueHashScroll);
  }
})();
