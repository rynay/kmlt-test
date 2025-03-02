export const parseHostname = (s: string) => (
    new URL(s).hostname.replace(/^www\./, '')
)