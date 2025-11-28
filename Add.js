const menuItemContainer = document.getElementById('menu-items');

const menuData = {
    breakfast: [
        {
            name: 'Pancakes',
            description: 'Fluffy pancakes served with maple syrup, fresh berries',
            price: '107.99',
            image: 'https://sallysbakingaddiction.com/wp-content/uploads/2025/03/buttermilk-pancakes-2.jpg'
        },

        {
            name: 'French Toast',
            description: 'Golden slices of bread soaked in egg mixture',
            price: '80.99',
            image: 'https://parade.com/.image/w_1080,q_auto:good,c_limit/MjAzODgwNzkzNzUwNTc4Njgz/imago0391206670h.jpg',
        }, 
           
        {
            name: 'Omelette',
            description: 'A savory, satisfying dish featuring a fluffy, golden omelette filled with tender, sautéed mushrooms',
            price: '169.99',
            image: 'https://www.slimmingeats.com/blog/wp-content/uploads/2018/06/sriracha-mushroom-omelette-7.jpg',
        },
        {
            name: 'Greek Yogurt Parfait',
            description: 'high-protein breakfast layered with creamy yogurt, crunchy granola, and fresh seasonal berries.',
            price: '255.99',
            image: 'https://www.muydelish.com/wp-content/uploads/2023/07/greek-yogurt-parfait-1152x1536.jpg',
        },
        {
            name: 'Avocado Toast',
            description: 'a simple, open-faced sandwich of toasted bread topped with mashed or sliced avocado.',
            price: '858.99',
            image: 'https://images.unsplash.com/photo-1687276287139-88f7333c8ca4?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=764https://thesaltypot.com/wp-content/uploads/2019/02/Avocado-Toast07.jpg',
        },
        {
            name: 'Smoothie Bowl',
            description: 'a smoothie, served in a bowl, served with a variety of toppings such as fruit, nuts, seeds or granola.',
            price: '257.99',
            image: 'https://img.taste.com.au/k5o9ZTCH/w720-h480-cfill-q80/taste/2016/11/fruity-smoothie-bowl-106970-1.jpeg',
        },
        {
            name: 'Breakfast Sandwitch',
            description: 'fillings like meat, cheese, or vegetables between two or more slices of bread.',
            price: '245.99',
            image: 'https://vaya.in/recipes/wp-content/uploads/2018/06/Club-sandwich.jpg',
        },
        {
            name: 'Waffles',
            description: 'breakfast or dessert with toppings like syrup, fruit, or whipped cream.',
            price: '59.99',
            image: 'https://cdn.loveandlemons.com/wp-content/uploads/2024/12/waffle-recipe-1160x1500.jpg',
        },
        {
            name: 'Tofu Scramble',
            description: ' It has a rich and creamy texture and surprisingly eggy flavor that will remind you of real scrambled eggs! ',
            price: '856.99',
            image: 'https://plantbasedonabudget.com/wp-content/uploads/2023/01/87-Tofu-Scramble-Plant-Based-on-a-Budget-8.jpg',
        },
        {
            name: 'Rainbow Fruit Salad',
            description: 'a vibrant and refreshing dish that features a variety of fresh, colorful fruits arranged to mimic the appearance of a rainbow',
            price: '254.99',
            image: 'https://www.shelikesfood.com/wp-content/uploads/2022/04/Rainbow-Fruit-Salad-4606.jpg',
        },
        {
            name: 'Breakfast Pizza',
            description: 'an Italian dish of flattened, leavened dough topped with a savory mixture, most commonly tomatoes and cheese, ',
            price: '458.99',
            image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGl6emF8ZW58MHx8MHx8fDA%3D',
        },
        {
            name: 'Masala Dosa',
            description: 'a popular South Indian dish consisting of a thin, crispy rice and lentil crepe filled with a spiced potato mixture. ',
            price: '169.99',
            image: 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFzYWxhJTIwZG9zYXxlbnwwfHwwfHx8MA%3D%3D',
        },
        {
            name: 'Poha',
            description: 'a popular, light, and nutritious Indian dish made from flattened rice (also known as beaten rice or aval)',
            price: '169.99',
            image: 'https://media.istockphoto.com/id/2201502652/photo/poha-jalebi-a-perfect-sweet-savory-duo.webp?s=612x612&w=is&k=20&c=FBplFRGulUuBpYedjlD6Tm3_G1o4FBtT277uwFFFLpU=',
        },
        {
            name: 'Aloo Paratha',
            description: 'unleavened flatbread stuffed with a savory, spiced mashed potato filling. ',
            price: '258.49',
            image: 'https://images.unsplash.com/photo-1683533761804-5fc12be0f684?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YWxvbyUyMHBhcmF0aGF8ZW58MHx8MHx8fDA%3D',
        },

    ],
    lunch: [
        {
            name: 'Grilled Chicken Salad',
            description: 'chicken cooked over direct heat, often with seasonings and spices, resulting in a dish with a smoky flavor and a desirable char',
            price: '158.49',
            image: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z3JpbGxlZCUyMGNoaWNrZW4lMjBzYWxhZHxlbnwwfHwwfHx8MA%3D%3D',
        },
        {
            name: 'Spaghetti Carbonara',
            description: 'a traditional Roman pasta dish featuring spaghetti tossed with a creamy sauce made from eggs, hard cheese like Pecorino Romano or Parmesan, cured pork (traditionally guanciale), and black pepper',
            price: '310.99',
            image: 'https://images.unsplash.com/photo-1579631542720-3a87824fff86?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8U3BhZ2hldHRpJTIwQ2FyYm9uYXJhfGVufDB8fDB8fHww',
        },
        {
            name: 'Butter Chicken',
            description: 'an Indian dish made with roasted marinated chicken in a spiced, creamy, and buttery tomato sauce',
            price: '362.99',
            image: 'https://images.unsplash.com/photo-1728910107534-e04e261768ae?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8QnV0dGVyJTIwQ2hpY2tlbnxlbnwwfHwwfHx8MA%3D%3D',
        },
        {
            name: 'Paneer Tikka Masala',
            description: 'marinated and grilled cubes of paneer (Indian cottage cheese), onions, and bell peppers, all served in a rich, creamy, and flavorful onion-tomato based gravy. ',
            price: '211.99',
            image: 'https://images.unsplash.com/photo-1690401767645-595de0e0e5f8?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8UGFuZWVyJTIwVGlra2ElMjBNYXNhbGF8ZW58MHx8MHx8fDA%3D',
        },
        {
            name: 'Biriyani',
            description: 'a popular mixed rice dish from the Indian subcontinent, made by layering fragrant rice, such as basmati, with marinated meat (chicken, goat, lamb, beef, or seafood) or vegetables and a variety of spices',
            price: '510.99',
            image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmlyaXlhbml8ZW58MHx8MHx8fDA%3D',
        },
        {
            name: 'Chole Bhature',
            description: 'dish consisting of a spicy chickpea curry ("chole") and a soft, fluffy fried bread ("bhature")',
            price: '258.49',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Chole_Bhature_from_Nagpur.JPG/500px-Chole_Bhature_from_Nagpur.JPG',
        },
        {
            name: 'Masala Dosa',
            description: 'a popular South Indian dish consisting of a thin, crispy rice and lentil crepe filled with a spiced potato mixture.',
            price: '238.99',
            image: 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFzYWxhJTIwZG9zYXxlbnwwfHwwfHx8MA%3D%3D',
        },            
        {
            name: 'Palak Paneer',
            description: 'dish made from a creamy spinach puree (palak) combined with soft cubes of Indian cottage cheese (paneer). ',
            price: '169.99',
            image: 'https://media.istockphoto.com/id/2147564917/photo/palak-paneer-with-basmati-rice-and-salad.webp?a=1&b=1&s=612x612&w=0&k=20&c=lyvsWawZ2UNgtwRtW8C4F7Uj7h4jNobtAEDeP5whc48=',
        },
        {
            name: 'Aloo Gobi',
            description: ' classic vegetarian dish  made with potatoes and cauliflower, along with a blend of fragrant Indian spices.',
            price: '58.99',
            image: 'https://i.ndtvimg.com/i/2018-04/aloo-gobhi_650x400_51523431099.jpg',
        },
        {
            name: 'Chicken Tikka',
            description: 'boneless chicken pieces marinated in yogurt and spices, then grilled on skewers until tender and slightly charred',
            price: '251.99',
            image: 'https://www.whiskaffair.com/wp-content/uploads/2020/06/Chicken-Tikka-2-1.jpg',
        },
        {
            name: 'Egg Curry',
            description: 'an Indian dish made with hard-boiled eggs simmered in a spiced gravy, most often based on onion and tomato',
            price: '169.99',
            image: 'https://media.istockphoto.com/id/535396866/photo/indian-famous-egg-curry-or-anda-curry.webp?a=1&b=1&s=612x612&w=0&k=20&c=fQ2lyMDti9lklf5FXyCWOyFYuIpwTql4pGl7ZbxzAIM=',
        },
        {
            name: 'Pav Bhaji',
            description: 'a popular Indian street food consisting of a spicy, mashed vegetable curry (bhaji) served with soft bread rolls (pav)',
            price: '57.99',
            image: 'https://images.unsplash.com/photo-1626132647523-66f5bf380027?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGF2JTIwYmhhaml8ZW58MHx8MHx8fDA%3D',
        },
    ],
    dinner: [
         {
            name: 'Sweet and Sour Pork',
            description: 'crispy, deep-fried pieces of pork tossed in a tangy, glossy sauce with vegetables like bell peppers, onions, and often pineapple chunks',
            price: '813.49',
            image: 'https://media.istockphoto.com/id/155278138/photo/sweet-and-sour-pork.jpg?s=1024x1024&w=is&k=20&c=GsXAcgT4P7wMmOVTsvF5oXB3aYXZEGjMgWOhjgpF4eM=',
        },
        {
            name: 'Vegetable Fried Rice',
            description: 'a stir-fried rice dish made with cooked rice, various chopped vegetables like carrots, beans, and cabbage, and seasonings like soy sauce, garlic, and ginger',
            price: '210.99',
            image: 'https://media.istockphoto.com/id/1289391735/photo/chinese-fried-rice-served-in-a-bowl.webp?a=1&b=1&s=612x612&w=0&k=20&c=gzh_NHBHtNENTL2ltrQiIaEkmJja8k-w0r2Th9I0fHc=',
        },
        {
            name: 'Chicken Biriyani',
            description: 'a flavorful and aromatic mixed rice dish made by layering marinated chicken with long-grain rice, such as basmati, and a variety of spices, herbs, and aromatics',
            price: '513.99',
            image: 'https://media.istockphoto.com/id/501150349/photo/chicken-biryani-11.jpg?s=612x612&w=0&k=20&c=w6mDnUx8MnH3rnP9bR0VfWRwrODcbTz-6U07o3Zrs4o=',
        },
        {
            name: 'Malai Kofta',
            description: 'rich, and creamy North Indian dish consisting of soft, fried vegetarian dumplings in a luscious, mildly spiced gravy',
            price: '281.49',
            image: 'https://media.istockphoto.com/id/1219174099/photo/malai-kofta-curry-in-black-bowl-at-dark-slate-background-malai-kofta-is-indian-cuisine-dish.jpg?s=612x612&w=0&k=20&c=ZqajoGuZIjQ_37LU7ZDyRpCJTCuLctwClGVumH2xCfM=',
        },
        {
            name: 'Lasagana',
            description: 'an Italian dish of broad, flat pasta layered with fillings like sauces, cheese, and meat or vegetables, then baked',
            price: '214.99',
            image: 'https://media.istockphoto.com/id/1252736340/photo/lasagna-traditional-italian-pasta.webp?a=1&b=1&s=612x612&w=0&k=20&c=vQ96vDuBFtAt6TV--xoeW8aV-uWT9V_LoZA9H8TA3tc=',
        },
        {
            name: 'Pesto Pasta',
            description: ' a vibrant, Italian dish featuring noodles coated in a fresh and aromatic green sauce. ',
            price: '510.49',
            image: 'https://images.unsplash.com/photo-1707448460889-e268eb742820?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8UGVzdG8lMjBQYXN0YXxlbnwwfHwwfHx8MA%3D%3D',
        },
        {
            name: 'Chilli Chicken',
            description: 'a popular Indo-Chinese dish featuring crispy fried chicken pieces tossed in a spicy, sweet, and tangy sauce with ingredients like onions, bell peppers, garlic, and various sauces',
            price: '511.99',
            image: 'https://media.istockphoto.com/id/1072951288/photo/indian-chilli-chicken-dry-served-in-a-plate-over-moody-background-selective-focus.webp?a=1&b=1&s=612x612&w=0&k=20&c=GeqSiSUYGqzSTTUVI3b4iLTgkuD2jDLeVwzm0PvkTt0=',
        },
    ],
    snacks: [
        {
            name: 'Samosa',
            description: 'a fried or baked pastry with a savory filling, typically triangular in shape',
            price: '53.99',
            image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2Ftb3NhfGVufDB8fDB8fHww',
        },
        {
            name: 'Paneer Tikka',
            description: 'marinated chunks of paneer (Indian cottage cheese) and vegetables grilled to a smoky,',
            price: '214.99',
            image: 'https://media.istockphoto.com/id/2206635175/photo/paneer-tikka-skewers-with-onion-lemon-and-green-chutney-directly-from-above-photo.webp?a=1&b=1&s=612x612&w=0&k=20&c=igciiZGxr0lHq48qcxQs531z7eyq74YVS58o9JVOsUE=',
        },
        {
            name: 'Dhokla',
            description: 'soft, and spongy steamed vegetarian dish from Gujarat, India, typically made from a fermented batter of gram flour (besan) or rice and chickpeas',
            price: '254.99',
            image: 'https://media.istockphoto.com/id/1307786779/photo/khaman-dhokla.webp?a=1&b=1&s=612x612&w=0&k=20&c=cmcQ4PMdPZvttrwDAgzfkrSZyfm50iilbWU5XYcOeEU=',
        },
        {
            name: 'Pav Bhaji',
            description: 'a popular Indian street food consisting of a spicy, mashed vegetable curry (bhaji) served with soft bread rolls (pav)',
            price: '57.99',
            image: 'https://images.unsplash.com/photo-1626132647523-66f5bf380027?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGF2JTIwYmhhaml8ZW58MHx8MHx8fDA%3D',
        },
        
        // Chineese Snacks
        {
            name: 'Spring Rolls',
            description: 'Awheat-based wrapper and are deep-fried to achieve a crispy, golden-brown exterior. The savory filling usually consists of a mix of shredded vegetables (like cabbage, carrots, and mushrooms), sometimes with minced pork or shrimp, seasoned with soy sauce, sesame oil, and spices',
            price: '243.99',
            image: 'https://media.istockphoto.com/id/1371154829/photo/fried-spring-roll-with-chicken-vietnamese-food-top-view.jpg?s=612x612&w=0&k=20&c=rE_c3kY44eLRzwMCRhdC45XYl1yLy7ZOdyfVWwacKJ8=',
        },
        {
            name: 'Dumplings',
            description: 'a filling wrapped in a dough, or a piece of dough itself, that is cooked by steaming, boiling, frying, or baking',
            price: '285.49',
            image: 'https://media.istockphoto.com/id/1292635321/photo/veg-steam-momo-nepalese-traditional-dish-momo-stuffed-with-vegetables-and-then-cooked-and.jpg?s=612x612&w=0&k=20&c=NyxQvDnBq7Ki09Zi21JEMxpuZ_uVr45ZBSavqXJ2T1s=',
        },
        {
            name: 'Szechuan Noodles',
            description: 'stir-fried noodles tossed with vegetables in a spicy and savory Schezwan sauce',
            price: '286.49',
            image: 'https://media.istockphoto.com/id/1313143102/photo/dandan-noodles.jpg?s=612x612&w=0&k=20&c=-1LevS-RU1G9AyRBH9zJNPiS1ofGHRHhH5kfhTWUAag=',
        },

        //Italian Snacks

        {
            name: 'Bruschetta',
            description: 'grilled or toasted bread, typically rubbed with garlic and drizzled with olive oil',
            price: '5.99',
            image: 'https://media.istockphoto.com/id/481765835/photo/homemade-italian-bruschetta-appetizer.jpg?s=612x612&w=0&k=20&c=20lme_vcpR4R2wfNyAFwvglvSj3mxJU9qel00LqzP3I=',
        },
        {
            name: 'Garlic Bread',
            description: 'a side dish made of bread topped with garlic and a fat like butter or olive oil, then toasted or baked until crisp',
            price: '7.99',
            image: 'https://media.istockphoto.com/id/1327883597/photo/garlic-bread-slices-with-butter-mozzarella-vegetable-onion-bell-pepper-on-a-black-plate.jpg?s=612x612&w=0&k=20&c=VwkyL1ETj1LNngnb9mig-CEH5IJxAINTCC6B7TioGY8=',
        },
    ]
};


