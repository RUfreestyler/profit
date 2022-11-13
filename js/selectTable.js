let main = document.getElementById('main');
let editTestsBtn = document.getElementById('edit-tests').onclick = showTable;
let editCoursesBtn = document.getElementById('edit-courses');
let editCollegesBtn = document.getElementById('edit-colleges');
let editProfessionsBtn = document.getElementById('edit-professions');
let showUsersBtn = document.getElementById('show-users');

function showTable(tableName){
    main.innerHTML = "";
    main.insertAdjacentHTML('afterbegin', "<?php require_once 'server/showTable.php'; showTable('test'); ?>");
}