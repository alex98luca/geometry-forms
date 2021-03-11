function showArea() {
    document.getElementById("perimeter").style.display="none";
    document.getElementById("area").style.display="block";
}

function showPerimeter() {
    document.getElementById("area").style.display="none";
    document.getElementById("perimeter").style.display="block";
}

function calculateSquareArea() {
    var side = document.getElementById("sideA").value;
    var area = side * side;
    var result = "Area: " + area;
    document.getElementById("squareArea").innerHTML = result;
}

function calculateSquarePerimeter() {
    var side = document.getElementById("sideP").value;
    var perimeter = side * 4;
    var result = "Perimetro: " + perimeter;
    document.getElementById("squarePerimeter").innerHTML = result;
}

function calculateRectangleArea() {
    var base = document.getElementById("baseA").value;
    var height = document.getElementById("heightA").value;
    var area = base * height;
    var result = "Area: " + area;
    document.getElementById("rectangleArea").innerHTML = result;
}

function calculateRectanglePerimeter() {
    var base = document.getElementById("baseP").value;
    var height = document.getElementById("heightP").value;
    var perimeter = (Number(base) + Number(height)) * 2;
    var result = "Perimetro: " + perimeter;
    document.getElementById("rectanglePerimeter").innerHTML = result;
}

function calculateTriangleArea() {
    var base = document.getElementById("baseA").value;
    var height = document.getElementById("heightA").value;
    var area = base * height / 2;
    var result = "Area: " + area;
    document.getElementById("triangleArea").innerHTML = result;
}

function showEqPer() {
    document.getElementById("isPerimeter").className="options type";
    document.getElementById("scPerimeter").className="options type";
    document.getElementById("eqPerimeter").className="active";
    document.getElementById("isoscelesPerimeter").style.display="none";
    document.getElementById("scalenePerimeter").style.display="none";
    document.getElementById("equilateralPerimeter").style.display="block";
    
}
function showIsPer() {
    document.getElementById("eqPerimeter").className="options type";
    document.getElementById("scPerimeter").className="options type";
    document.getElementById("isPerimeter").className="active";
    document.getElementById("equilateralPerimeter").style.display="none";
    document.getElementById("scalenePerimeter").style.display="none";
    document.getElementById("isoscelesPerimeter").style.display="block";
}
function showScPer() {
    document.getElementById("eqPerimeter").className="options type";
    document.getElementById("isPerimeter").className="options type";
    document.getElementById("scPerimeter").className="active";
    document.getElementById("equilateralPerimeter").style.display="none";
    document.getElementById("isoscelesPerimeter").style.display="none";
    document.getElementById("scalenePerimeter").style.display="block";
}

function calculateEquilateralTrianglePerimeter() {
    var side = document.getElementById("sideEqP").value;
    var perimeter = side * 3;
    var result = "Perimetro: " + perimeter;
    document.getElementById("trianglePerimeter").innerHTML = result;
}

function calculateIsoscelesTrianglePerimeter() {
    var doubleSide = document.getElementById("doubleSideIsP").value;
    var singleSide = document.getElementById("sideIsP").value;
    var perimeter = (doubleSide * 2) + Number(singleSide);
    var result = "Perimetro: " + perimeter;
    document.getElementById("trianglePerimeter").innerHTML = result;
}

function calculateScaleneTrianglePerimeter() {
    var side1 = document.getElementById("side1ScP").value;
    var side2 = document.getElementById("side2ScP").value;
    var side3 = document.getElementById("side3ScP").value;
    var perimeter = Number(side1) + Number(side2) + Number(side3);
    var result = "Perimetro: " + perimeter;
    document.getElementById("trianglePerimeter").innerHTML = result;
}

function calculateRhombusArea() {
    var diag1 = document.getElementById("diag1A").value;
    var diag2 = document.getElementById("diag2A").value;
    var area = diag1 * diag2 / 2;
    var result = "Area: " + area;
    document.getElementById("rhombusArea").innerHTML = result;
}

function calculateTrapezoidArea() {
    var base1 = document.getElementById("base1A").value;
    var base2 = document.getElementById("base2A").value;
    var height = document.getElementById("heightA").value;
    var area = (Number(base1)+Number(base2)) * height / 2;
    var result = "Area: " + area;
    document.getElementById("trapezoidArea").innerHTML = result;
}

function calculateRectTrapezoidPerimeter() {
    var base1 = document.getElementById("base1ReP").value;
    var base2 = document.getElementById("base2ReP").value;
    var height = document.getElementById("heightReP").value;
    var side = document.getElementById("sideReP").value;
    var perimeter = Number(base1) + Number(base2) + Number(height) + Number(side);
    var result = "Perimetro: " + perimeter;
    document.getElementById("trapezoidPerimeter").innerHTML = result;    
}

function calculateIsoscelesTrapezoidPerimeter() {
    var base1 = document.getElementById("base1IsP").value;
    var base2 = document.getElementById("base2IsP").value;
    var doubleSide = document.getElementById("doubleSideIsP").value;
    var perimeter = Number(base1) + Number(base2) + (doubleSide * 2);
    var result = "Perimetro: " + perimeter;
    document.getElementById("trapezoidPerimeter").innerHTML = result;    
}

function calculateScaleneTrapezoidPerimeter() {
    var base1 = document.getElementById("base1ScP").value;
    var base2 = document.getElementById("base2ScP").value;
    var side1 = document.getElementById("side1ScP").value;
    var side2 = document.getElementById("side2ScP").value;
    var perimeter = Number(base1) + Number(base2) + Number(side1) + Number(side2);
    var result = "Perimetro: " + perimeter;
    document.getElementById("trapezoidPerimeter").innerHTML = result;    
}

var PI = Math.PI;

function calculateCircleArea() {
    var radius = document.getElementById("radiusA").value;
    var area = PI * radius * radius;
    var result = "Area: " + area;
    document.getElementById("circleArea").innerHTML = result;    
}

function calculateCircumference() {
    var radius = document.getElementById("radiusP").value;
    var circumference = 2 * PI * radius;
    var result = "Circonferenza: " + circumference;
    document.getElementById("circumference").innerHTML = result;    
}
