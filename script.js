const form = document.getElementById("pokedata"); // define the form that starts the request
const synth = window.speechSynthesis; // define the start of API SpeechSynthesis
// declare all data elements on page
const idPoke = document.getElementById("id_poke");
const namePoke = document.getElementById("name_poke");
const heightPoke = document.getElementById("height_poke");
const weightPoke = document.getElementById("weight_poke");
const abilitiesPoke = document.getElementById("abilities_poke");
const typesPoke = document.getElementById("types_poke");
const picPoke1 = document.getElementById("pic_poke1");
const picPoke2 = document.getElementById("pic_poke2");
const picPoke3 = document.getElementById("pic_poke3");
const picPoke4 = document.getElementById("pic_poke4");
const picPoke5 = document.getElementById("pic_poke5");
const picPoke6 = document.getElementById("pic_poke6");
const picPoke7 = document.getElementById("pic_poke7");
const picPoke8 = document.getElementById("pic_poke8");
const picPoke9 = document.getElementById("pic_poke9");
const picPoke10 = document.getElementById("pic_poke10");
const picPoke11 = document.getElementById("pic_poke11");
const picPoke12 = document.getElementById("pic_poke12");
const statsPoke = document.getElementById("stats-poke");
const infoPoke = document.getElementById("info_poke");
const genPoke = document.getElementById("gen_poke");
const regionPoke = document.getElementById("region_poke");
const speechInfo = document.getElementById("speechInfo");
const picPodekarl = document.getElementById("picPodekarl");
const catPoke = document.getElementById("cat_poke");
const bgPoke = document.getElementById("bg_poke");
const megaPoke1 = document.getElementById("mega1");
const megaPoke2 = document.getElementById("mega2");
const megaPoke3 = document.getElementById("mega3");
const megaPoke4 = document.getElementById("mega4");
const megaPoke5 = document.getElementById("mega5");
const megaPoke6 = document.getElementById("mega6");
const megaPoke7 = document.getElementById("mega7");
const megaPoke8 = document.getElementById("mega8");
const megaPoke9 = document.getElementById("mega9");
const megaPoke10 = document.getElementById("mega10");

const activePoke1 = document.getElementById("selectPic0");
const activePoke2 = document.getElementById("selectPic1");
const arrMegas = [3, 6, 9, 15, 18, 65, 80, 94, 115, 127, 130, 142, 150];
const arrMegas2 = [6, 150];
const arrGigax = [3, 6, 9, 12, 25, 52, 68, 94, 99, 131, 133, 143];
const arrAlola = [19, 20, 26, 27, 28, 37, 38, 50, 51, 52, 53, 74, 75, 76, 88, 89, 103, 105];
const arrGalar = [52, 77, 78, 79, 80, 83, 110, 122, 144, 145, 146];

synth.cancel();
            

