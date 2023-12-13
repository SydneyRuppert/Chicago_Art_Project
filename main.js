//Not doing image slider anymore
/*{var slider_img = document.querySelector('.slider-img');
var Images=['American Collectors(Fred and Marcia Weisman).jpg','At the Moulin Rouge.jpg','City Scene with Nuns.jpg','Many Mansions.png','Nightlife.jpg','Paris Street; Rainy Day.jpg'];
var i=0;//current image index

function prev(){
    if(i <= 0) i = Images.length;
    i--;
    return setImage();
}

function next(){
    if( i >= Images.length-1) i + -1;
    i++;
    return setImage();
}
function setImage(){
    return slider_img.setAttribute('src','Images/'+Images[i]);
}}


// Function to get Art Info when image figure is clicked
/**
* @param img_index
* @param item_index
* 
* Function gets Art from spotify using the image index of our gallery.
* Then finds the correct item_index inside of the JSON response data from Spotify
* which will produce a preview url that will be used to play song from soundtrack.
*/


/**async function getArt(figure){
    // Get Art Name
    console.log(figure)
    console.log(figure.children)
    let alt = figure.children[0].alt
    console.log(alt)
    let request= new Request(`https://api.artic.edu/api/v1/artworks/${alt}`,{
        method: 'GET'

    })
    let result= await fetch(request)
    let response= await result.json()
    console.log(response)
   let url = `https://api.artic.edu/api/v1/artworks/${alt}`;
   //window.location.replace(url)
   console.log(url)
    test2=document.getElementById("test")
    test2.innerHTML=response.data.artist_id
        
}*/


async function getArt(Id){
    let name = document.getElementById("alt");
    let tag = document.getElementById("num");
    //let name = document.getElementsByTagName('img')[img_index].getAttribute[3].value;
    //let tag = document.getElementsByTagName('img')[img_index].getAttribute[4].value;
    let request= new Request(`https://www.artic.ed/artworks/${tag}/${name}`,{
        methodd: 'GET'
    })
    let result= await fetch(request)
    let response= await result.json()
    console.log(response)
    let url = `https://api.artic.edu/api/v1/artworks/${alt}`;
    window.location.replace(url)
    console.log(url)
}



   /**
    * 
    * 
function getArt(alt,event){
        switch(alt){
            case 'fig1': {
                event.stopPropagation();
                clickedEvent(0,3)
                break;
            }
            case 'fig2': {
                event.stopPropagation();
                clickedEvent(1,3)
                break;
            }
            case 'fig3': {
                event.stopPropagation();
                clickedEvent(2,3)
                break;
            }
            case 'fig4': {
                event.stopPropagation();
                clickedEvent(3,0)
                break;
            }
            case 'fig5': {
                event.stopPropagation();
                clickedEvent(4,0)
                break;
            }
            case 'fig6': {
                event.stopPropagation();
                clickedEvent(5,1)
                break;
            }
        }
    }
    * 
    * 
    * 
    */

