"use server";

import { createClient } from "@/lib/supabase/server";
import {
  RecipeContentSchema,
  RecipeImagesSchema,
} from "@/lib/validation-schemas/form";
import { revalidatePath } from "next/cache";

export async function createRecipe(previousState: any, formData: FormData) {
  // LEVEL 2: Step 3: Validirati content recepta

  try {
    // LEVEL 2: Step 4: Kreirati novi recept u bazu podataka i dohvatiti njegov id

    // LEVEL 2: Step 5: Validirati listu slika

    // LEVEL 2: Step 6: Uploadati slike na Supabase storage na folder sa id-em novog recepta

    // LEVEL 2: Step 7: Revalidirati home page rutu

    return {
      message: "Recipe submitted",
    };
  } catch (error) {
    return {
      message: "An error occurred while submitting your recipe.",
    };
  }
}
