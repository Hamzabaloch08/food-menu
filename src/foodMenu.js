const foodMenu = [
  {
    id: 1,
    name: "Aloo Gosht",
    category: "Lunch",
    price: "799 PKR",
    description: "Spicy mutton curry with potatoes.",
    img: "https://fatimacooks.net/wp-content/uploads/2015/07/Aloo-Gosht-Pakistani-Meat-and-Potato-Curry.jpg"
  },
  {
    id: 2,
    name: "Coffee Shake",
    category: "Shakes",
    price: "299 PKR",
    description: "Refreshing coffee milkshake.",
    img: "https://bakingmischief.com/wp-content/uploads/2022/03/coffee-milkshake-square.jpg"
  },
  {
    id: 3,
    name: "Paratha",
    category: "Breakfast",
    price: "299 PKR",
    description: "Fluffy flatbread, served with yogurt or curry.",
    img: "https://kitchenandotherstories.com/wp-content/uploads/2021/11/Laccha-Paratha-Featured-Image.jpg"
  },
  {
    id: 4,
    name: "Chana Chaat",
    category: "Breakfast",
    price: "199 PKR",
    description: "Spicy chickpea salad with onions and tomatoes.",
    img: "https://sinfullyspicy.com/wp-content/uploads/2014/02/1200-by-1200-images.jpg"
  },
  {
    id: 5,
    name: "Halwa Puri",
    category: "Breakfast",
    price: "399 PKR",
    description: "Puri served with sweet semolina halwa.",
    img: "https://i0.wp.com/www.fatimasfabulouskitchen.com/wp-content/uploads/2017/10/halwa-puri-2-1.jpg?resize=700%2C467&ssl=1"
  },
  {
    id: 6,
    name: "Chicken Karahi",
    category: "Lunch",
    price: "899 PKR",
    description: "Spicy chicken cooked in a wok with tomatoes and green chilies.",
    img: "https://www.unileverfoodsolutions.pk/dam/global-ufs/mcos/meps/pakistan/calcmenu/recipes/PK-recipes/chicken-&-other-poultry-dishes/chicken-karahi/chicken-karahi_1260x709.jpg"
  },
  {
    id: 7,
    name: "Saag",
    category: "Breakfast",
    price: "299 PKR",
    description: "Spinach curry served with makki di roti.",
    img: "https://untoldrecipesbynosheen.com/wp-content/uploads/2020/11/sarson-ka-saag-new-main-3.jpg"
  },
  {
    id: 8,
    name: "Aloo Keema",
    category: "Breakfast",
    price: "399 PKR",
    description: "Spicy minced meat and potatoes.",
    img: "https://butteroverbae.com/wp-content/uploads/2022/10/aloo-keema-close-up-1.jpg"
  },
  {
    id: 9,
    name: "Omelette",
    category: "Breakfast",
    price: "199 PKR",
    description: "Fluffy egg omelette with onions and tomatoes.",
    img: "https://media.istockphoto.com/id/691554478/photo/omelet-with-parsley-cherry-tomatoes-and-copyspace.jpg?s=612x612&w=0&k=20&c=EDi8NhOqINhaAuJ4I9V15lNGZEs3uv1WKRO5_yrLrpc="
  },
  {
    id: 10,
    name: "Siri Paye",
    category: "Breakfast",
    price: "499 PKR",
    description: "Traditional stew made with goat's head and feet.",
    img: "https://www.finmail.com/wp-content/uploads/sites/5/2020/09/mutton-nihari-3.jpg"
  },
  {
    id: 11,
    name: "Dahi Puri",
    category: "Breakfast",
    price: "249 PKR",
    description: "Puri filled with yogurt and spices.",
    img: "https://media.istockphoto.com/id/1314802039/photo/forehead-castle-chat.jpg?s=612x612&w=0&k=20&c=_FdVXvODCNpdJ9QujyAD6eaL9waZ6Yp01kfVIMxyjW4="
  },
  {
    id: 12,
    name: "Biryani",
    category: "Lunch",
    price: "799 PKR",
    description: "Spicy rice with chicken or mutton.",
    img: "https://www.cubesnjuliennes.com/wp-content/uploads/2020/07/Chicken-Biryani-Recipe.jpg"
  },
  {
    id: 13,
    name: "Anda Paratha",
    category: "Breakfast",
    price: "349 PKR",
    description: "Paratha stuffed with scrambled eggs.",
    img: "https://cdn.tarladalal.com/members/9306/procstepimgs/egg-paratha-8-185846.jpg"
  },
  {
    id: 14,
    name: "Mutton Korma",
    category: "Lunch",
    price: "999 PKR",
    description: "Tender mutton cooked in rich gravy.",
    img: "https://www.indianhealthyrecipes.com/wp-content/uploads/2023/04/lamb-curry-recipe.jpg"
  },
  {
    id: 15,
    name: "Chicken Pulao",
    category: "Lunch",
    price: "699 PKR",
    description: "Aromatic rice with chicken.",
    img: "https://untoldrecipesbynosheen.com/wp-content/uploads/2020/10/chicken-pulao-featured.jpg"
  },
  {
    id: 16,
    name: "Saag with Makki di Roti",
    category: "Lunch",
    price: "499 PKR",
    description: "Spinach curry served with corn flatbread.",
    img: "https://myfoodstory.com/wp-content/uploads/2022/01/Sarson-ka-Saag-4.jpg"
  },
  {
    id: 17,
    name: "Peanut Butter Shake",
    category: "Shakes",
    price: "349 PKR",
    description: "Rich peanut butter milkshake.",
    img: "https://www.julieseatsandtreats.com/wp-content/uploads/2021/08/Peanut-Butter-Milkshake-Square.jpg"
  },
  {
    id: 18,
    name: "Kofta Curry",
    category: "Lunch",
    price: "799 PKR",
    description: "Meatballs cooked in a flavorful curry.",
    img: "https://ministryofcurry.com/wp-content/uploads/2017/06/malai-kofta.jpg"
  },
  {
    id: 19,
    name: "Daal Chawal",
    category: "Lunch",
    price: "399 PKR",
    description: "Lentils served with rice.",
    img: "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/03/instant-pot-dal-rice-recipe.jpg"
  },
  {
    id: 20,
    name: "Strawberry Shake",
    category: "Shakes",
    price: "299 PKR",
    description: "Sweet strawberry shake blended with milk.",
    img: "https://www.unicornsinthekitchen.com/wp-content/uploads/2018/08/Strawberry-Milkshake-square.jpg"
  },
  {
    id: 21,
    name: "Chapli Kebab",
    category: "Lunch",
    price: "699 PKR",
    description: "Spicy minced meat kebabs.",
    img: "https://fatimacooks.net/wp-content/uploads/2022/06/Chapli-Kabab-Recipe.jpg"
  },
  {
    id: 22,
    name: "Vanilla Milkshake",
    category: "Shakes",
    price: "299 PKR",
    description: "Smooth vanilla milkshake with ice cream.",
    img: "https://shottbeverages.com/wp-content/uploads/2020/09/vanilla-milkshake-662x641.jpg"
  },
  {
    id: 23,
    name: "Banana Shake",
    category: "Shakes",
    price: "249 PKR",
    description: "Smooth banana shake with milk.",
    img: "https://img.freepik.com/premium-photo/banana-smoothie-cup-healthy-shake-banana-with-milk-granola_437937-3038.jpg"
  },
  {
    id: 24,
    name: "Nihari",
    category: "Breakfast",
    price: "599 PKR",
    description: "Slow-cooked beef stew served with naan.",
    img: "https://img.cdn4dd.com/p/fit=cover,width=1200,height=1200,format=auto,quality=90/media/photosV2/523915ac-8267-4bb2-aa4c-e63d0bd99279-retina-large.JPG"
  },
  {
    id: 25,
    name: "Avocado Shake",
    category: "Shakes",
    price: "349 PKR",
    description: "Creamy avocado shake with milk.",
    img: "https://media.istockphoto.com/id/512354958/photo/avocado-and-spinach-smoothie.jpg?s=612x612&w=0&k=20&c=YOTn8fTsXk0x3ZtOBpWSTdH3zfm3PNPgGEhUj1HlJGE="
  },
  {
    id: 26,
    name: "Mango Shake",
    category: "Shakes",
    price: "299 PKR",
    description: "Refreshing shake made with fresh mangoes.",
    img: "https://media.istockphoto.com/id/904617420/photo/fresh-mango-smoothie-in-the-glass.jpg?s=612x612&w=0&k=20&c=ogIRn5AfahJNU4W8UmQIZ-mJqL9tgOm9yH_-5WJmkSQ="
  },
  {
    id: 27,
    name: "Lassi (Sweet or Salty)",
    category: "Shakes",
    price: "199 PKR",
    description: "Traditional yogurt drink, sweet or salty.",
    img: "https://img.freepik.com/premium-photo/photo-lassi-yogurtbased-drink-sweet-salty_995875-921.jpg"
  },
  {
    id: 28,
    name: "Haleem",
    category: "Lunch",
    price: "699 PKR",
    description: "A stew made from wheat, barley, and meat.",
    img: "https://static.wixstatic.com/media/16bf90_eec6da7b99d84b5cacb1caae91be7dfb~mv2.jpg/v1/fill/w_568,h_384,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/16bf90_eec6da7b99d84b5cacb1caae91be7dfb~mv2.jpg"
  },
  {
    id: 29,
    name: "Chocolate Shake",
    category: "Shakes",
    price: "349 PKR",
    description: "Creamy chocolate shake with ice cream.",
    img: "https://t4.ftcdn.net/jpg/07/04/98/39/360_F_704983944_1zZKWb6ZeD0A1Xih0m403ezMSIu36TCX.jpg"
  },
  {
    id: 30,
    name: "Apple Shake",
    category: "Shakes",
    price: "299 PKR",
    description: "Healthy apple milkshake.",
    img: "https://img.freepik.com/premium-photo/fresh-smoothie-apple-lassi-with-apple-fruit-isolated-white-background-studio-shot_741910-6204.jpg"
  },
];

