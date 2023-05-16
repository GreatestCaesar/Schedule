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

let chkBoxAll = document.getElementById("subgroup_all")
let chkBoxOne = document.getElementById("subgroup_one")
let chkBoxTwo = document.getElementById("subgroup_two")

let chkWeekOne = document.getElementById("week_one")
let chkWeekTwo = document.getElementById("week_two")
let chkWeekThree = document.getElementById("week_three")
let chkWeekFour = document.getElementById("week_four")

let selectFormLesson = document.getElementById("select_for_form")
let dateForSession = document.getElementById("date_for_session")
let dateForSemester = document.getElementById("date_for_semester")

let weekForSession = document.getElementById("week")
let subgroupForSession = document.getElementById("subgroup")
let weekDay = document.getElementById("weekday")
let time = document.getElementById("time_block")
let classTime = document.getElementById("class_time")

let timeField = document.getElementById("time_input")

let formAddSchedule = document.getElementById("form_add_schedule")

let warningCheck = document.getElementById("warning_check")
let messageCheck = document.getElementById("message_check")
let checkYes = document.getElementById("check_yes")
let checkNo = document.getElementById("check_no")

if(window.location.href.includes("edit")){
    if (selectFormLesson.value < 4) {
        dateForSemester.style.display = "flex"

        dateForSession.style.display = "none"
        time.style.display = "none"

        dateForSemester.childNodes[3].childNodes[1].childNodes[1].setAttribute("required", "")
        dateForSemester.childNodes[3].childNodes[3].childNodes[1].setAttribute("required", "")
        weekDay.childNodes[3].childNodes[1].setAttribute("required", "")
        classTime.childNodes[3].childNodes[1].setAttribute("required", "")

        dateForSession.childNodes[3].childNodes[1].removeAttribute("required")
        time.childNodes[3].childNodes[1].removeAttribute("required")

        weekForSession.style.display = "flex"
        subgroupForSession.style.display = "flex"
        weekDay.style.display = "flex"
        classTime.style.display = "flex"

        chkBoxAll.setAttribute("required", "")
        chkBoxOne.setAttribute("required", "")
        chkBoxTwo.setAttribute("required", "")

        chkWeekOne.setAttribute("required", "")
        chkWeekTwo.setAttribute("required", "")
        chkWeekThree.setAttribute("required", "")
        chkWeekFour.setAttribute("required", "")

    } else {
        if (chkBoxAll.hasAttribute("required"))
            chkBoxAll.removeAttribute("required")
        if (chkBoxOne.hasAttribute("required"))
            chkBoxOne.removeAttribute("required")
        if (chkBoxTwo.hasAttribute("required"))
            chkBoxTwo.removeAttribute("required")


        if (chkWeekOne.hasAttribute("required"))
            chkWeekOne.removeAttribute("required")
        if (chkWeekTwo.hasAttribute("required"))
            chkWeekTwo.removeAttribute("required")
        if (chkWeekThree.hasAttribute("required"))
            chkWeekThree.removeAttribute("required")
        if (chkWeekFour.hasAttribute("required"))
            chkWeekFour.removeAttribute("required")

        weekDay.style.display = "none"
        weekForSession.style.display = "none"
        subgroupForSession.style.display = "none"
        classTime.style.display = "none"

        time.style.display = "flex"

        weekDay.childNodes[3].childNodes[1].removeAttribute("required")

        dateForSession.style.display = "flex"
        dateForSemester.style.display = "none"

        dateForSemester.childNodes[3].childNodes[1].childNodes[1].removeAttribute("required")
        dateForSemester.childNodes[3].childNodes[3].childNodes[1].removeAttribute("required")
        classTime.childNodes[3].childNodes[1].removeAttribute("required")

        dateForSession.childNodes[3].childNodes[1].setAttribute("required", "")
        time.childNodes[3].childNodes[1].setAttribute("required", "")
    }
}

