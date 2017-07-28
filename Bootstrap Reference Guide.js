$(document).ready(
    function() {
        document.getElementById("icon").onclick = function() {
            $(".page").removeClass("current");
        };
        document.getElementById("nav1").onclick = function() {
            $(".page").removeClass("current");
            $("#page1").addClass("current");
        };
        document.getElementById("nav2").onclick = function() {
            $(".page").removeClass("current");
            $("#page2").addClass("current");
            setTimeout(function() {$("#modal_code").modal("show"); }, 1400);
        };
        document.getElementById("nav3").onclick = function() {
            $(".page").removeClass("current");
            $("#page3").addClass("current");
        };
        document.getElementById("nav4").onclick = function() {
            $(".page").removeClass("current");
            $("#page4").addClass("current");
        };
        document.getElementById("nav5").onclick = function() {
            $(".page").removeClass("current");
            $("#page5").addClass("current");
        };
        document.getElementById("nav7").onclick = function() {
            $(".page").removeClass("current");
            $("#page7").addClass("current");
        };
        document.getElementById("nav9").onclick = function() {
            $(".page").removeClass("current");
            $("#page9").addClass("current");
        };
        document.getElementById("nav10").onclick = function() {
            $(".page").removeClass("current");
            $("#page10").addClass("current");
        };
        document.getElementById("nav11").onclick = function() {
            $(".page").removeClass("current");
            $("#page11").addClass("current");
        };
        document.getElementById("nav12").onclick = function() {
            $(".page").removeClass("current");
            $("#page12").addClass("current");
        };
    }
);

var scrollEventHandler = function()
{
  window.scroll(0, window.pageYOffset)
}

window.addEventListener("scroll", scrollEventHandler, false);

function new_alert() {
    $("#page11").append(
        "<div class='alert alert-success alert-dismissible fade in' role='alert'>" +
            "<button type='button' class='close' data-dismiss='alert'>" +
                "<span>&times;</span>" +
            "</button>" +
            "Alerts can be dismissed if a button with <strong>'close'</strong> as a class and with data-dismiss set to <strong>'alert'</strong>." +
        "</div>")
}