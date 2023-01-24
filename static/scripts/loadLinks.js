document.querySelector(".start-items i").addEventListener('click', loadLinks);

function loadLinks(){
    const links = document.querySelector(".links");
    console.log(links.style.display)

    if(links.style.display == "" || links.style.display == "none"){
        console.log('HI');
        links.style.display = 'block';
    }else{
        links.style.display = 'none';
    }
}