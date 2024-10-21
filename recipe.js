const recipes = {
    breakfast: [
        {
            name: "Scrambled Eggs",
            ingredients: ["egg", "milk", "butter"],
            steps: [
                "Beat the eggs with milk in a bowl until well combined.",
                "Melt butter in a pan over medium heat.",
                "Pour in the egg mixture and stir continuously until fully cooked and creamy."
            ]
        },
        {
            name: "Pancakes",
            ingredients: ["flour", "egg", "milk", "sugar"],
            steps: [
                "In a mixing bowl, combine flour, sugar, egg, and milk to form a smooth batter.",
                "Heat a non-stick pan over medium heat and pour a ladle of batter.",
                "Cook until bubbles form on the surface, then flip and cook until golden brown."
            ]
        },
        {
            name: "Masala Dosa",
            ingredients: ["rice", "urad dal", "fenugreek seeds", "salt", "oil", "potato filling"],
            steps: [
                "Soak rice, urad dal, and fenugreek seeds in water for at least 4 hours.",
                "Blend the soaked ingredients into a smooth batter and let it ferment overnight.",
                "Heat a non-stick pan, spread a thin layer of batter, and cook until golden on both sides.",
                "Fill with a spiced potato filling and serve with chutney."
            ]
        },
        {
            name: "Upma",
            ingredients: ["semolina", "onion", "green chili", "mustard seeds", "vegetables", "water"],
            steps: [
                "Dry roast semolina in a pan until golden and set aside.",
                "In the same pan, heat oil, add mustard seeds, and let them splutter.",
                "Sauté chopped onions and green chilies until translucent, then add mixed vegetables.",
                "Pour water into the pan and bring to a boil, then gradually stir in the roasted semolina.",
                "Cook until water is absorbed, fluff with a fork, and serve hot."
            ]
        }
    ],
    salads: [
        {
            name: "Caesar Salad",
            ingredients: ["lettuce", "croutons", "parmesan", "caesar dressing"],
            steps: [
                "Chop the lettuce into bite-sized pieces.",
                "In a salad bowl, combine lettuce, croutons, and grated parmesan.",
                "Drizzle Caesar dressing on top, toss gently, and serve immediately."
            ]
        },
        {
            name: "Greek Salad",
            ingredients: ["tomato", "cucumber", "feta", "olive", "onion"],
            steps: [
                "Chop the tomatoes, cucumber, and onion into small pieces.",
                "In a bowl, combine chopped vegetables, olives, and crumbled feta.",
                "Drizzle with olive oil, season with salt and pepper, and toss before serving."
            ]
        },
        {
            name: "Kachumber Salad",
            ingredients: ["cucumber", "tomato", "onion", "lemon juice", "coriander", "salt"],
            steps: [
                "Finely chop cucumber, tomato, and onion.",
                "In a mixing bowl, combine chopped vegetables with lemon juice and chopped coriander.",
                "Season with salt to taste and serve chilled."
            ]
        },
        {
            name: "Chickpea Salad",
            ingredients: ["chickpeas", "onion", "tomato", "cucumber", "lemon juice", "coriander"],
            steps: [
                "In a large bowl, combine cooked chickpeas, diced onion, tomato, and cucumber.",
                "Drizzle with lemon juice and toss in chopped coriander.",
                "Mix well and serve as a refreshing salad."
            ]
        }
    ],
    appetizers: [
        {
            name: "Bruschetta",
            ingredients: ["bread", "tomato", "garlic", "basil", "olive oil"],
            steps: [
                "Toast the bread slices until golden brown.",
                "In a bowl, mix chopped tomato, minced garlic, and fresh basil with olive oil.",
                "Top the toasted bread slices with the mixture and serve."
            ]
        },
        {
            name: "Stuffed Mushrooms",
            ingredients: ["mushrooms", "cheese", "breadcrumbs", "garlic"],
            steps: [
                "Preheat the oven to 375°F (190°C).",
                "Remove the mushroom stems and finely chop them.",
                "In a mixing bowl, combine chopped stems, cheese, breadcrumbs, and minced garlic.",
                "Stuff the mushroom caps with the mixture and place on a baking sheet.",
                "Bake for 15-20 minutes until golden brown."
            ]
        },
        {
            name: "Paneer Tikka",
            ingredients: ["paneer", "yogurt", "tikka masala", "bell peppers", "onion"],
            steps: [
                "In a bowl, marinate paneer cubes and chopped bell peppers and onions in yogurt and tikka masala for at least 30 minutes.",
                "Skewer the marinated paneer and vegetables alternately.",
                "Grill or bake in an oven at 400°F (200°C) for 15-20 minutes until charred.",
                "Serve hot with mint chutney."
            ]
        },
        {
            name: "Samosas",
            ingredients: ["potato", "peas", "spices", "flour", "oil for frying"],
            steps: [
                "Boil and mash the potatoes, then mix with boiled peas and spices.",
                "Make a dough with flour and water, and knead until smooth.",
                "Roll out the dough and cut into circles; fill with the potato mixture and seal the edges.",
                "Deep fry in hot oil until golden brown and serve with chutney."
            ]
        }
    ],
    soups: [
        {
            name: "Tomato Soup",
            ingredients: ["tomato", "onion", "garlic", "broth", "cream"],
            steps: [
                "In a pot, sauté chopped onion and garlic in olive oil until soft.",
                "Add chopped tomatoes and broth, bring to a boil, then simmer for 20 minutes.",
                "Blend the soup until smooth, return to the pot, and stir in cream before serving."
            ]
        },
        {
            name: "Chicken Soup",
            ingredients: ["chicken", "carrot", "celery", "onion", "broth"],
            steps: [
                "In a pot, sauté diced vegetables in oil until soft.",
                "Add chicken pieces and broth; bring to a boil, then simmer until chicken is cooked.",
                "Shred the chicken and return to the pot, simmer for an additional 10 minutes."
            ]
        },
        {
            name: "Dal Soup",
            ingredients: ["lentils", "onion", "tomato", "spices", "coriander"],
            steps: [
                "Rinse lentils and cook them in water until soft.",
                "In a pan, sauté chopped onions and tomatoes with spices until fragrant.",
                "Add cooked lentils to the pan and simmer for 10 minutes.",
                "Garnish with chopped coriander before serving."
            ]
        },
        {
            name: "Mulligatawny Soup",
            ingredients: ["chicken", "rice", "carrot", "curry powder", "coconut milk"],
            steps: [
                "In a pot, sauté diced chicken and chopped vegetables with curry powder until chicken is browned.",
                "Add water and rice; bring to a boil, then reduce heat and simmer until rice is tender.",
                "Stir in coconut milk and heat through before serving."
            ]
        }
    ],
    desserts: [
        {
            name: "Chocolate Cake",
            ingredients: ["flour", "sugar", "cocoa", "butter", "egg"],
            steps: [
                "Preheat the oven to 350°F (175°C).",
                "In a bowl, mix flour, sugar, cocoa powder, and baking powder.",
                "Add melted butter, eggs, and milk to the dry ingredients and mix until smooth.",
                "Pour into a greased cake pan and bake for 25-30 minutes, or until a toothpick comes out clean."
            ]
        },
        {
            name: "Apple Pie",
            ingredients: ["apple", "flour", "butter", "sugar", "cinnamon"],
            steps: [
                "Make a dough by mixing flour and butter, then chill for 30 minutes.",
                "Slice apples and mix with sugar and cinnamon.",
                "Roll out the dough, fill with apple mixture, cover with another layer of dough, and bake at 425°F (220°C) for 40 minutes."
            ]
        },
        {
            name: "Gulab Jamun",
            ingredients: ["milk powder", "flour", "baking soda", "sugar", "rose water"],
            steps: [
                "In a bowl, mix milk powder, flour, and baking soda to form a soft dough.",
                "Shape the dough into small balls.",
                "Heat oil in a pan and fry the balls until golden brown.",
                "Soak in sugar syrup flavored with rose water for at least 30 minutes before serving."
            ]
        },
        {
            name: "Kheer",
            ingredients: ["rice", "milk", "sugar", "cardamom", "nuts"],
            steps: [
                "Rinse the rice and cook in boiling milk until soft.",
                "Add sugar and crushed cardamom, and simmer for 15-20 minutes.",
                "Garnish with chopped nuts before serving."
            ]
        }
    ],
    "main-dishes": [
        {
            name: "Spaghetti Bolognese",
            ingredients: ["spaghetti", "ground beef", "tomato", "onion", "garlic"],
            steps: [
                "Cook the spaghetti according to package instructions.",
                "In a pan, sauté chopped onion and garlic until soft, then add ground beef and cook until browned.",
                "Stir in canned tomatoes, season with salt and pepper, and simmer for 15 minutes.",
                "Serve the sauce over the spaghetti."
            ]
        },
        {
            name: "Grilled Chicken",
            ingredients: ["chicken", "lemon", "garlic", "olive oil"],
            steps: [
                "Marinate chicken pieces in lemon juice, minced garlic, and olive oil for at least 30 minutes.",
                "Preheat the grill and cook chicken until fully cooked, about 6-7 minutes on each side.",
                "Serve hot with sides of your choice."
            ]
        },
        {
            name: "Biryani",
            ingredients: ["rice", "chicken", "spices", "onion", "yogurt"],
            steps: [
                "Marinate chicken with yogurt, ginger-garlic paste, and spices for 1-2 hours.",
                "In a large pot, heat oil and sauté sliced onions until golden brown.",
                "Add marinated chicken and cook until chicken is browned and cooked through.",
                "In a separate pot, cook rice until 70% done; drain.",
                "Layer the cooked chicken with the rice, adding fried onions and chopped mint/cilantro in between layers.",
                "Cover and cook on low heat for about 20-25 minutes until rice is fully cooked. Serve hot."
            ]
        },
        {
            name: "Chana Masala",
            ingredients: ["chickpeas", "onion", "tomato", "spices", "cilantro"],
            steps: [
                "In a pot, heat oil and sauté chopped onions until translucent.",
                "Add chopped tomatoes and cook until soft.",
                "Stir in spices (cumin, coriander, garam masala) and cook for another minute.",
                "Add cooked chickpeas and a little water; simmer for 10-15 minutes.",
                "Garnish with chopped cilantro and serve with rice or naan."
            ]
        }
    ],
    snacks: [
        {
            name: "Potato Chips",
            ingredients: ["potatoes", "salt", "oil"],
            steps: [
                "Slice potatoes thinly and soak in water for 30 minutes.",
                "Heat oil in a frying pan and fry the potato slices until golden and crispy.",
                "Drain on paper towels and sprinkle with salt."
            ]
        },
        {
            name: "Nachos",
            ingredients: ["tortilla chips", "cheese", "jalapeños", "sour cream"],
            steps: [
                "Preheat the oven to 350°F (175°C).",
                "Spread tortilla chips on a baking sheet and sprinkle with cheese and jalapeños.",
                "Bake for 10 minutes until cheese is melted, then serve with sour cream."
            ]
        },
        {
            name: "Pakoras",
            ingredients: ["besan (gram flour)", "potatoes", "onion", "spices", "oil for frying"],
            steps: [
                "Slice potatoes and onions thinly.",
                "In a bowl, mix besan with spices and water to form a batter.",
                "Dip the sliced vegetables in the batter and fry in hot oil until golden brown.",
                "Serve with green chutney."
            ]
        },
        {
            name: "Dhokla",
            ingredients: ["gram flour", "yogurt", "spices", "mustard seeds", "coriander"],
            steps: [
                "In a bowl, mix gram flour, yogurt, water, and spices to form a batter.",
                "Pour the batter into a greased steaming tray and steam for 20-25 minutes.",
                "Cool slightly, cut into squares, and temper with mustard seeds and chopped coriander before serving."
            ]
        }
    ]
};
