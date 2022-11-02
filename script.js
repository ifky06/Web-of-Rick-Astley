window.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  var navH2 = document.querySelector("nav h2");
  var navUl = document.getElementsByClassName("nav-a");
  var scrollUp = document.getElementById("scroll-up");
  if (window.pageYOffset > 100) {
    header.style.backgroundColor = "#cfd2f8";
    navH2.style.color = "black";
    for (let i = 0; i < navUl.length; i++) {
      navUl[i].style.color = "black";
    }
    scrollUp.style.opacity = "1";
    $("#scroll-up").css("transform", "scale(1)");
  } else {
    header.style.backgroundColor = "transparent";
    navH2.style.color = "#edf0f1";
    for (let i = 0; i < navUl.length; i++) {
      navUl[i].style.color = "#edf0f1";
    }
    scrollUp.style.opacity = "0";
    $("#scroll-up").css("transform", "scale(0)");
  }
});

// let count = 0;
// function other() {
//   if (count % 2 == 0) {
//     document.getElementById("meme-content").style.display = "block";
//   } else {
//     document.getElementById("meme-content").style.display = "none";
//   }
//   count++;
// }

let link = [
  "https://open.spotify.com/embed/track/4cOdK2wGLETKBW3PvgPWqT?utm_source=generator",
  "https://open.spotify.com/embed/track/5eFiEFtrq5dLgVHSZANUNl?utm_source=generator",
  "https://open.spotify.com/embed/track/02mYS2yrqvRj5Yx8kexNWN?utm_source=generator",
  "https://open.spotify.com/embed/track/5owW7rEIdQkbL39wt0iEv8?utm_source=generator",
  "https://open.spotify.com/embed/track/40GPRs5W6SAXCcyLNPw7O1?utm_source=generator",
  "https://open.spotify.com/embed/track/17XCf9FekS5B0ZzLmVhxos?utm_source=generator",
  "https://open.spotify.com/embed/track/6xHWf2SGMV8CM9F2Mg75uQ?utm_source=generator",
  "https://open.spotify.com/embed/track/1YdjBLwswLbmoK2abgdp3P?utm_source=generator",
  "https://open.spotify.com/embed/track/5EW05nJtJ9EcxDWPygONxV?utm_source=generator",
  "https://open.spotify.com/embed/track/2CGzoCsKVLsM6JLkIc6KVk?utm_source=generator",
];
let deskripsi = [
  "Never Gonna Give You Up adalah lagu pop tahun 1987 yang ditulis dan diproduksi oleh Stock Aitken Waterman untuk penyanyi Inggris Rick Astley. Lagu ini dirilis sebagai singel pertama Astley pada 27 Juni 1987 oleh RCA Records.",
  "Together Forever adalah lagu pop tahun 1987 yang ditulis dan diproduksi oleh Stock Aitken Waterman untuk penyanyi Inggris Rick Astley. Lagu ini dirilis sebagai singel kedua Astley pada 27 September 1987 oleh RCA Records.",
  "Cry for Help adalah lagu pop tahun 1987 yang ditulis dan diproduksi oleh Stock Aitken Waterman untuk penyanyi Inggris Rick Astley. Lagu ini dirilis sebagai singel ketiga Astley pada 27 Desember 1987 oleh RCA Records",
  "Whenever You Need Somebody adalah lagu pop tahun 1987 yang ditulis dan diproduksi oleh Stock Aitken Waterman untuk penyanyi Inggris Rick Astley. Lagu ini dirilis sebagai singel ketiga Astley pada 27 Desember 1987 oleh RCA Records.",
  "She Wants to Dance with Me adalah lagu yang ditulis dan direkam oleh Rick Astley pada tahun 1988. Ini adalah singel utama dari album studio keduanya, Hold Me in Your Arms. Lagu ini dirilis di Inggris pada 20 September 1988.",
  "Take Me to Your Heart adalah lagu pop tahun 1988 yang ditulis dan diproduksi oleh Stock Aitken Waterman untuk penyanyi Inggris Rick Astley. Lagu ini dirilis sebagai singel kelima Astley pada 27 Juni 1988 oleh RCA Records.",
  "Hold Me in Your Arms adalah lagu pop tahun 1988 yang ditulis dan diproduksi oleh Stock Aitken Waterman untuk penyanyi Inggris Rick Astley. Lagu ini dirilis sebagai singel keenam Astley pada 27 September 1988 oleh RCA Records.",
  "It Would Take a Strong Strong adalah lagu yang ditulis oleh Stock Aitken Waterman untuk album debut Rick Astley Kapanpun Anda Membutuhkan Seseorang. Mencapai No 1 di Kanada, No 10 di US Billboard Hot 100 dan No 1 selama satu minggu di chart Hot Adult Contemporary.",
  "Angels on My Side adalah lagu oleh penyanyi dan penulis lagu Inggris Rick Astley. Itu dirilis sebagai unduhan digital di Inggris pada 13 Mei 2016 sebagai single kedua dari album studio ketujuhnya 50 (2016). Lagu ini telah dipetakan di Belgia dan Hongaria. Lagu ini ditulis dan diproduksi oleh Astley dan dibawakan dengan kunci G minor",
  'My Arms Keep Missing You adalah sebuah lagu oleh Rick Astley yang dirilis pada tahun 1987 sebagai paruh kedua dari single A-side ganda. Sisi-A pertama adalah standar pop "When I Fall in Love". "My Arms Keep Missing You" dirilissebagai singel independen di Jerman dan mencapai nomor 6. ',
];
var modal = document.getElementById("modal");
var youtube = document.getElementById("spotify");
var desk = document.getElementById("modal-text");
function Modal(value) {
  modal.style.display = "block";
  youtube.src = link[value];
  desk.innerHTML = deskripsi[value];
}
function closeModal() {
  modal.style.display = "none";
  youtube.src = "";
  desk.innerHTML = "";
}