if(chkWeekOne != null) {
    chkWeekOne.addEventListener("click", function () {
        if (chkWeekOne.checked) {
            if (chkWeekOne.hasAttribute("required")) {
                chkWeekOne.removeAttribute("required")
            }
            if (chkWeekTwo.hasAttribute("required")) {
                chkWeekTwo.removeAttribute("required")
            }
            if (chkWeekThree.hasAttribute("required")) {
                chkWeekThree.removeAttribute("required")
            }
            if (chkWeekFour.hasAttribute("required")) {
                chkWeekFour.removeAttribute("required")
            }
        } else {
            if (!chkWeekOne.hasAttribute("required")
                && !chkWeekTwo.hasAttribute("required")
                && !chkWeekTwo.checked
                && !chkWeekThree.hasAttribute("required")
                && !chkWeekThree.checked
                && !chkWeekFour.hasAttribute("required")
                && !chkWeekFour.checked) {
                chkWeekOne.setAttribute("required", "")
            }
        }
    }, false)
}

if(chkWeekTwo != null) {
    chkWeekTwo.addEventListener("click", function () {
        if (chkWeekTwo.checked) {
            if (chkWeekOne.hasAttribute("required")) {
                chkWeekOne.removeAttribute("required")
            }
            if (chkWeekTwo.hasAttribute("required")) {
                chkWeekTwo.removeAttribute("required")
            }
            if (chkWeekThree.hasAttribute("required")) {
                chkWeekThree.removeAttribute("required")
            }
            if (chkWeekFour.hasAttribute("required")) {
                chkWeekFour.removeAttribute("required")
            }
        } else {
            if (!chkWeekTwo.hasAttribute("required")
                && !chkWeekOne.hasAttribute("required")
                && !chkWeekOne.checked
                && !chkWeekThree.hasAttribute("required")
                && !chkWeekThree.checked
                && !chkWeekFour.hasAttribute("required")
                && !chkWeekFour.checked) {
                chkWeekOne.setAttribute("required", "")
            }
        }
    }, false)
}

if(chkWeekThree != null) {
    chkWeekThree.addEventListener("click", function () {
        if (chkWeekThree.checked) {
            if (chkWeekOne.hasAttribute("required")) {
                chkWeekOne.removeAttribute("required")
            }
            if (chkWeekTwo.hasAttribute("required")) {
                chkWeekTwo.removeAttribute("required")
            }
            if (chkWeekThree.hasAttribute("required")) {
                chkWeekThree.removeAttribute("required")
            }
            if (chkWeekFour.hasAttribute("required")) {
                chkWeekFour.removeAttribute("required")
            }
        } else {
            if (!chkWeekThree.hasAttribute("required")
                && !chkWeekTwo.hasAttribute("required")
                && !chkWeekTwo.checked
                && !chkWeekOne.hasAttribute("required")
                && !chkWeekOne.checked
                && !chkWeekFour.hasAttribute("required")
                && !chkWeekFour.checked) {
                chkWeekOne.setAttribute("required", "")
            }
        }
    }, false)
}


if(chkWeekFour != null) {
    chkWeekFour.addEventListener("click", function () {
        if (chkWeekFour.checked) {
            if (chkWeekOne.hasAttribute("required")) {
                chkWeekOne.removeAttribute("required")
            }
            if (chkWeekTwo.hasAttribute("required")) {
                chkWeekTwo.removeAttribute("required")
            }
            if (chkWeekThree.hasAttribute("required")) {
                chkWeekThree.removeAttribute("required")
            }
            if (chkWeekFour.hasAttribute("required")) {
                chkWeekFour.removeAttribute("required")
            }
        } else {
            if (!chkWeekFour.hasAttribute("required")
                && !chkWeekTwo.hasAttribute("required")
                && !chkWeekTwo.checked
                && !chkWeekOne.hasAttribute("required")
                && !chkWeekOne.checked
                && !chkWeekThree.hasAttribute("required")
                && !chkWeekThree.checked) {
                chkWeekOne.setAttribute("required", "")
            }
        }
    }, false)
}

