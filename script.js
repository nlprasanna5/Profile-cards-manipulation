/*       <div class="card">
            <div class="name">
                <img src="https://raw.githubusercontent.com/nnnkit/json-data-collections/master/game-of-thrones/game-of-thrones-eddard-stark.jpg" />
                <h3 class="charname">Eddard Ned Stark</h3>
            </div>
            <p>Lord of Winterfell - Warden of the North - Hand of the King - Married to Catelyn (Tully) Stark</p>
            <a href="http://gameofthrones.wikia.com/wiki/Eddard_Stark" class="btn">Learn More</a>

        </div> 
    

let section=document.querySelector('.container');


for(let house of got.houses) {
    
    for(let data of house.people)
    {
        let div=document.createElement('div');
        div.classList.add('card');
        let div2=document.createElement('div');
        div2.classList.add("name");
        let images=document.createElement('img');
        images.src=data.image;
        let h3=document.createElement('h3');
        h3.classList.add("charname");
        h3.innerText=data.name;
        
        div2.append(images,h3);
        div.append(div2);

        let para=document.createElement('p');
        para.innerText=data.description;
        let anchor=document.createElement('a');
        anchor.href=data.wikiLink;
        anchor.classList.add("btn");
        anchor.innerText="Learn More"

        div.append(para,anchor);

        section.append(div);
    }
}        

*/