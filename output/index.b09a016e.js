let e;const t=document.getElementById("addSongButton");document.querySelector(".mySongsContainer"),document.querySelector(".song-list-container");const n=document.getElementById("songList"),o=document.getElementById("form"),d=document.getElementById("addDialog"),l=document.getElementById("deleteDialog"),c=document.getElementById("deleteYes"),a=document.getElementById("deleteNo"),i=document.getElementById("confirmYes"),m=document.getElementById("confirmNo"),s=document.getElementById("songName");window.addEventListener("load",function(){s.focus()});let u=[];function r(){n.innerHTML="",u.forEach(e=>{let t=document.createElement("li");t.innerHTML=`${e.name} by ${e.artist}`,n.appendChild(t),t.addEventListener("click",function(){let t=document.getElementById("detailDialog"),n=document.getElementById("songDetail");n.innerHTML=`<p>Name: ${e.name}</p>
                            <p>Artist: ${e.artist}</p>
                            <p>Album: ${e.album}</p>
                            <p>Mood: ${e.mood}</p>
                            <p>Rating: ${e.rating}</p>`,t.showModal()});let o=document.createElement("button");o.innerHTML='<i class="fas fa-trash-alt"></i>',t.appendChild(o),o.addEventListener("click",function(){event.stopPropagation(),l.showModal(),c.addEventListener("click",function(){u=u.filter(t=>t.ID!==e.ID),localStorage.setItem("songs",JSON.stringify(u)),r(),l.close()}),a.addEventListener("click",function(){l.close()},{once:!0})})})}u=JSON.parse(localStorage.getItem("songs"))||[],document.getElementById("closeDetail").addEventListener("click",function(){document.getElementById("detailDialog").close()}),t.addEventListener("click",function(){t.classList.toggle("clicked")}),i.addEventListener("click",function(){u.push(e),localStorage.setItem("songs",JSON.stringify(u)),o.reset(),r(),d.close()}),m.addEventListener("click",function(){d.close()}),o.addEventListener("submit",function(t){t.preventDefault();let n=uuidv4();console.log(n),e={ID:n,name:document.getElementById("songName").value,artist:document.getElementById("artistName").value,album:document.getElementById("albumName").value,mood:document.getElementById("mood").value,rating:document.querySelector('input[name="rate"]:checked').value},d.showModal()}),r();
//# sourceMappingURL=index.b09a016e.js.map