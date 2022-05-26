const navbuttons = document.querySelector('.navbuttons');
navbuttons.addEventListener('click',()=>navbuttons.classList.toggle("changes"));

const navbar = document.querySelector('.navbar');


window.addEventListener('scroll',()=>{
    const getscroll = window.scrollY;
    // console.log(getscroll);
    if(getscroll >= 200){
        navbar.classList.add("navmenus");
    }else{
        navbar.classList.remove("navmenus");
    }
});


const gallerylists = document.querySelectorAll('.gallerylists');
const filternews = document.querySelectorAll('.filters.new');
const filterfrees = document.querySelectorAll('.filters.free');
const filterpros = document.querySelectorAll('.filters.pro');

gallerylists.forEach((gallerylist)=>{
    // console.log(gallerylist);

    let datafilter = gallerylist.getAttribute('data-filter');
    // console.log(datafilter);



    gallerylist.addEventListener('click',(e)=>{

        if(datafilter === "all"){
            removeactiveitem();
            e.target.classList.add('activeitems');


            filternews.forEach(filternew=>{
                filternew.style.display="inline-block";
            });
            filterfrees.forEach(filterfree=>{
                filterfree.style.display="inline-block";
            });
            filterpros.forEach(filterpro=>{
                filterpro.style.display="inline-block";
            });


        }else if(datafilter === "new"){
            removeactiveitem();
            e.target.classList.add('activeitems');

            filternews.forEach(filternew=>{
                filternew.style.display="inline-block";
            });
            filterfrees.forEach(filterfree=>{
                filterfree.style.display="none";
            });
            filterpros.forEach(filterpro=>{
                filterpro.style.display="none";
            });
        }else if(datafilter === "free"){
            removeactiveitem();
            e.target.classList.add('activeitems');

            filternews.forEach(filternew=>{
                filternew.style.display="none";
            });
            filterfrees.forEach(filterfree=>{
                filterfree.style.display="inline-block";
            });
            filterpros.forEach(filterpro=>{
                filterpro.style.display="none";
            });
        }else{
            removeactiveitem();
            e.target.classList.add('activeitems');

            filternews.forEach(filternew=>{
                filternew.style.display="none";
            });
            filterfrees.forEach(filterfree=>{
                filterfree.style.display="none";
            });
            filterpros.forEach(filterpro=>{
                filterpro.style.display="inline-block";
            });
        }

    });

});

function removeactiveitem(){
    gallerylists.forEach((gallerylist)=> {
            gallerylist.classList.remove('activeitems');
    });
}

const getyear = document.getElementById('getyear');
const getfullyear = new Date().getFullYear();
getyear.textContent = getfullyear;