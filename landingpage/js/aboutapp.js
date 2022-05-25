$(document).ready(function(){

    // Get the current year for the copyright
    $('#year').text(new Date().getFullYear());

    // Configure Slider
    $('.carousel').carousel({
        interval:6000,
        pause:'hover'
    });

});


// START TESTIMONIALS
const testimonial = document.querySelector('.testimonial');
const companyname = document.querySelector('.companyname');
const role = document.querySelector('.role');

const testimonials = [
    {
        name:"IBM Technology",
        position:"Our Client",
        text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
        name:"INTEL Technology",
        position:"Our Client",
        text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
        name:"AWS Technology",
        position:"Our Client",
        text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
        name:"UNION Technology",
        position:"Our Client",
        text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
        name:"ZTE Technology",
        position:"Our Client",
        text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
];

let idx = 0;

function updatetestimonial(){
    const {name,position,text} =testimonials[idx];

    testimonial.textContent = text;
    companyname.textContent = name;
    role.textContent = position;

    idx++;

    if(idx > testimonials.length - 1){
        idx = 0;
    }

}



setInterval(updatetestimonial,10000);

