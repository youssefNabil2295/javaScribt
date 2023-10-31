// --------------------- nav bar

$(`.menu`).click(function () { 
    $(`.navbar`).animate({ width: "toggle",}, 1000);
    $(`.navbar li`).animate({ width: "toggle"}, 500);
    document.querySelector(`.menu`).innerHTML= `<i class="fa-solid fa-xmark fw-bolder fa-2x x-mark"></i>`
    
 });

// ------------------------search-----------------------------




document.querySelector(`#Search`).addEventListener(`click` , function(){
     document.querySelector(`.search-inputs`).innerHTML =`<input type="text" placeholder="Search by name" class="form-control search-meal bg-black text-white" onkeyup="changeName(this.value)">
     <input type="text" placeholder="Search by first letter" class="form-control search-meal bg-black text-white" maxlength="1" onkeyup="changeLetter(this.value)">`;
     $(`.zoom-image`).hide(500);
     $(`.instructions`).hide(500);
     $(`.meal`).hide(500);
     $(`form`).hide(500);
});


//                Search by name

let allMenuName = [];


function changeName(searchName) {
    let mealSearchedName = new XMLHttpRequest();
    mealSearchedName.open(`get` , `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchName}`);
    mealSearchedName.send();
    mealSearchedName.addEventListener(`loadend` , function () {
        if(mealSearchedName.status == 200){
            console.log(JSON.parse(mealSearchedName.response));
            allMenuName = JSON.parse(mealSearchedName.response);
            displayMealByName()
        }else{
            console.log(`error`);
        }
    });
}
function displayMealByName() {
    
    let x = "";
    for (let i = 0; i < allMenuName.meals.length; i++) {
        x+= `<div class="meal col-lg-3 border border-0 rounded-5  overflow-hidden" onclick="openZoomInPageByName(${i})">
        <img class=" w-100" src="${allMenuName.meals[i].strMealThumb}" alt="">
        <div class="layer" ></div>
        <h1>${allMenuName.meals[i].strMeal}</h1>
        </div>`;
        usedId=i;
        
    }
    document.querySelector(`.search-page`).innerHTML = x;
}
function openZoomInPageByName(idx) {
    document.querySelector(`.zoomInMeal`).innerHTML= `<div class="zoom-image col-lg-4 border border-0 p-0  rounded-5 overflow-hidden me-1 ">
    <img src="${allMenuName.meals[idx].strMealThumb}" class="w-100 mb-2" alt="">
    <h2 class="text-white">${allMenuName.meals[idx].strMeal}</h2>
  </div>
  <div class="instructions text-white col-lg-7">
    <h1>Instructions</h1>
    <p class="mb-2">
    ${allMenuName.meals[idx].strInstructions}</p>
    <div class="d-flex align-items-center">
      <h1 class="me-2 fw-bold">Area :</h1><span class="fs-2">${allMenuName.meals[idx].strArea}</span>
    </div>
    <div class="d-flex align-items-center">
      <h1 class="me-2 fw-bold">Category :</h1><span class="fs-2">${allMenuName.meals[idx].strCategory}</span>
    </div>
    <h2 class="recipes">Recipes :</h2>
    <ul class= "recipes-ul d-flex  justify-content-center align-items-center">
      <li class="li1 list-unstyled alert alert-info m-2 p-1">${allMenuName.meals[idx].strMeasure1} ${allMenuName.meals[idx].strIngredient1}</li>
      <li class="li2 list-unstyled alert alert-info m-2 p-1">${allMenuName.meals[idx].strMeasure2} ${allMenuName.meals[idx].strIngredient2}</li>
      <li class="li3 list-unstyled alert alert-info m-2 p-1">${allMenuName.meals[idx].strMeasure3} ${allMenuName.meals[idx].strIngredient3}</li>
      <li class="li4 list-unstyled alert alert-info m-2 p-1">${allMenuName.meals[idx].strMeasure4} ${allMenuName.meals[idx].strIngredient4}</li>
      <li class="li5 list-unstyled alert alert-info m-2 p-1">${allMenuName.meals[idx].strMeasure5} ${allMenuName.meals[idx].strIngredient5}</li>
      <li class="li6 list-unstyled alert alert-info m-2 p-1">${allMenuName.meals[idx].strMeasure6} ${allMenuName.meals[idx].strIngredient6}</li>
      
    </ul>
    <div class="mb-4 g-3">
      <h5>Tags :</h5>
      <h6 class="meal-tag alert alert-secondary m-2 p-1">${allMenuName.meals[idx].strTags}</h6>
    </div>
    <a href="${allMenuName.meals[idx].strSource}" target="_blank" class="btn btn-success">source</a>
    <a href="${allMenuName.meals[idx].strYoutube}" target="_blank" class="btn btn-danger">youtube</a>
  </div>` ; 
  
  $(`.meal`).toggle(500); 
  $(`.search-meal`).toggle(500); 
  
  
    

};
//                   First page