// Start Request
form.addEventListener("submit", function(e){



  // Define the Value 'id' or 'name' of pokemon to start search 
  let search = document.getElementById("search").value;
  let originalName =  search.split(' ').join('');
   
  // only enter if some id or name is typed 
  if(originalName.length!=0){
    
    // show cards, by default are hidden with class 'see-card'
    statsPoke.classList.remove("see-card")

    // Use first API request to some data
    fetch("https://pokeapi.co/api/v2/pokemon/"+originalName.toLowerCase())
    .then((result) => result.json())
    .then((data) => {
        //console.log(result);
        //show data on page
    
        idPoke.innerHTML=`<h6 class="text-warning">ID:</h6> ${data.id} `;
        namePoke.innerHTML=`<h6 class="text-danger">Name: </h6>${data.name} `;
        heightPoke.innerHTML=`<h6 class="text-danger">Height: </h6>${(data.height)/10}m `;
        weightPoke.innerHTML=`<h6 class="text-danger">Weight: </h6>${(data.weight)/10}kg`;
        picPoke1.innerHTML=`<img src="./media/pokemons/${data.name}.gif"  class="" alt=""/><p><span class="badge badge-secondary">Form: Normal</span></p>`;
        picPoke2.innerHTML=`<img src="./media/pokemons/${data.name}b.gif"  class="" alt=""/><p><span class="badge badge-secondary">Form: Shiny</span></p>`;
        if(arrMegas.includes(data.id))
            {
                megaPoke1.classList.remove("see-card");
                megaPoke2.classList.remove("see-card");
                

                if(arrMegas2.includes(data.id)){
                        megaPoke3.classList.remove("see-card");
                        megaPoke4.classList.remove("see-card");
                        picPoke3.innerHTML=`<img src="./media/pokemons/${data.name}c1.gif"  class="" alt=""/><p><span class="badge badge-warning">Form: Mega X Normal</span></p>`;
                        picPoke4.innerHTML=`<img src="./media/pokemons/${data.name}c2.gif"  class="" alt=""/><p><span class="badge badge-warning">Form: Mega X Shiny</span></p>`;
                        picPoke5.innerHTML=`<img src="./media/pokemons/${data.name}d1.gif"  class="" alt=""/><p><span class="badge badge-warning">Form: Mega Y Normal</span></p>`;
                        picPoke6.innerHTML=`<img src="./media/pokemons/${data.name}d2.gif"  class="" alt=""/><p><span class="badge badge-warning">Form: Mega Y Shiny</span></p>`;
                
                    
                    
                        
                    
                }
                else{
                    picPoke3.innerHTML=`<img src="./media/pokemons/${data.name}c1.gif"  class="" alt=""/><p><span class="badge badge-warning">Form: Mega Normal</span></p>`;
                    picPoke4.innerHTML=`<img src="./media/pokemons/${data.name}c2.gif"  class="" alt=""/><p><span class="badge badge-warning">Form: Mega Shiny</span></p>`;
                }
            }
        else{
            
            megaPoke1.classList.add("see-card");
            megaPoke2.classList.add("see-card");
            megaPoke3.classList.add("see-card");
            megaPoke4.classList.add("see-card");
            
        }

        if(arrGigax.includes(data.id)){
            megaPoke5.classList.remove("see-card");
            megaPoke6.classList.remove("see-card");
            picPoke7.innerHTML=`<img src="./media/pokemons/${data.name}e1.gif"  class="" alt=""/><p><span class="badge badge-danger">Form: Gigamax</span></p>`;
            picPoke8.innerHTML=`<img src="./media/pokemons/${data.name}e2.gif"  class="" alt=""/><p><span class="badge badge-danger">Form: Gigamax Shiny</span></p>`;
        }
        else{
            megaPoke5.classList.add("see-card");
            megaPoke6.classList.add("see-card");
        }

        if(arrAlola.includes(data.id)){
            megaPoke7.classList.remove("see-card");
            megaPoke8.classList.remove("see-card");
            picPoke9.innerHTML=`<img src="./media/pokemons/${data.name}f1.gif"  class="" alt=""/><p><span class="badge badge-dark">Form: Alola</span></p>`;
            picPoke10.innerHTML=`<img src="./media/pokemons/${data.name}f2.gif"  class="" alt=""/><p><span class="badge badge-dark">Form: Alola Shiny</span></p>`;
        }
        else{
            megaPoke7.classList.add("see-card");
            megaPoke8.classList.add("see-card");
        }

        if(arrGalar.includes(data.id)){
            megaPoke9.classList.remove("see-card");
            megaPoke10.classList.remove("see-card");
            picPoke11.innerHTML=`<img src="./media/pokemons/${data.name}g1.gif"  class="" alt=""/><p><span class="badge badge-info">Form: Galar</span></p>`;
            picPoke12.innerHTML=`<img src="./media/pokemons/${data.name}g2.gif"  class="" alt=""/><p><span class="badge badge-info">Form: Galar Shiny</span></p>`;
        }
        else{
            megaPoke9.classList.add("see-card");
            megaPoke10.classList.add("see-card");
        }

        
        if (data.abilities.length == 2){
                abilitiesPoke.innerHTML=`<h6 class="text-danger">Abilities: </h6><span class="badge badge-primary">${data.abilities[0].ability.name}</span> <br> <span class="badge badge-secondary">${data.abilities[1].ability.name}</span>`;
            }
        else{
                abilitiesPoke.innerHTML=`<h6 class="text-danger">Ability: </h6><span class="badge badge-primary">${data.abilities[0].ability.name}</span>`;
            }

        if (data.types.length == 2){
                typesPoke.innerHTML=`<h6 class="text-danger">Types: </h6><span class="badge badge-primary">${data.types[0].type.name}</span> <br> <span class="badge badge-primary">${data.types[1].type.name}</span>`;
            }
        else{
            typesPoke.innerHTML=`<h6 class="text-danger">Type: </h6><span class="badge badge-primary">${data.types[0].type.name}</span>`;
            }
        })
        // errors control
        .catch(error => {
            console.log(error);       
            picPoke1.innerHTML=`<h3 class="text-warning">Pokemon Not Found<h3/>`;
            picPoke2.innerHTML=`<h3 class="text-warning">Pokemon Not Found<h3/>`;
            statsPoke.classList.add("see-card")  
        });  
         

        // Use second API request to some other data
        fetch("https://pokeapi.co/api/v2/pokemon-species/"+originalName.toLowerCase())
        .then((result) => result.json())
        .then((data) => {
            let text = data.name+", "+(data.flavor_text_entries[0].flavor_text).split("\n").join(" ");
            //console.log(text)
            if(data.is_legendary){ 
                bgPoke.classList.add("screen-poke-v2");
                bgPoke.classList.remove("screen-poke-v1");
                bgPoke.classList.remove("screen-poke-v3");
            }
            if(data.is_mythical){ 
                bgPoke.classList.add("screen-poke-v3");
                bgPoke.classList.remove("screen-poke-v1");
                bgPoke.classList.remove("screen-poke-v2");
            }
            if(!data.is_mythical && !data.is_legendary){ 
                bgPoke.classList.add("screen-poke-v1");
                bgPoke.classList.remove("screen-poke-v3");
                bgPoke.classList.remove("screen-poke-v2");
            }
            catPoke.innerHTML=`<h6 class="text-warning">${(data.is_legendary?"LEGENDARY":data.is_mythical?"MYTHICAL":"REGULAR")} </h6> `;
            infoPoke.innerHTML=`<h6 class="text-warning">Information:</h6> ${(data.flavor_text_entries[0].flavor_text).split("\u000c").join(" ")} `;
            genPoke.innerHTML=`<h6 class="text-warning">${(data.generation.name).toUpperCase()} </h6> `;
            regionPoke.innerHTML=`<h6 class="text-warning">${((data.pokedex_numbers[1].pokedex.name).replace("original-","")).toUpperCase()}<br><span class="badge badge-dark p-2"><img src="./media/pokemons/pokeball.png"/> 151</span></h6> `;
            speechInfo.addEventListener("click", function(e){
                
                const utterThis = new SpeechSynthesisUtterance(text)
                utterThis.pitch = 1
                utterThis.rate = 1
                utterThis.lang = "en-US"
                synth.speak(utterThis)
                e.preventDefault();
            });
        })
        .catch(error => {
            console.log(error);
        });   

}

    

    e.preventDefault();
});

// Change Pokeskin

function changeSkin(){
    const check = document.getElementById("changeCheck");
    if (check.checked == true){
        picPodekarl.attributes.src.value="./media/Pokedexv1.png";
    }
    else{
        picPodekarl.attributes.src.value="./media/Pokedexv3.png";
    }
}


// Change language

function langCheck(){
    const check = document.getElementById("langCheck");
    if (check.checked == true){
        console.log("es")
        
    }
    else{
        console.log("en")
    }
}
