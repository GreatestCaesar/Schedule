/**
 *          __                        __
 *        /  /     _______     _____/  /__    __ ______
 *       /  /    /  ___  /   /  ___   /  /  /  /  ___  \
 *      /  /___ /  /__/  \  /  /__/  /  /__/  /  /  /  /
 *      \______/\_____/|__\/_____   / _______/__/  /__/
 *                              /  /
 *                           __/  /
 *                         / ___ /
 * */

/** Object */
let btnPreviousObject = document.querySelector(".btn-previous-object");
let btnNextObject = document.querySelector(".btn-next-object");

let divPageControlObject = document.querySelector(".object-page-number-control");

let tableObject = document.querySelector(".table-object").childNodes[1];

let btnAddObject = document.getElementById("add-object");
let btnEditObject = document.getElementById("edit-object");
let btnDelObject = document.getElementById("del-object");

let blockTableObject = document.querySelector(".block-table-object");

let cancelWarning = document.getElementById("cancel-warning");
let blockWarning = document.querySelector(".warning");

let id = 0;
let sum = 0;

let formDelete = document.getElementById("form_delete");

let urlForDelete = "/admin/object/"
let defaultActionDelete = urlForDelete

let checkYes = document.getElementById("check_yes")
let checkNo = document.getElementById("check_no")
let warningCheck = document.getElementById("warning_check")
let messageCheck = document.getElementById("message_check")

let currentPage = Number(document.getElementById("current_page").childNodes[0].textContent.trim())
let countElem = Number(document.getElementById("count_elem").childNodes[0].textContent.trim())

function closeWarning(){
    blockWarning.style.display = "none";
}

cancelWarning.addEventListener("click", function (){
    closeWarning();
},false);

blockWarning.addEventListener("click",function () {
    closeWarning();
},false);

for(let i = 2; i < tableObject.childNodes.length; i+=2){
    tableObject.childNodes[i].addEventListener("click",function () {
        for(let j = 2; j < tableObject.childNodes.length; j+=2){
            if(tableObject.childNodes[j].classList.contains("active-row") && i!=j){
                tableObject.childNodes[j].classList.remove("active-row")
            }
        }
        if(!tableObject.childNodes[i].classList.contains("active-row")){
            tableObject.childNodes[i].classList.add("active-row")
        }else{
            tableObject.childNodes[i].classList.remove("active-row")
        }
        activeRow();
    },false);
}

function activeRow(){
    urlForDelete = defaultActionDelete;
    btnDelObject.type = 'button';
    id = 0;
    sum= 0;
    for(let i = 2; i < tableObject.childNodes.length; i+=2){
        if(tableObject.childNodes[i].classList.contains("active-row")){
            id = Number(tableObject.childNodes[i].childNodes[1].childNodes[0].textContent);
            sum+=1;
        }
    }

    if(sum == 1){
        urlForDelete = defaultActionDelete+id;
        btnDelObject.type = 'submit';
    }else{
        urlForDelete = defaultActionDelete;
    }
}

btnAddObject.addEventListener("click",function () {
    btnAddObject.classList.add("active-btn");                                                                                 /** эффект для клика по кнопке */
    setTimeout(function(){                                                                                       /** эффект для клика по кнопке */
    btnAddObject.classList.remove("active-btn");
    },100);
},false);

btnEditObject.addEventListener("click",function () {
    btnEditObject.classList.add("active-btn");                                                                                 /** эффект для клика по кнопке */
    setTimeout(function(){                                                                                       /** эффект для клика по кнопке */
    btnEditObject.classList.remove("active-btn");
    },100);
    id = 0;
    sum = 0;
    for(let i = 2; i < tableObject.childNodes.length; i+=2){
        if(tableObject.childNodes[i].classList.contains("active-row")){
            id = Number(tableObject.childNodes[i].childNodes[1].childNodes[0].textContent);
            sum+=1;
        }
    }
    if(sum == 1){
        return location.href = '/admin/object/'+id+'/edit';
    }
},false);

btnDelObject.addEventListener("click",function () {
    btnDelObject.classList.add("active-btn");                                                                                 /** эффект для клика по кнопке */
    setTimeout(function(){                                                                                       /** эффект для клика по кнопке */
    btnDelObject.classList.remove("active-btn");
    },100);
},false);
/** ----------------------------------------------------------------------------------------------------------------- */
function checkDelete() {

    if (urlForDelete != defaultActionDelete) {
        warningCheck.style.display = "block"
        messageCheck.innerHTML = "Вы уверены, что хотите удалить предмет?"
    }
}

if (checkYes != null) {
    checkYes.addEventListener("click", function () {
        if (warningCheck.style.getPropertyValue("display") == "block") {
            if (urlForDelete != defaultActionDelete){
                $.ajax({
                    url: urlForDelete,
                    type: 'DELETE',
                    headers: {
                        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                    },
                    success: (info) => {
                        if(info){
                            if(currentPage != 1){
                                if(countElem > 1){
                                    return location.href = '/admin/object?page='+currentPage;
                                }else{
                                    if(currentPage > 1){
                                        return location.href = '/admin/object?page='+(currentPage-1);
                                    }else{
                                        location.reload()
                                    }
                                }
                            }else{
                                location.reload()
                            }
                        }
                    }
                })
            }
        }
    }, false)
}

if (checkNo != null) {
    checkNo.addEventListener("click", function () {
        if (warningCheck.style.getPropertyValue("display") == "block") {
            location.reload()
        }
    }, false)
}
