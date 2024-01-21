// task 1 Таблицу с id="age-table".
let ageTable = document.getElementById("age-table");

// task 2 Все элементы label внутри этой таблицы (их три).
let label = document.querySelectorAll("#age-table label");
// or
let label1 = ageTable.getElementsByTagName("label");
// task 3 Первый td в этой таблице (со словом «Age»).
let tdFirstChild = document.querySelector("#age-table td");
// task 4 Форму form с именем name="search".
let form = document.getElementsByName("search");
// task 5 Первый input в этой форме.
let firstInput = document.querySelector(".vsc-initialized input");
// task 6 Последний input в этой форме.
let lastInput = document.querySelectorAll("input");
lastInput = lastInput[lastInput.length-1];


// Что выведет этот код?
// вторую задачу в Notion не мог написать поэтому сюда напишу
// answer: BODY