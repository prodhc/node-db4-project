const recipes = [
    { recipe_name: 'Grandmas Soup'},
    { recipe_name: 'Fried Chicken'},
    { recipe_name: 'Lamb Potpie'},

]

const ingredients = [
    { ingredient_name: 'Broth', ingredient_unit: 'cups' },
    { ingredient_name: 'Celery', ingredient_unit: 'cups' },
    { ingredient_name: 'Oil', ingredient_unit: 'cups' },
    { ingredient_name: 'Chicken', ingredient_unit: 'lbs' },
    { ingredient_name: 'Lamb', ingredient_unit: 'lbs' },
    { ingredient_name: 'Pie Crust', ingredient_unit: 'lbs' },
    
]

const step_ingredients = [
    { step_id: 1, ingredient_id: 1, quantity: 1 },
    { step_id: 2, ingredient_id: 2, quantity: 3 },

    { step_id: 4, ingredient_id: 3, quantity: 2 },
    { step_id: 5, ingredient_id: 4, quantity: 1.5 },

    { step_id: 7, ingredient_id: 5, quantity: 5 },
    { step_id: 8, ingredient_id: 6, quantity: 1 }

]

const steps = [
    { step_text: "Boil Broth", step_number: "1", recipe_id: "1" },
    { step_text: "Add celery", step_number: "2", recipe_id: "1" },
    { step_text: "Simmer on low", step_number: "3", recipe_id: "1" },

    { step_text: "Heat oil", step_number: "1", recipe_id: "2" },
    { step_text: "Bread chicken", step_number: "2", recipe_id: "2" },
    { step_text: "Fry breaded chicken in oil", step_number: "3", recipe_id: "2" },

    { step_text: "Hunt Lamb with spear", step_number: "1", recipe_id: "3" },
    { step_text: "Bake into potpie", step_number: "2", recipe_id: "3" },
]


exports.seed = async function(knex) {
    await knex('recipes').insert(recipes)
    await knex('ingredients').insert(ingredients)
    await knex('steps').insert(steps)
    await knex('step_ingredients').insert(step_ingredients)
  };
  