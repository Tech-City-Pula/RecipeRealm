import Image from 'next/image';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

interface Recipe {
	image: {
		url: string;
		name: string;
	} | undefined;
	created_at: string;
	description: string | null;
	id: number;
	ingredients: string | null;
	methods: string | null;
	name: string;
}

export default async function RecipeCard({ recipe }: { recipe: Recipe }) {
	return (
		<Card>
			<CardHeader>
				{/* LEVEL 4: Step 6: Dodati Image komponentu */}
				{/* <Image width={500} height={500} className="w-full h-64 rounded object-center object-cover" src={recipe.image?.url ?? ''} alt={recipe.image?.name ?? ''}/> */}
				<h1 className="text-2xl font-bold">{recipe.name}</h1>
				<p>{recipe.description}</p>
			</CardHeader>
			<CardContent className="space-y-2">
				<div>
					<h2 className="font-semibold">Ingredients</h2>
					<p>{recipe.ingredients}</p>
				</div>
				<div>
					<h2 className="font-semibold">Methods</h2>
					<p>{recipe.methods}</p>
				</div>
			</CardContent>
		</Card>
	)
}