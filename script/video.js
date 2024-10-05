const loadCatagories = ()=>{
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
    .then((res)=> res.json())
    .then((data)=>DisplayCategories(data.categories))
    .catch((error) => console.log(error))
}
function getTimeString(time){
  const hour = parseInt(time/3600);
  const remindtime = time % 3600;
  const minute = parseInt( remindtime /60);
  const second = parseInt(remindtime/60);
  return (`${hour} hour ${minute} minute ${second} second`)

}


const loadVideos = ()=>{
    fetch('https://openapi.programming-hero.com/api/phero-tube/videos')
    .then((res)=> res.json())
    .then((data)=>DisplayVideos(data.videos))
    .catch((error) => console.log(error))
}
const loadCatagoryVideos = (id)=>{
  // alert(id);
  fetch(`https://openapi.programming-hero.com/api/phero-tube/category/${id}`)
    .then((res)=> res.json())
    .then((data)=>DisplayVideos(data.category))
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
//     file_name: 'Oliver Harris',
//       veriprofile_picture: 'https://i.ibb.co/k4tkc42/oliviar-harris.jpg',
//      profied: true},
// video_id: "aaad"
// } ;
const DisplayVideos = (videos)=>{
    const videoContainer = document.getElementById('videos');
    videoContainer.innerHTML ="";
    videos.forEach(video =>{
console.log(video);
const card = document.createElement('div');
card.classList = 'card card-compact ';
card.innerHTML =
`
 <figure class = "h-[200px] relative">
    <img
      src="${video.thumbnail}"
      class = "h-full w-full object-cover"
      alt="Shoes" />
      ${
        video.others.posted_date?.length == 0 ?""
        :`<span class ="absolute right-2 bottom-4 text-white bg-black p-1 text-xs">${getTimeString(video.others.posted_date)}</span>`}
       
  </figure>
  <div class="px-0 py-2 flex gap-2">
    <div>
        <img class = "w-10 h-10 rounded-full object-cover" src = ${video.authors[0].profile_picture} />
        </div>
        <div>
        <h2 class = "font-bold">${video.title}</h2>
        <div class = "flex items-center gap-2">
        <p class ="text-gray-400"> ${video.authors[0].profile_name} </p>

        ${video.authors[0].verified === true? `<img class = "w-5 h-5" src = "https://img.icons8.com/?size=48&id=D9RtvkuOe31p&format=png"/>`:""}
        
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
    const buttonContainer = document.createElement('div');
    buttonContainer.innerHTML=
  
    `
    <button onclick ="loadCatagoryVideos(${item.category_id})" class = "btn">
    ${item.category}
    </button>
   `
   
    catagoryContainer.append(buttonContainer)

  });
}

loadCatagories();
loadVideos();