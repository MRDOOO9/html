document.addEventListener("DOMContentLoaded", function() {
    var Img = document.getElementById("Img_Flag");
    var B1 = document.getElementById("Button1");
    var B2 = document.getElementById("Button2");
    var B3 = document.getElementById("Button3");
    var B4 = document.getElementById("Button4");
    var TF = document.getElementById("True_False");
    var Next = document.getElementById("Next_Button");
    var PointStr = document.getElementById("Point_Flag");
    var R = document.getElementById("Restart_Button")
    Point = 0

    let LvL = 0;
    Chack = "On"

    R.onclick = function(){
        LvL = 0
        Point = 0
        Chack = "On"
        setQuestion()
    }


    function setQuestion() {
        
        if(LvL == 0){
            True_False.innerHTML = ""
            PointStr.innerHTML = `Flag ? : Point ${Point}`
            Img.src = "Img/Flag_Chad.png";//---------Chad

            B1.style.backgroundColor = "white"
            B2.style.backgroundColor = "white"
            B3.style.backgroundColor = "white"
            B4.style.backgroundColor = "white"

            B1.innerHTML = "Argentina";
            B2.innerHTML = "Germany";
            B3.innerHTML = "Chad";
            B4.innerHTML = "Russia";
            
            B1.onclick = function(){ // False
                if(Chack == "On"){
                    B1.style.backgroundColor = "red"//Argentina
                    B2.style.backgroundColor = "red"//Germany
                    B3.style.backgroundColor = "green"//Chad
                    B4.style.backgroundColor = "red"//England
                    TF.style.color = "red"
                    TF.innerHTML = "you're wrong !"
                    Chack = "Off"
                }
               
            }
            B2.onclick = function(){ // False
                if(Chack == "On"){
                    B1.style.backgroundColor = "red"//Argentina
                    B2.style.backgroundColor = "red"//Germany
                    B3.style.backgroundColor = "green"//Chad
                    B4.style.backgroundColor = "red"//England
                    TF.style.color = "red"
                    TF.innerHTML = "you're wrong !"
                    Chack = "Off"
                }
               
    
            }
            B3.onclick = function(){ // True
                if(Chack == "On"){
                    B1.style.backgroundColor = "red"//Argentina
                    B2.style.backgroundColor = "red"//Germany
                    B3.style.backgroundColor = "green"//Chad
                    B4.style.backgroundColor = "red"//England
                    TF.style.color = "green"
                    TF.innerHTML = "You are right !"
                    Point++
                    PointStr.innerHTML = `Flag ? : Point ${Point}`
                    Chack = "Off"
                }
    
            }
            B4.onclick = function(){ // False
                if(Chack == "On"){
                    B1.style.backgroundColor = "red"//Argentina
                    B2.style.backgroundColor = "red"//Germany
                    B3.style.backgroundColor = "green"//Chad
                    B4.style.backgroundColor = "red"//England
                    TF.style.color = "red"
                    TF.innerHTML = "you're wrong !"
                    Chack = "Off"
                }

    
            }
        }
        

        if(LvL == 1){
            True_False.innerHTML = ""
            Img.src = "Img/Flag_Argentina.png";//---------Chad

            B1.style.backgroundColor = "white"
            B2.style.backgroundColor = "white"
            B3.style.backgroundColor = "white"
            B4.style.backgroundColor = "white"

            B1.innerHTML = "Argentina";
            B2.innerHTML = "UK";
            B3.innerHTML = "USA";
            B4.innerHTML = "Slovakia";
    
            B1.onclick = function(){ // True
                if(Chack == "On"){
                    B1.style.backgroundColor = "green"
                    B2.style.backgroundColor = "red"
                    B3.style.backgroundColor = "red"
                    B4.style.backgroundColor = "red"
                    TF.style.color = "green"
                    TF.innerHTML = "You are right !"
                    Point++
                    PointStr.innerHTML = `Flag ? : Point ${Point}`
                    Chack = "Off";
                }
              

            }
            B2.onclick = function(){ // False
                if(Chack == "On"){
                    B1.style.backgroundColor = "green"
                    B2.style.backgroundColor = "red"
                    B3.style.backgroundColor = "red"
                    B4.style.backgroundColor = "red"
                    TF.style.color = "red"
                    TF.innerHTML = "you're wrong !"
                    Chack = "Off"
                }
              
    
            }
            B3.onclick = function(){ // False
                if(Chack == "On"){
                    B1.style.backgroundColor = "green"
                    B2.style.backgroundColor = "red"
                    B3.style.backgroundColor = "red"
                    B4.style.backgroundColor = "red"
                    TF.style.color = "red"
                    TF.innerHTML = "you're wrong !"
                    Chack = "Off";
                }
           
            }
            B4.onclick = function(){ // False
                if(Chack == "On"){
                    B1.style.backgroundColor = "green"
                    B2.style.backgroundColor = "red"
                    B3.style.backgroundColor = "red"
                    B4.style.backgroundColor = "red"
                    TF.style.color = "red"
                    TF.innerHTML = "you're wrong !"
                    Chack = "Off"
                }
              
    
            }

        }
            if(LvL == 2){
                True_False.innerHTML = ""
                Img.src = "Img/Flag_Armenia.png";//---------Chad
    
                B1.style.backgroundColor = "white"
                B2.style.backgroundColor = "white"
                B3.style.backgroundColor = "white"
                B4.style.backgroundColor = "white"
    
                B1.innerHTML = "Russia";
                B2.innerHTML = "USA";
                B3.innerHTML = "Armenia";
                B4.innerHTML = "Germany";
        
                B1.onclick = function(){ // True
                    if(Chack == "On"){
                        B1.style.backgroundColor = "red"
                        B2.style.backgroundColor = "red"
                        B3.style.backgroundColor = "green"
                        B4.style.backgroundColor = "red"
                        TF.style.color = "red"
                        TF.innerHTML = "you're wrong !"
                        Chack = "Off"
                    }
                  
                }
                B2.onclick = function(){ // False
                    if(Chack == "On"){
                        B1.style.backgroundColor = "red"
                        B2.style.backgroundColor = "red"
                        B3.style.backgroundColor = "green"
                        B4.style.backgroundColor = "red"
                        TF.style.color = "red"
                        TF.innerHTML = "you're wrong !"
                        Chack = "Off"
                    }
               
        
                }
                B3.onclick = function(){ // False
                    if(Chack == "On"){
                        B1.style.backgroundColor = "red"
                        B2.style.backgroundColor = "red"
                        B3.style.backgroundColor = "green"
                        B4.style.backgroundColor = "red"
                        TF.style.color = "green"
                        TF.innerHTML = "You are right !"
                        Point++
                        PointStr.innerHTML = `Flag ? : Point ${Point}`
                        Chack = "Off"
    
                    }
              

                }
                B4.onclick = function(){ // False
                    if(Chack == "On"){
                        B1.style.backgroundColor = "red"
                        B2.style.backgroundColor = "red"
                        B3.style.backgroundColor = "green"
                        B4.style.backgroundColor = "red"
                        TF.style.color = "red"
                        TF.innerHTML = "you're wrong !"
                        Chack = "Off"
                    }
                  
        
                }
                
            }
    
            
            if(LvL == 3){
                True_False.innerHTML = ""

                Img.src = "Img/Flag_Great_Britain.png";//---------Chad
    
                B1.style.backgroundColor = "white"
                B2.style.backgroundColor = "white"
                B3.style.backgroundColor = "white"
                B4.style.backgroundColor = "white"
    
                B1.innerHTML = "UK";
                B2.innerHTML = "Argentina";
                B3.innerHTML = "Turkmenia";
                B4.innerHTML = "Uruguay";
        
                B1.onclick = function(){ // True
                    if(Chack == "On"){
                        B1.style.backgroundColor = "green"
                        B2.style.backgroundColor = "red"
                        B3.style.backgroundColor = "red"
                        B4.style.backgroundColor = "red"
                        TF.style.color = "green"
                        TF.innerHTML = "You are right !"
                        Point++
                        PointStr.innerHTML = `Flag ? : Point ${Point}`
                        Chack = "Off"
                    }
       

                }
                B2.onclick = function(){ // False
                    if(Chack == "On"){
                        B1.style.backgroundColor = "green"
                        B2.style.backgroundColor = "red"
                        B3.style.backgroundColor = "red"
                        B4.style.backgroundColor = "red"
                        TF.style.color = "red"
                        TF.innerHTML = "you're wrong !"
                        Chack = "Off"
                    }
  
        
                }
                B3.onclick = function(){ // False
                    if(Chack == "On"){
                        B1.style.backgroundColor = "green"
                        B2.style.backgroundColor = "red"
                        B3.style.backgroundColor = "red"
                        B4.style.backgroundColor = "red"
                        TF.style.color = "red"
                        TF.innerHTML = "you're wrong !"
                        Chack = "Off"
                    }

                
                }
                B4.onclick = function(){ // False
                    if(Chack == "On"){
                        B1.style.backgroundColor = "green"
                        B2.style.backgroundColor = "red"
                        B3.style.backgroundColor = "red"
                        B4.style.backgroundColor = "red"
                        TF.style.color = "red"
                        TF.innerHTML = "you're wrong !"
                        Chack = "Off"
                    }
          
        
                }
            }


            if(LvL == 4){
                True_False.innerHTML = ""

                Img.src = "Img/Flag_Brazil.png";//---------Chad
    
                B1.style.backgroundColor = "white"
                B2.style.backgroundColor = "white"
                B3.style.backgroundColor = "white"
                B4.style.backgroundColor = "white"
    
                B1.innerHTML = "UK";
                B2.innerHTML = "Canada";
                B3.innerHTML = "Brazil";
                B4.innerHTML = "Chad";
        
                B1.onclick = function(){ // True
                    if(Chack == "On"){
                        B1.style.backgroundColor = "green"
                        B2.style.backgroundColor = "red"
                        B3.style.backgroundColor = "green"
                        B4.style.backgroundColor = "red"
                        TF.style.color = "red"
                        TF.innerHTML = "you're wrong !"
                        Chack = "Off"
                    }
                 
                }
                B2.onclick = function(){ // False
                    if(Chack == "On"){
                        B1.style.backgroundColor = "green"
                        B2.style.backgroundColor = "red"
                        B3.style.backgroundColor = "green"
                        B4.style.backgroundColor = "red"
                        TF.style.color = "red"
                        TF.innerHTML = "you're wrong !"
                        Chack = "Off"
                    }
     
        
                }
                B3.onclick = function(){ // False
                    if(Chack == "On"){
                        B1.style.backgroundColor = "red"
                        B2.style.backgroundColor = "red"
                        B3.style.backgroundColor = "green"
                        B4.style.backgroundColor = "red"
                        TF.style.color = "green"
                        TF.innerHTML = "You are right !"
                        Point++
                        PointStr.innerHTML = `Flag ? : Point ${Point}`
                        Chack = "Off"
                    }
            
                }
                B4.onclick = function(){ // False
                    if(Chack == "On"){
                        B1.style.backgroundColor = "green"
                        B2.style.backgroundColor = "red"
                        B3.style.backgroundColor = "green"
                        B4.style.backgroundColor = "red"
                        TF.style.color = "red"
                        TF.innerHTML = "you're wrong !"
                        Chack ="Off"
                    }
 
                }
                
            }


            if(LvL == 5){
                True_False.innerHTML = ""

                Img.src = "Img/Flag_Germany.png";//---------Chad
    
                B1.style.backgroundColor = "white"
                B2.style.backgroundColor = "white"
                B3.style.backgroundColor = "white"
                B4.style.backgroundColor = "white"
    
                B1.innerHTML = "USA";
                B2.innerHTML = "Germany";
                B3.innerHTML = "England";
                B4.innerHTML = "Canada";
        
                B1.onclick = function(){ // True
                    if(Chack == "On"){
                        B1.style.backgroundColor = "red"
                        B2.style.backgroundColor = "green"
                        B3.style.backgroundColor = "red"
                        B4.style.backgroundColor = "red"
                        TF.style.color = "red"
                        TF.innerHTML = "you're wrong !"
                        Chack = "Off"
                    }
                   


                }
                B2.onclick = function(){ // False
                    if(Chack == "On"){
                        B1.style.backgroundColor = "red"
                        B2.style.backgroundColor = "green"
                        B3.style.backgroundColor = "red"
                        B4.style.backgroundColor = "red"
                        TF.style.color = "green"
                        TF.innerHTML = "You are right !"
                        Point++
                        PointStr.innerHTML = `Flag ? : Point ${Point}`
                        Chack = "Off"
                    }
                  
        
                }
                B3.onclick = function(){ // False
                    if(Chack == "On"){
                        B1.style.backgroundColor = "red"
                        B2.style.backgroundColor = "green"
                        B3.style.backgroundColor = "red"
                        B4.style.backgroundColor = "red"
                        TF.style.color = "red"
    
                        TF.innerHTML = "you're wrong !"
                        Chack = "Off"
                    }
               
                
                }
                B4.onclick = function(){ // False
                    if(Chack == "On"){
                        B1.style.backgroundColor = "red"
                        B2.style.backgroundColor = "green"
                        B3.style.backgroundColor = "red"
                        B4.style.backgroundColor = "red"
                        TF.style.color = "red"
                        TF.innerHTML = "you're wrong !"
                        Chack = "Off"
                    }
                   
                }
                
            }
        

            if(LvL == 6){
                True_False.innerHTML = ""

                Img.src = "Img/Flag_USA.png";//---------Chad
    
                B1.style.backgroundColor = "white"
                B2.style.backgroundColor = "white"
                B3.style.backgroundColor = "white"
                B4.style.backgroundColor = "white"
    
                B1.innerHTML = "China";
                B2.innerHTML = "Canada";
                B3.innerHTML = "Brazil";
                B4.innerHTML = "USA";
        
                B1.onclick = function(){ // True
                    if(Chack == "On"){
                        B1.style.backgroundColor = "red"
                        B2.style.backgroundColor = "red"
                        B3.style.backgroundColor = "red"
                        B4.style.backgroundColor = "green"
                        TF.style.color = "red"
                        TF.innerHTML = "you're wrong !"
                        Chack = "Off"
                    }
              


                }
                B2.onclick = function(){ // False
                    if(Chack == "On"){
                        B1.style.backgroundColor = "red"
                        B2.style.backgroundColor = "red"
                        B3.style.backgroundColor = "red"
                        B4.style.backgroundColor = "green"
                        TF.style.color = "red"
                        TF.innerHTML = "you're wrong !"
                        Chack = "Off"
                    }
           
                }
                B3.onclick = function(){ // False
                    if(Chack == "On"){
                        B1.style.backgroundColor = "red"
                        B2.style.backgroundColor = "red"
                        B3.style.backgroundColor = "red"
                        B4.style.backgroundColor = "green"
                        TF.style.color = "red"
                        TF.innerHTML = "you're wrong !"
                        Chack = "Off"
                    }
               
                
                }
                B4.onclick = function(){ // False
                    if(Chack == "On"){
                        B1.style.backgroundColor = "red"
                        B2.style.backgroundColor = "red"
                        B3.style.backgroundColor = "red"
                        B4.style.backgroundColor = "green"
                        TF.style.color = "green"
                        TF.innerHTML = "You are right !"
                        Point++
                        PointStr.innerHTML = `Flag ? : Point ${Point}`
                        Chack = "Off"
                    }
                  
                }
                
            }


            if(LvL == 7){
                True_False.innerHTML = ""

                Img.src = "Img/Flag_Turkmenistan.png";//---------Chad
    
                B1.style.backgroundColor = "white"
                B2.style.backgroundColor = "white"
                B3.style.backgroundColor = "white"
                B4.style.backgroundColor = "white"
    
                B1.innerHTML = "Turkmenistan";
                B2.innerHTML = "Chad";
                B3.innerHTML = "Russa";
                B4.innerHTML = "Great Britain";
        
                B1.onclick = function(){ // True
                    if(Chack == "On"){
                        B1.style.backgroundColor = "green"
                        B2.style.backgroundColor = "red"
                        B3.style.backgroundColor = "red"
                        B4.style.backgroundColor = "red"
                        TF.style.color = "green"
                        TF.innerHTML = "You are right !"
                        Point++
                        PointStr.innerHTML = `Flag ? : Point ${Point}`
                        Chack= "Off"
                    }
                    
                }
                B2.onclick = function(){ // False
                    if(Chack == "On"){
                        B1.style.backgroundColor = "green"
                        B2.style.backgroundColor = "red"
                        B3.style.backgroundColor = "red"
                        B4.style.backgroundColor = "red"
                        TF.style.color = "red"
                        TF.innerHTML = "you're wrong !"
                        Chack = "Off"
                    }
                  
                }
                B3.onclick = function(){ // False
                    if(Chack == "On"){
                        B1.style.backgroundColor = "green"
                        B2.style.backgroundColor = "red"
                        B3.style.backgroundColor = "red"
                        B4.style.backgroundColor = "red"
                        TF.style.color = "red"
                        TF.innerHTML = "you're wrong !"
                        Chack = "Off"
                    }
              
                
                }
                B4.onclick = function(){ // False
                    if(Chack == "On"){
                        B1.style.backgroundColor = "green"
                        B2.style.backgroundColor = "red"
                        B3.style.backgroundColor = "red"
                        B4.style.backgroundColor = "red"
                        TF.style.color = "red"
                        TF.innerHTML = "you're wrong !"
                        Chack = "Off"
                    }
                    
                } 
            }

            
            if(LvL == 8){
                True_False.innerHTML = ""

                Img.src = "Img/Flag_China.png";
    
                B1.style.backgroundColor = "white"
                B2.style.backgroundColor = "white"
                B3.style.backgroundColor = "white"
                B4.style.backgroundColor = "white"
    
                B1.innerHTML = "Chad";
                B2.innerHTML = "Germany";
                B3.innerHTML = "Armenia";
                B4.innerHTML = "China";
        
                B1.onclick = function(){ // True
                    if(Chack == "On"){
                        B1.style.backgroundColor = "red"
                        B2.style.backgroundColor = "red"
                        B3.style.backgroundColor = "red"
                        B4.style.backgroundColor = "green"
                        TF.style.color = "red"
                        TF.innerHTML = "you're wrong !"
                        Chack = "Off"
                    }
                }
                B2.onclick = function(){ // False
                    if(Chack == "On"){
                        B1.style.backgroundColor = "red"
                        B2.style.backgroundColor = "red"
                        B3.style.backgroundColor = "red"
                        B4.style.backgroundColor = "green"
                        TF.style.color = "red"
                        TF.innerHTML = "you're wrong !"
                        Chack = "Off"
                    }
                   
                }
                B3.onclick = function(){ // False
                    if(Chack == "On"){
                        B1.style.backgroundColor = "red"
                        B2.style.backgroundColor = "red"
                        B3.style.backgroundColor = "red"
                        B4.style.backgroundColor = "green"
                        TF.style.color = "red"
                        TF.innerHTML = "you're wrong !"
                        Chack = "Off"
                    }
               
                
                }
                B4.onclick = function(){ // False
                    if(Chack == "On"){
                        B1.style.backgroundColor = "red"
                        B2.style.backgroundColor = "red"
                        B3.style.backgroundColor = "red"
                        B4.style.backgroundColor = "green"
                        TF.style.color = "green"
                        TF.innerHTML = "You are right !"
                        Point++
                        PointStr.innerHTML = `Flag ? : Point ${Point}`
                        Chack = "Off"
                    }
                 
                } 
            }

            if(LvL == 9){
                True_False.innerHTML = ""

                Img.src = "Img/Flag_Canada.png";
    
                B1.style.backgroundColor = "white"
                B2.style.backgroundColor = "white"
                B3.style.backgroundColor = "white"
                B4.style.backgroundColor = "white"
    
                B1.innerHTML = "Chad";
                B2.innerHTML = "Argentina";
                B3.innerHTML = "Canada";
                B4.innerHTML = "China";
        
                B1.onclick = function(){ // True
                    if(Chack == "On"){
                        B1.style.backgroundColor = "red"
                        B2.style.backgroundColor = "red"
                        B3.style.backgroundColor = "green"
                        B4.style.backgroundColor = "red"
                        TF.style.color = "red"
                        TF.innerHTML = "you're wrong !"
                        Chack = "Off"
                    }
           
                }
                B2.onclick = function(){ // False
                    if(Chack == "On"){
                        B1.style.backgroundColor = "red"
                        B2.style.backgroundColor = "red"
                        B3.style.backgroundColor = "green"
                        B4.style.backgroundColor = "red"
                        TF.style.color = "red"
                        TF.innerHTML = "you're wrong !"
                        Chack = "Off"
                    }
                  
                }
                B3.onclick = function(){ // False
                    if(Chack == "On"){
                        B1.style.backgroundColor = "red"
                        B2.style.backgroundColor = "red"
                        B3.style.backgroundColor = "green"
                        B4.style.backgroundColor = "red"
                        TF.style.color = "green"
                        TF.innerHTML = "You are right !"
                        Point++
                        PointStr.innerHTML = `Flag ? : Point ${Point}`
                        Chack = "Off"
                    }
               
                
                }
                B4.onclick = function(){ // False
                    if(Chack == "On"){
                        B1.style.backgroundColor = "red"
                        B2.style.backgroundColor = "red"
                        B3.style.backgroundColor = "green"
                        B4.style.backgroundColor = "red"
                        TF.style.color = "red"
                        TF.innerHTML = "you're wrong !"
                        Chack = "Off"
                    }
       
                } 
            }

            //-----------------------------------------------------------------------
            //-----------------------------------------------------------------------
            //-----------------------------------------------------------------------
            //-----------------------------------------------------------------------
            //-----------------------------------------------------------------------
            //-----------------------------------------------------------------------
            //-----------------------------------------------------------------------
            //-----------------------------------------------------------------------
            //-----------------------------------------------------------------------
            //-----------------------------------------------------------------------
            //-----------------------------------------------------------------------
            //-----------------------------------------------------------------------
            //-----------------------------------------------------------------------
            //-----------------------------------------------------------------------
            //-----------------------------------------------------------------------
            //-----------------------------------------------------------------------
            //-----------------------------------------------------------------------


//Macedonia
//Mongolia 


            if(LvL == 10){
                True_False.innerHTML = ""

                Img.src = "Img/Flag_Mauritus.png";
    
                B1.style.backgroundColor = "white"
                B2.style.backgroundColor = "white"
                B3.style.backgroundColor = "white"
                B4.style.backgroundColor = "white"
    
                B1.innerHTML = "Republic of South Africa";
                B2.innerHTML = "Swazilad";
                B3.innerHTML = "Mauritus";
                B4.innerHTML = "Sri Lanka";
        
                B1.onclick = function(){ // True
                    if(Chack == "On"){
                        B1.style.backgroundColor = "red"
                        B2.style.backgroundColor = "red"
                        B3.style.backgroundColor = "green"
                        B4.style.backgroundColor = "red"
                        TF.style.color = "red"
                        TF.innerHTML = "you're wrong !"
                        Chack = "Off"
                    }
       
                }
                B2.onclick = function(){ // False
                    if(Chack == "On"){
                        B1.style.backgroundColor = "red"
                        B2.style.backgroundColor = "red"
                        B3.style.backgroundColor = "green"
                        B4.style.backgroundColor = "red"
                        TF.style.color = "red"
                        TF.innerHTML = "you're wrong !"
                        Chack = "Off"
                    }
               
                }
                B3.onclick = function(){ // False
                    if(Chack == "On"){
                        B1.style.backgroundColor = "red"
                        B2.style.backgroundColor = "red"
                        B3.style.backgroundColor = "green"
                        B4.style.backgroundColor = "red"
                        TF.style.color = "green"
                        TF.innerHTML = "You are right !"
                        Point++
                        PointStr.innerHTML = `Flag ? : Point ${Point}`
                        Chack = "Off"
                    }
                  
                
                }
                B4.onclick = function(){ // False
                    if(Chack == "On"){
                        B1.style.backgroundColor = "red"
                        B2.style.backgroundColor = "red"
                        B3.style.backgroundColor = "green"
                        B4.style.backgroundColor = "red"
                        TF.style.color = "red"
                        TF.innerHTML = "you're wrong !"
                        Chack = "Off"
                    }
                  
                } 
            }



            if(LvL == 11){
                True_False.innerHTML = ""

                Img.src = "Img/Flag_Sri_Lanka.png";
    
                B1.style.backgroundColor = "white"
                B2.style.backgroundColor = "white"
                B3.style.backgroundColor = "white"
                B4.style.backgroundColor = "white"
    
                B1.innerHTML = "Sri Lanka";
                B2.innerHTML = "Wales";
                B3.innerHTML = "Mauritus";
                B4.innerHTML = "Macedonia";
        
                B1.onclick = function(){ // True
                    if(Chack == "On"){
                        B1.style.backgroundColor = "green"
                        B2.style.backgroundColor = "red"
                        B3.style.backgroundColor = "red"
                        B4.style.backgroundColor = "red"
                        TF.style.color = "green"
                        TF.innerHTML = "You are right !"
                        Point++
                        PointStr.innerHTML = `Flag ? : Point ${Point}`
                        Chack = "Off"
                    }
        
                }
                B2.onclick = function(){ // False
                    if(Chack == "On"){
                        B1.style.backgroundColor = "green"
                        B2.style.backgroundColor = "red"
                        B3.style.backgroundColor = "red"
                        B4.style.backgroundColor = "red"
                        TF.style.color = "red"
                        TF.innerHTML = "you're wrong !"
                        Chack = "Off"
                    }
                  
                }
                B3.onclick = function(){ // False
                    if(Chack == "On"){
                        B1.style.backgroundColor = "green"
                        B2.style.backgroundColor = "red"
                        B3.style.backgroundColor = "red"
                        B4.style.backgroundColor = "red"
                        TF.style.color = "red"
                        TF.innerHTML = "you're wrong !"
                        Chack = "Off"
                    }
                
                
                }
                B4.onclick = function(){ // False
                    if(Chack == "On"){
                        B1.style.backgroundColor = "green"
                        B2.style.backgroundColor = "red"
                        B3.style.backgroundColor = "red"
                        B4.style.backgroundColor = "red"
                        TF.style.color = "red"
                        TF.innerHTML = "you're wrong !"
                        Chack = "Off"
                    }
           
                } 
            }


            if(LvL == 12){
                True_False.innerHTML = ""

                Img.src = "Img/Flag_Swaziland.png";
    
                B1.style.backgroundColor = "white"
                B2.style.backgroundColor = "white"
                B3.style.backgroundColor = "white"
                B4.style.backgroundColor = "white"
    
                B1.innerHTML = "Mongolia";
                B2.innerHTML = "Egiptos";
                B3.innerHTML = "Armenia";
                B4.innerHTML = "Swaziland";
        
                B1.onclick = function(){ // True
                    if(Chack == "On"){
                        B1.style.backgroundColor = "red"
                        B2.style.backgroundColor = "red"
                        B3.style.backgroundColor = "red"
                        B4.style.backgroundColor = "green"
                        TF.style.color = "red"
                        TF.innerHTML = "you're wrong !"
                        Chack = "Off"
                    }
                
                }
                B2.onclick = function(){ // False
                    if(Chack == "On"){
                        B1.style.backgroundColor = "red"
                        B2.style.backgroundColor = "red"
                        B3.style.backgroundColor = "red"
                        B4.style.backgroundColor = "green"
                        TF.style.color = "red"
                        TF.innerHTML = "you're wrong !"
                        Chack = "Off"
                    }
                }
                B3.onclick = function(){ // False
                    if(Chack == "On"){
                        B1.style.backgroundColor = "red"
                        B2.style.backgroundColor = "red"
                        B3.style.backgroundColor = "red"
                        B4.style.backgroundColor = "green"
                        TF.style.color = "red"
                        TF.innerHTML = "you're wrong !"
                        Chack = "Off"
                    }
         
                
                }
                B4.onclick = function(){ // False
                    if(Chack = "On"){
                        B1.style.backgroundColor = "red"
                        B2.style.backgroundColor = "red"
                        B3.style.backgroundColor = "red"
                        B4.style.backgroundColor = "green"
                        TF.style.color = "green"
                        TF.innerHTML = "You are right !"
                        Point++
                        PointStr.innerHTML = `Flag ? : Point ${Point}`
                        Chack = "Off"
                    }
             
                } 
            }


            if(LvL == 13){
                True_False.innerHTML = ""

                Img.src = "Img/Flag_Nepal.png";
    
                B1.style.backgroundColor = "white"
                B2.style.backgroundColor = "white"
                B3.style.backgroundColor = "white"
                B4.style.backgroundColor = "white"
    
                B1.innerHTML = "Nepal";
                B2.innerHTML = "Mongolia";
                B3.innerHTML = "Mauritus";
                B4.innerHTML = "Great Britain";
        
                B1.onclick = function(){ // True
                    if(Chack == "On"){
                        B1.style.backgroundColor = "green"
                        B2.style.backgroundColor = "red"
                        B3.style.backgroundColor = "red"
                        B4.style.backgroundColor = "red"
                        TF.style.color = "green"
                        TF.innerHTML = "You are right !"
                        Point++
                        PointStr.innerHTML = `Flag ? : Point ${Point}`
                        Chack = "Off"
                    }
                   
                }
                B2.onclick = function(){ // False
                    if(Chack == "On"){
                        B1.style.backgroundColor = "green"
                        B2.style.backgroundColor = "red"
                        B3.style.backgroundColor = "red"
                        B4.style.backgroundColor = "red"
                        TF.style.color = "red"
                        TF.innerHTML = "you're wrong !"
                        Chack = "Off"
                    }
             
                }
                B3.onclick = function(){ // False
                    if(Chack == "On"){
                        B1.style.backgroundColor = "green"
                        B2.style.backgroundColor = "red"
                        B3.style.backgroundColor = "red"
                        B4.style.backgroundColor = "red"
                        TF.style.color = "red"
                        TF.innerHTML = "you're wrong !"
                        Chack = "Off"
                    }
     
                
                }
                B4.onclick = function(){ // False
                    if(Chack == "On"){
                        B1.style.backgroundColor = "green"
                        B2.style.backgroundColor = "red"
                        B3.style.backgroundColor = "red"
                        B4.style.backgroundColor = "red"
                        TF.style.color = "red"
                        TF.innerHTML = "you're wrong !"
                        Chack = "Off"
                    }
                   
                } 
            }



            if(LvL == 14){
                True_False.innerHTML = ""

                Img.src = "Img/Flag_Wales.png";
    
                B1.style.backgroundColor = "white"
                B2.style.backgroundColor = "white"
                B3.style.backgroundColor = "white"
                B4.style.backgroundColor = "white"
    
                B1.innerHTML = "Sir Lanka";
                B2.innerHTML = "Macedonia";
                B3.innerHTML = "Republic of South Africa";
                B4.innerHTML = "Wales";
        
                B1.onclick = function(){ // True
                    if(Chack == "On"){
                        B1.style.backgroundColor = "red"
                        B2.style.backgroundColor = "red"
                        B3.style.backgroundColor = "red"
                        B4.style.backgroundColor = "green"
                        TF.style.color = "red"
                        TF.innerHTML = "you're wrong !"
                        Chack = "Off"
                    }
             
                }
                B2.onclick = function(){ // False
                    if(Chack == "On"){
                        B1.style.backgroundColor = "red"
                        B2.style.backgroundColor = "red"
                        B3.style.backgroundColor = "red"
                        B4.style.backgroundColor = "green"
                        TF.style.color = "red"
                        TF.innerHTML = "you're wrong !"
                        Chack = "Off"
                    }
              
                }
                B3.onclick = function(){ // False
                    if(Chack == "On"){
                        B1.style.backgroundColor = "red"
                        B2.style.backgroundColor = "red"
                        B3.style.backgroundColor = "red"
                        B4.style.backgroundColor = "green"
                        TF.style.color = "red"
                        TF.innerHTML = "you're wrong !"
                        Chack = "On"
                    }
                
                
                }
                B4.onclick = function(){ // False
                    if(Chack == "On"){
                        B1.style.backgroundColor = "red"
                        B2.style.backgroundColor = "red"
                        B3.style.backgroundColor = "red"
                        B4.style.backgroundColor = "green"
                        TF.style.color = "green"
                        TF.innerHTML = "You are right !"
                        Point++
                        PointStr.innerHTML = `Flag ? : Point ${Point}`
                        Chack = "Off"
                    }
              
                } 
            }
            

            
            if(LvL == 14){
                True_False.innerHTML = ""

                Img.src = "Img/Flag_Comoros.png";
    
                B1.style.backgroundColor = "white"
                B2.style.backgroundColor = "white"
                B3.style.backgroundColor = "white"
                B4.style.backgroundColor = "white"
    
                B1.innerHTML = "Comoros";
                B2.innerHTML = "Swaziland";
                B3.innerHTML = "Sri Lanka";
                B4.innerHTML = "USA";
        
                B1.onclick = function(){ // True
                    if(Chack == "On"){
                        B1.style.backgroundColor = "green"
                        B2.style.backgroundColor = "red"
                        B3.style.backgroundColor = "red"
                        B4.style.backgroundColor = "red"
                        TF.style.color = "green"
                        TF.innerHTML = "You are right !"
                        Point++
                        PointStr.innerHTML = `Flag ? : Point ${Point}`
                        Chack = "Off"
                    }
                
                }
                B2.onclick = function(){ // False
                    if(Chack == "On"){
                        B1.style.backgroundColor = "green"
                        B2.style.backgroundColor = "red"
                        B3.style.backgroundColor = "red"
                        B4.style.backgroundColor = "red"
                        TF.style.color = "red"
                        TF.innerHTML = "you're wrong !"
                        Chack = "Off"
                    }
                  
                }
                B3.onclick = function(){ // False
                    if(Chack == "On"){
                        B1.style.backgroundColor = "green"
                        B2.style.backgroundColor = "red"
                        B3.style.backgroundColor = "red"
                        B4.style.backgroundColor = "red"
                        TF.style.color = "red"
                        TF.innerHTML = "you're wrong !"
                        Chack = "Off"
                    }
               
                
                }
                B4.onclick = function(){ // False
                    if(Chack == "On"){
                        B1.style.backgroundColor = "green"
                        B2.style.backgroundColor = "red"
                        B3.style.backgroundColor = "red"
                        B4.style.backgroundColor = "red"
                        TF.style.color = "red"
                        TF.innerHTML = "you're wrong !"
                        Chack = "Off"
                    }
                   
                } 
            }

            if(LvL == 15){
                True_False.innerHTML = ""

                Img.src = "Img/Flag_Macedonia.png";
    
                B1.style.backgroundColor = "white"
                B2.style.backgroundColor = "white"
                B3.style.backgroundColor = "white"
                B4.style.backgroundColor = "white"
    
                B1.innerHTML = "Mongolia";
                B2.innerHTML = "Macedonia";//True
                B3.innerHTML = "Ukraine";
                B4.innerHTML = "Wales";
                
                B1.onclick = function(){ // True
                    if(Chack == "On"){
                        B1.style.backgroundColor = "red"
                        B2.style.backgroundColor = "green"
                        B3.style.backgroundColor = "red"
                        B4.style.backgroundColor = "red"
                        TF.style.color = "red"
                        TF.innerHTML = "you're wrong !"
                        Chack = "Off"
                    }
                  
                }
                B2.onclick = function(){ // False
                    if(Chack == "On"){
                        B1.style.backgroundColor = "red"
                        B2.style.backgroundColor = "green"
                        B3.style.backgroundColor = "red"
                        B4.style.backgroundColor = "red"
                        TF.style.color = "green"
                        TF.innerHTML = "You are right !"
                        Point++
                        PointStr.innerHTML = `Flag ? : Point ${Point}`
                        Chack = "Off"
                    }
                   



                    TF.style.color = "green"
                    TF.innerHTML = "YOU WINNN !!"
                }
                B3.onclick = function(){ // False
                    if(Chack == "On"){
                        B1.style.backgroundColor = "red"
                        B2.style.backgroundColor = "green"
                        B3.style.backgroundColor = "red"
                        B4.style.backgroundColor = "red"
                        TF.style.color = "red"
                        TF.innerHTML = "you're wrong !"
                        Chack = "Off"
                    }
                   
                
                }
                B4.onclick = function(){ // False
                    if(Chack == "On"){
                        B1.style.backgroundColor = "red"
                        B2.style.backgroundColor = "green"
                        B3.style.backgroundColor = "red"
                        B4.style.backgroundColor = "red"
                        TF.style.color = "red"
                        TF.innerHTML = "you're wrong !"
                        Next_Button = "Finish ! "

                        Chack = "Off"
                        
                    }
                 
                    
                } 
            }
    Next.onclick = function () {
        Chack = "On"
        LvL++;
        console.log(LvL)
        setQuestion();
    }
}

    setQuestion();
});
