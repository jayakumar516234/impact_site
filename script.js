// selectors

id= (id)=>document.getElementById(id)
classes= (className)=>document.getElementsByClassName(className);

// variables in review page

reviewer =id("review");
reviewOne=id("reviewer_1");
reviewTwo=id("reviewer_2");
reviewThree=id("reviewer_3");
reviewFour=id("reviewer_4");
reviewFive=id("reviewer_5");

review1=id("review1")
review2=id("review2")
review3=id("review3")
review4=id("review4")
review5=id("review5")

function review_one(a,b){
    
    reviewOne.style.backgroundColor="black"
    reviewTwo.style.backgroundColor="black"
    reviewThree.style.backgroundColor="black"
    reviewFour.style.backgroundColor="black"
    reviewFive.style.backgroundColor="black"
    a.style.backgroundColor="yellow"
    

    review1.style.scale="1";
    review2.style.scale="1";
    review3.style.scale="1";
    review4.style.scale="1";
    review5.style.scale="1";
    



    switch (b) {
       case 1:
        review1.style.scale="1.08";
        break;

        case 2:
            review2.style.scale="1.08";
            break;

        case 3:
            review3.style.scale="1.08";
            break;

        case 4:
            review4.style.scale="1.08";
            break;

        case 5:
            review5.style.scale="1.08";
            break;
    }
}

// questionpage
answer1=0;
function answers(para,btn){

    if(answer1%2==0){
        para.style.display="inline-block"
        btn.style.transform="rotate(180deg)"
        para.style.transition="1s"
        btn.style.transition="0.5s"
        answer1++;
    }
    else{
        para.style.display="none"
        para.style.transition="1s"
        btn.style.transition="0.5s"
        btn.style.transform="rotate(360deg)"
        answer1++;
    }     
}

// pricing page alert
function buy(plan){
    alert(`------- Congrats!!!------ \n Your bye a ${plan} plan`)
}

// activepage alert
function active(){
    alert("Active successful")
}


// portfolio page
products=[id("app_1"),id("app_2"),id("app_3"),id("product_1"),id("product_2"),id("product_3"),
          id("brand_1"),id("brand_2"),id("brand_3"),id("book_1"),id("book_2"),id("book_3")]

function allProduct(color){

    for(i of products){
        i.style.display="inline-block"
    }

    document.getElementById("all_pro").style.color="black";
    document.getElementById("app_pro").style.color="black";
    document.getElementById("product_pro").style.color="black";
    document.getElementById("brand_pro").style.color="black";
    document.getElementById("book_pro").style.color="black";


    document.getElementById(color).style.color="#008374";
    document.getElementById(color).style.scale="1.2";
}

function productList(name,color){

    console.log(name)
    for(i of products){
        i.style.display="none"
    }
     
    switch(name){
    
        case 'app':
            for( i=0; i<3;i++){
                products[i].style.display="inline-block"
            }
            break;
        case 'product':
            for( i=3; i<6;i++){
                products[i].style.display="inline-block"
            }
            break;
            case 'brand':
            for( i=6; i<9;i++){
                products[i].style.display="inline-block"
            }
            break;
            case 'book':
            for( i=9; i<12;i++){
                products[i].style.display="inline-block"
            }
            break;
            
    }
    document.getElementById("all_pro").style.color="black";
    document.getElementById("app_pro").style.color="black";
    document.getElementById("product_pro").style.color="black";
    document.getElementById("brand_pro").style.color="black";
    document.getElementById("book_pro").style.color="black";
    document.getElementById("all_pro").style.scale="1";

    document.getElementById(color).style.color="#008374";
    

}