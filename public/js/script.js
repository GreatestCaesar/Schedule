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

document.addEventListener("DOMContentLoaded", function(){
    $('body,html').animate({scrollTop:0},800);
    $('body,html').animate({scrollLeft:0},800);
});

let teacherPanel = document.getElementById("teacher-panel-button");
let studentPanel = document.getElementById("student-panel-button");

let blockContainerTeacher = document.getElementById("container-teacher");
let blockContainerStudent = document.getElementById("container-student");

let blockFindTeacher = document.getElementById("block-find-teacher");
let blockInfoTeacher = document.getElementById("block-info-teacher");
let blockFindStudent = document.getElementById("block-find-student");
let blockInfoStudent = document.getElementById("block-info-student");

let blockMainSelection = document.querySelector(".main__block-selection");
let blockHidingMainContent = document.querySelector(".main__block-hiding-main-content");

let txtFieldTeacher = document.getElementById("text-field-teacher");
let txtFieldStudent = document.getElementById("text-field-student");

let btnLessonType = document.getElementById("type-lesson");
let btnSessionType = document.getElementById("type-session");
let blockHidingTypeLessonContent = document.querySelector(".main__block-hiding-block");

let CheckWeekOne = document.getElementById("week-one");
let CheckWeekTwo = document.getElementById("week-two");
let CheckWeekThree = document.getElementById("week-three");
let CheckWeekFour = document.getElementById("week-four");

let blockSubgroupFilter = document.querySelector(".subgroup-filter");

let dataListTeacher = document.getElementById("teachers");
let dataListGroup = document.getElementById("groups");

let teacherFindError = document.getElementById("teacher-find-error")
let studentFindError = document.getElementById("student-find-error")

let Teacher = new Object()
let actualSchedule = 0
let teacherId = 0

let Group = new Object()
let actualSubgroup = 0
let oldSubgroup = 0

let subgroupOne = document.getElementById("subgroup-one")
let subgroupTwo = document.getElementById("subgroup-two")

let infoTeacher = document.getElementById("teacher-info")
let infoStudent = document.getElementById("student-info")

let currentSchedule = document.getElementById("current-schedule")
let weekSchedule = document.getElementById("week-schedule")

let filterWeek = document.getElementById("filter_week")

const dayWeek = ['Воскресенье', "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"]
const classNumbStart = ["08:00", "09:55", "12:15", "14:10", "16:20", "18:15", "20:10"]
const classNumbEnd = ["09:40", "11:35", "13:55", "15:50", "18:00", "19:55", "21:50"]
const lessonForm = ["ЛК", "ЛР", "ПЗ", "экз", "конс-ция"]

let objectsArray = {}
let groupsArray = {}

let weekArray = {1: 1, 3: 2, 5: 3, 7:4}

document.body.onload = function (){
    $.ajax({
        url: '/api/subjects',
        type: 'GET',
        data: {

        },
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        },
        success: (data) => {
            if (data.data != null) {
                for(let i = 0; i < data.data.length; i+=1){
                    objectsArray[data.data[i].id] = data.data[i].abbreviated_name
                }
            }
        }
    })
    $.ajax({
        url: '/api/groups',
        type: 'GET',
        data: {

        },
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        },
        success: (data) => {
            if (data.data != null) {
                for(let i = 0; i < data.data.length; i+=1){
                    groupsArray[data.data[i].id] = data.data[i].name+" "+data.data[i].code
                }
            }
        }
    })

    setActualWeekChkBox()
}

function setActualWeekChkBox(){
    if(CheckWeekOne != null && CheckWeekTwo != null && CheckWeekThree != null && CheckWeekFour != null) {
        switch (getWeek(new Date())) {
            case 1: {
                CheckWeekOne.checked = true
                break
            }
            case 2: {
                CheckWeekTwo.checked = true
                break
            }
            case 3: {
                CheckWeekThree.checked = true
                break
            }
            case 4: {
                CheckWeekFour.checked = true
                break
            }
        }
    }
}

function offChkBoxWeeks(){
    CheckWeekOne.checked = false
    CheckWeekTwo.checked = false
    CheckWeekThree.checked = false
    CheckWeekFour.checked = false
}

if(txtFieldTeacher!=null) {
    txtFieldTeacher.addEventListener("keyup", function () {
        if (txtFieldTeacher.value.length >= 2) {
            $.ajax({
                url: '/api/teachers',
                type: 'GET',
                data: {
                    full_name: txtFieldTeacher.value
                },
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                },
                success: (data) => {
                    if (data.data != null) {
                        if(dataListTeacher.childNodes.length>0) {
                            dataListTeacher.innerHTML = ''
                        }
                        for (let i = 0; i < data.data.length; i += 1) {
                            let optionTeacher = document.createElement('option');
                            optionTeacher.innerHTML = data.data[i].full_name;
                            dataListTeacher.appendChild(optionTeacher);
                        }
                    }
                }
            })
        }
    }, false);
}

if(txtFieldStudent!=null) {
    txtFieldStudent.addEventListener("keyup", function () {
        if (txtFieldStudent.value.length >= 2) {
            $.ajax({
                url: '/api/groups',
                type: 'GET',
                data: {
                    name: txtFieldStudent.value
                },
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                },
                success: (data) => {
                    if (data.data != null) {
                        if(dataListGroup.childNodes.length>0) {
                            dataListGroup.innerHTML = ''
                        }
                        for (let i = 0; i < data.data.length; i += 1) {
                            let optionTeacher = document.createElement('option');
                            optionTeacher.innerHTML = data.data[i].name+""+data.data[i].code;
                            dataListGroup.appendChild(optionTeacher);
                        }
                    }
                }
            })
        }
    }, false)
}

if(subgroupOne != null){
    subgroupOne.addEventListener("change", function () {
        if(subgroupOne.checked && !subgroupTwo.checked){
            oldSubgroup = actualSubgroup
            actualSubgroup = 1
            createScheduleForFilter(actualSchedule)
        }

        if(!subgroupOne.checked && !subgroupTwo.checked){
            subgroupOne.checked = true
            subgroupTwo.checked = true
            oldSubgroup = actualSubgroup
            actualSubgroup = 0
            createScheduleForFilter(actualSchedule)
        }

        if(!subgroupOne.checked && subgroupTwo.checked){
            oldSubgroup = actualSubgroup
            actualSubgroup = 2
            createScheduleForFilter(actualSchedule)
        }

        if(subgroupOne.checked && subgroupTwo.checked){
            oldSubgroup = actualSubgroup
            actualSubgroup = 0
            createScheduleForFilter(actualSchedule)
        }
    }, false)
}

if(subgroupTwo != null){
    subgroupTwo.addEventListener("change", function () {
        if(subgroupTwo.checked && subgroupOne.checked){
            oldSubgroup = actualSubgroup
            actualSubgroup = 0
            createScheduleForFilter(actualSchedule)
        }

        if(subgroupTwo.checked && !subgroupOne.checked){
            oldSubgroup = actualSubgroup
            actualSubgroup = 2
            createScheduleForFilter(actualSchedule)
        }

        if(!subgroupTwo.checked && subgroupOne.checked){
            oldSubgroup = actualSubgroup
            actualSubgroup = 1
            createScheduleForFilter(actualSchedule)
        }

        if(!subgroupTwo.checked && !subgroupOne.checked){
            subgroupOne.checked = true
            subgroupTwo.checked = true
            oldSubgroup = actualSubgroup
            actualSubgroup = 0
            createScheduleForFilter(actualSchedule)
        }
    }, false)
}

if(studentPanel!=null) {
    studentPanel.addEventListener("click", function () {
        if (!this.classList.contains("active-btn")) {
            infoTeacher.innerHTML = ''

            this.classList.add("active-btn");
            if (teacherPanel.classList.contains("active-btn")) {
                teacherPanel.classList.remove("active-btn")
            }
            blockContainerStudent.style.transform = 'translate(0,0)';
            blockContainerStudent.style.otransform = 'translate(0,0)';
            blockContainerStudent.style.webkitTransform = 'translate(0,0)';
            blockContainerStudent.style.mozTransform = 'translate(0,0)';

            blockContainerTeacher.style.transform = 'translate(-120%,0)';
            blockContainerTeacher.style.otransform = 'translate(-120%,0)';
            blockContainerTeacher.style.webkitTransform = 'translate(-120%,0)';
            blockContainerTeacher.style.mozTransform = 'translate(-120%,0)';

            if (txtFieldTeacher.value.length > 0) {
                txtFieldTeacher.value = "";
            }

            if(teacherFindError.style.display == "block"){
                teacherFindError.style.display = "none"
            }

            if (blockInfoTeacher.style.getPropertyValue("opacity") == 1) {
                blockInfoTeacher.style.visibility = 'hidden';
                blockInfoTeacher.style.opacity = '0';

                if (visualViewport.width <= 538) {
                    blockFindTeacher.style.transform = 'translate(0,0)';
                    blockFindTeacher.style.otransform = 'translate(0,0)';
                    blockFindTeacher.style.webkitTransform = 'translate(0,0)';
                    blockFindTeacher.style.mozTransform = 'translate(0,0)';
                } else {
                    blockFindTeacher.style.transform = 'translate(62%,0)';
                    blockFindTeacher.style.otransform = 'translate(62%,0)';
                    blockFindTeacher.style.webkitTransform = 'translate(62%,0)';
                    blockFindTeacher.style.mozTransform = 'translate(62%,0)';
                }

                minHeightForMainBlockSelectionChange();
            }

            if (blockHidingTypeLessonContent.style.getPropertyValue("opacity") == 0) {
                blockHidingTypeLessonContent.style.visibility = 'visible';
                blockHidingTypeLessonContent.style.opacity = "1";
                blockHidingTypeLessonContent.style.height = "auto";

                btnLessonType.classList.add("active-type-btn");
                btnLessonType.classList.add("active-btn");
                btnSessionType.classList.remove("active-type-btn");
                btnSessionType.classList.remove("active-btn");
            }
        }
    }, true);
}

