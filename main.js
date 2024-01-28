let response;
let result;
let finalResult;

// -------------------------------------Start Set & Get default page --------------------------

async function getDefaultPage() {
    response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=`);
    result = await response.json();
    finalResult = result.meals;
    // console.log(finalResult)
    setDefaultPage();
}

getDefaultPage();

function setDefaultPage() {
    let cartoona = ` `;
    for (let i = 0; i < finalResult.length; i++) {
        cartoona +=
            ` <div class="col-md-3">
                          <div onclick="getDetails(${i})" class="meal position-relative overflow-hidden rounded-2">
                            <img class="w-100" src="${finalResult[i].strMealThumb}" alt="" srcset="">
                            <div class="meal-layer position-absolute d-flex align-items-center text-black p-2">
                            <h3>${finalResult[i].strMeal}</h3>
                           </div>
                         </div>
                     </div> 
                 `}
    document.querySelector('.min-vh-100 .container .row').innerHTML = cartoona;
}


$('#openBtn').click(function (eventInfo) {
    $('.navTab').toggle(1000);
})

$(document).ready(function () {
    $('.loadingScreen').fadeOut(1000);
    // $('.loadingScreen').css({display : 'none'});
    $('body').css({ overflowY: 'auto' })
})

$(document).ready(function () {
    $('.innerLoadingScreen').fadeOut(1000);
    // $('.innerLoadingScreen').css({ display: 'none' });
    $('body').css({ overflowY: 'auto' })
})



// -------------------------------------End Set & Get default page --------------------------














// -------------------------------------Start meal details page --------------------------

function getDetails(i) {

    let cartoona = `
        <div class="col-md-4 text-light">
        <img class="w-100 rounded-3" src="${finalResult[i].strMealThumb}"
            alt="">
        <h2>${finalResult[i].strMeal}</h2>
    </div>
    <div class="col-md-8 text-light">
        <h2>Instructions</h2>
        <p>${finalResult[i].strInstructions}</p>
        <h3><span class="fw-bolder">Area : </span>${finalResult[i].strArea}</h3>
        <h3><span class="fw-bolder">Category : </span>${finalResult[i].strCategory}</h3>
        <h3>Recipes :</h3>
        <ul class="list-unstyled d-flex g-3 flex-wrap">
            <li class="alert alert-info m-2 p-1">${finalResult[i].strMeasure1} ${finalResult[i].strIngredient1}</li>
            <li class="alert alert-info m-2 p-1">${finalResult[i].strMeasure2} ${finalResult[i].strIngredient2}</li>
            <li class="alert alert-info m-2 p-1">${finalResult[i].strMeasure3} ${finalResult[i].strIngredient3}</li>
            <li class="alert alert-info m-2 p-1">${finalResult[i].strMeasure4} ${finalResult[i].strIngredient4}</li>
            <li class="alert alert-info m-2 p-1">${finalResult[i].strMeasure4} ${finalResult[i].strIngredient4}</li>
            <li class="alert alert-info m-2 p-1">${finalResult[i].strMeasure5} ${finalResult[i].strIngredient5}</li>
            <li class="alert alert-info m-2 p-1">${finalResult[i].strMeasure6} ${finalResult[i].strIngredient6}</li>
            <li class="alert alert-info m-2 p-1">${finalResult[i].strMeasure7} ${finalResult[i].strIngredient7}</li>
            <li class="alert alert-info m-2 p-1">${finalResult[i].strMeasure8} ${finalResult[i].strIngredient8}</li>
            <li class="alert alert-info m-2 p-1">${finalResult[i].strMeasure9} ${finalResult[i].strIngredient79}</li>
            <li class="alert alert-info m-2 p-1">${finalResult[i].strMeasure10} ${finalResult[i].strIngredient10}</li>
        </ul>
        <h3>Tags :</h3>
        <ul class="list-unstyled d-flex g-3 flex-wrap">
            <li class="alert alert-danger m-2 p-1">${finalResult[i].strTags}</li>
        </ul>
        <a target="_blank" href="${finalResult[i].strSource}" class="btn btn-success">Source</a>
        <a target="_blank" href="${finalResult[i].strYoutube}" class="btn btn-danger">Youtube</a>
    </div>`

    document.querySelector('.min-vh-100 .container .row').innerHTML = cartoona;
}


// -------------------------------------End meal deatails page --------------------------
























// ----------------------------------------- Start search page ------------------------------------------

async function searchMealByName() {
    response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata`);
    result = await response.json();
    finalResult = result.meals;
    console.log(finalResult)
}
searchMealByName();

