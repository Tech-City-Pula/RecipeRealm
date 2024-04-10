import RecipeCreateForm from "@/components/RecipeCreateForm";

export default function CreateRecipePage() {
	return (
		<div className="flex flex-row min-h-screen max-h-screen">
			<div className="basis-1/3 bg-gradient-to-t from-orange-400 to-red-400 text-white">
				<div className="flex flex-col h-full justify-center p-16 space-y-2">
					<h1 className="text-4xl font-bold">RecipeRealm</h1>
					<p>
						RecipeRealm is a platform where you can create and share your
						recipes with the world.
					</p>
				</div>
			</div>
			<div className="bg-orange-50 basis-2/3 p-4 overflow-y-auto flex items-center">
				<div className="max-w-sm flex flex-col items-center justiy-center gap-8 mx-auto">
					<div className="space-y-2">
						<h3 className="text-xl font-semibold">Create a recipe from scratch</h3>
						<p className="text-muted-foreground">
							Share your recipe with the world. Let everyone know how you make
							your delicious meal.
						</p>
					</div>
					<RecipeCreateForm />
				</div>
			</div>
		</div>
	);
}
