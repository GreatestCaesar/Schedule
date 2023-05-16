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

/** Schedule */
let btnPreviousSchedule = document.querySelector(".btn-previous-schedule");
let btnNextSchedule = document.querySelector(".btn-next-schedule");

let divPageControlSchedule = document.querySelector(".schedule-page-number-control");
/** ===================================================================================================================================== */

let tableSchedule = document.querySelector(".table-schedule").childNodes[1];

let btnAddSchedule = document.getElementById("add-schedule");
let btnEditSchedule = document.getElementById("edit-schedule");
let btnDelSchedule = document.getElementById("del-schedule");

let id = 0;
let sum = 0;

let formDelete = document.getElementById("form_delete");

let urlForDelete = "/admin/schedule/"
let defaultActionDelete = urlForDelete

let checkYes = document.getElementById("check_yes")
let checkNo = document.getElementById("check_no")
let warningCheck = document.getElementById("warning_check")
let messageCheck = document.getElementById("message_check")

let currentPage = Number(document.getElementById("current_page").childNodes[0].textContent.trim())
let countElem = Number(document.getElementById("count_elem").childNodes[0].textContent.trim())

for (let i = 2; i < tableSchedule.childNodes.length; i += 2) {
    tableSchedule.childNodes[i].addEventListener("click", function () {
        for (let j = 2; j < tableSchedule.childNodes.length; j += 2) {
            if (tableSchedule.childNodes[j].classList.contains("active-row") && i != j) {
                tableSchedule.childNodes[j].classList.remove("active-row")
            }
        }
        if (!tableSchedule.childNodes[i].classList.contains("active-row")) {
            tableSchedule.childNodes[i].classList.add("active-row")
        } else {
            tableSchedule.childNodes[i].classList.remove("active-row")
        }
        activeRow();
    }, false);
}

/*for (let i = 2; i < tableSchedule.childNodes.length; i += 4) {
    for (let j = 3; j < tableSchedule.childNodes[i].childNodes.length; j += 2) {
        tableSchedule.childNodes[i].childNodes[j].addEventListener("mouseover", function () {
            tableSchedule.childNodes[i].childNodes[j].style.borderRight = '3px solid black'
        }, false)
        tableSchedule.childNodes[i].childNodes[j].addEventListener("mouseout", function () {
            tableSchedule.childNodes[i].childNodes[j].style.borderRight = '1px solid lightgray'
        }, false)
    }
}*/

for(let i = 3; i < 29; i += 2){
    for(let j = 2; j < tableSchedule.childNodes.length; j += 4){
        tableSchedule.childNodes[j].childNodes[i].addEventListener("mouseover", function () {
            for(let k = 2; k < tableSchedule.childNodes.length; k += 4) {
                if(k == 2){
                    tableSchedule.childNodes[0].childNodes[i].style.borderRight = '5px solid black'
                    tableSchedule.childNodes[k].childNodes[i].style.borderRight = '5px solid black'
                }else{
                    tableSchedule.childNodes[k].childNodes[i].style.borderRight = '5px solid black'
                }
            }
        }, false)
        tableSchedule.childNodes[j].childNodes[i].addEventListener("mouseout", function () {
            for(let k = 2; k < tableSchedule.childNodes.length; k += 4) {
                if(k == 2){
                    tableSchedule.childNodes[0].childNodes[i].style.borderRight = '1px solid lightgray'
                    tableSchedule.childNodes[k].childNodes[i].style.borderRight = '1px solid lightgray'
                }else{
                    tableSchedule.childNodes[k].childNodes[i].style.borderRight = '1px solid lightgray'
                }
            }
        }, false)
        tableSchedule.childNodes[j].childNodes[i].onmousedown = function (event){
            let old = 0
            function moveAt(pageX) {
                if(pageX > old){
                    tableSchedule.childNodes[0].childNodes[i].childNodes[0].style.width = tableSchedule.childNodes[j].childNodes[i].childNodes[0].clientWidth + 5 + 'px'
                }else{
                    tableSchedule.childNodes[0].childNodes[i].childNodes[0].style.width = tableSchedule.childNodes[j].childNodes[i].childNodes[0].clientWidth - 5 + 'px'
                }
                old = pageX
            }
            function onMouseMove(event) {
                moveAt(event.pageX)
            }
            document.addEventListener('mousemove',onMouseMove)
            document.onmouseup = function () {
                document.removeEventListener('mousemove', onMouseMove)
                document.onmouseup = null
            }
            tableSchedule.childNodes[j].childNodes[i].ondragstart = function() {
                return false;
            }
        }
    }
}

