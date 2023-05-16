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

/** Teacher */
let btnPreviousTeacher = document.querySelector(".btn-previous-teacher");
let btnNextTeacher = document.querySelector(".btn-next-teacher");

let divPageControlTeacher = document.querySelector(".teacher-page-number-control");
/** ===================================================================================================================================== */
let tableTeachers = document.querySelector(".table-teachers").childNodes[1];

let btnAddTeacher = document.getElementById("add-teacher");
let btnEditTeacher = document.getElementById("edit-teacher");
let btnDelTeacher = document.getElementById("del-teacher");

let blockTableTeacher = document.querySelector(".block-table-teachers");

let cancelWarning = document.getElementById("cancel-warning");
let blockWarning = document.querySelector(".warning");

let id = 0;
let sum = 0;

let formDelete = document.getElementById("form_delete");

let urlForDelete = "/admin/teacher/"
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

/** Teacher page control */

for(let i = 2; i < tableTeachers.childNodes.length; i+=2){
    tableTeachers.childNodes[i].addEventListener("click",function () {
        for(let j = 2; j < tableTeachers.childNodes.length; j+=2){
            if(tableTeachers.childNodes[j].classList.contains("active-row") && i!=j){
                tableTeachers.childNodes[j].classList.remove("active-row")
            }
        }
        if(!tableTeachers.childNodes[i].classList.contains("active-row")){
            tableTeachers.childNodes[i].classList.add("active-row")
        }else{
            tableTeachers.childNodes[i].classList.remove("active-row")
        }
        activeRow();
    },false);
}

function activeRow(){
    urlForDelete = defaultActionDelete
    btnDelTeacher.type = 'button';
    id = 0;
    sum= 0;
    for(let i = 2; i < tableTeachers.childNodes.length; i+=2){
        if(tableTeachers.childNodes[i].classList.contains("active-row")){
            id = Number(tableTeachers.childNodes[i].childNodes[1].childNodes[0].textContent);
            sum+=1;
        }
    }

    if(sum == 1){
        urlForDelete = defaultActionDelete+id
        btnDelTeacher.type = 'submit'
    }else{
        urlForDelete = defaultActionDelete
    }
}

btnAddTeacher.addEventListener("click",function () {
    btnAddTeacher.classList.add("active-btn");                                                                                 /** эффект для клика по кнопке */
    setTimeout(function(){                                                                                       /** эффект для клика по кнопке */
    btnAddTeacher.classList.remove("active-btn");
    },100);
},false);

btnEditTeacher.addEventListener("click",function () {
    btnEditTeacher.classList.add("active-btn");                                                                                 /** эффект для клика по кнопке */
    setTimeout(function(){                                                                                       /** эффект для клика по кнопке */
    btnEditTeacher.classList.remove("active-btn");
    },100);
    id = 0;
    sum = 0;
    for(let i = 2; i < tableTeachers.childNodes.length; i+=2){
        if(tableTeachers.childNodes[i].classList.contains("active-row")){
            id = Number(tableTeachers.childNodes[i].childNodes[1].childNodes[0].textContent);
            sum+=1;
        }
    }
    if(sum == 1){
        return location.href = '/admin/teacher/'+id+'/edit';
    }
},false);

btnDelTeacher.addEventListener("click",function () {
    btnDelTeacher.classList.add("active-btn");                                                                                 /** эффект для клика по кнопке */
    setTimeout(function(){                                                                                       /** эффект для клика по кнопке */
    btnDelTeacher.classList.remove("active-btn");
    },100);
},false);
/** ----------------------------------------------------------------------------------------------------------------- */
function checkDelete() {
    if (urlForDelete != defaultActionDelete) {
        warningCheck.style.display = "block"
        messageCheck.innerHTML = "Вы уверены, что хотите удалить преподавателя?"
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
                                    return location.href = '/admin/teacher?page='+currentPage;
                                }else{
                                    if(currentPage > 1){
                                        return location.href = '/admin/teacher?page='+(currentPage-1);
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