if(filterWeek != null) {
    for (let z = 1; z < filterWeek.childNodes.length; z += 2) {
        filterWeek.childNodes[z].childNodes[1].childNodes[1].addEventListener("click", function () {
            for (let p = 1; p < filterWeek.childNodes.length; p += 2) {
                if (filterWeek.childNodes[p].childNodes[1].childNodes[1].checked) {
                    filterWeek.childNodes[p].childNodes[1].childNodes[1].checked = false
                }
            }
            filterWeek.childNodes[z].childNodes[1].childNodes[1].checked = true
            createScheduleForFilter(weekArray[z])
        }, false)
    }
}

function createScheduleForFilter(week){
    if(week != actualSchedule || oldSubgroup != actualSubgroup){
        if(week == getWeek(new Date())){
            createActualSchedule()
        }else{
            let schedule = null
            currentSchedule.innerHTML = ''
            weekSchedule.innerHTML = ''

            if(Object.keys(Teacher).length == 0 && Object.keys(Group).length != 0) {
                schedule = JSON.parse(JSON.stringify(Group.schedule))
            }

            if(Object.keys(Group).length == 0 && Object.keys(Teacher).length != 0) {
                schedule = JSON.parse(JSON.stringify(Teacher.schedule))
            }

            let scheduleForFindDay = new Array()
            if(schedule.length  > 0) {
                let count = 1
                for (let i = 0; i < 3; i += 1) {
                    let basicLessRow = document.createElement('div')
                    basicLessRow.setAttribute("class", "main__block-basic_lessons_row schedule_body")
                    for (let l = 0; l < 2; l += 1) {
                        scheduleForFindDay = JSON.parse(JSON.stringify(getTimeTableForFilter(schedule, count, week)))
                        scheduleForFindDay.sort(byLessonNumberSort('class_time_id'))
                        removeDuplicate(scheduleForFindDay)
                        let basicLessRowClmn = document.createElement('div')
                        basicLessRowClmn.setAttribute("class", "main__block-basic_lessons_column schedule_column")

                        let basicLessRowClmnItem = document.createElement('div')
                        basicLessRowClmnItem.setAttribute("class", "main__block-basic_lessons_item schedule_item")

                        let basicLessRowClmnItemRowFirst = document.createElement('div')
                        basicLessRowClmnItemRowFirst.setAttribute("class", "main__block-basic_lessons_item_row schedule_item_row")
                        basicLessRowClmnItemRowFirst.innerHTML = dayWeek[count]

                        let basicLessRowClmnItemRowSecond = document.createElement('div')
                        basicLessRowClmnItemRowSecond.setAttribute("class", "main__block-basic_lessons_item_row schedule_item_row")

                        if (scheduleForFindDay.length > 0) {
                            for (let j = 0; j < scheduleForFindDay.length; j += 1) {
                                /**
                                 * Строка для расписания с телом предметов
                                 * */
                                let basicLessRowClmnItemRowSecondBody = document.createElement('div')
                                basicLessRowClmnItemRowSecondBody.setAttribute("class", "main__block-basic_lessons_item_row_body schedule_item_row_body")
                                /**
                                 * Строка тела с названием предмета
                                 * */
                                let basicLessRowClmnItemRowSecondBodyRowFirst = document.createElement('div')
                                basicLessRowClmnItemRowSecondBodyRowFirst.setAttribute("class", "main__block-basic_lessons_item_row_body_row schedule_item_row_body_row")
                                let basicLessRowClmnItemRowSecondBodyRowFirstNameLesson = document.createElement('div')
                                basicLessRowClmnItemRowSecondBodyRowFirstNameLesson.setAttribute("class", "hiding-block_current-schedule_item_row_body_row_name-lesson schedule-block-name-block")
                                basicLessRowClmnItemRowSecondBodyRowFirstNameLesson.innerHTML = objectsArray[scheduleForFindDay[j].object_id]
                                basicLessRowClmnItemRowSecondBodyRowFirst.append(basicLessRowClmnItemRowSecondBodyRowFirstNameLesson)
                                basicLessRowClmnItemRowSecondBody.append(basicLessRowClmnItemRowSecondBodyRowFirst)
                                /**
                                 * Строка тела с описанием проведения занятия
                                 * */
                                let basicLessRowClmnItemRowSecondBodyRowSecond = document.createElement('div')
                                basicLessRowClmnItemRowSecondBodyRowSecond.setAttribute("class", "main__block-basic_lessons_item_row_body_row schedule_item_row_body_row")
                                let basicLessRowClmnItemRowClmnTime = document.createElement('div')
                                basicLessRowClmnItemRowClmnTime.setAttribute("class", "hiding-block_current-schedule_item_row_column schedule_item_row_column schedule-block-time-block")
                                let basicLessTimeBlockRowFirst = document.createElement('div')
                                basicLessTimeBlockRowFirst.setAttribute("class", "schedule-block-time-block_row")
                                basicLessTimeBlockRowFirst.innerHTML = classNumbStart[scheduleForFindDay[j].class_time_id - 1]
                                let basicLessTimeBlockRowSecond = document.createElement('div')
                                basicLessTimeBlockRowSecond.setAttribute("class", "schedule-block-time-block_row")
                                basicLessTimeBlockRowSecond.innerHTML = classNumbEnd[scheduleForFindDay[j].class_time_id - 1]
                                basicLessRowClmnItemRowClmnTime.append(basicLessTimeBlockRowFirst)
                                basicLessRowClmnItemRowClmnTime.append(basicLessTimeBlockRowSecond)
                                basicLessRowClmnItemRowSecondBodyRowSecond.append(basicLessRowClmnItemRowClmnTime)
                                /**
                                 * Строка недель
                                 * */
                                let basicLessRowClmnItemRowClmnWeek = document.createElement('div')
                                basicLessRowClmnItemRowClmnWeek.setAttribute("class", "hiding-block_current-schedule_item_row_column schedule_item_row_column schedule-block-week-block")
                                if (String(scheduleForFindDay[j].week_number).length > 0) {
                                    let basicLessWeekBlockRowFirst = document.createElement('div')
                                    basicLessWeekBlockRowFirst.setAttribute("class", "schedule-block-week-block_row")
                                    let basicLessWeekBlockRowFirstClmnFirst = document.createElement('div')
                                    basicLessWeekBlockRowFirstClmnFirst.setAttribute("class", "schedule-block-week-block_row_column")
                                    basicLessWeekBlockRowFirstClmnFirst.innerHTML = String(scheduleForFindDay[j].week_number)[0]
                                    basicLessWeekBlockRowFirst.append(basicLessWeekBlockRowFirstClmnFirst)
                                    if (String(scheduleForFindDay[j].week_number).length > 1) {
                                        let basicLessWeekBlockRowFirstClmnSecond = document.createElement('div')
                                        basicLessWeekBlockRowFirstClmnSecond.setAttribute("class", "schedule-block-week-block_row_column")
                                        basicLessWeekBlockRowFirstClmnSecond.innerHTML = String(scheduleForFindDay[j].week_number)[1]
                                        basicLessWeekBlockRowFirst.append(basicLessWeekBlockRowFirstClmnSecond)
                                    }
                                    basicLessRowClmnItemRowClmnWeek.append(basicLessWeekBlockRowFirst)
                                    if (String(scheduleForFindDay[j].week_number).length > 2) {
                                        let basicLessWeekBlockRowSecond = document.createElement('div')
                                        basicLessWeekBlockRowSecond.setAttribute("class", "schedule-block-week-block_row")
                                        let basicLessWeekBlockRowSecondClmnFirst = document.createElement('div')
                                        basicLessWeekBlockRowSecondClmnFirst.setAttribute("class", "schedule-block-week-block_row_column")
                                        basicLessWeekBlockRowSecondClmnFirst.innerHTML = String(scheduleForFindDay[j].week_number)[2]
                                        basicLessWeekBlockRowSecond.append(basicLessWeekBlockRowSecondClmnFirst)
                                        if (String(scheduleForFindDay[j].week_number).length > 3) {
                                            let basicLessWeekBlockRowSecondClmnSecond = document.createElement('div')
                                            basicLessWeekBlockRowSecondClmnSecond.setAttribute("class", "schedule-block-week-block_row_column")
                                            basicLessWeekBlockRowSecondClmnSecond.innerHTML = String(scheduleForFindDay[j].week_number)[3]
                                            basicLessWeekBlockRowSecond.append(basicLessWeekBlockRowSecondClmnSecond)
                                        }
                                        basicLessRowClmnItemRowClmnWeek.append(basicLessWeekBlockRowSecond)
                                    }
                                }

                                basicLessRowClmnItemRowSecondBodyRowSecond.append(basicLessRowClmnItemRowClmnWeek)
                                /**
                                 * Строка формы занятия
                                 * */
                                let basicLessRowClmnItemRowClmnType = document.createElement('div')
                                basicLessRowClmnItemRowClmnType.setAttribute("class", "hiding-block_current-schedule_item_row_column schedule_item_row_column schedule-block-type-object-block")
                                basicLessRowClmnItemRowClmnType.innerHTML = lessonForm[scheduleForFindDay[j].lesson_form_id - 1]
                                basicLessRowClmnItemRowSecondBodyRowSecond.append(basicLessRowClmnItemRowClmnType)
                                /**
                                 * Строка групп
                                 * */
                                let basicLessRowClmnItemRowClmnGroup = document.createElement('div')
                                basicLessRowClmnItemRowClmnGroup.setAttribute("class", "hiding-block_current-schedule_item_row_column schedule_item_row_column schedule-block-groups-block")
                                if (String(scheduleForFindDay[j].group_id).length > 1) {
                                    for (let z = 0; z < String(scheduleForFindDay[j].group_id).length; z += 1) {
                                        let basicLessRowClmnItemRowClmnGroupRow = document.createElement('div')
                                        basicLessRowClmnItemRowClmnGroupRow.setAttribute("class", "schedule-block-groups-block_row")
                                        basicLessRowClmnItemRowClmnGroupRow.innerHTML = groupsArray[Number(String(scheduleForFindDay[j].group_id)[z])]
                                        basicLessRowClmnItemRowClmnGroup.append(basicLessRowClmnItemRowClmnGroupRow)
                                    }
                                } else {
                                    let basicLessRowClmnItemRowClmnGroupRow = document.createElement('div')
                                    basicLessRowClmnItemRowClmnGroupRow.setAttribute("class", "schedule-block-groups-block_row")
                                    basicLessRowClmnItemRowClmnGroupRow.innerHTML = groupsArray[scheduleForFindDay[j].group_id]
                                    basicLessRowClmnItemRowClmnGroup.append(basicLessRowClmnItemRowClmnGroupRow)
                                }
                                basicLessRowClmnItemRowSecondBodyRowSecond.append(basicLessRowClmnItemRowClmnGroup)
                                /**
                                 * Строка места проведения занятий
                                 * */
                                let basicLessRowClmnItemRowClmnPlace = document.createElement('div')
                                basicLessRowClmnItemRowClmnPlace.setAttribute("class", "hiding-block_current-schedule_item_row_column schedule_item_row_column schedule-block-place-block")
                                let basicLessRowClmnItemRowClmnPlaceClmnFirst = document.createElement('div')
                                basicLessRowClmnItemRowClmnPlaceClmnFirst.setAttribute("class", "schedule-block-place-block_column")
                                basicLessRowClmnItemRowClmnPlaceClmnFirst.innerHTML = "к. " + scheduleForFindDay[j].building
                                let cbasicLessRowClmnItemRowClmnPlaceClmnSecond = document.createElement('div')
                                cbasicLessRowClmnItemRowClmnPlaceClmnSecond.setAttribute("class", "schedule-block-place-block_column")
                                cbasicLessRowClmnItemRowClmnPlaceClmnSecond.innerHTML = "а. " + scheduleForFindDay[j].auditorium
                                basicLessRowClmnItemRowClmnPlace.append(basicLessRowClmnItemRowClmnPlaceClmnFirst)
                                basicLessRowClmnItemRowClmnPlace.append(cbasicLessRowClmnItemRowClmnPlaceClmnSecond)
                                basicLessRowClmnItemRowSecondBodyRowSecond.append(basicLessRowClmnItemRowClmnPlace)
                                /**
                                 *
                                 * */
                                basicLessRowClmnItemRowSecondBody.append(basicLessRowClmnItemRowSecondBodyRowSecond)
                                basicLessRowClmnItemRowSecond.append(basicLessRowClmnItemRowSecondBody)
                            }
                        } else {
                            let basicLessRowClmnItemRowSecondInfo = document.createElement('div')
                            basicLessRowClmnItemRowSecondInfo.setAttribute("class", "schedule_item_row-info")
                            basicLessRowClmnItemRowSecondInfo.innerHTML = "Занятий нет"
                            basicLessRowClmnItemRowSecond.append(basicLessRowClmnItemRowSecondInfo)
                        }

                        basicLessRowClmnItem.append(basicLessRowClmnItemRowFirst)
                        basicLessRowClmnItem.append(basicLessRowClmnItemRowSecond)

                        basicLessRowClmn.append(basicLessRowClmnItem)

                        basicLessRow.append(basicLessRowClmn)
                        count+=1
                    }
                    weekSchedule.append(basicLessRow)
                }
                if(Object.keys(Teacher).length == 0 && Object.keys(Group).length != 0) {
                    activeTransformationStudent()
                }

                if(Object.keys(Group).length == 0 && Object.keys(Teacher).length != 0) {
                    activeTransformationTeacher()
                }
            }
        }
        actualSchedule = week
    }
}

