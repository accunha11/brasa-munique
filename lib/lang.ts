export type Lang = "en" | "pt" | "de"

export function parseLang(param: string | null): Lang {
  return param === "pt" || param === "de" || param === "en" ? param : "pt"
}