changeName("")

//               search by first letter
let allMenuFirstLetter = [];


function changeLetter(searchLetter) {
    let mealSearchedLetter = new XMLHttpRequest();
    mealSearchedLetter.open(`get` , `https://www.themealdb.com/api/json/v1/1/search.php?f=${searchLetter}`);
    mealSearchedLetter.send();
    mealSearchedLetter.addEventListener(`loadend` , function () {
        if(mealSearchedLetter.status == 200){
            console.log(JSON.parse(mealSearchedLetter.response));
            allMenuFirstLetter = JSON.parse(mealSearchedLetter.response);
            displayMealByFirstLetter();
        }else{
            console.log(`error`);
        }
    });
}
function displayMealByFirstLetter() {
    
    let x = "";
    for (let i = 0; i < allMenuFirstLetter.meals.length; i++) {
        x+= `<div class="meal col-lg-3 border border-0 rounded-5  overflow-hidden " onclick="openZoomInPageByFirstLetter(${i})">
        <img class=" w-100" src="${allMenuFirstLetter.meals[i].strMealThumb}" alt="">
        <div class="layer"></div>
        <h1>${allMenuFirstLetter.meals[i].strMeal}</h1>
        </div>`;
        
    }
    document.querySelector(`.search-page`).innerHTML = x;
}
function openZoomInPageByFirstLetter(idx) {
  document.querySelector(`.zoomInMeal`).innerHTML= `<div class="zoom-image col-lg-4 border border-0 p-0  rounded-5 overflow-hidden me-1 ">
  <img src="${allMenuFirstLetter.meals[idx].strMealThumb}" class="w-100 mb-2" alt="">
  <h2 class="text-white">${allMenuFirstLetter.meals[idx].strMeal}</h2>
</div>
<div class="instructions text-white col-lg-7">
  <h1>Instructions</h1>
  <p class="mb-2">
  ${allMenuFirstLetter.meals[idx].strInstructions}</p>
  <div class="d-flex align-items-center">
    <h1 class="me-2 fw-bold">Area :</h1><span class="fs-2">${allMenuFirstLetter.meals[idx].strArea}</span>
  </div>
  <div class="d-flex align-items-center">
    <h1 class="me-2 fw-bold">Category :</h1><span class="fs-2">${allMenuFirstLetter.meals[idx].strCategory}</span>
  </div>
  <h2 class="recipes">Recipes :</h2>
  <ul class= "recipes-ul d-flex  justify-content-center align-items-center">
    <li class="li1 list-unstyled alert alert-info m-2 p-1">${allMenuFirstLetter.meals[idx].strMeasure1} ${allMenuFirstLetter.meals[idx].strIngredient1}</li>
    <li class="li2 list-unstyled alert alert-info m-2 p-1">${allMenuFirstLetter.meals[idx].strMeasure2} ${allMenuFirstLetter.meals[idx].strIngredient2}</li>
    <li class="li3 list-unstyled alert alert-info m-2 p-1">${allMenuFirstLetter.meals[idx].strMeasure3} ${allMenuFirstLetter.meals[idx].strIngredient3}</li>
    <li class="li4 list-unstyled alert alert-info m-2 p-1">${allMenuFirstLetter.meals[idx].strMeasure4} ${allMenuFirstLetter.meals[idx].strIngredient4}</li>
    <li class="li5 list-unstyled alert alert-info m-2 p-1">${allMenuFirstLetter.meals[idx].strMeasure5} ${allMenuFirstLetter.meals[idx].strIngredient5}</li>
    <li class="li6 list-unstyled alert alert-info m-2 p-1">${allMenuFirstLetter.meals[idx].strMeasure6} ${allMenuFirstLetter.meals[idx].strIngredient6}</li>
    
  </ul>
  <div class="mb-4 g-3">
    <h5>Tags :</h5>
    <h6 class="meal-tag alert alert-secondary m-2 p-1">${allMenuFirstLetter.meals[idx].strTags}</h6>
  </div>
  <a href="${allMenuFirstLetter.meals[idx].strSource}" target="_blank" class="btn btn-success">source</a>
  <a href="${allMenuFirstLetter.meals[idx].strYoutube}" target="_blank" class="btn btn-danger">youtube</a>
</div>` ; 
  $(`.meal`).toggle(500); 
  $(`.search-meal`).toggle(500); 
};