if(teacherPanel!=null) {
    teacherPanel.addEventListener("click", function () {
        if (!this.classList.contains("active-btn")) {
            infoStudent.innerHTML = ''

            this.classList.add("active-btn");
            if (studentPanel.classList.contains("active-btn")) {
                studentPanel.classList.remove("active-btn")
            }
            blockContainerTeacher.style.transform = 'translate(0,0)';
            blockContainerTeacher.style.otransform = 'translate(0,0)';
            blockContainerTeacher.style.webkitTransform = 'translate(0,0)';
            blockContainerTeacher.style.mozTransform = 'translate(0,0)';

            blockContainerStudent.style.transform = 'translate(120%,0)';
            blockContainerStudent.style.otransform = 'translate(120%,0)';
            blockContainerStudent.style.webkitTransform = 'translate(120%,0)';
            blockContainerStudent.style.mozTransform = 'translate(120%,0)';

            if (txtFieldStudent.value.length > 0) {
                txtFieldStudent.value = "";
            }

            if (visualViewport.width <= 538) {
                blockFindTeacher.style.transform = 'translate(0,0)';
                blockFindTeacher.style.otransform = 'translate(0,0)';
                blockFindTeacher.style.webkitTransform = 'translate(0,0)';
                blockFindTeacher.style.mozTransform = 'translate(0,0)';
            } else {
                blockFindTeacher.style.transform = 'translate(62%,0)';
                blockFindTeacher.style.otransform = 'translate(62%,0)';
                blockFindTeacher.style.webkitTransform = 'translate(62%,0)';
                blockFindTeacher.style.mozTransform = 'translate(62%,0)';
            }

            if (blockInfoStudent.style.getPropertyValue("opacity") == 1) {
                blockInfoStudent.style.visibility = 'hidden';
                blockInfoStudent.style.opacity = '0';

                if (visualViewport.width <= 538) {
                    blockFindStudent.style.transform = 'translate(0,0)';
                    blockFindStudent.style.otransform = 'translate(0,0)';
                    blockFindStudent.style.webkitTransform = 'translate(0,0)';
                    blockFindStudent.style.mozTransform = 'translate(0,0)';
                } else {
                    blockFindStudent.style.transform = 'translate(62%,0)';
                    blockFindStudent.style.otransform = 'translate(62%,0)';
                    blockFindStudent.style.webkitTransform = 'translate(62%,0)';
                    blockFindStudent.style.mozTransform = 'translate(62%,0)';
                }

                minHeightForMainBlockSelectionChange();
            }

            if (blockHidingTypeLessonContent.style.getPropertyValue("opacity") == 0) {
                blockHidingTypeLessonContent.style.visibility = 'visible';
                blockHidingTypeLessonContent.style.opacity = "1";
                blockHidingTypeLessonContent.style.height = "auto";

                btnLessonType.classList.add("active-type-btn");
                btnLessonType.classList.add("active-btn");
                btnSessionType.classList.remove("active-type-btn");
                btnSessionType.classList.remove("active-btn");
            }
        }
    }, false);
}

let btnFindTeacher = document.getElementById("button-find-teacher");
let btnFindStudent = document.getElementById("button-find-student");

if(btnFindTeacher != null) {
    btnFindTeacher.addEventListener("click", function () {
        if (txtFieldTeacher.value.length > 0) {
            $.ajax({
                url: '/api/teachers',
                type: 'GET',
                data: {
                    full_name: txtFieldTeacher.value
                },
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                },
                success: (teacher) => {
                    if (teacher.data.length > 0) {
                        teacherFindError.style.display = "none"
                        if(teacher.data[0].schedule.length > 0){
                            if(Teacher.id != teacher.data[0].id) {
                                Group = new Object()
                                teacherFindError.style.display = "none"
                                currentSchedule.innerHTML = ''
                                weekSchedule.innerHTML = ''
                                infoTeacher.innerHTML = ''

                                if (visualViewport.width <= 538) {
                                    blockFindTeacher.style.transform = 'translate(0,0)';
                                    blockFindTeacher.style.otransform = 'translate(0,0)';
                                    blockFindTeacher.style.webkitTransform = 'translate(0,0)';
                                    blockFindTeacher.style.mozTransform = 'translate(0,0)';
                                } else {
                                    blockFindTeacher.style.transform = 'translate(62%,0)';
                                    blockFindTeacher.style.otransform = 'translate(62%,0)';
                                    blockFindTeacher.style.webkitTransform = 'translate(62%,0)';
                                    blockFindTeacher.style.mozTransform = 'translate(62%,0)';
                                }

                                minHeightForMainBlockSelectionChange()

                                Teacher = teacher.data[0]
                                actualSchedule = getWeek(new Date())
                                createActualSchedule()
                                teacherInfo()
                            }
                        }
                    } else {
                        Teacher = new Object()
                        teacherFindError.style.display = "block"
                        currentSchedule.innerHTML = ''
                        weekSchedule.innerHTML = ''
                        infoTeacher.innerHTML = ''

                        if (blockInfoTeacher.style.getPropertyValue("opacity") == 1) {
                            blockInfoTeacher.style.visibility = 'hidden';
                            blockInfoTeacher.style.opacity = '0';

                            if (visualViewport.width <= 538) {
                                blockFindTeacher.style.transform = 'translate(0,0)';
                                blockFindTeacher.style.otransform = 'translate(0,0)';
                                blockFindTeacher.style.webkitTransform = 'translate(0,0)';
                                blockFindTeacher.style.mozTransform = 'translate(0,0)';
                            } else {
                                blockFindTeacher.style.transform = 'translate(62%,0)';
                                blockFindTeacher.style.otransform = 'translate(62%,0)';
                                blockFindTeacher.style.webkitTransform = 'translate(62%,0)';
                                blockFindTeacher.style.mozTransform = 'translate(62%,0)';
                            }

                            minHeightForMainBlockSelectionChange();
                        }
                    }
                }
            })
        }
    }, false);
}