//Initialize cart from localStorage

let cart = JSON.parse(localStorage.getItem('cart')) || [];


// Function to add item to cart

function addToCart(item) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(item);  // Add the new item to the cart
    localStorage.setItem('cart',JSON.stringify(cart));  //save the updated value
    //updateCartcount();  //Update cart count in the navbar
    alert(`${item.name} has been added to your cart!`); //confirmation message for save
}

// Function to show menu items
function showMenu(category){
    menuItemContainer.innerHTML = ''; // Clear the container
    const selectedMenu = menuData[category];

    selectedMenu.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.classList.add('food-item');
        itemElement.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <h3>${item.name}</h3>
            <p>${item.description}</p>
            <p class="price">${item.price}</p>
            <button class="add-to-cart-btn" data-name="${item.name}" data-price="${item.price}">
            Add to cart
            </button>
            `;
        
            // Add event listener for "Add to Cart"
            const addToCartBtn = itemElement.querySelector('.add-to-cart-btn');
            addToCartBtn.addEventListener('click',function(event) {
                const cartItem = {
                    name: item.name,
                    price: item.price,
                    description: item.description,
                    image: item.image
                };
                addToCart(cartItem); //Call the function to add item to cart
            });
            menuItemContainer.appendChild(itemElement);
    });
}


showMenu('breakfast');

function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.style.display = sidebar.style.display === 'block'  ? 'none' : ' block ';
}
function hideSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.style.display = 'none';
}