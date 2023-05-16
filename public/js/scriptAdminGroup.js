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

/** Group */
let tableGroups = document.querySelector(".table-groups").childNodes[1]

let btnAddGroup = document.getElementById("add-group")
let btnEditGroup = document.getElementById("edit-group")
let btnDelGroup = document.getElementById("del-group")

let cancelWarning = document.getElementById("cancel-warning")
let blockWarning = document.querySelector(".warning")

let formDelete = document.getElementById("form_delete")

let id = 0
let sum = 0

let urlForDelete = "/admin/group/"
let defaultActionDelete = urlForDelete

let checkYes = document.getElementById("check_yes")
let checkNo = document.getElementById("check_no")
let warningCheck = document.getElementById("warning_check")
let messageCheck = document.getElementById("message_check")

let currentPage = Number(document.getElementById("current_page").childNodes[0].textContent.trim())
let countElem = Number(document.getElementById("count_elem").childNodes[0].textContent.trim())

function closeWarning(){
    blockWarning.style.display = "none"
}

cancelWarning.addEventListener("click", function (){
    closeWarning()
},false);

blockWarning.addEventListener("click",function () {
    closeWarning();
},false);

for(let i = 2; i < tableGroups.childNodes.length; i+=2){
    tableGroups.childNodes[i].addEventListener("click",function () {
        for(let j = 2; j < tableGroups.childNodes.length; j+=2){
            if(tableGroups.childNodes[j].classList.contains("active-row") && i!=j){
                tableGroups.childNodes[j].classList.remove("active-row")
            }
        }
        if(!tableGroups.childNodes[i].classList.contains("active-row")){
            tableGroups.childNodes[i].classList.add("active-row")
        }else{
            tableGroups.childNodes[i].classList.remove("active-row")
        }
        activeRow();
    },false);
}

function activeRow(){
    urlForDelete = defaultActionDelete
    btnDelGroup.type = 'button';
    id = 0;
    sum= 0;
    for(let i = 2; i < tableGroups.childNodes.length; i+=2){
        if(tableGroups.childNodes[i].classList.contains("active-row")){
            id = Number(tableGroups.childNodes[i].childNodes[1].childNodes[0].textContent);
            sum+=1;
        }
    }
    if(sum == 1){
        urlForDelete = defaultActionDelete+id
        btnDelGroup.type = 'submit'
    }else{
        urlForDelete = defaultActionDelete
    }
}

btnAddGroup.addEventListener("click",function () {
    btnAddGroup.classList.add("active-btn");                                                                                 /** эффект для клика по кнопке */
    setTimeout(function(){                                                                                       /** эффект для клика по кнопке */
    btnAddGroup.classList.remove("active-btn");
    },100);
},false);

btnEditGroup.addEventListener("click",function () {
    btnEditGroup.classList.add("active-btn");                                                                                 /** эффект для клика по кнопке */
    setTimeout(function(){                                                                                       /** эффект для клика по кнопке */
    btnEditGroup.classList.remove("active-btn");
    },100);
    id = 0;
    sum = 0;
    for(let i = 2; i < tableGroups.childNodes.length; i+=2){
        if(tableGroups.childNodes[i].classList.contains("active-row")){
            id = Number(tableGroups.childNodes[i].childNodes[1].childNodes[0].textContent);
            sum+=1;
        }
    }
    if(sum == 1){
        return location.href = '/admin/group/'+id+'/edit';
    }
},false);

btnDelGroup.addEventListener("click",function () {
    btnDelGroup.classList.add("active-btn");                                                                                 /** эффект для клика по кнопке */
    setTimeout(function(){                                                                                       /** эффект для клика по кнопке */
        btnDelGroup.classList.remove("active-btn");
    },100);
},false);
/** ----------------------------------------------------------------------------------------------------------------- */
function checkDelete() {
    if (urlForDelete != defaultActionDelete) {
        warningCheck.style.display = "block"
        messageCheck.innerHTML = "Вы уверены, что хотите удалить группу?"
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
                                    return location.href = '/admin/group?page='+currentPage;
                                }else{
                                    if(currentPage > 1){
                                        return location.href = '/admin/group?page='+(currentPage-1);
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
