var menu = {
    snacks: [
        {
            name: 'fried bread',
            price: 1.20,
            ingredients: [
                'bread',
                'cheese',
                'garlic'
            ],
        },
        {
            name: 'soup',
            price: 5.90,
            ingredients: [
                'peas',
                'bacon',
                'onions',
                'cream'
            ]
        },
        {
            name: 'houmous',
            price: 4.50,
            ingredients: [
                'houmous',
                'carrot sticks',
                'cucumber sticks'
            ]
        }
    ],
    mains: [
        {
            name: 'pizza',
            price: 10.50,
            ingredients: [
                'tomato sauce',
                'cheese',
                'mushrooms',
                'bell peppers',
                'chicken'
            ]
        },
        {
            name: 'burger',
            price: 6.90,
            ingredients: [
                'buns',
                'beef',
                'salad',
                'sauce',
                'tomato slices'
            ]
        },
        {
            name: 'green curry',
            price: 5.00,
            ingredients: [
                'green curry paste',
                'spring onions',
                'mushrooms',
                'green beans',
                'chicken',
                'noodles'
            ]
        }
    ],
    desserts: [
        {
            name: 'ice cream',
            price: 3.50,
            ingredients: [
                'vanilla',
                'chocolate',
                'coffee',
                'caramel sauce',
                'chocolate chips'
            ]
        },
        {
            name: 'apple pie',
            price: 4.00,
            ingredients: [
                'apples',
                'dough',
                'sugar',
                'cinamon'
            ]
        },
        {
            name: 'brownie',
            price: 4.00,
            ingredients: [
                'chocolate',
                'nuts',
                'flour',
                'peanut butter',
                'milk'
            ]
        }
    ],
}

function checkIconClicked(event, span, priceMeal) {
    event.stopPropagation();
    let svg = span.getElementsByTagName("svg")[0];
    if (span.classList.contains("clicked") ) {
        span.classList.remove("clicked");
        svg.classList.remove("checkIconClicked");
        displayTotal(-priceMeal);
    }
    else {
        span.classList.add("clicked");
        svg.classList.add("checkIconClicked");
        displayTotal(priceMeal);
    }
}

function mealClicked(div, iconSpan) {
    if (div.classList.contains("clicked") ) {
       div.classList.remove("clicked");
       div.style.display = "none";
    }
    else {
        div.classList.add("clicked");
        div.style.display = "block";
        iconSpan.innerHTML = iconSpan.innerHTML.replace("<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"plus\" viewBox=\"0 0 448 512\"><!--! Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d=\"M432 256c0 17.69-14.33 32.01-32 32.01H256v144c0 17.69-14.33 31.99-32 31.99s-32-14.3-32-31.99v-144H48c-17.67 0-32-14.32-32-32.01s14.33-31.99 32-31.99H192v-144c0-17.69 14.33-32.01 32-32.01s32 14.32 32 32.01v144h144C417.7 224 432 238.3 432 256z\"/></svg>", "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"minus\" viewBox=\"0 0 448 512\"><!--! Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d=\"M400 288h-352c-17.69 0-32-14.32-32-32.01s14.31-31.99 32-31.99h352c17.69 0 32 14.3 32 31.99S417.7 288 400 288z\"/></svg>");
    }
}






// this function generates html to display menu
function displayCategory(m) {
    let menuDiv = document.getElementById("menu"); 
    // get div which has id = "menu" (retrieve it from the document)
    for(let field in m) { 
    //accesses each categories (fields) in menu (object)
        let categoryDiv = document.createElement("div");
         // creates an element (div) in the document 
        categoryDiv.innerText = field; 
        // adds the curent category to this element 
        categoryDiv.classList.add("category"); 
        // adds a class to this element called "category"
        menuDiv.appendChild(categoryDiv); 
        // inserts this element (category name) to the div in the document
        let meals = m[field]; 
        // creates a variable "meals" that holds the current category
        let mealsList = document.createElement("div"); 
        mealsList.classList.add("meals-list"); 
        menuDiv.appendChild(mealsList); 
        for (let i = 0; i < meals.length; i++) { 
            let nameMeal = meals[i].name;
            let priceMeal = meals[i].price; 
            let ingredientsMeal = meals[i].ingredients;
            let textIngredients = "";
            console.log(ingredientsMeal);
            for(let k = 0; k < ingredientsMeal.length; k++) {
                if (k + 1 === ingredientsMeal.length) {
                    textIngredients = textIngredients + ingredientsMeal[k] + "."
                }
                else { textIngredients = textIngredients + ingredientsMeal[k] + ", "}
            };
            let mealDiv = document.createElement("div");
            let plusIconSpan = document.createElement("span");
            plusIconSpan.innerHTML = "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"plus\" viewBox=\"0 0 448 512\"><!--! Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d=\"M432 256c0 17.69-14.33 32.01-32 32.01H256v144c0 17.69-14.33 31.99-32 31.99s-32-14.3-32-31.99v-144H48c-17.67 0-32-14.32-32-32.01s14.33-31.99 32-31.99H192v-144c0-17.69 14.33-32.01 32-32.01s32 14.32 32 32.01v144h144C417.7 224 432 238.3 432 256z\"/></svg>";
            mealDiv.appendChild(plusIconSpan);
            let ingredients = document.createElement("div");
            ingredients.innerText = textIngredients;
            ingredients.classList.add("ingredients");
            let meal = document.createElement("span");
            meal.innerText = nameMeal + " " + priceMeal + " €";
            mealDiv.append(meal);
            mealDiv.addEventListener("click", function() { mealClicked(ingredients, plusIconSpan) });
            mealDiv.classList.add("menu-item");
            let selectMealSpan = document.createElement("span");
            selectMealSpan.innerHTML = "<svg aria-hidden=\"true\" focusable=\"false\" data-prefix=\"fas\" data-icon=\"check\" class=\"svg-inline--fa fa-check fa-w-16 icon\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\"><path fill=\"currentColor\" d=\"M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z\"></path></svg>";
            mealDiv.appendChild(selectMealSpan);
            mealDiv.appendChild(ingredients);
            selectMealSpan.addEventListener("click", function(e) { checkIconClicked(e, selectMealSpan, priceMeal) }); 
            mealsList.appendChild(mealDiv); 
        }
    }
}

displayCategory(menu);

function displayTotal(price) {
    let totalPriceSpan = document.getElementById("total-price");
    let currentTotal = totalPriceSpan.innerText;
    let newTotal = Number(currentTotal) + Number(price);
    totalPriceSpan.innerText = newTotal.toFixed(2);
}




