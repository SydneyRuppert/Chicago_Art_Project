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


// async function getArt(figure){
//     let img =document.getElementById(figure)
//     let name = img.getAttribute("alt");
//     let tag = img.getAttribute("num");
//     //let name = document.getElementsByTagName('img')[img_index].attributes[3].value;
//    // let tag = document.getElementsByTagName('img')[img_index].attributes[4].value;
// //    let request= new Request(`https://www.artic.edu/artworks/${tag}/${name}`,{
// //        method: 'GET'
// //     })


//     let request = `https://www.artic.edu/artworks/${tag}/${name}`
//     try {
//         let result= await fetch(request,{mode:"no-cors"});
//         let response= await result.json()
//         console.log(response)
//         let url = `https://www.artic.edu/artworks/${tag}/${name}`;
//         window.location.replace(url)
//         console.log(url)

//     }catch (error){
//         console.error("Error",error);
//     }

// }
function getArt(){
    let url=`https://www.artic.edu/collection`
    window.location.replace(url)

}