if(btnFindStudent != null) {
    btnFindStudent.addEventListener("click", function () {
        if (txtFieldStudent.value.length > 0) {
            let nameGroup = txtFieldStudent.value.substring(0,2)
            let codeGroup = "x"
            if(txtFieldStudent.value.length > 2){
                codeGroup = txtFieldStudent.value.substring(2,txtFieldStudent.value.length)
            }
            $.ajax({
                url: '/api/groups',
                type: 'GET',
                data: {
                    name: nameGroup,
                    code: codeGroup
                },
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                },
                success: (group) => {
                    if(group.data.length > 0) {
                        studentFindError.style.display = "none"
                        if(group.data[0].schedule.length > 0) {
                            if(Group.id != group.data[0].id) {
                                Teacher = new Object()
                                studentFindError.style.display = "none"
                                infoStudent.innerHTML = ''
                                currentSchedule.innerHTML = ''
                                weekSchedule.innerHTML = ''

                                if (visualViewport.width <= 538) {
                                    blockFindStudent.style.transform = 'translate(0,0)';
                                    blockFindStudent.style.otransform = 'translate(0,0)';
                                    blockFindStudent.style.webkitTransform = 'translate(0,0)';
                                    blockFindStudent.style.mozTransform = 'translate(0,0)';
                                } else {
                                    blockFindStudent.style.transform = 'translate(62%,0)';
                                    blockFindStudent.style.otransform = 'translate(62%,0)';
                                    blockFindStudent.style.webkitTransform = 'translate(62%,0)';
                                    blockFindStudent.style.mozTransform = 'translate(62%,0)';
                                }

                                minHeightForMainBlockSelectionChange()

                                Group = group.data[0]
                                studentInfo()
                                actualSchedule = getWeek(new Date())
                                createActualSchedule()
                            }
                        }else{
                            studentFindError.style.display = "block"
                        }
                    }else{
                        Group = new Object()
                        studentFindError.style.display = "block"
                        currentSchedule.innerHTML = ''
                        weekSchedule.innerHTML = ''
                        infoStudent.innerHTML = ''

                        if (blockInfoStudent.style.getPropertyValue("opacity") == 1) {
                            blockInfoStudent.style.visibility = 'hidden';
                            blockInfoStudent.style.opacity = '0';

                            if (visualViewport.width <= 538) {
                                blockFindStudent.style.transform = 'translate(0,0)';
                                blockFindStudent.style.otransform = 'translate(0,0)';
                                blockFindStudent.style.webkitTransform = 'translate(0,0)';
                                blockFindStudent.style.mozTransform = 'translate(0,0)';
                            } else {
                                blockFindStudent.style.transform = 'translate(62%,0)';
                                blockFindStudent.style.otransform = 'translate(62%,0)';
                                blockFindStudent.style.webkitTransform = 'translate(62%,0)';
                                blockFindStudent.style.mozTransform = 'translate(62%,0)';
                            }

                            minHeightForMainBlockSelectionChange();
                        }
                    }
                }
            })
        }
    }, false);
}

function getWeek(date){
    let startDate
    let dayWeekNumb
    let week
    if(date.getMonth()+1 > 8){
        startDate = new Date(date.getFullYear()+"-"+((date.getMonth()+1)+(-1 * (date.getMonth()-9)))+"-"+(date.getDate()+(1-date.getDate())))
    }else{
        startDate = new Date(date.getFullYear()-1+"-"+((date.getMonth()+1)+(9-(date.getMonth()+1)))+"-"+(date.getDate()+(1-date.getDate())))
    }
    dayWeekNumb = ((startDate.getDay() == 0 ? 7 : startDate.getDay()))
    startDate.setDate(startDate.getDate()-(dayWeekNumb-1));
    week = ((((date.getTime()-startDate.getTime())/(1000*60*60*24))/7)+1)
    week = Math.trunc(week)
    if(week%4==0){
        return 4
    }else{
        return week%4
    }
}

function getTimeTableForSession(schedules){
    return schedules.filter(el => (el.lesson_form_id == 4 || el.lesson_form_id == 5) && new Date(el.date) >= new Date())
}

function getTimeTableForSessionActualDate(schedules, date){
    return schedules.filter(el => el.date = date)
}

function getTimeTableForFilter(schedules, dayOfWeek, week){
    return schedules.filter(el => el.weekday_id == dayOfWeek && el.subgroup == actualSubgroup && String(el.week_number).includes(String(week)) && el.lesson_form_id != 4 && el.lesson_form_id != 5)
}

function getTimeTableForDay(schedules, date){
    let lessonWeekForDate = getWeek(date);
    let dayOfWeek = ((date.getDay() == 0 ? 7 : date.getDay()));

    return schedules.filter(el => el.weekday_id == dayOfWeek && el.subgroup == actualSubgroup && date >= new Date(el.date_start) && date <= new Date(el.date_end) && String(el.week_number).includes(String(lessonWeekForDate)) && el.lesson_form_id != 4 && el.lesson_form_id != 5)
}

function byLessonNumberSort(key){
    return (a,b) => a[key] > b[key] ? 1 : -1
}

function removeDuplicate(scheduleForFindDay){
    for(let i = 1; i < scheduleForFindDay.length; i+=1){
        if(scheduleForFindDay[i].object_id == scheduleForFindDay[i-1].object_id
            && scheduleForFindDay[i].lesson_form_id == scheduleForFindDay[i-1].lesson_form_id
            && scheduleForFindDay[i].subgroup == scheduleForFindDay[i-1].subgroup
            && scheduleForFindDay[i].class_time_id == scheduleForFindDay[i-1].class_time_id
            && scheduleForFindDay[i].building == scheduleForFindDay[i-1].building
            && scheduleForFindDay[i].auditorium == scheduleForFindDay[i-1].auditorium)
        {
            scheduleForFindDay[i-1].group_id = scheduleForFindDay[i-1].group_id+""+scheduleForFindDay[i].group_id
            scheduleForFindDay.splice(i,1)
        }
    }
}

