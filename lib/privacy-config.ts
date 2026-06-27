export const privacyConfig = {
  websiteUrl: "https://brasamunique.de",
  hosting: {
    provider: "GitHub, Inc.",
    service: "GitHub Pages",
    privacyUrl:
      "https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement",
  },
  supervisoryAuthority: {
    name: "Bayerisches Landesamt für Datenschutzaufsicht (BayLDA)",
    address: "Promenade 18, 91522 Ansbach, Deutschland",
    website: "https://www.lda.bayern.de",
  },
  externalServices: {
    orbi: {
      name: "Orbi",
      url: "https://go.orbiapp.io/YhMnWqXwQ1b",
      domain: "orbiapp.io",
    },
    linkedin: {
      name: "LinkedIn",
      url: "https://www.linkedin.com/company/blmunique/",
      provider: "LinkedIn Ireland Unlimited Company",
      providerAddress: "Wilton Plaza, Wilton Place, Dublin 2, Ireland",
      privacyUrl: "https://de.linkedin.com/legal/privacy-policy",
    },
    instagram: {
      name: "Instagram",
      url: "https://www.instagram.com/brasamunique/",
      provider: "Meta Platforms Ireland Limited",
      providerAddress: "4 Grand Canal Square, Grand Canal Harbour, Dublin 2, Ireland",
      privacyUrl: "https://privacycenter.instagram.com/policy",
    },
  },
} as const
