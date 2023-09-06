var mouseEvent = "empty";
var lastPositionOfX, lastPositionOfY;

    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");
    
    color = "black";
    widthOfLine = 1;

    canvas.addEventListener("mousedown", my_mousedown);
    
    function my_mousedown(e)
    {
        //Início da Atividade Adicional
        color = document.getElementById("color").value;
        widthOfLine = document.getElementById("widthOfLine").value;
        //Fim da Atividade Adicional

        mouseEvent = "mouseDown";
    }

    canvas.addEventListener("mousemove", my_mousemove);
    function my_mousemove(e)
    {
        currentPositionOfMouseX = e.clientX - canvas.offsetLeft;
        currentPositionOfMouseY = e.clientY - canvas.offsetTop;

        if (mouseEvent == "mouseDown") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = widthOfLine;
        
        /*
        Adicione a função moveTo() com coordenadas
        lastPositionOfX, lastPositionOfY
        para começar a criação da linha*/
        ctx.moveTo( lastPositionOfX,lastPositionOfY);  
         ctx.lineTo(currentPositionOfMouseX,currentPositionOfMouseY);{
            

        }
        /*Adicione a função lineTo() com coordenadas
        currentPositionOfMouseX, currentPositionOfMouseY
        para encerrar a criação da linha
        */
       
        ctx.stroke();
        }

        lastPositionOfX = currentPositionOfMouseX; 
        lastPositionOfY = currentPositionOfMouseY;

    }

    canvas.addEventListener("mouseup", my_mouseup);
    function my_mouseup(e)
    {
        mouseEvent = "mouseUP";
    }

    canvas.addEventListener("mouseleave", my_mouseleave);
    function my_mouseleave(e)
    {
        mouseEvent = "mouseleave";
    }

var lastPositionOfTouchX, lastPositionOfTouchY;

/*
Atribua screen.width à variável width*/
 var width = screen.width;
/*Diminua em 70 da screen.width
e a atribua à newWidth*/
 var screenwidth = newWidth -70;
/*Diminua em 300 da screen.height
e a atribua à newHeight
*/var screenheight = newHeight -300;

if(width < 992)
{
    document.getElementById("myCanvas").width = newWidth;
    document.getElementById("myCanvas").height = newHeight;
    document.body.style.overflow = "hidden";
}

canvas.addEventListener("touchstart", my_touchstart);

function my_touchstart(e) 
{
    console.log("my_touchstart");
    //Atividade Adicional
    color = document.getElementById("color").value;
    widthOfLine = document.getElementById("widthOfLine").value;
    //Fim da Atividade Adicional
         
    lastPositionOfTouchX = e.touches[0].clientX - canvas.offsetLeft;
    lastPositionOfTouchY = e.touches[0].clientY - canvas.offsetTop;
}

canvas.addEventListener("touchmove", my_touchmove);

function my_touchmove(e) 
{
    currentPositionOfTouchX = e.touches[0].clientX - canvas.offsetLeft;
    currentPositionOfTouchY = e.touches[0].clientY - canvas.offsetTop;
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = widthOfLine;
    /*
        Adicione a função moveTo() com coordenadas
        lastPositionOfX, lastPositionOfY
        para começar a criação da linha*/
        ctx.moveTo( lastPositionOfX,lastPositionOfY);  
         ctx.lineTo(currentPositionOfMouseX,currentPositionOfMouseY);
            
       /* Adicione a função lineTo() com coordenadas
        currentPositionOfMouseX, currentPositionOfMouseY
        para encerrar a criação da linha    
    */
    ctx.stroke();

    lastPositionOfTouchX = currentPositionOfTouchX; 
    lastPositionOfTouchY = currentPositionOfTouchY;
   
}

//Atividade Adicional
function clearArea()
{
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}