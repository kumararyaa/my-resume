// console.log(document);
let screenWidth=document.body.clientWidth;
console.log(document.body.clientWidth);
if(screenWidth<=798){
    console.log('hey');
    let scroll=document.getElementById('slider');
    scroll.classList.remove('hidden');
}
// const cancelButton=document.getElementById('cancel-img');
//         toggleButton.addEventListener('click',()=>{
//             navbar.classList.toggle('active');
//         })
let obj = [
    {'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUrGyqIzzAyS7S9UHO-3tq6jVdVnmwxJuRxQ&usqp=CAU':
                    'https://kumararyaa.github.io/calculator/'},
    {'https://static.businessworld.in/article/article_extra_large_image/1495095537_qc3HQN_zomato.jpg':
                    'https://kumararyaa.github.io/gallery/ '},
    {'https://cdn.ttgtmedia.com/rms/onlineimages/Math_programming_calc_figure_2_half_column_mobile.jpg':
                    'https://kumararyaa.github.io/zomatoPage/'},
    {'./responsivePage.jpeg':
                    ' https://kumararyaa.github.io/calculator/'},
    {'https://www.mgtechnologies.co.in/data/products/images/4fa2f4b19eef1b745cf2158f4.jpg':
                    'https://kumararyaa.github.io/usabilityPage/'}
                    // https://kumararyaa.github.io/templatee/
]
const changeImage = ()=>{
    let leftImage=document.getElementById('content-left');
    console.log(leftImage);
TransitionEvent
    let rightImage=document.getElementById('content-right');
    // console.log(rightImage.firstChild.attributes.src.nodeValue);
    let element= document.getElementById('content-selected-img');
    // console.log(element.attributes[1].nodeValue);
    let obj1=obj.shift();
    document.getElementById('preview__button').parentElement.attributes[0].nodeValue=Object.values(obj1);
    // element.attributes[1].nodeValue=Object.keys(obj1);
    rightImage.firstChild.attributes.src.nodeValue=element.attributes[1].nodeValue;
    element.attributes[1].nodeValue=leftImage.firstChild.attributes.src.nodeValue;
    // element.attributes[1].nodeValue=Object.keys(obj1);
    // console.log(element.attributes[1].nodeValue);
    leftImage.firstChild.attributes.src.nodeValue=Object.keys(obj1);
    
    obj.push(obj1);
}
setInterval(changeImage,3000);
// let arrowLeftElement=document.getElementById('left-arrow');
// arrowLeftElement.addEventListener('click',()=>{
// changeImage();
// });
let arrowRightElement=document.getElementById('right-arrow');
arrowRightElement.addEventListener('click',()=>{
    setTimeout(changeImage,90)
    // changeImage();
})


  