for (let i = 2; i < tableSchedule.childNodes.length; i += 4) {
    tableSchedule.childNodes[i].addEventListener("mouseover", function () {
        if (!tableSchedule.childNodes[i].classList.contains(".hint-for-tr")) {
            tableSchedule.childNodes[i + 2].style.display = 'block'
        }
    }, false)

    tableSchedule.childNodes[i].addEventListener("mouseout", function () {
        for (let j = 4; j < tableSchedule.childNodes.length; j += 4) {
            if (tableSchedule.childNodes[j].classList.contains("hint-for-tr")) {
                tableSchedule.childNodes[j].style.display = 'none'
            }
        }
    }, false)
}

function activeRow() {
    urlForDelete = defaultActionDelete;
    btnDelSchedule.type = 'button';
    id = 0;
    sum = 0;
    for (let i = 2; i < tableSchedule.childNodes.length; i += 2) {
        if (tableSchedule.childNodes[i].classList.contains("active-row")) {
            id = Number(tableSchedule.childNodes[i].childNodes[1].childNodes[0].textContent);
            sum += 1;
        }
    }

    if (sum == 1) {
        urlForDelete = defaultActionDelete + id;
        btnDelSchedule.type = 'submit';
    } else {
        urlForDelete = defaultActionDelete;
    }
}

btnAddSchedule.addEventListener("click", function () {
    btnAddSchedule.classList.add("active-btn");
    /** эффект для клика по кнопке */
    setTimeout(function () {
        /** эффект для клика по кнопке */
        btnAddSchedule.classList.remove("active-btn");
    }, 100);
}, false);

btnEditSchedule.addEventListener("click", function () {
    btnEditSchedule.classList.add("active-btn");
    /** эффект для клика по кнопке */
    setTimeout(function () {
        /** эффект для клика по кнопке */
        btnEditSchedule.classList.remove("active-btn");
    }, 100);
    id = 0;
    sum = 0;
    for (let i = 2; i < tableSchedule.childNodes.length; i += 2) {
        if (tableSchedule.childNodes[i].classList.contains("active-row")) {
            id = id = Number(tableSchedule.childNodes[i].childNodes[1].childNodes[0].textContent);
            sum += 1;
        }
    }
    if (sum == 1) {
        return location.href = '/admin/schedule/' + id + '/edit';
    }
}, false);

btnDelSchedule.addEventListener("click", function () {
    btnDelSchedule.classList.add("active-btn");
    /** эффект для клика по кнопке */
    setTimeout(function () {
        /** эффект для клика по кнопке */
        btnDelSchedule.classList.remove("active-btn");
    }, 100);
}, false);

/** ----------------------------------------------------------------------------------------------------------------- */
function checkDelete() {

    if (urlForDelete != defaultActionDelete) {
        warningCheck.style.display = "block"
        messageCheck.innerHTML = "Вы уверены, что хотите удалить занятие?"
    }
}

if (checkYes != null) {
    checkYes.addEventListener("click", function () {
        if (warningCheck.style.getPropertyValue("display") == "block") {
            if (urlForDelete != defaultActionDelete) {
                $.ajax({
                    url: urlForDelete,
                    type: 'DELETE',
                    headers: {
                        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                    },
                    success: (info) => {
                        if (info) {
                            if (currentPage != 1) {
                                if (countElem > 1) {
                                    return location.href = '/admin/group?page=' + currentPage;
                                } else {
                                    if (currentPage > 1) {
                                        return location.href = '/admin/group?page=' + (currentPage - 1);
                                    } else {
                                        location.reload()
                                    }
                                }
                            } else {
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