function searchPage() {
    cartoona = `            <div class="col-md-6 text-light">
    <input onkeyup="searchMealByName(this.value)" class="form-control bg-transparent text-white" type="text"
        placeholder="Search By Name">
</div>
<div class="col-md-6 text-light">
    <input onkeyup="searchMealByFirstLetter(this.value)" maxlength="1"
        class="form-control bg-transparent text-white" type="text" placeholder="Search By First Letter">
</div>`

    document.getElementById('searchContainer').innerHTML = cartoona;
    searchContainer.classList.replace('d-none' , 'd-flex');
}


async function searchMealByFirstLetter() {
    response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=a`);
    result = await response.json();
    finalResult = result.meals;
    console.log(finalResult)
}

searchMealByFirstLetter()

// ----------------------------------------- End search page ------------------------------------------














// ----------------------------------Start Categories page ----------------------------------

async function getCategoriesPage() {
    response = await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`);
    result = await response.json();
    finalResult = result.categories;
    // console.log(finalResult);
}

getCategoriesPage()

function setCategoriesPage() {
    let cartoona = ` `;
    for (let i = 0; i < finalResult.length; i++) {
        cartoona +=
            ` <div class="col-md-3">
                          <div onclick="setCategoriesDetailsPage(${finalResultt.strMeal})" class="meal position-relative overflow-hidden rounded-2">
                            <img class="w-100" src="${finalResult[i].strCategoryThumb}" alt="" srcset="">
                            <div class="meal-layer position-absolute text-center text-black p-2">
                            <h3>${finalResult[i].strCategory}</h3>
                            <p>${finalResult[i].strCategoryDescription}</p>
                           </div>
                         </div>
                     </div> 
                 `}

    document.querySelector('.min-vh-100 .container .row').innerHTML = cartoona;
}


// ----------------------------------End Categories page ----------------------------------













// ----------------------------------Start Categories details page ----------------------------------

let finalResultt;


async function getCategoriesDetailsPage(meal) {
    response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${meal}`);
    result = await response.json();
    finalResultt = result.meals;
    // setCategoriesDetailsPage();
    console.log(finalResultt);
}
getCategoriesDetailsPage('beef')



function setCategoriesDetailsPage(strMeal) {
    let cartoona = ` `;
    for (let i = 0; i < finalResultt.length; i++) {
        cartoona +=
            ` <div class="col-md-3">
                          <div onclick="getDetails(${i})" class="meal position-relative overflow-hidden rounded-2">
                            <img class="w-100" src="${finalResultt[i].strMealThumb}" alt="" srcset="">
                            <div class="meal-layer position-absolute d-flex align-items-center text-black p-2">
                            <h3>${finalResultt[i].strMeal}</h3>
                           </div>
                         </div>
                     </div> 
                     `
                    //  let mealName = finalResultt[i].strMeal;
                    //  getCategoriesDetailsPage(mealName)
                }

    document.querySelector('.min-vh-100 .container .row').innerHTML = cartoona;
}


// ----------------------------------End Categories details page ----------------------------------













// ----------------------------------Start area page ----------------------------------

async function getAreaPage() {
    response = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`);
    result = await response.json();
    finalResultt = result.meals;
    console.log(finalResultt)
}

getAreaPage();

function setAreaPage() {
    let cartoona = ` `;
    for (let i = 0; i < finalResult.length; i++) {
        cartoona +=
            `  <div class="col-md-3 text-light">
                     <div class="rounded-2 text-center" onclick="setAreaMealsPage(${finalResultt.strMeal})">
                         <i class="fa-solid fa-house-laptop fa-4x"></i>
                         <h3>${finalResult[i].strArea}</h3>
                     </div>
                 </div>
                 `}
    document.querySelector('.min-vh-100 .container .row').innerHTML = cartoona;
}



