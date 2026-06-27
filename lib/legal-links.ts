export function legalPageHref(path: string, lang: string, searchParams: URLSearchParams) {
  const next = new URLSearchParams(searchParams.toString())
  next.set("lang", lang)
  const query = next.toString()
  return `${path}${query ? `?${query}` : ""}`
}
