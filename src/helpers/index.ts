import { Site, Test } from "../types";

export const parseHostname = (s: string) =>
  new URL(s).hostname.replace(/^www\./, "");

export const mapTests = (sites: Site[], tests: Test[]) =>
  tests.map((test) => ({
    ...test,
    siteValue: sites.find((el) => el.id === test.siteId),
    site: parseHostname(sites.find((el) => el.id === test.siteId)?.url!),
  }));
