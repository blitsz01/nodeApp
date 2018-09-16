var triangle = function (req, res, next) {
    console.log(req.body);
    triangleCheck(Number(req.body.sideA), Number(req.body.sideB), Number(req.body.sideC)).then(
        function (data) {
            console.log(data);
            res.send(data);
        }
    )
}

var triangleCheck = function (sideOne, sideTwo, sideThree) {
    return new Promise(function (resolve) {
        if ((sideOne + sideTwo) <= sideThree ||
            (sideOne + sideThree) <= sideTwo ||
            (sideTwo + sideThree) <= sideOne ||
            sideOne <= 0 ||
            sideTwo <= 0 ||
            sideThree <= 0) {
            resolve({ "triangle": "You have entered an invalid input!", image: "/images/error.png" });
        }
        else {
            if (sideOne === sideTwo && sideTwo === sideThree)
                resolve({ "triangle": "Equilateral - Three equal sides", image: "/images/equilateral.jpg" });
            else if (sideOne !== sideTwo && sideOne !== sideThree && sideTwo !== sideThree)
                resolve({ "triangle": "Scalene - No equal sides", image: "/images/scalene.jpg" });
            else
                resolve({ "triangle": "Isosceles - Two equal sides", image: "/images/isosceles.jpg" });
        }
    });


}
module.exports = triangle;