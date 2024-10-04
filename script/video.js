const loadCatagories = ()=>{
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
    .then((res)=> res.json())
    .then((data)=>DisplayCategories(data.categories))
    .catch((error) => console.log(error))
}
const DisplayCategories = (categories)=>{
    const catagoryContainer = document.getElementById('catagories');
  categories.forEach((item) => {
    console.log(item);
    const button = document.createElement('button');
    button.classList = 'btn';
    button.innerText = item.category;
    catagoryContainer.append(button)

  });
}

loadCatagories()