$(document).keydown(function (e) {
  if (e.keyCode == 70) {
    if ($("#audio").get(0).paused) {
      $("#audio").trigger("play");
    } else {
      $("#audio").trigger("pause");
    }
  }
});

setInterval(openPopup, 500);
setInterval(closePopup, 7000);

function openPopup() {
  $(".popup").css("top", "16vh");
}
function closePopup() {
  $(".popup").css("opacity", "0");
  setInterval(displayPopup, 100);
}
function displayPopup() {
  $(".popup").css("display", "none");
}

var isVisible = false;
$(document).ready(function () {
  $("#meme-button").click(function () {
    if (isVisible) {
      $("#meme-content").slideUp();
      isVisible = false;
    } else {
      $("#meme-content").slideDown();
      isVisible = true;
      $("html, body").animate({
        scrollTop: $("#meme").offset().top,
      });
    }
  });
});

$(".button-home").click(function () {
  $("html, body").animate({ scrollTop: 0 }, 100);
});

$(".button-about").click(function () {
  $("html, body").animate(
    {
      scrollTop: $("#about").offset().top - 110,
    },
    100
  );
});
$(".button-song").click(function () {
  $("html, body").animate(
    {
      scrollTop: $("#songs").offset().top - 65,
    },
    100
  );
});
$(".button-other").click(function () {
  $("html, body").animate(
    {
      scrollTop: $("#other").offset().top - 75,
    },
    100
  );
});
window.addEventListener("scroll", function () {
  if (window.pageYOffset > $("#about").offset().top / 2) {
    $(".about-image").css("transform", "translateX(0px)");
    $(".about-text").css("transform", "translateX(0px)");
  } else {
    $(".about-image").css("transform", "translateX(-500px)");
    $(".about-text").css("transform", "translateX(1000px)");
  }

  if (window.pageYOffset > $("#songs").offset().top - 200) {
    $(".card-groups-songs").css("transform", "translateY(0px)");
    $(".card-groups-songs").css("opacity", "1");
  } else {
    $(".card-groups-songs").css("transform", "translateY(50%)");
    $(".card-groups-songs").css("opacity", "0");
  }

  if (window.pageYOffset > $("#other").offset().top - 300) {
    $(".card-groups-other").css("opacity", "1");
  } else {
    $(".card-groups-other").css("opacity", "0");
  }
});
// $(window).scroll(function () {
//   var scroll = $("#about").offset().top - 110;
//   if (scroll > 0) {
//     $(".about-image").css("transform", "translateX(0)");
//   }
// });

// set opacity to 0
// When the user clicks f key, play the audio and when the user clicks again, pause the audio
// function playAudio() {
//   var x = document.getElementById("audio");
//   if (x.paused) {
//     x.play();
//   } else {
//     x.pause();
//   }
// }

// document.addEventListener("keydown", function (event) {
//   if (event.keyCode == 70) {
//     playAudio();
//   }
// });