if(chkBoxAll != null) {
    chkBoxAll.addEventListener("click", function () {
        if (chkBoxOne.checked) {
            chkBoxOne.checked = false
        }
        if (chkBoxTwo.checked) {
            chkBoxTwo.checked = false
        }

        if (chkBoxAll.checked) {
            if (chkBoxOne.hasAttribute("required")) {
                chkBoxOne.removeAttribute("required")
            }
            if (chkBoxTwo.hasAttribute("required")) {
                chkBoxTwo.removeAttribute("required")
            }
        } else {
            if (!chkBoxOne.hasAttribute("required")) {
                chkBoxOne.setAttribute("required", "")
            }
            if (!chkBoxTwo.hasAttribute("required")) {
                chkBoxTwo.setAttribute("required", "")
            }
            if (!chkBoxAll.hasAttribute("required")) {
                chkBoxOne.setAttribute("required", "")
            }
        }
    }, false)
}

if(chkBoxOne != null) {
    chkBoxOne.addEventListener("click", function () {
        if (chkBoxAll.checked) {
            chkBoxAll.checked = false
        }
        if (chkBoxTwo.checked) {

            chkBoxAll.checked = true
            chkBoxOne.checked = false
            chkBoxTwo.checked = false
        }

        if (chkBoxOne.checked) {
            if (chkBoxAll.hasAttribute("required")) {
                chkBoxAll.removeAttribute("required")
            }
            if (chkBoxTwo.hasAttribute("required")) {
                chkBoxTwo.removeAttribute("required")
            }
        } else {
            if (!chkBoxAll.hasAttribute("required")) {
                chkBoxAll.setAttribute("required", "")
            }
            if (!chkBoxTwo.hasAttribute("required") && chkBoxTwo.checked) {
                chkBoxTwo.setAttribute("required", "")
            }
            if (!chkBoxOne.hasAttribute("required") && chkBoxTwo.checked) {
                chkBoxOne.setAttribute("required", "")
            }
        }

    }, false)
}

if(chkBoxTwo != null) {
    chkBoxTwo.addEventListener("click", function () {
        if (chkBoxAll.checked) {
            chkBoxAll.checked = false
        }
        if (chkBoxOne.checked) {
            chkBoxAll.checked = true


            chkBoxOne.checked = false
            chkBoxTwo.checked = false
        }

        if (chkBoxTwo.checked) {
            if (chkBoxAll.hasAttribute("required")) {
                chkBoxAll.removeAttribute("required")
            }
            if (chkBoxOne.hasAttribute("required")) {
                chkBoxOne.removeAttribute("required")
            }
        } else {
            if (!chkBoxAll.hasAttribute("required")) {
                chkBoxAll.setAttribute("required", "")
            }
            if (!chkBoxOne.hasAttribute("required") && chkBoxOne.checked) {
                chkBoxOne.setAttribute("required", "")
            }
            if (!chkBoxTwo.hasAttribute("required") && chkBoxOne.checked) {
                chkBoxTwo.setAttribute("required", "")
            }
        }
    }, false)
}

if(selectFormLesson != null) {
    selectFormLesson.addEventListener("change", function () {
        if (selectFormLesson.value < 4) {
            dateForSemester.style.display = "flex"

            dateForSession.style.display = "none"
            time.style.display = "none"

            dateForSemester.childNodes[3].childNodes[1].childNodes[1].setAttribute("required", "")
            dateForSemester.childNodes[3].childNodes[3].childNodes[1].setAttribute("required", "")
            weekDay.childNodes[3].childNodes[1].setAttribute("required", "")
            classTime.childNodes[3].childNodes[1].setAttribute("required", "")

            dateForSession.childNodes[3].childNodes[1].removeAttribute("required")
            time.childNodes[3].childNodes[1].removeAttribute("required")

            weekForSession.style.display = "flex"
            subgroupForSession.style.display = "flex"
            weekDay.style.display = "flex"
            classTime.style.display = "flex"

            chkBoxAll.setAttribute("required", "")
            chkBoxOne.setAttribute("required", "")
            chkBoxTwo.setAttribute("required", "")

            chkWeekOne.setAttribute("required", "")
            chkWeekTwo.setAttribute("required", "")
            chkWeekThree.setAttribute("required", "")
            chkWeekFour.setAttribute("required", "")

        } else {
            if (chkBoxAll.hasAttribute("required"))
                chkBoxAll.removeAttribute("required")
            if (chkBoxOne.hasAttribute("required"))
                chkBoxOne.removeAttribute("required")
            if (chkBoxTwo.hasAttribute("required"))
                chkBoxTwo.removeAttribute("required")


            if (chkWeekOne.hasAttribute("required"))
                chkWeekOne.removeAttribute("required")
            if (chkWeekTwo.hasAttribute("required"))
                chkWeekTwo.removeAttribute("required")
            if (chkWeekThree.hasAttribute("required"))
                chkWeekThree.removeAttribute("required")
            if (chkWeekFour.hasAttribute("required"))
                chkWeekFour.removeAttribute("required")

            weekDay.style.display = "none"
            weekForSession.style.display = "none"
            subgroupForSession.style.display = "none"
            classTime.style.display = "none"

            time.style.display = "flex"

            weekDay.childNodes[3].childNodes[1].removeAttribute("required")

            dateForSession.style.display = "flex"
            dateForSemester.style.display = "none"

            dateForSemester.childNodes[3].childNodes[1].childNodes[1].removeAttribute("required")
            dateForSemester.childNodes[3].childNodes[3].childNodes[1].removeAttribute("required")
            classTime.childNodes[3].childNodes[1].removeAttribute("required")

            dateForSession.childNodes[3].childNodes[1].setAttribute("required", "")
            time.childNodes[3].childNodes[1].setAttribute("required", "")
        }
    }, true)
}

