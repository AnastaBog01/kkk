// let n1="Ivan"
// let n2="Max"

const names = []

// console.log(names.length)
// console.log(names)
// console.log(names[4])

$("#add").click(f1)
$("#search").click(f2)
$('#del').click(f3)
$("#search1").click(f4)

function f1(){
  let name =$("#in1").val()
  names.push(name) //добавит в концe списка что напишешь//
  //.uhshift в начало списка добаит//
  $("#out").text(names)
}
//
// function fa(){
//   let name =$("#in1").val()
//   let index= names.indexOf(name) //найти в списке под номером//
//   if (index==-1){ //элемент не найден
//    $("#out").text("не найден")
//   }
//   else {
//     $("#out").text(name+" под номером "+index)
//   }
// }

function f3(){
  let name =$("#in1").val()
  names.pop() //удаление в конце списка
  //.shift удаление первого элемента//
  $("#out").text(names)
}
function f2(){
  let name =$("#in1").val()
  names.shift() //удаление в конце списка
  //.shift удаление первого элемента//
  $("#out").text(names)
}

function f4(){
  let name =$("#in1").val()
  names.set()
  $("#out").text(names)
}

// function f5(){
//   let name =$("#in1").val()
//   let index=names.indexOf(name)
//    if (index==-1){ //элемент не найден
//    $("#out").text("не найден")
//   }
//   else {
//     names.splice(index, 1)
//      $("#out").text(names)
//   }
// }

// $(document).ready(function (){
//   $("#but1").prop('disabled', true)
// })
//
// $('#but2').click(fd)
//
// function fd(){
//   $('#but1').prop("disabled", false)
//   $('#but2').prop("disabled", true)
// }
