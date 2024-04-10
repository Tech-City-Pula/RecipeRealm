import { z } from "zod";
import { ACCEPTED_IMAGE_TYPES, MAX_FILE_SIZE } from "@/lib/const";

const RecipeContentSchema = z.object({
  name: z.string().trim().min(
    1,
    "How do you even call this meal? Give it a name!",
  ),
  description: z.string().trim().default(""),
  ingredients: z.string().trim().default(""),
  methods: z.string().trim().default(""),
});

const RecipeImagesSchema = z.object({
  images: z.any()
    .refine((files) => files?.length >= 1, { message: "Image is required." })
    .refine((files) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type), {
      message: ".jpg, .jpeg, .png and .webp files are accepted.",
    })
    .refine((files): files is FileList => files?.[0]?.size <= MAX_FILE_SIZE, {
      message: `Max file size is 5MB.`,
    }),
});

const RecipeSchema = RecipeContentSchema.merge(RecipeImagesSchema);

export { RecipeContentSchema, RecipeImagesSchema, RecipeSchema };
