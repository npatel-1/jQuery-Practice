// this will make the code run when the document it ready
// $(document).ready(function(){
  // $('h1').hide();
//this will only hide heading1
  // $('h1#heading1').hide();
  // $('.heading2').hide();
// $('p span').css('color', 'red');
//highlights the first item in red
// $('ul#list li:first').css('color', 'red');
//highlights the last item in green
// $('ul#list li:last').css('color', 'green');
//all even items are yellow
// $('ul#list li:even').css('background-color', 'yellow');
//all odd items are grey
// $('ul#list li:odd').css('background-color', 'grey');
//nth-child(3n) makes every 3rd item doesn't have a bullet point
// $('ul#list li:nth-child(3n)').css('list-style', 'none');
//this will make the submit button hide
// $(':submit').hide();
//makes the a tags red
// $('a').css('color', 'red');
//makes only yahoo orange
// $('a[href="www.yahoo.com"]').css('color', 'orange');
//this will hide everything
// $('*').hide();
// })

$(document).ready(function(){
//   $('#btn1').click(function(){
//   alert('Button Clicked!');
// });
// $('#btn1').on('click', function(){
//   alert('Button Clicked!');
// })
//hides the text when clicked on button 1
// $('#btn1').on('click', function(){
  // $('.para1').hide();
  //toggles the text when clicked on the same button
//   $('.para1').toggle();
// })
//shows text when clicked on button 2
// $('#btn2').on('click', function(){
//   $('.para1').show();
// })

// $('#btn1').dblclick(function(){
//   $('.para1').toggle();
// });
//text is displayed when hovered over the button 1
// $('#btn1').on('mouseenter',function(){
//   $('.para1').toggle();
// });
// $('#btn1').on('mouseleave',function(){
//   $('.para1').toggle();
// });
// $('#btn1').on('mousemove',function(){
//    $('.para1').toggle();
// });
//text disappears when clicked down and appears when released
// $('#btn1').on('mousedown',function(){
//    $('.para1').toggle();
// });
// $('#btn1').on('mouseup',function(){
//    $('.para1').toggle();
// });

// $('#btn1').click(function(e){
   // alert(e.currentTarget.id);
   // alert(e.currentTarget.innerHTML);
   // alert(e.currentTarget.outerHTML);
   // alert(e.currentTarget.className);
// });
// $(document).on('mousemove',function(e){
//    $('#coords').html('Coords: Y: '+e.clientY+"X: "+e.clientX);
// });
//input field changes color when clicked
// $('input').focus(function(){
  // alert('Focus');
//   $(this).css('background', 'pink');
// })
//input field color goes back to white when clicked on something else
// $('input').blur(function(){
  // alert('Focus');
//   $(this).css('background', 'white');
// })
//will display what is being typed in on the console
// $('input').keyup(function(e){
//   console.log(e.target.value);
// })
// message pops saying the value name
$('select#gender').change(function(e){
  alert(e.target.value);
})
$('#form').submit(function(e){
  e.prevent.default();
  var name = $('input#name').val();
  console.log(name);
})

})