function createActualSchedule(){
    weekSchedule.innerHTML = ''
    currentSchedule.innerHTML = ''
    let schedule = null

    if(Object.keys(Teacher).length == 0 && Object.keys(Group).length != 0) {
        schedule = JSON.parse(JSON.stringify(Group.schedule))

        studentInfo()
    }

    if(Object.keys(Group).length == 0 && Object.keys(Teacher).length != 0) {
        schedule = JSON.parse(JSON.stringify(Teacher.schedule))
    }

    let scheduleForFindDay = [];
    let dateForSchedule = new Date();

    if(schedule.length  > 0) {
        setActualWeekChkBox()
        for (let i = 0; i < 3; i += 1) {
            let basicLessRow = document.createElement('div')
            basicLessRow.setAttribute("class", "main__block-basic_lessons_row schedule_body")
            for (let l = 0; l < 2; l += 1) {
                scheduleForFindDay = JSON.parse(JSON.stringify(getTimeTableForDay(schedule, dateForSchedule)))
                scheduleForFindDay.sort(byLessonNumberSort('class_time_id'))
                removeDuplicate(scheduleForFindDay)
                if (i == 0) {
                    let currSchClmn = document.createElement('div')
                    currSchClmn.setAttribute("class", "hiding-block_current-schedule_column schedule_column")
                    let currSchClmnItem = document.createElement('div')
                    currSchClmnItem.setAttribute("class", "hiding-block_current-schedule_item schedule_item")
                    let currSchClmnItemRowF = document.createElement('div')
                    currSchClmnItemRowF.setAttribute("class", "hiding-block_current-schedule_item_row schedule_item_row")
                    currSchClmnItemRowF.innerHTML = (l == 0 ? "Сегодня " : "Завтра ") + dateForSchedule.toLocaleDateString() + " - " + dayWeek[dateForSchedule.getDay()]
                    currSchClmnItem.append(currSchClmnItemRowF)
                    let currSchClmnItemRowSecond = document.createElement('div')
                    currSchClmnItemRowSecond.setAttribute("class", "hiding-block_current-schedule_item_row schedule_item_row")
                    if (scheduleForFindDay.length > 0) {
                        for (let j = 0; j < scheduleForFindDay.length; j += 1) {
                            /**
                             * Строка для расписания с телом предметов
                             * */
                            let currSchClmnItemRowSecondBody = document.createElement('div')
                            currSchClmnItemRowSecondBody.setAttribute("class", "hiding-block_current-schedule_item_row_body schedule_item_row_body")
                            /**
                             * Строка тела с названием предмета
                             * */
                            let currSchClmnItemRowSecondBodyRowFirst = document.createElement('div')
                            currSchClmnItemRowSecondBodyRowFirst.setAttribute("class", "hiding-block_current-schedule_item_row_body_row schedule_item_row_body_row")
                            let currSchClmnItemRowSecondBodyRowFirstNameLesson = document.createElement('div')
                            currSchClmnItemRowSecondBodyRowFirstNameLesson.setAttribute("class", "hiding-block_current-schedule_item_row_body_row_name-lesson schedule-block-name-block")
                            currSchClmnItemRowSecondBodyRowFirstNameLesson.innerHTML = objectsArray[scheduleForFindDay[j].object_id]
                            currSchClmnItemRowSecondBodyRowFirst.append(currSchClmnItemRowSecondBodyRowFirstNameLesson)
                            currSchClmnItemRowSecondBody.append(currSchClmnItemRowSecondBodyRowFirst)
                            /**
                             * Строка тела с описанием проведения занятия
                             * */
                            let currSchClmnItemRowSecondBodyRowSecond = document.createElement('div')
                            currSchClmnItemRowSecondBodyRowSecond.setAttribute("class", "hiding-block_current-schedule_item_row_body_row schedule_item_row_body_row")
                            let currSchClmnItemRowClmnTime = document.createElement('div')
                            currSchClmnItemRowClmnTime.setAttribute("class", "hiding-block_current-schedule_item_row_column schedule_item_row_column schedule-block-time-block")
                            let currSchTimeBlockRowFirst = document.createElement('div')
                            currSchTimeBlockRowFirst.setAttribute("class", "schedule-block-time-block_row")
                            currSchTimeBlockRowFirst.innerHTML = classNumbStart[scheduleForFindDay[j].class_time_id - 1]
                            let currSchTimeBlockRowSecond = document.createElement('div')
                            currSchTimeBlockRowSecond.setAttribute("class", "schedule-block-time-block_row")
                            currSchTimeBlockRowSecond.innerHTML = classNumbEnd[scheduleForFindDay[j].class_time_id - 1]
                            currSchClmnItemRowClmnTime.append(currSchTimeBlockRowFirst)
                            currSchClmnItemRowClmnTime.append(currSchTimeBlockRowSecond)
                            currSchClmnItemRowSecondBodyRowSecond.append(currSchClmnItemRowClmnTime)
                            /**
                             * Строка недель
                             * */
                            let currSchClmnItemRowClmnWeek = document.createElement('div')
                            currSchClmnItemRowClmnWeek.setAttribute("class", "hiding-block_current-schedule_item_row_column schedule_item_row_column schedule-block-week-block")
                            if (String(scheduleForFindDay[j].week_number).length > 0) {
                                let currSchWeekBlockRowFirst = document.createElement('div')
                                currSchWeekBlockRowFirst.setAttribute("class", "schedule-block-week-block_row")
                                let currSchWeekBlockRowFirstClmnFirst = document.createElement('div')
                                currSchWeekBlockRowFirstClmnFirst.setAttribute("class", "schedule-block-week-block_row_column")
                                currSchWeekBlockRowFirstClmnFirst.innerHTML = String(scheduleForFindDay[j].week_number)[0]
                                currSchWeekBlockRowFirst.append(currSchWeekBlockRowFirstClmnFirst)
                                if (String(scheduleForFindDay[j].week_number).length > 1) {
                                    let currSchWeekBlockRowFirstClmnSecond = document.createElement('div')
                                    currSchWeekBlockRowFirstClmnSecond.setAttribute("class", "schedule-block-week-block_row_column")
                                    currSchWeekBlockRowFirstClmnSecond.innerHTML = String(scheduleForFindDay[j].week_number)[1]
                                    currSchWeekBlockRowFirst.append(currSchWeekBlockRowFirstClmnSecond)
                                }
                                currSchClmnItemRowClmnWeek.append(currSchWeekBlockRowFirst)
                                if (String(scheduleForFindDay[j].week_number).length > 2) {
                                    let currSchWeekBlockRowSecond = document.createElement('div')
                                    currSchWeekBlockRowSecond.setAttribute("class", "schedule-block-week-block_row")
                                    let currSchWeekBlockRowSecondClmnFirst = document.createElement('div')
                                    currSchWeekBlockRowSecondClmnFirst.setAttribute("class", "schedule-block-week-block_row_column")
                                    currSchWeekBlockRowSecondClmnFirst.innerHTML = String(scheduleForFindDay[j].week_number)[2]
                                    currSchWeekBlockRowSecond.append(currSchWeekBlockRowSecondClmnFirst)
                                    if (String(scheduleForFindDay[j].week_number).length > 3) {
                                        let currSchWeekBlockRowSecondClmnSecond = document.createElement('div')
                                        currSchWeekBlockRowSecondClmnSecond.setAttribute("class", "schedule-block-week-block_row_column")
                                        currSchWeekBlockRowSecondClmnSecond.innerHTML = String(scheduleForFindDay[j].week_number)[3]
                                        currSchWeekBlockRowSecond.append(currSchWeekBlockRowSecondClmnSecond)
                                    }
                                    currSchClmnItemRowClmnWeek.append(currSchWeekBlockRowSecond)
                                }
                            }
                            currSchClmnItemRowSecondBodyRowSecond.append(currSchClmnItemRowClmnWeek)
                            /**
                             * Строка формы занятия
                             * */
                            let currSchClmnItemRowClmnType = document.createElement('div')
                            currSchClmnItemRowClmnType.setAttribute("class", "hiding-block_current-schedule_item_row_column schedule_item_row_column schedule-block-type-object-block")
                            currSchClmnItemRowClmnType.innerHTML = lessonForm[scheduleForFindDay[j].lesson_form_id - 1]
                            currSchClmnItemRowSecondBodyRowSecond.append(currSchClmnItemRowClmnType)
                            /**
                             * Строка групп
                             * */
                            let currSchClmnItemRowClmnGroup = document.createElement('div')
                            currSchClmnItemRowClmnGroup.setAttribute("class", "hiding-block_current-schedule_item_row_column schedule_item_row_column schedule-block-groups-block")
                            if (String(scheduleForFindDay[j].group_id).length > 1) {
                                for (let z = 0; z < String(scheduleForFindDay[j].group_id).length; z += 1) {
                                    let currSchClmnItemRowClmnGroupRow = document.createElement('div')
                                    currSchClmnItemRowClmnGroupRow.setAttribute("class", "schedule-block-groups-block_row")
                                    currSchClmnItemRowClmnGroupRow.innerHTML = groupsArray[Number(String(scheduleForFindDay[j].group_id)[z])]
                                    currSchClmnItemRowClmnGroup.append(currSchClmnItemRowClmnGroupRow)
                                }
                            } else {
                                let currSchClmnItemRowClmnGroupRow = document.createElement('div')
                                currSchClmnItemRowClmnGroupRow.setAttribute("class", "schedule-block-groups-block_row")
                                currSchClmnItemRowClmnGroupRow.innerHTML = groupsArray[scheduleForFindDay[j].group_id]
                                currSchClmnItemRowClmnGroup.append(currSchClmnItemRowClmnGroupRow)
                            }
                            currSchClmnItemRowSecondBodyRowSecond.append(currSchClmnItemRowClmnGroup)
                            /**
                             * Строка места проведения занятий
                             * */
                            let currSchClmnItemRowClmnPlace = document.createElement('div')
                            currSchClmnItemRowClmnPlace.setAttribute("class", "hiding-block_current-schedule_item_row_column schedule_item_row_column schedule-block-place-block")
                            let currSchClmnItemRowClmnPlaceClmnFirst = document.createElement('div')
                            currSchClmnItemRowClmnPlaceClmnFirst.setAttribute("class", "schedule-block-place-block_column")
                            currSchClmnItemRowClmnPlaceClmnFirst.innerHTML = "к. " + scheduleForFindDay[j].building
                            let currSchClmnItemRowClmnPlaceClmnSecond = document.createElement('div')
                            currSchClmnItemRowClmnPlaceClmnSecond.setAttribute("class", "schedule-block-place-block_column")
                            currSchClmnItemRowClmnPlaceClmnSecond.innerHTML = "а. " + scheduleForFindDay[j].auditorium
                            currSchClmnItemRowClmnPlace.append(currSchClmnItemRowClmnPlaceClmnFirst)
                            currSchClmnItemRowClmnPlace.append(currSchClmnItemRowClmnPlaceClmnSecond)
                            currSchClmnItemRowSecondBodyRowSecond.append(currSchClmnItemRowClmnPlace)
                            /**
                             *
                             * */
                            currSchClmnItemRowSecondBody.append(currSchClmnItemRowSecondBodyRowSecond)
                            currSchClmnItemRowSecond.append(currSchClmnItemRowSecondBody)
                        }
                    } else {
                        let basicLessRowClmnItemRowSecondInfo = document.createElement('div')
                        basicLessRowClmnItemRowSecondInfo.setAttribute("class", "schedule_item_row-info")
                        basicLessRowClmnItemRowSecondInfo.innerHTML = "Занятий нет"
                        currSchClmnItemRowSecond.append(basicLessRowClmnItemRowSecondInfo)
                    }
                    currSchClmnItem.append(currSchClmnItemRowSecond)
                    currSchClmn.append(currSchClmnItem)
                    currentSchedule.append(currSchClmn)
                }

                let basicLessRowClmn = document.createElement('div')
                basicLessRowClmn.setAttribute("class", "main__block-basic_lessons_column schedule_column")

                let basicLessRowClmnItem = document.createElement('div')
                basicLessRowClmnItem.setAttribute("class", "main__block-basic_lessons_item schedule_item")

                let basicLessRowClmnItemRowFirst = document.createElement('div')
                basicLessRowClmnItemRowFirst.setAttribute("class", "main__block-basic_lessons_item_row schedule_item_row")
                basicLessRowClmnItemRowFirst.innerHTML = dayWeek[dateForSchedule.getDay()]

                let basicLessRowClmnItemRowSecond = document.createElement('div')
                basicLessRowClmnItemRowSecond.setAttribute("class", "main__block-basic_lessons_item_row schedule_item_row")

                if (scheduleForFindDay.length > 0) {
                    for (let j = 0; j < scheduleForFindDay.length; j += 1) {
                        /**
                         * Строка для расписания с телом предметов
                         * */
                        let basicLessRowClmnItemRowSecondBody = document.createElement('div')
                        basicLessRowClmnItemRowSecondBody.setAttribute("class", "main__block-basic_lessons_item_row_body schedule_item_row_body")
                        /**
                         * Строка тела с названием предмета
                         * */
                        let basicLessRowClmnItemRowSecondBodyRowFirst = document.createElement('div')
                        basicLessRowClmnItemRowSecondBodyRowFirst.setAttribute("class", "main__block-basic_lessons_item_row_body_row schedule_item_row_body_row")
                        let basicLessRowClmnItemRowSecondBodyRowFirstNameLesson = document.createElement('div')
                        basicLessRowClmnItemRowSecondBodyRowFirstNameLesson.setAttribute("class", "hiding-block_current-schedule_item_row_body_row_name-lesson schedule-block-name-block")
                        basicLessRowClmnItemRowSecondBodyRowFirstNameLesson.innerHTML = objectsArray[scheduleForFindDay[j].object_id]
                        basicLessRowClmnItemRowSecondBodyRowFirst.append(basicLessRowClmnItemRowSecondBodyRowFirstNameLesson)
                        basicLessRowClmnItemRowSecondBody.append(basicLessRowClmnItemRowSecondBodyRowFirst)
                        /**
                         * Строка тела с описанием проведения занятия
                         * */
                        let basicLessRowClmnItemRowSecondBodyRowSecond = document.createElement('div')
                        basicLessRowClmnItemRowSecondBodyRowSecond.setAttribute("class", "main__block-basic_lessons_item_row_body_row schedule_item_row_body_row")
                        let basicLessRowClmnItemRowClmnTime = document.createElement('div')
                        basicLessRowClmnItemRowClmnTime.setAttribute("class", "hiding-block_current-schedule_item_row_column schedule_item_row_column schedule-block-time-block")
                        let basicLessTimeBlockRowFirst = document.createElement('div')
                        basicLessTimeBlockRowFirst.setAttribute("class", "schedule-block-time-block_row")
                        basicLessTimeBlockRowFirst.innerHTML = classNumbStart[scheduleForFindDay[j].class_time_id - 1]
                        let basicLessTimeBlockRowSecond = document.createElement('div')
                        basicLessTimeBlockRowSecond.setAttribute("class", "schedule-block-time-block_row")
                        basicLessTimeBlockRowSecond.innerHTML = classNumbEnd[scheduleForFindDay[j].class_time_id - 1]
                        basicLessRowClmnItemRowClmnTime.append(basicLessTimeBlockRowFirst)
                        basicLessRowClmnItemRowClmnTime.append(basicLessTimeBlockRowSecond)
                        basicLessRowClmnItemRowSecondBodyRowSecond.append(basicLessRowClmnItemRowClmnTime)
                        /**
                         * Строка недель
                         * */
                        let basicLessRowClmnItemRowClmnWeek = document.createElement('div')
                        basicLessRowClmnItemRowClmnWeek.setAttribute("class", "hiding-block_current-schedule_item_row_column schedule_item_row_column schedule-block-week-block")
                        if (String(scheduleForFindDay[j].week_number).length > 0) {
                            let basicLessWeekBlockRowFirst = document.createElement('div')
                            basicLessWeekBlockRowFirst.setAttribute("class", "schedule-block-week-block_row")
                            let basicLessWeekBlockRowFirstClmnFirst = document.createElement('div')
                            basicLessWeekBlockRowFirstClmnFirst.setAttribute("class", "schedule-block-week-block_row_column")
                            basicLessWeekBlockRowFirstClmnFirst.innerHTML = String(scheduleForFindDay[j].week_number)[0]
                            basicLessWeekBlockRowFirst.append(basicLessWeekBlockRowFirstClmnFirst)
                            if (String(scheduleForFindDay[j].week_number).length > 1) {
                                let basicLessWeekBlockRowFirstClmnSecond = document.createElement('div')
                                basicLessWeekBlockRowFirstClmnSecond.setAttribute("class", "schedule-block-week-block_row_column")
                                basicLessWeekBlockRowFirstClmnSecond.innerHTML = String(scheduleForFindDay[j].week_number)[1]
                                basicLessWeekBlockRowFirst.append(basicLessWeekBlockRowFirstClmnSecond)
                            }
                            basicLessRowClmnItemRowClmnWeek.append(basicLessWeekBlockRowFirst)
                            if (String(scheduleForFindDay[j].week_number).length > 2) {
                                let basicLessWeekBlockRowSecond = document.createElement('div')
                                basicLessWeekBlockRowSecond.setAttribute("class", "schedule-block-week-block_row")
                                let basicLessWeekBlockRowSecondClmnFirst = document.createElement('div')
                                basicLessWeekBlockRowSecondClmnFirst.setAttribute("class", "schedule-block-week-block_row_column")
                                basicLessWeekBlockRowSecondClmnFirst.innerHTML = String(scheduleForFindDay[j].week_number)[2]
                                basicLessWeekBlockRowSecond.append(basicLessWeekBlockRowSecondClmnFirst)
                                if (String(scheduleForFindDay[j].week_number).length > 3) {
                                    let basicLessWeekBlockRowSecondClmnSecond = document.createElement('div')
                                    basicLessWeekBlockRowSecondClmnSecond.setAttribute("class", "schedule-block-week-block_row_column")
                                    basicLessWeekBlockRowSecondClmnSecond.innerHTML = String(scheduleForFindDay[j].week_number)[3]
                                    basicLessWeekBlockRowSecond.append(basicLessWeekBlockRowSecondClmnSecond)
                                }
                                basicLessRowClmnItemRowClmnWeek.append(basicLessWeekBlockRowSecond)
                            }
                        }

                        basicLessRowClmnItemRowSecondBodyRowSecond.append(basicLessRowClmnItemRowClmnWeek)
                        /**
                         * Строка формы занятия
                         * */
                        let basicLessRowClmnItemRowClmnType = document.createElement('div')
                        basicLessRowClmnItemRowClmnType.setAttribute("class", "hiding-block_current-schedule_item_row_column schedule_item_row_column schedule-block-type-object-block")
                        basicLessRowClmnItemRowClmnType.innerHTML = lessonForm[scheduleForFindDay[j].lesson_form_id - 1]
                        basicLessRowClmnItemRowSecondBodyRowSecond.append(basicLessRowClmnItemRowClmnType)
                        /**
                         * Строка групп
                         * */
                        let basicLessRowClmnItemRowClmnGroup = document.createElement('div')
                        basicLessRowClmnItemRowClmnGroup.setAttribute("class", "hiding-block_current-schedule_item_row_column schedule_item_row_column schedule-block-groups-block")
                        if (String(scheduleForFindDay[j].group_id).length > 1) {
                            for (let z = 0; z < String(scheduleForFindDay[j].group_id).length; z += 1) {
                                let basicLessRowClmnItemRowClmnGroupRow = document.createElement('div')
                                basicLessRowClmnItemRowClmnGroupRow.setAttribute("class", "schedule-block-groups-block_row")
                                basicLessRowClmnItemRowClmnGroupRow.innerHTML = groupsArray[Number(String(scheduleForFindDay[j].group_id)[z])]
                                basicLessRowClmnItemRowClmnGroup.append(basicLessRowClmnItemRowClmnGroupRow)
                            }
                        } else {
                            let basicLessRowClmnItemRowClmnGroupRow = document.createElement('div')
                            basicLessRowClmnItemRowClmnGroupRow.setAttribute("class", "schedule-block-groups-block_row")
                            basicLessRowClmnItemRowClmnGroupRow.innerHTML = groupsArray[scheduleForFindDay[j].group_id]
                            basicLessRowClmnItemRowClmnGroup.append(basicLessRowClmnItemRowClmnGroupRow)
                        }
                        basicLessRowClmnItemRowSecondBodyRowSecond.append(basicLessRowClmnItemRowClmnGroup)
                        /**
                         * Строка места проведения занятий
                         * */
                        let basicLessRowClmnItemRowClmnPlace = document.createElement('div')
                        basicLessRowClmnItemRowClmnPlace.setAttribute("class", "hiding-block_current-schedule_item_row_column schedule_item_row_column schedule-block-place-block")
                        let basicLessRowClmnItemRowClmnPlaceClmnFirst = document.createElement('div')
                        basicLessRowClmnItemRowClmnPlaceClmnFirst.setAttribute("class", "schedule-block-place-block_column")
                        basicLessRowClmnItemRowClmnPlaceClmnFirst.innerHTML = "к. " + scheduleForFindDay[j].building
                        let cbasicLessRowClmnItemRowClmnPlaceClmnSecond = document.createElement('div')
                        cbasicLessRowClmnItemRowClmnPlaceClmnSecond.setAttribute("class", "schedule-block-place-block_column")
                        cbasicLessRowClmnItemRowClmnPlaceClmnSecond.innerHTML = "а. " + scheduleForFindDay[j].auditorium
                        basicLessRowClmnItemRowClmnPlace.append(basicLessRowClmnItemRowClmnPlaceClmnFirst)
                        basicLessRowClmnItemRowClmnPlace.append(cbasicLessRowClmnItemRowClmnPlaceClmnSecond)
                        basicLessRowClmnItemRowSecondBodyRowSecond.append(basicLessRowClmnItemRowClmnPlace)
                        /**
                         *
                         * */
                        basicLessRowClmnItemRowSecondBody.append(basicLessRowClmnItemRowSecondBodyRowSecond)
                        basicLessRowClmnItemRowSecond.append(basicLessRowClmnItemRowSecondBody)
                    }
                } else {
                    let basicLessRowClmnItemRowSecondInfo = document.createElement('div')
                    basicLessRowClmnItemRowSecondInfo.setAttribute("class", "schedule_item_row-info")
                    basicLessRowClmnItemRowSecondInfo.innerHTML = "Занятий нет"
                    basicLessRowClmnItemRowSecond.append(basicLessRowClmnItemRowSecondInfo)
                }

                basicLessRowClmnItem.append(basicLessRowClmnItemRowFirst)
                basicLessRowClmnItem.append(basicLessRowClmnItemRowSecond)

                basicLessRowClmn.append(basicLessRowClmnItem)

                basicLessRow.append(basicLessRowClmn)
                dateForSchedule.setDate(dateForSchedule.getDate() + 1)
            }
            weekSchedule.append(basicLessRow)
        }

        if(Object.keys(Teacher).length == 0 && Object.keys(Group).length != 0) {
            activeTransformationStudent()
        }

        if(Object.keys(Group).length == 0 && Object.keys(Teacher).length != 0) {
            activeTransformationTeacher()
        }
    }
}

