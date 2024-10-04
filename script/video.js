const loadCatagories = ()=>{
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
    .then((res)=> res.json())
    .then((data)=>DisplayCategories(data.categories))
    .catch((error) => console.log(error))
}

const loadVideos = ()=>{
    fetch('https://openapi.programming-hero.com/api/phero-tube/videos')
    .then((res)=> res.json())
    .then((data)=>DisplayVideos(data.videos))
    .catch((error) => console.log(error))
}

// const cardDemo =
// {
//     category_id: "1001",
// description: "'Smells Like Teen Spirit' by Oliver Harris captures the raw energy and rebellious spirit of youth. With over 5.4K views, this track brings a grunge rock vibe, featuring powerful guitar riffs and compelling vocals. Oliver's verified profile guarantees a quality musical journey that resonates with fans of dynamic, high-energy performances.",
// others: 
// {
//     views: '5.4K',
//      posted_date: '1672656000'
// },
// thumbnail: "https://i.ibb.co/f9FBQwz/smells.jpg",
// title: "Smells Like Teen Spirit",
// authors: 
// {
//     profile_picture: 'https://i.ibb.co/k4tkc42/oliviar-harris.jpg',
//      profile_name: 'Oliver Harris',
//       verified: true},
// video_id: "aaad"
// } ;
const DisplayVideos = (videos)=>{
    const videoContainer = document.getElementById('videos');
    videos.forEach(video =>{
console.log(video);
const card = document.createElement('div');
card.classList = 'card card-compact ';
card.innerHTML =
`
 <figure class = "h-[200px]">
    <img
      src="${video.thumbnail}"
      class = "h-full w-full object-cover"
      alt="Shoes" />
  </figure>
  <div class="px-0 py-2 flex gap-2">
    <div>
        <img class = "w-10 h-10 rounded-full object-cover" src = ${video.authors[0].profile_picture} />
        </div>
        <div>
        <h2 class = "font-bold">${video.title}</h2>
        <div class = "flex items-center gap-2">
        <p class ="text-gray-400"> ${video.authors[0].profile_name} </p>
        <img class = "w-5 h-5" src = "https://img.icons8.com/?size=48&id=D9RtvkuOe31p&format=png"/>
        </div>
       
        <p> </p>
        </div>
    
  </div>
`;

videoContainer.append(card);
    }
)}

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

loadCatagories();
loadVideos();