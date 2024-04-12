import { createClient } from "@/lib/supabase/server";
import { Tables } from "@/db-types";
import RecipeCard from "@/components/RecipeCard";

async function getFirstImageInFolder(folderName: string) {
	const supabase = createClient();
  try {
		// LEVEL 4: Step 3: Dohvatiti prvu sliku iz supabase storagea
    const { data: files, error } = await supabase.storage
			.from('recipe-images')
    	.list(folderName, { limit: 1 });
    if (error) throw error;

		const firstFile = files[0];
		
		// LEVEL 4: Step 4: Dohvatiti public url slike
		const { data } = supabase.storage.from('recipe-images').getPublicUrl(`${folderName}/${firstFile.name}`);

		// LEVEL 4: Step 5: Vratiti url i ime slike
    return {
			url: data.publicUrl,
			name: firstFile.name
		};
  } catch (error) {
    console.error(error);
  }
}

export default async function RecipeGallery() {
	const supabase = createClient();

	// LEVEL 4: Step 1: Dohvatiti recepte iz baze podataka
	const { data: recipesContents = [], error } = await supabase.from("recipe").select("*").returns<Tables<'recipe'>[]>();
	if (error) {
		console.error(error);
	}

	// LEVEL 4: Step 2: Pozovi getFirstImageInFolder za svaki recept
	const recipes = await Promise.all(recipesContents?.map(async recipe => {
		const image = await getFirstImageInFolder(recipe.id.toString());
		return {
			...recipe,
			image
		};
	}) ?? []);

	return (
		<div>
			{ recipes?.length === 0 && <p className="mx-auto w-fit pt-16">No recipes found</p>}
			<section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4 md:p-6">
				{recipes?.map((recipe) => (
					<div key={recipe.id}>
						<RecipeCard recipe={recipe}/>
					</div>
				))}
			</section>
		</div>
	);
}