// ----------------------------------End area page ----------------------------------










// ----------------------------------Start area meals page ----------------------------------


async function getAreaMealsPage(meal) {
    response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${meal}`);
    result = await response.json();
    finalResult = result.meals;
    // console.log(finalResult)
}

getAreaMealsPage('Canadian');

function setAreaMealsPage() {
    let cartoona = ` `;
    for (let i = 0; i < finalResultt.length; i++) {
        cartoona +=
            ` <div class="col-md-3">
                          <div onclick="getDetails(${i})" class="meal position-relative overflow-hidden rounded-2">
                            <img class="w-100" src="${finalResultt[i].strMealThumb}" alt="" srcset="">
                            <div class="meal-layer position-absolute d-flex align-items-center text-black p-2">
                            <h3>${finalResultt[i].strMeal}</h3>
                           </div>
                         </div>
                     </div> 
                 `}
    document.querySelector('.min-vh-100 .container .row').innerHTML = cartoona;
}

// ----------------------------------End area meals page ----------------------------------













// ----------------------------------Start ingredients page ----------------------------------


async function getIngredientsPage() {
    response = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`);
    result = await response.json();
    finalResult = result.meals;
    // console.log(finalResult)
}

getIngredientsPage();

function setIngredientsPage() {
    let cartoona = ` `;
    for (let i = 0; i < 20; i++) {
        cartoona +=
            ` <div class="col-md-3 text-light">
                     <div onclick="setIngredientsMealsPage()" class="rounded-2 text-center">
                             <i class="fa-solid fa-drumstick-bite fa-4x"></i>
                             <h3>${finalResult[i].strIngredient}</h3>
                             <p>${finalResult[i].strDescription.split('').slice(0, 50).join('')}</p>
                     </div>
             </div>
                 `}
    document.querySelector('.min-vh-100 .container .row').innerHTML = cartoona;
}


// ----------------------------------End ingredients page ----------------------------------











// ----------------------------------Start ingredients meals page ----------------------------------