function studentInfo(){
    if(infoStudent.childNodes.length == 0) {
        let descriptStudent = document.createElement('div')
        descriptStudent.setAttribute("class", "block-selection_description-student description-block")
        descriptStudent.innerHTML = Group.name + " " + Group.code
        infoStudent.append(descriptStudent)
        let studentTime = document.createElement('div')
        studentTime.setAttribute("class", "block-selection_student-time block-selection-time")
        let studentTimeStart = document.createElement('div')
        studentTimeStart.setAttribute("class", "block-selection_teacher-time-start")
        studentTimeStart.innerHTML = "Начало занятий: " + new Date(Group.date_start).toLocaleDateString()
        studentTime.append(studentTimeStart)
        let studentTimeEnd = document.createElement('div')
        studentTimeEnd.setAttribute("class", "block-selection_teacher-time-end")
        studentTimeEnd.innerHTML = "Конец занятий: " + new Date(Group.date_end).toLocaleDateString()
        studentTime.append(studentTimeEnd)
        infoStudent.append(studentTime)
    }
}

function teacherInfo(){
    if(infoTeacher.childNodes.length == 0) {
        let blockSelectImgTeacher = document.createElement('div')
        let imgForSelectImgTeacher = document.createElement('img')
        let blockDescript = document.createElement('div')
        let spanTeacherFIO = document.createElement('span')
        let divTeacherPost = document.createElement('div')
        let blockTimeTeacher = document.createElement('div')
        let timeStart = document.createElement('div')
        let timeEnd = document.createElement('div')
        blockSelectImgTeacher.setAttribute("class", "block-selection_img-teacher")
        imgForSelectImgTeacher.setAttribute("src", 'http://127.0.0.1:8000/storage/' + Teacher.image)
        imgForSelectImgTeacher.setAttribute("alt", "Photo teacher")
        blockSelectImgTeacher.append(imgForSelectImgTeacher)
        infoTeacher.append(blockSelectImgTeacher)
        blockDescript.setAttribute("class", "block-selection_description-teacher description-block")
        spanTeacherFIO.setAttribute("class", "block-selection_description-teacher-FIO")
        spanTeacherFIO.innerHTML = Teacher.full_name
        divTeacherPost.setAttribute("class", "block-selection_description-teacher-post")
        divTeacherPost.innerHTML = Teacher.post.full_name + ", " + Teacher.degree.abbreviated_name
        blockDescript.append(spanTeacherFIO)
        blockDescript.append(divTeacherPost)
        infoTeacher.append(blockDescript)
        blockTimeTeacher.setAttribute("class", "block-selection_teacher-time block-selection-time")
        timeStart.setAttribute("class", "block-selection_teacher-time-start")
        timeStart.innerHTML = "Начало занятий: " + (new Date(Teacher.date_start)).toLocaleDateString()
        timeEnd.setAttribute("class", "block-selection_teacher-time-end")
        timeEnd.innerHTML = "Конец занятий: " + (new Date(Teacher.date_end)).toLocaleDateString()
        blockTimeTeacher.append(timeStart)
        blockTimeTeacher.append(timeEnd)
        infoTeacher.append(blockTimeTeacher)
    }
}

