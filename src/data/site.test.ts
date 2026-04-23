import { describe, it, expect } from "vitest";
import { club, meeting, costs, links, benefits, meetingFormat, faqs, nav, seo } from "./site";

const httpUrl = /^https?:\/\/\S+$/;

describe("club", () => {
  it("has required identity fields", () => {
    expect(club.name).toMatch(/Marbella/);
    expect(club.clubNumber).toBe("5183");
    expect(club.city).toBe("Marbella");
    expect(club.country).toBe("Spain");
  });

  it("does not expose an area field", () => {
    expect("area" in (club as Record<string, unknown>)).toBe(false);
  });
});

describe("meeting", () => {
  it("has a valid schedule", () => {
    expect(meeting.day).toBe("Wednesday");
    expect(meeting.startTime).toMatch(/^\d{2}:\d{2}$/);
    expect(meeting.arriveBy).toMatch(/^\d{2}:\d{2}$/);
    expect(meeting.durationMinutes).toBeGreaterThan(0);
  });

  it("has geo coordinates for Marbella", () => {
    expect(meeting.geo.latitude).toBeGreaterThan(36);
    expect(meeting.geo.latitude).toBeLessThan(37);
    expect(meeting.geo.longitude).toBeGreaterThan(-5);
    expect(meeting.geo.longitude).toBeLessThan(-4);
  });

  it("has valid map and directions URLs", () => {
    expect(meeting.mapEmbedSrc).toMatch(httpUrl);
    expect(meeting.directionsUrl).toMatch(httpUrl);
  });
});

describe("costs", () => {
  it("documents all fee components", () => {
    expect(costs.intlDuesAmount).toBeTruthy();
    expect(costs.localFeeAmount).toBeTruthy();
    expect(costs.joiningFeeAmount).toBeTruthy();
    expect(costs.headline).toBeTruthy();
  });
});

describe("links", () => {
  it("all href values are valid http(s) URLs", () => {
    for (const [key, link] of Object.entries(links)) {
      expect(link.href, `links.${key}.href`).toMatch(httpUrl);
      expect(link.label, `links.${key}.label`).toBeTruthy();
    }
  });

  it("toastmasters directory uses the short club number", () => {
    expect(links.toastmastersDirectory.href).toContain("5183");
    expect(links.toastmastersDirectory.href).not.toContain("00005183");
  });
});

describe("content collections", () => {
  it("benefits are non-empty and have title + body", () => {
    expect(benefits.length).toBeGreaterThan(0);
    for (const b of benefits) {
      expect(b.title).toBeTruthy();
      expect(b.body).toBeTruthy();
    }
  });

  it("meetingFormat entries are complete", () => {
    expect(meetingFormat.length).toBeGreaterThan(0);
    for (const m of meetingFormat) {
      expect(m.title).toBeTruthy();
      expect(m.body).toBeTruthy();
    }
  });

  it("faqs are complete", () => {
    expect(faqs.length).toBeGreaterThan(0);
    for (const f of faqs) {
      expect(f.q).toBeTruthy();
      expect(f.a).toBeTruthy();
    }
  });
});

describe("nav", () => {
  it("entries use anchor hrefs", () => {
    expect(nav.length).toBeGreaterThan(0);
    for (const n of nav) {
      expect(n.href.startsWith("#"), `nav href ${n.href}`).toBe(true);
      expect(n.label).toBeTruthy();
    }
  });
});

describe("seo", () => {
  it("has required SEO fields", () => {
    expect(seo.title).toBeTruthy();
    expect(seo.description).toBeTruthy();
    expect(seo.keywords.length).toBeGreaterThan(0);
    expect(seo.ogImage.startsWith("/")).toBe(true);
  });
});
