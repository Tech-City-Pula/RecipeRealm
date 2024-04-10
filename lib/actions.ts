"use server";

import { createClient } from "@/lib/supabase/server";
import {
  RecipeContentSchema,
  RecipeImagesSchema,
} from "@/lib/validation-schemas/form";
import { revalidatePath } from "next/cache";

export async function createRecipe(previousState: any, formData: FormData) {
  const recipeContent = RecipeContentSchema.parse({
    name: formData.get("name"),
    description: formData.get("description"),
    ingredients: formData.get("ingredients"),
    methods: formData.get("methods"),
  });

  try {
    const supabase = createClient();
    const recipeResponse = await supabase
      .from("recipe")
      .insert(recipeContent)
      .select("id")
      .single();

    if (recipeResponse.error) throw recipeResponse.error;

    const images = RecipeImagesSchema.parse({
      images: formData.getAll("images"),
    }).images;

    const newRecipeId = recipeResponse.data.id as string;
    const imagesPromises = [];
    for (const image of images) {
      if (!(image instanceof File)) continue;

      imagesPromises.push(
        supabase.storage.from("recipe-images").upload(
          `${newRecipeId}/${new Date().toISOString()}-${image.name}`,
          image,
        ),
      );
    }

    await Promise.all(imagesPromises);

    revalidatePath("/");

    return {
      message: "Recipe submitted",
    };
  } catch (error) {
    return {
      message: "An error occurred while submitting your recipe.",
    };
  }
}
