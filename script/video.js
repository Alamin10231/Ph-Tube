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
const removeActiveclass=()=>{
const button = document.getElementsByClassName('category-btn');
console.log(button)
for(let btn of button){
  btn.classList.remove ("active")
}
}


const loadVideos = (searchText="")=>{
    fetch(`https://openapi.programming-hero.com/api/phero-tube/videos${searchText}`)
    .then((res)=> res.json())
    .then((data)=>DisplayVideos(data.videos))
    .catch((error) => console.log(error))
}
const loadCatagoryVideos = (id)=>{
  // alert(id);
  fetch(`https://openapi.programming-hero.com/api/phero-tube/category/${id}`)
    .then((res)=> res.json())
    .then((data)=>{
      removeActiveclass()
      const activebtn = document.getElementById(`btn-${id}`)
      activebtn.classList.add ("active")
      DisplayVideos(data.category)
    }
     )
    .catch((error) => console.log(error))
}
const LoadDetails = async(videoId)=>{
  console.log(videoId);
  const uri = `https://openapi.programming-hero.com/api/phero-tube/video/${videoId}`
  const res = await fetch(uri);
  const data = await res.json();
  displayDetails(data.video);
}
const displayDetails = (video)=>{
console.log(video)
const detailContainer = document.getElementById('modal-content');
detailContainer.innerHTML =
`
<img src = ${video.thumbnail}/>
<p>${video.description}</p>
`
document.getElementById('customModal').showModal();

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
    if(videos.length == 0){
      videoContainer.classList.remove("grid");
      videoContainer.innerHTML =
      `
      <div class ="min-h-[300px] w-full flex flex-col gap-5 justify-center items-center">
      <img src ="assets/Icon.png"/>
      <h2 class="text-center text-xl font-bold">No Content Here in this Category</h2>
      </div>
      `;
      return;
    }else{
      videoContainer.classList.add("grid");
    }
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
       
        <p><button onclick ="LoadDetails('${video.video_id}')" class ="btn btn-sm btn-error">details</button> </p>
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
    <button id="btn-${item.category_id}" onclick ="loadCatagoryVideos(${item.category_id})" class = "btn category-btn">
    ${item.category}
    </button>
   `
   
    catagoryContainer.append(buttonContainer)

  });
}
document.getElementById('search-input').addEventListener("keyup",(e)=>{
console.log(e.target.value);
})
loadCatagories();
loadVideos();