function checkSchedule() {
    $.ajax({
        url: '/api/schedules/check',
        type: 'GET',
        data: {
            group_id: document.getElementById("group_id").value,
            teacher_id: document.getElementById("teacher_id").value,
            object_id: document.getElementById("object_id").value,
            lesson_form_id: document.getElementById("select_for_form").value,
            week_one: chkWeekOne.checked,
            week_two: chkWeekTwo.checked,
            week_three: chkWeekThree.checked,
            week_four: chkWeekFour.checked,
            weekday_id: document.getElementById("weekday_id").value,
            subgroup_one: chkBoxOne.checked,
            subgroup_two: chkBoxTwo.checked,
            class_time_id: document.getElementById("class_time_id").value,
            building: document.getElementById("building").value,
            auditorium: document.getElementById("auditorium").value,
            date: document.getElementById("date").value,
            date_start: document.getElementById("date_start").value,
            date_end: document.getElementById("date_end").value,
            time: document.getElementById("time_input").value,
        },
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        },
        success: (message) => {
            if (message.length > 0) {
                warningCheck.style.display = "block"
                messageCheck.innerHTML = message
            } else {
                sendData(true)
            }
        }
    })
}

if (checkYes != null) {
    checkYes.addEventListener("click", function () {
        if (warningCheck.style.getPropertyValue("display") == "block") {
            sendData(true)
        }
    }, false)
}

if (checkNo != null) {
    checkNo.addEventListener("click", function () {
        if (warningCheck.style.getPropertyValue("display") == "block") {
            location.reload();
        }
    }, false)
}

function sendData(bool) {
    if (bool) {
        $.ajax({
            url: '/api/799855594adc0f2bd7302c69d3234b5a',
            type: 'POST',
            data: {
                group_id: document.getElementById("group_id").value,
                teacher_id: document.getElementById("teacher_id").value,
                object_id: document.getElementById("object_id").value,
                lesson_form_id: document.getElementById("select_for_form").value,
                week_one: chkWeekOne.checked,
                week_two: chkWeekTwo.checked,
                week_three: chkWeekThree.checked,
                week_four: chkWeekFour.checked,
                weekday_id: document.getElementById("weekday_id").value,
                subgroup_one: chkBoxOne.checked,
                subgroup_two: chkBoxTwo.checked,
                class_time_id: document.getElementById("class_time_id").value,
                building: document.getElementById("building").value,
                auditorium: document.getElementById("auditorium").value,
                date: document.getElementById("date").value,
                date_start: document.getElementById("date_start").value,
                date_end: document.getElementById("date_end").value,
                time: document.getElementById("time_input").value,
            },
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            },
            success: (info) => {
                if(info!=null){
                    return location.href = '/admin/schedule';
                }
            }
        })
    }
    warningCheck.style.display = "none"
}