//                API for categories

let allMenuCategories = [];


function openCategories() {
    let mealCategories = new XMLHttpRequest();
    mealCategories.open(`get` , `https://www.themealdb.com/api/json/v1/1/categories.php`);
    mealCategories.send();
    mealCategories.addEventListener(`loadend` , function () {
        if(mealCategories.status == 200){
            console.log(JSON.parse(mealCategories.response));
            allMenuCategories = JSON.parse(mealCategories.response);
            displayMealByCategories()
        }else{
            console.log(`error`);
        }
    });
};

function displayMealByCategories() {
    
  let x = "";
  for (let i = 0; i < allMenuCategories.categories.length; i++) {
    //console.log(allMenuCategories.categories.i);
      x+= `<div class="meal col-lg-3 border border-0 rounded-5  overflow-hidden" onclick="openOneCategoryFilter('${allMenuCategories.categories[i].strCategory}')">
      <img class=" w-100" src="${allMenuCategories.categories[i].strCategoryThumb}" alt="">
      <div class="layer" ></div>
      <h1>${allMenuCategories.categories[i].strCategory}</h1>
      </div>`;
      
  }
  document.querySelector(`.search-page`).innerHTML = x;
   $(`.search-meal`).hide(500);
   $(`.zoom-image`).hide(500);
   $(`.instructions`).hide(500);
   $(`form`).hide(500);
};

//                API for category filter
let allCategory =[];
function openOneCategoryFilter(categoryName) {
  console.log(categoryName);
  let mealSInOneCategory = new XMLHttpRequest();
  mealSInOneCategory.open(`get` , `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`);
  mealSInOneCategory.send();
  mealSInOneCategory.addEventListener(`loadend` , function () {
        if(mealSInOneCategory.status == 200){
            allCategory = JSON.parse(mealSInOneCategory.response);
            displayMealOfOneCategory();
        }else{
            console.log(`error`);
        }
        console.log(allCategory);
    });
};
function displayMealOfOneCategory() {
    
  let x = "";
  for (let i = 0; i < allCategory.meals.length; i++) {
      x+= `<div class="meal col-lg-3 border border-0 rounded-5  overflow-hidden " onclick="openById('${allCategory.meals[i].idMeal}')">
      <img class=" w-100" src="${allCategory.meals[i].strMealThumb}" alt="">
      <div class="layer"></div>
      <h1>${allCategory.meals[i].strMeal}</h1>
      </div>`;
      
  }
  document.querySelector(`.search-page`).innerHTML = x;
};

//                    API for id
let allMenuById = [];
function openById(mealId) {
  console.log(mealId);
  let mealSById = new XMLHttpRequest();
  mealSById.open(`get` , `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`);
  mealSById.send();
  mealSById.addEventListener(`loadend` , function () {
        if(mealSById.status == 200){
          allMenuById = JSON.parse(mealSById.response);
          console.log(allMenuById);
          openZoomInPageById(0);
        }else{
            console.log(`error`);
        }
        console.log(allCategory);
    });
};
function openZoomInPageById(idx) {
  document.querySelector(`.zoomInMeal`).innerHTML= `<div class="zoom-image col-lg-4 border border-0 p-0  rounded-5 overflow-hidden me-1 ">
  <img src="${allMenuById.meals[idx].strMealThumb}" class="w-100 mb-2" alt="">
  <h2 class="text-white">${allMenuById.meals[idx].strMeal}</h2>
</div>
<div class="instructions text-white col-lg-7">
  <h1>Instructions</h1>
  <p class="mb-2">
  ${allMenuById.meals[idx].strInstructions}</p>
  <div class="d-flex align-items-center">
    <h1 class="me-2 fw-bold">Area :</h1><span class="fs-2">${allMenuById.meals[idx].strArea}</span>
  </div>
  <div class="d-flex align-items-center">
    <h1 class="me-2 fw-bold">Category :</h1><span class="fs-2">${allMenuById.meals[idx].strCategory}</span>
  </div>
  <h2 class="recipes">Recipes :</h2>
  <ul class= "recipes-ul d-flex  justify-content-center align-items-center">
    <li class="li1 list-unstyled alert alert-info m-2 p-1">${allMenuById.meals[idx].strMeasure1} ${allMenuById.meals[idx].strIngredient1}</li>
    <li class="li2 list-unstyled alert alert-info m-2 p-1">${allMenuById.meals[idx].strMeasure2} ${allMenuById.meals[idx].strIngredient2}</li>
    <li class="li3 list-unstyled alert alert-info m-2 p-1">${allMenuById.meals[idx].strMeasure3} ${allMenuById.meals[idx].strIngredient3}</li>
    <li class="li4 list-unstyled alert alert-info m-2 p-1">${allMenuById.meals[idx].strMeasure4} ${allMenuById.meals[idx].strIngredient4}</li>
    <li class="li5 list-unstyled alert alert-info m-2 p-1">${allMenuById.meals[idx].strMeasure5} ${allMenuById.meals[idx].strIngredient5}</li>
    <li class="li6 list-unstyled alert alert-info m-2 p-1">${allMenuById.meals[idx].strMeasure6} ${allMenuById.meals[idx].strIngredient6}</li>
    
  </ul>
  <div class="mb-4 g-3">
    <h5>Tags :</h5>
    <h6 class="meal-tag alert alert-secondary m-2 p-1">${allMenuById.meals[idx].strTags}</h6>
  </div>
  <a href="${allMenuById.meals[idx].strSource}" target="_blank" class="btn btn-success">source</a>
  <a href="${allMenuById.meals[idx].strYoutube}" target="_blank" class="btn btn-danger">youtube</a>
</div>` ; 
  $(`.meal`).hide(500); 
  $(`.search-meal`).hide(500); 
};


