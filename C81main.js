canvas = document.getElementById("mycanvas");
ctx= canvas.getcontext("2d");
color ="red";
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 2;
ctx.arc(200,200,40,0,2*Math.PI);
ctx.strokeStyle();

canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e)
{
    colour = document.getElementById("colour").Value;
console.log(color);

mouse_x = e.clientX - canvas.offsetLeft;
mouse_y = e.clientV - canvas.offsetTop;

console.log("x =" + mouse_x + ",Y =" + mouse_y);
circle(mouse_x , mouse_y);
}
function circle(mouse_x , mouse_y)
{
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = 2;
    ctx.arc(mouse_x ,mouse_y, 40,0,2*Math.PI);
    ctx.stroke();
}
function clearArea()
{
    ctx.clearRect(0,0,canvas.width, canvas.height);
}