function activeTransformationTeacher(){
    blockFindTeacher.style.transform = 'translate(0,0)';
    blockFindTeacher.style.otransform = 'translate(0,0)';
    blockFindTeacher.style.webkitTransform = 'translate(0,0)';
    blockFindTeacher.style.mozTransform = 'translate(0,0)';

    blockInfoTeacher.style.visibility = 'visible';
    blockInfoTeacher.style.opacity = '1';

    blockSubgroupFilter.style.display = 'none';


    setTimeout(function () {
        blockMainSelection.style.minHeight = blockContainerTeacher.offsetHeight + 'px';
        minHeightForMainBlockSelectionFind();
    }, 200)
}

function activeTransformationStudent() {
    blockFindStudent.style.transform = 'translate(0,0)';
    blockFindStudent.style.otransform = 'translate(0,0)';
    blockFindStudent.style.webkitTransform = 'translate(0,0)';
    blockFindStudent.style.mozTransform = 'translate(0,0)';

    blockInfoStudent.style.visibility = 'visible';
    blockInfoStudent.style.opacity = '1';

    blockSubgroupFilter.style.display = 'block';

    blockMainSelection.style.minHeight = blockContainerStudent.offsetHeight + 'px';

    minHeightForMainBlockSelectionFind();
}

function minHeightForMainBlockSelectionFind(){
    blockHidingMainContent.style.opacity = "1";
    blockHidingMainContent.style.visibility = 'visible';
    blockHidingMainContent.style.height = "100%";
}

function minHeightForMainBlockSelectionChange(){
    blockMainSelection.style.minHeight = '230px';

    blockHidingMainContent.style.opacity = "0";
    blockHidingMainContent.style.visibility = 'hidden';
    blockHidingMainContent.style.height = "0";
}

if(btnLessonType != null) {
    btnLessonType.addEventListener("click", function () {
        if ((!this.classList.contains("active-btn")) && (!this.classList.contains("active-type-btn"))) {
            this.classList.add("active-type-btn");
            this.classList.add("active-btn");
            if ((btnSessionType.classList.contains("active-btn")) && (btnSessionType.classList.contains("active-type-btn"))) {
                btnSessionType.classList.remove("active-type-btn");
                btnSessionType.classList.remove("active-btn");
            }

            currentSchedule.innerHTML = ''
            weekSchedule.innerHTML = ''

            createActualSchedule()

            blockHidingTypeLessonContent.style.visibility = 'visible';
            blockHidingTypeLessonContent.style.opacity = "1";
            blockHidingTypeLessonContent.style.height = "auto";
        }
    }, false);
}