//                   API for area list

let allAreas =[];
function openAreas() {
  let mealAreas = new XMLHttpRequest();
  mealAreas.open(`get` , `https://www.themealdb.com/api/json/v1/1/list.php?a=list`);
  mealAreas.send();
  mealAreas.addEventListener(`loadend` , function () {
      if(mealAreas.status == 200){
          console.log(JSON.parse(mealAreas.response));
          allAreas = JSON.parse(mealAreas.response);
          // displayMealByCategories()
          displayMealByAreas();
      }else{
          console.log(`error`);
      }
  });
};
function displayMealByAreas() {
    
  let x = "";
  for (let i = 0; i < allAreas.meals.length; i++) {
    //console.log(allMenuCategories.categories.i);
      x+= `<div class="meal area col-lg-2 text-center gap-5" onclick="openOneAreaFilter('${allAreas.meals[i].strArea}')">
      <i class="fa-solid fa-house-flag fa-4x text-white"></i>
      <h1>${allAreas.meals[i].strArea}</h1>
      </div>
      <div class="col-lg-1"></div>`;
      
  }
  document.querySelector(`.search-page`).innerHTML = x;
   $(`.search-meal`).hide(500);
   $(`.zoom-image`).hide(500);
   $(`.instructions`).hide(500);
   $(`form`).hide(500);
};


//                   API for area filter

let wholeArea = [];
function openOneAreaFilter(area) {
  console.log(area);
  let mealSInOneArea = new XMLHttpRequest();
  mealSInOneArea.open(`get` , `https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`);
  mealSInOneArea.send();
  mealSInOneArea.addEventListener(`loadend` , function () {
        if(mealSInOneArea.status == 200){
          wholeArea = JSON.parse(mealSInOneArea.response);
          console.log(wholeArea);
          displayMealOfOneArea();
        }else{
            console.log(`error`);
        }
    });
};
function displayMealOfOneArea() {
    
  let x = "";
  for (let i = 0; i < wholeArea.meals.length; i++) {
      x+= `<div class="meal col-lg-3 border border-0 rounded-5  overflow-hidden " onclick="openById('${wholeArea.meals[i].idMeal}')">
      <img class=" w-100" src="${wholeArea.meals[i].strMealThumb}" alt="">
      <div class="layer"></div>
      <h1>${wholeArea.meals[i].strMeal}</h1>
      </div>`;
      
  }
  document.querySelector(`.search-page`).innerHTML = x;
};

//                    API for ingredient