async function getIngredientsMealsPage(meal) {
    response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${meal}`);
    result = await response.json();
    finalResult = result.meals;
    // console.log(finalResult)
}

getIngredientsMealsPage('salmon');

function setIngredientsMealsPage() {
    let cartoona = ` `;
    for (let i = 0; i < finalResultt.length; i++) {
        cartoona +=
            ` <div class="col-md-3">
                          <div onclick="getDetails(${i})" class="meal position-relative overflow-hidden rounded-2">
                            <img class="w-100" src="${finalResultt[i].strMealThumb}" alt="" srcset="">
                            <div class="meal-layer position-absolute d-flex align-items-center text-black p-2">
                            <h3>${finalResultt[i].strMeal}</h3>
                           </div>
                         </div>
                     </div> 
                 `}
    document.querySelector('.min-vh-100 .container .row').innerHTML = cartoona;
}


// ----------------------------------End ingredients meals page ----------------------------------














// ----------------------------------Start Contact page ----------------------------------

function setContact() {
    cartoona = `                <div class="contact min-vh-100 d-flex justify-content-center align-items-center">
    <div class="container w-75 text-center">
        <div class="row g-4">
            <div class="col-md-6">
                <input id="nameInput" onkeyup="inputsValidation(this.value)" type="text" class="form-control" placeholder="Enter Your Name" fdprocessedid="5g91q4">
                <div id="nameAlert" class="alert alert-danger w-100 mt-2 d-none">
                    Special characters and numbers not allowed
                </div>
            </div>
            <div class="col-md-6">
                <input id="emailInput" onkeyup="inputsValidation(this.value)" type="email" class="form-control " placeholder="Enter Your Email" fdprocessedid="aik70p">
                <div id="emailAlert" class="alert alert-danger w-100 mt-2 d-none">
                    Email not valid *exemple@yyy.zzz
                </div>
            </div>
            <div class="col-md-6">
                <input id="phoneInput" onkeyup="inputsValidation(this.value)" type="text" class="form-control " placeholder="Enter Your Phone" fdprocessedid="ajfh6c">
                <div id="phoneAlert" class="alert alert-danger w-100 mt-2 d-none">
                    Enter valid Phone Number
                </div>
            </div>
            <div class="col-md-6">
                <input id="ageInput" onkeyup="inputsValidation(this.value)" type="number" class="form-control " placeholder="Enter Your Age" fdprocessedid="4hhzie">
                <div id="ageAlert" class="alert alert-danger w-100 mt-2 d-none">
                    Enter valid age
                </div>
            </div>
            <div class="col-md-6">
                <input id="passwordInput" onkeyup="inputsValidation(this.value)" type="password" class="form-control " placeholder="Enter Your Password" fdprocessedid="kt79ij">
                <div id="passwordAlert" class="alert alert-danger w-100 mt-2 d-none">
                    Enter valid password *Minimum eight characters, at least one letter and one number:*
                </div>
            </div>
            <div class="col-md-6">
                <input id="repasswordInput" onkeyup="inputsValidation(this.value)" type="password" class="form-control " placeholder="Repassword" fdprocessedid="vk3jf6">
                <div id="repasswordAlert" class="alert alert-danger w-100 mt-2 d-none">
                    Enter valid repassword 
                </div>
            </div>
        </div>
        <button id="submitBtn" disabled="" class="btn btn-outline-danger px-2 mt-3">Submit</button>
    </div>
</div>`

    document.querySelector('.min-vh-100 .container .row').innerHTML = cartoona;

}


// ----------------------------------End Contact page ----------------------------------














// ----------------------------------Start validtion contact ----------------------------------

let nameInput = document.getElementById('nameInput');
let emailInput = document.getElementById('emailInput');
let phoneInput = document.getElementById('phoneInput');
let ageInput = document.getElementById('ageInput');
let passwordInput = document.getElementById('passwordInput');
let repasswordInput = document.getElementById('repasswordInput');
let nameAlert = document.getElementById('nameAlert');
let emailAlert = document.getElementById('emailAlert');
let phoneAlert = document.getElementById('phoneAlert');
let ageAlert = document.getElementById('ageAlert');
let passwordAlert = document.getElementById('passwordAlert');
let repasswordAlert = document.getElementById('repasswordAlert');

function inputsValidation(input) {
    let regaxName = / [A-z] /;
    if (regaxName.test(input)) {
        nameAlert.classList.replace('d-block' , 'd-none');
        nameInput.classList.replace('is-invalid', 'is-valid');
    }
    else {
        nameAlert.classList.add('d-block');
        nameInput.classList.add('is-invalid');
    }

    let regaxEmail = /[A-z][0-9]?\W(gmail)(.com)/;
    if (regaxEmail.test(input)) {
        nameAlert.classList.replace('d-block' , 'd-none');
        nameInput.classList.replace('is-invalid', 'is-valid');
    }
    else {
        nameAlert.classList.add('d-block');
        nameInput.classList.add('is-invalid');
    }

    let regaxPhone = /[0-9]{11}$/;
    if (regaxPhone.test(input)) {
        nameAlert.classList.replace('d-block' , 'd-none');
        nameInput.classList.replace('is-invalid', 'is-valid');
    }
    else {
        nameAlert.classList.add('d-block');
        nameInput.classList.add('is-invalid');
    }

    let regaxAge = /[1-9][1-9]/;
    if (regaxAge.test(input)) {
        nameAlert.classList.replace('d-block' , 'd-none');
        nameInput.classList.replace('is-invalid', 'is-valid');
    }
    else {
        nameAlert.classList.add('d-block');
        nameInput.classList.add('is-invalid');
    }

    let regaxPassword = /[A-z]{8,20}[0-9]{1,20}/;
    if (regaxPassword.test(input)) {
        nameAlert.classList.replace('d-block' , 'd-none');
        nameInput.classList.replace('is-invalid', 'is-valid');
    }
    else {
        nameAlert.classList.add('d-block');
        nameInput.classList.add('is-invalid');
    }
}



// ----------------------------------End validtion contact -----------------------------------