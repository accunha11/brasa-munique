/**
 * Legal provider information for the Impressum (§ 5 DDG).
 */
export const impressumConfig = {
  organization: {
    name: "BRASA Munique",
    /** e.g. "VR209059" — leave empty if not registered as e.V. */
    registerNumber: "",
  },
  representatives: [{ name: "Sophie Lundgren", role: "president" as const }],
  email: "munique@brasalocal.org",
} as const

export type RepresentativeRole = (typeof impressumConfig.representatives)[number]["role"]