let allIngredients = [];
function openIngredientList() {
  let mealIngredients = new XMLHttpRequest();
  mealIngredients.open(`get` , `https://www.themealdb.com/api/json/v1/1/list.php?i=list`);
  mealIngredients.send();
  mealIngredients.addEventListener(`loadend` , function () {
      if(mealIngredients.status == 200){
          console.log(JSON.parse(mealIngredients.response));
          allIngredients = JSON.parse(mealIngredients.response);
          displayIngredients();
          
      }else{
          console.log(`error`);
      }
  });
};
function displayIngredients() {
    
  let x = "";
  for (let i = 0; i < 20; i++) {
    //console.log(allMenuCategories.categories.i);
      x+= `<div class="meal ingredient col-lg-3 text-center mb-3" onclick="openOneIngredientFilter('${allIngredients.meals[i].strIngredient}')">
      <i class="fa-solid fa-drumstick-bite fa-4x text-white"></i>
      <h4 class="mt-2">${allIngredients.meals[i].strIngredient}</h4>
      <h6 class="text-white text-center mt-2">${allIngredients.meals[i].strDescription.split(" ").slice(0,5)}</h6>
      </div>
      `;
      
  }
  document.querySelector(`.search-page`).innerHTML = x;
   $(`.search-meal`).hide(500);
   $(`.zoom-image`).hide(500);
   $(`.instructions`).hide(500);
   $(`form`).hide(500);
};

//                   API for ingredients filter

let mealsOfSingleIngredient = [];
function openOneIngredientFilter(ingredient) {
  console.log(ingredient);
  let mealsOfOneIngredient = new XMLHttpRequest();
  mealsOfOneIngredient.open(`get` , `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
  mealsOfOneIngredient.send();
  mealsOfOneIngredient.addEventListener(`loadend` , function () {
        if(mealsOfOneIngredient.status == 200){
          mealsOfSingleIngredient = JSON.parse(mealsOfOneIngredient.response);
          console.log(mealsOfSingleIngredient);
          displayMealOfOneingredient()
        }else{
            console.log(`error`);
        }
    });
};
function displayMealOfOneingredient() {
    
  let x = "";
  for (let i = 0; i < mealsOfSingleIngredient.meals.length; i++) {
      x+= `<div class="meal col-lg-3 border border-0 rounded-5  overflow-hidden " onclick="openById('${mealsOfSingleIngredient.meals[i].idMeal}')">
      <img class=" w-100" src="${mealsOfSingleIngredient.meals[i].strMealThumb}" alt="">
      <div class="layer"></div>
      <h1>${mealsOfSingleIngredient.meals[i].strMeal}</h1>
      </div>`;
      
  }
  document.querySelector(`.search-page`).innerHTML = x;
};


//                         register


function openForm() {
  document.querySelector(".parentSubmit-form").innerHTML = `<form id="register" class="submit-form w-50 row g-4">
  <div class="col-lg-12 gap-3 d-flex">
    <input type="text" class="form-control name" placeholder="Enter Your Name">
    <input type="email" class="form-control email" placeholder="Enter Your Email">
  </div>
  <div class="col-lg-12 gap-3 d-flex">
    <input type="text" class="form-control phone" placeholder="Enter Your Phone">
    <input type="text" class="form-control age" placeholder="Enter Your Age">
  </div>
  <div class="col-lg-12 gap-3 d-flex">
    <input type="password" class="form-control password" placeholder="Enter Your Password">
    <input type="password" class="form-control repassword" placeholder="Repassword">
  </div>
  <div class="col-lg-12 d-flex justify-content-center align-items-center">
    <input type="submit" value="Submit" class="btn btn-danger">
  </div>
</form>`

$(`.meal`).hide(500); 
$(`.search-meal`).hide(500);
$(`.zoom-image`).hide(500);
$(`.instructions`).hide(500);
   
};



//                        Form validation
if (document.querySelector("form") != null) {
  document.querySelector("form").addEventListener("submit",function () {
    let nameInput = document.querySelector(".name").value;
    let emailInput = document.querySelector(".email").value;
    let emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let emailVR =emailRe.test(emailInput);
    console.log(emailVR);
    let phoneInput = document.querySelector(".phone").value;
    let phoneRe = /^01\d{9}$/;
    let phoneVR = phoneRe.test(phoneInput);
    console.log(phoneVR);
    let ageInput = document.querySelector(".age").value;
    let ageRe = /^[1-9][0-9]$/;
    let ageVR =ageRe.test(ageInput);
    console.log(ageVR);
    let passwordInput = document.querySelector(".password").value;
    let passwordRe = /^(?=.*[a-zA-Z])(?=.*\d).{8,}$/;
    let passwordVR =passwordRe.test(passwordInput);
    console.log(passwordVR);
    let repasswordInput = document.querySelector(".repassword").value;
    if (emailVR == false || phoneVR == false || ageVR == false || passwordVR == false) {
      return false
    }
    return true
  });
}

