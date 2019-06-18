// Your web app's Firebase configuration
var firebaseConfig = {
  	apiKey: "AIzaSyBSFgiyLfwQh1IC8DfH3LG06YViLgj_pHU",
    authDomain: "iot-asm.firebaseapp.com",
    databaseURL: "https://iot-asm.firebaseio.com",
    projectId: "iot-asm",
    storageBucket: "iot-asm.appspot.com",
    messagingSenderId: "254455359228",
    appId: "1:254455359228:web:9ce723b0998f5261"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//=============led========================
$(document).ready(function () {
  var database = firebase.database();
  var LED_STATUS;
  database.ref().on("value", function (snap) {
    LED_STATUS = snap.val().LED_STATUS;
    if (LED_STATUS == 1) {
      $(".den").text("Bật Đèn");
      $('input[name=foo1]').attr('checked', true);
    } else {
      $(".den").text("Tắt Đèn");
      $('input[name=foo1]').attr('checked', false);
    }
  });

  $(".bt1").click(function () {
    var firebaseRef = firebase.database().ref().child("LED_STATUS");

    if (LED_STATUS == "1") {
      firebaseRef.set("0");
      LED_STATUS == "0";
    } else {
      firebaseRef.set("1");
      LED_STATUS = "1";
    }
  })
});
//=============led========================

//=============Fan========================
$(document).ready(function () {
  var database = firebase.database();
  var FAN_STATUS;
  database.ref().on("value", function (snap) {
    FAN_STATUS = snap.val().FAN_STATUS;
    if (FAN_STATUS == "1") {
      $(".quat").text("Bật Quạt");
      $('input[name=foo]').attr('checked', true);
    } else {
      $(".quat").text("Tắt Quạt");
      $('input[name=foo]').attr('checked', false);
    }


  });


  $(".bt").click(function () {
    var firebaseRef = firebase.database().ref().child("FAN_STATUS");

    if (FAN_STATUS == "1") {
      firebaseRef.set("0");
      FAN_STATUS = "0";
    } else {
      firebaseRef.set("1");
      FAN_STATUS = "1";
    }
  })
});
//=============Fan========================


//================== Nhiet Do ==============================
$(document).ready(function () {

  var database = firebase.database();
  var NHIET_DO;
  database.ref().on("value", function (snap) {
    NHIET_DO = snap.val().NHIET_DO;
    var progressbar = $('#progress_bar');
    value = progressbar.val();
    value = Number(NHIET_DO);

    addValue = progressbar.val(value);
    $('.progress-value').html(value + '%');
    var $ppc = $('.progress-pie-chart'),
      deg = 360 * value / 100;
    if (value > 50) {
      $ppc.addClass('gt-50');
    }
    $('.ppc-progress-fill').css('transform', 'rotate(' + deg + 'deg)');
    $('.ppc-percents .nhietdo2').html(value + '°C');

    if (value == max) {
      clearInterval(animate);
    }
  });
});


//================== Do Am ==============================
$(document).ready(function () {
  var database = firebase.database();
  var DO_AM;
  database.ref().on("value", function (snap) {
    DO_AM = snap.val().DO_AM;
    var progressbar2 = $('#progress_bar2');
    value2 = progressbar2.val();
    value2 = Number(DO_AM);
    addValue2 = progressbar2.val(value2);
    $('.progress-value2').html(value2 + '%');
    var $ppc2 = $('.progress-pie-chart2'),
      deg2 = 360 * value2 / 100;
    if (value2 > 50) {
      $ppc2.addClass('gt-50');
    }
    $('.ppc-progress-fill2').css('transform', 'rotate(' + deg2 + 'deg)');
    $('.ppc-percents2 .doam2').html(value2 + '%');

    if (value2 == max2) {
      clearInterval(animate);
    }
  });
});
