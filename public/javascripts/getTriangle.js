function getTriangle() {
    $.ajax({
        type: "POST",
        url: "/api/triangle",
        data: { sideA : $("#firstSide").val(), sideB : $("#secondSide").val(), sideC :$("#thirdSide").val(), },
        async: true
    }).done(function (data) {
        $("#result").text(data.triangle);
        $('#idImage').attr('src', data.image);
    });
}