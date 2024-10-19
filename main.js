let isLightMode = false;
function switch_theme() {

   const body = document.body;
   const aboutBTN = document.getElementById('about_btn') 
   const sunIcon = document.getElementById('sunIcon');
   const moonIcon = document.getElementById('moonIcon');

   if(isLightMode){
        body.style.backgroundColor = "#f3f4f6";
        body.style.color = "#060607";
        moonIcon.style.color = "#060607";
        sunIcon.style.display = 'none'; 
        moonIcon.style.display = 'block';
        aboutBTN.style.color = "#060607";
        aboutBTN.style.backgroundColor = "#98e8cd";
        aboutBTN.style.fontWeight = "bolder";
   }
   else{
        body.style.backgroundColor = "#020912";
        body.style.color = "#fafafa";
        sunIcon.style.display = 'block'; 
        moonIcon.style.display = 'none';
        aboutBTN.style.color = "#fafafa";
        aboutBTN.style.backgroundColor = "transparent";
        aboutBTN.style.fontWeight = "normal";
   }
   isLightMode = !isLightMode;
}