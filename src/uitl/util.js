export function toHttps(url) {
    if (!url) {
        return url
    }
    return url.replace('http://', 'https://')
}