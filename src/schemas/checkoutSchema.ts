import { z } from "zod";

export const checkoutSchema = z.object({
  name: z.string().min(1, "Namn är obligatoriskt"),

  email: z
    .string()
    .min(1, "E-post är obligatoriskt")
    .pipe(z.email("Ange en giltig e-postadress")),

  address: z.string().min(1, "Adress är obligatoriskt"),

  zip: z
    .string()
    .min(1, "Postnummer är obligatoriskt")
    .regex(/^\d{5}$/, "Postnummer måste vara exakt 5 siffror"),

  city: z.string().min(1, "Stad är obligatoriskt"),
});

export type CheckoutData = z.infer<typeof checkoutSchema>;