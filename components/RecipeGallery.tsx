import { createClient } from "@/lib/supabase/server";
import { Tables } from "@/db-types";
import RecipeCard from "@/components/RecipeCard";

async function getFirstImageInFolder(folderName: string) {
		const supabase = createClient();
    try {
        const { data: files, error } = await supabase.storage
            .from('recipe-images')
            .list(folderName, { limit: 1 });
        if (error) throw error;

				const firstFile = files[0];
				const { data } = supabase.storage.from('recipe-images').getPublicUrl(`${folderName}/${firstFile.name}`);

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

	const { data: recipesContents = [], error } = await supabase.from("recipe").select("*").returns<Tables<'recipe'>[]>();
	if (error) {
		console.error(error);
	}

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