if(btnSessionType!=null){
    btnSessionType.addEventListener("click", function (){
        offChkBoxWeeks()

        let scheduleAll = null

        if((!this.classList.contains("active-btn")) && (!this.classList.contains("active-type-btn"))){
            this.classList.add("active-type-btn");
            this.classList.add("active-btn");
            if((btnLessonType.classList.contains("active-btn")) && (btnLessonType.classList.contains("active-type-btn"))){
                btnLessonType.classList.remove("active-type-btn");
                btnLessonType.classList.remove("active-btn");
            }

            currentSchedule.innerHTML = ''
            weekSchedule.innerHTML = ''

            if(Object.keys(Teacher).length == 0 && Object.keys(Group).length != 0) {
                scheduleAll = JSON.parse(JSON.stringify(Group.schedule))
            }

            if(Object.keys(Group).length == 0 && Object.keys(Teacher).length != 0) {
                scheduleAll = JSON.parse(JSON.stringify(Teacher.schedule))
            }

            let schedule = JSON.parse(JSON.stringify(getTimeTableForSession(scheduleAll)))
            let dateSession = []

            for(let x = 0; x < schedule.length; x +=1 ){
                if(!dateSession.includes(schedule[x].date)){
                    dateSession.push(schedule[x].date)
                }
            }

            if(schedule.length  > 0){
                let count = 0
                for (let i = 0; i < Math.round(schedule.length/2); i += 1) {
                    let basicLessRow = document.createElement('div')
                    basicLessRow.setAttribute("class", "main__block-basic_lessons_row schedule_body")
                    for (let l = 0; l < 2; l += 1) {
                        scheduleForFindDay = JSON.parse(JSON.stringify(getTimeTableForSessionActualDate(schedule, dateSession[count])))
                        scheduleForFindDay.sort(byLessonNumberSort('time'))

                        if (scheduleForFindDay.length > 0) {

                            let basicLessRowClmn = document.createElement('div')
                            basicLessRowClmn.setAttribute("class", "main__block-basic_lessons_column schedule_column")

                            let basicLessRowClmnItem = document.createElement('div')
                            basicLessRowClmnItem.setAttribute("class", "main__block-basic_lessons_item schedule_item")

                            let basicLessRowClmnItemRowFirst = document.createElement('div')
                            basicLessRowClmnItemRowFirst.setAttribute("class", "main__block-basic_lessons_item_row schedule_item_row")
                            basicLessRowClmnItemRowFirst.innerHTML = dayWeek[new Date(dateSession[count]).getDay()] + " - " + new Date(dateSession[count]).toLocaleDateString()

                            let basicLessRowClmnItemRowSecond = document.createElement('div')
                            basicLessRowClmnItemRowSecond.setAttribute("class", "main__block-basic_lessons_item_row schedule_item_row")

                            if (scheduleForFindDay.length > 0) {
                                for (let j = 0; j < scheduleForFindDay.length; j += 1) {
                                    /**
                                     * Строка для расписания с телом предметов
                                     * */
                                    let basicLessRowClmnItemRowSecondBody = document.createElement('div')
                                    basicLessRowClmnItemRowSecondBody.setAttribute("class", "main__block-basic_lessons_item_row_body schedule_item_row_body")
                                    /**
                                     * Строка тела с названием предмета
                                     * */
                                    let basicLessRowClmnItemRowSecondBodyRowFirst = document.createElement('div')
                                    basicLessRowClmnItemRowSecondBodyRowFirst.setAttribute("class", "main__block-basic_lessons_item_row_body_row schedule_item_row_body_row")
                                    let basicLessRowClmnItemRowSecondBodyRowFirstNameLesson = document.createElement('div')
                                    basicLessRowClmnItemRowSecondBodyRowFirstNameLesson.setAttribute("class", "hiding-block_current-schedule_item_row_body_row_name-lesson schedule-block-name-block")
                                    basicLessRowClmnItemRowSecondBodyRowFirstNameLesson.innerHTML = objectsArray[scheduleForFindDay[j].object_id]
                                    basicLessRowClmnItemRowSecondBodyRowFirst.append(basicLessRowClmnItemRowSecondBodyRowFirstNameLesson)
                                    basicLessRowClmnItemRowSecondBody.append(basicLessRowClmnItemRowSecondBodyRowFirst)
                                    /**
                                     * Строка тела с описанием проведения занятия
                                     * */
                                    let basicLessRowClmnItemRowSecondBodyRowSecond = document.createElement('div')
                                    basicLessRowClmnItemRowSecondBodyRowSecond.setAttribute("class", "main__block-basic_lessons_item_row_body_row schedule_item_row_body_row")
                                    let basicLessRowClmnItemRowClmnTime = document.createElement('div')
                                    basicLessRowClmnItemRowClmnTime.setAttribute("class", "hiding-block_current-schedule_item_row_column schedule_item_row_column schedule-block-time-block")
                                    let basicLessTimeBlockRowFirst = document.createElement('div')
                                    basicLessTimeBlockRowFirst.setAttribute("class", "schedule-block-time-block_row")
                                    basicLessTimeBlockRowFirst.innerHTML = String(scheduleForFindDay[j].time).substring(0,5)
                                    let basicLessTimeBlockRowSecond = document.createElement('div')
                                    basicLessTimeBlockRowSecond.setAttribute("class", "schedule-block-time-block_row")
                                    basicLessTimeBlockRowSecond.innerHTML = ""
                                    basicLessRowClmnItemRowClmnTime.append(basicLessTimeBlockRowFirst)
                                    basicLessRowClmnItemRowClmnTime.append(basicLessTimeBlockRowSecond)
                                    basicLessRowClmnItemRowSecondBodyRowSecond.append(basicLessRowClmnItemRowClmnTime)
                                    /**
                                     * Строка недель
                                     * */
                                    /**
                                    let basicLessRowClmnItemRowClmnWeek = document.createElement('div')
                                    basicLessRowClmnItemRowClmnWeek.setAttribute("class", "hiding-block_current-schedule_item_row_column schedule_item_row_column schedule-block-week-block")
                                    if (String(scheduleForFindDay[j].week_number).length > 0) {
                                        let basicLessWeekBlockRowFirst = document.createElement('div')
                                        basicLessWeekBlockRowFirst.setAttribute("class", "schedule-block-week-block_row")
                                        let basicLessWeekBlockRowFirstClmnFirst = document.createElement('div')
                                        basicLessWeekBlockRowFirstClmnFirst.setAttribute("class", "schedule-block-week-block_row_column")
                                        basicLessWeekBlockRowFirstClmnFirst.innerHTML = String(scheduleForFindDay[j].week_number)[0]
                                        basicLessWeekBlockRowFirst.append(basicLessWeekBlockRowFirstClmnFirst)
                                        if (String(scheduleForFindDay[j].week_number).length > 1) {
                                            let basicLessWeekBlockRowFirstClmnSecond = document.createElement('div')
                                            basicLessWeekBlockRowFirstClmnSecond.setAttribute("class", "schedule-block-week-block_row_column")
                                            basicLessWeekBlockRowFirstClmnSecond.innerHTML = String(scheduleForFindDay[j].week_number)[1]
                                            basicLessWeekBlockRowFirst.append(basicLessWeekBlockRowFirstClmnSecond)
                                        }
                                        basicLessRowClmnItemRowClmnWeek.append(basicLessWeekBlockRowFirst)
                                        if (String(scheduleForFindDay[j].week_number).length > 2) {
                                            let basicLessWeekBlockRowSecond = document.createElement('div')
                                            basicLessWeekBlockRowSecond.setAttribute("class", "schedule-block-week-block_row")
                                            let basicLessWeekBlockRowSecondClmnFirst = document.createElement('div')
                                            basicLessWeekBlockRowSecondClmnFirst.setAttribute("class", "schedule-block-week-block_row_column")
                                            basicLessWeekBlockRowSecondClmnFirst.innerHTML = String(scheduleForFindDay[j].week_number)[2]
                                            basicLessWeekBlockRowSecond.append(basicLessWeekBlockRowSecondClmnFirst)
                                            if (String(scheduleForFindDay[j].week_number).length > 3) {
                                                let basicLessWeekBlockRowSecondClmnSecond = document.createElement('div')
                                                basicLessWeekBlockRowSecondClmnSecond.setAttribute("class", "schedule-block-week-block_row_column")
                                                basicLessWeekBlockRowSecondClmnSecond.innerHTML = String(scheduleForFindDay[j].week_number)[3]
                                                basicLessWeekBlockRowSecond.append(basicLessWeekBlockRowSecondClmnSecond)
                                            }
                                            basicLessRowClmnItemRowClmnWeek.append(basicLessWeekBlockRowSecond)
                                        }
                                    }

                                    basicLessRowClmnItemRowSecondBodyRowSecond.append(basicLessRowClmnItemRowClmnWeek)
                                    */
                                    /**
                                     * Строка формы занятия
                                     * */
                                    let basicLessRowClmnItemRowClmnType = document.createElement('div')
                                    basicLessRowClmnItemRowClmnType.setAttribute("class", "hiding-block_current-schedule_item_row_column schedule_item_row_column schedule-block-type-object-block")
                                    basicLessRowClmnItemRowClmnType.innerHTML = lessonForm[scheduleForFindDay[j].lesson_form_id - 1]
                                    basicLessRowClmnItemRowSecondBodyRowSecond.append(basicLessRowClmnItemRowClmnType)
                                    /**
                                     * Строка групп
                                     * */
                                    let basicLessRowClmnItemRowClmnGroup = document.createElement('div')
                                    basicLessRowClmnItemRowClmnGroup.setAttribute("class", "hiding-block_current-schedule_item_row_column schedule_item_row_column schedule-block-groups-block")
                                    if (String(scheduleForFindDay[j].group_id).length > 1) {
                                        for (let z = 0; z < String(scheduleForFindDay[j].group_id).length; z += 1) {
                                            let basicLessRowClmnItemRowClmnGroupRow = document.createElement('div')
                                            basicLessRowClmnItemRowClmnGroupRow.setAttribute("class", "schedule-block-groups-block_row")
                                            basicLessRowClmnItemRowClmnGroupRow.innerHTML = groupsArray[Number(String(scheduleForFindDay[j].group_id)[z])]
                                            basicLessRowClmnItemRowClmnGroup.append(basicLessRowClmnItemRowClmnGroupRow)
                                        }
                                    } else {
                                        let basicLessRowClmnItemRowClmnGroupRow = document.createElement('div')
                                        basicLessRowClmnItemRowClmnGroupRow.setAttribute("class", "schedule-block-groups-block_row")
                                        basicLessRowClmnItemRowClmnGroupRow.innerHTML = groupsArray[scheduleForFindDay[j].group_id]
                                        basicLessRowClmnItemRowClmnGroup.append(basicLessRowClmnItemRowClmnGroupRow)
                                    }
                                    basicLessRowClmnItemRowSecondBodyRowSecond.append(basicLessRowClmnItemRowClmnGroup)
                                    /**
                                     * Строка места проведения занятий
                                     * */
                                    let basicLessRowClmnItemRowClmnPlace = document.createElement('div')
                                    basicLessRowClmnItemRowClmnPlace.setAttribute("class", "hiding-block_current-schedule_item_row_column schedule_item_row_column schedule-block-place-block")
                                    let basicLessRowClmnItemRowClmnPlaceClmnFirst = document.createElement('div')
                                    basicLessRowClmnItemRowClmnPlaceClmnFirst.setAttribute("class", "schedule-block-place-block_column")
                                    basicLessRowClmnItemRowClmnPlaceClmnFirst.innerHTML = "к. " + scheduleForFindDay[j].building
                                    let cbasicLessRowClmnItemRowClmnPlaceClmnSecond = document.createElement('div')
                                    cbasicLessRowClmnItemRowClmnPlaceClmnSecond.setAttribute("class", "schedule-block-place-block_column")
                                    cbasicLessRowClmnItemRowClmnPlaceClmnSecond.innerHTML = "а. " + scheduleForFindDay[j].auditorium
                                    basicLessRowClmnItemRowClmnPlace.append(basicLessRowClmnItemRowClmnPlaceClmnFirst)
                                    basicLessRowClmnItemRowClmnPlace.append(cbasicLessRowClmnItemRowClmnPlaceClmnSecond)
                                    basicLessRowClmnItemRowSecondBodyRowSecond.append(basicLessRowClmnItemRowClmnPlace)
                                    /**
                                     *
                                     * */
                                    basicLessRowClmnItemRowSecondBody.append(basicLessRowClmnItemRowSecondBodyRowSecond)
                                    basicLessRowClmnItemRowSecond.append(basicLessRowClmnItemRowSecondBody)
                                }
                            }

                            basicLessRowClmnItem.append(basicLessRowClmnItemRowFirst)
                            basicLessRowClmnItem.append(basicLessRowClmnItemRowSecond)

                            basicLessRowClmn.append(basicLessRowClmnItem)

                            basicLessRow.append(basicLessRowClmn)
                        }
                        count += 1
                    }
                    weekSchedule.append(basicLessRow)
                }
                if(Object.keys(Teacher).length == 0 && Object.keys(Group).length != 0) {
                    activeTransformationStudent()
                }

                if(Object.keys(Group).length == 0 && Object.keys(Teacher).length != 0) {
                    activeTransformationTeacher()
                }
            }

            blockHidingTypeLessonContent.style.visibility = 'hidden';
            blockHidingTypeLessonContent.style.opacity = "0";
            blockHidingTypeLessonContent.style.height = "0";
        }
    }, false);
}

let count = 0;

let divBlockNumWeek = document.querySelector(".info_item");

if(divBlockNumWeek!=null){
    divBlockNumWeek.addEventListener("mousedown", function (e){
        count=count+1;
        setTimeout(function(){ count=0; },400);
        if(count==3){
            count=0;
            return location.href = '/home';
        }
    }, false);
}
