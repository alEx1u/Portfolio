document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper(".mySwiper", {
    loop: false,
    slidesPerView: "auto",
    spaceBetween: 30,

    navigation: {
      nextEl: ".navig-right",
      prevEl: ".navig-left",
    },
  });

  const swiper2 = new Swiper(".mySwiper2", {
    loop: false,
    slidesPerView: "auto",
    simulateTouch: true,
    grabCursor: true,
    spaceBetween: 24,
  });

  const swiper3 = new Swiper(".mySwiper3", {
    loop: false,
    slidesPerView: "auto",
    simulateTouch: true,
    grabCursor: true,
    spaceBetween: 24,
  });

  const tabsBtn = document.querySelectorAll(".tabs_btn");
  const tabs = document.querySelectorAll(".tabs_item");

  tabsBtn.forEach(onTabClick);

  function onTabClick(item) {
    item.addEventListener("click", function () {
      let currentBtn = item;
      let tabId = currentBtn.getAttribute("data-tab");
      let currentTab = document.querySelector(tabId);

      tabs.forEach((el) => el.classList.remove("active"));
      tabsBtn.forEach((el) => el.classList.remove("active"));

      currentBtn.classList.add("active");
      currentTab.classList.add("active");
    });
  }

  svgs = document.querySelectorAll("svg");
  document.querySelectorAll(".acc-btn").forEach((el) => {
    el.addEventListener("click", () => {
      let content = el.nextElementSibling;
      let svg = el.querySelector(".svg");

      if (content.style.maxHeight) {
        document
          .querySelectorAll(".acc-content")
          .forEach((el) => (el.style.maxHeight = null));
        document
          .querySelectorAll(".acc-btn")
          .forEach((el) => el.classList.remove("active"));
      } else {
        document
          .querySelectorAll(".acc-content")
          .forEach((el) => (el.style.maxHeight = null));
        document
          .querySelectorAll(".acc-btn")
          .forEach((el) => el.classList.remove("active"));

        content.style.maxHeight = content.scrollHeight + "px";
        el.classList.add("active");
      }

      if (!svg.classList.contains("active")) {
        svgs.forEach((el) => el.classList.remove("active"));
        svg.classList.add("active");
        svg.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M19 11H5C4.73478 11 4.48043 11.1054 4.29289 11.2929C4.10536 11.4804 4 11.7348 4 12C4 12.2652 4.10536 12.5196 4.29289 12.7071C4.48043 12.8946 4.73478 13 5 13H19C19.2652 13 19.5196 12.8946 19.7071 12.7071C19.8946 12.5196 20 12.2652 20 12C20 11.7348 19.8946 11.4804 19.7071 11.2929C19.5196 11.1054 19.2652 11 19 11Z" fill="#F8FEFE"/>
      </svg>`;
      } else {
        svgs.forEach((el) => el.classList.remove("active"));
        svg.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M19 11H13V5C13 4.73478 12.8946 4.48043 12.7071 4.29289C12.5196 4.10536 12.2652 4 12 4C11.7348 4 11.4804 4.10536 11.2929 4.29289C11.1054 4.48043 11 4.73478 11 5V11H5C4.73478 11 4.48043 11.1054 4.29289 11.2929C4.10536 11.4804 4 11.7348 4 12C4 12.2652 4.10536 12.5196 4.29289 12.7071C4.48043 12.8946 4.73478 13 5 13H11V19C11 19.2652 11.1054 19.5196 11.2929 19.7071C11.4804 19.8946 11.7348 20 12 20C12.2652 20 12.5196 19.8946 12.7071 19.7071C12.8946 19.5196 13 19.2652 13 19V13H19C19.2652 13 19.5196 12.8946 19.7071 12.7071C19.8946 12.5196 20 12.2652 20 12C20 11.7348 19.8946 11.4804 19.7071 11.2929C19.5196 11.1054 19.2652 11 19 11Z" fill="#202932"/>
      </svg>
      `;
      }
    });
  });

  const tabsBtn2 = document.querySelectorAll(".tabs_item2");
  const balls = document.querySelectorAll(".balls_ball_wrapper");
  const tabs2 = document.querySelectorAll(".tabs2");

  tabsBtn2.forEach(onTabClick2);

  function onTabClick2(item) {
    item.addEventListener("click", function () {
      let currentBtn = item;
      let tabId = currentBtn.getAttribute("data-tab");

      let currentTab = document.querySelector("data-id", tabId);
      let num = Number(
        tabId
          .split("")
          .filter((el) => !isNaN(el))
          .join("")
      );

      tabsBtn2.forEach((el) => el.classList.remove("active"));
      balls.forEach((el) => el.classList.remove("active"));
      tabs2.forEach((el) => el.classList.remove("active"));

      currentBtn.classList.add("active");

      document.querySelector(tabId).classList.add("active");
      balls[num - 1].classList.add("active");
      // for (let i = 0; i < num; i++) {
      //   balls[i].classList.add("active");
      // }
    });
  }

  const headerWrap = document.querySelector(".header_wrapper");
  const burger = document.querySelector(".burger-btn");

  burger.addEventListener("click", function () {
    headerWrap.classList.toggle("active");
    burger.classList.toggle("active");
    //document.body.classList.toggle('lock');
  });

  const newsBtns = document.querySelectorAll(".tabs_btn_news");
  const newsTab = document.querySelectorAll(".tabs_item_news");

  newsBtns.forEach(function (el) {
    el.addEventListener("click", function () {
      let tabId = el.getAttribute("data-tab");

      newsBtns.forEach((item) => item.classList.remove("active"));
      newsTab.forEach((item) => item.classList.remove("active"));

      el.classList.add("active");
      document.querySelector(tabId).classList.add("active");
    });
  });

  $(".tasks_task .more").click(function () {
    event.preventDefault();
    if (!$(this).hasClass("opened")) {
      $(this).parents(".tasks_task").find(".dots").css("visibility", "hidden");
      $(this)
        .parents(".tasks_task")
        .find(".more-cont")
        .css("max-height", "600px");
      $(this).text("Свернуть");
      $(this).addClass("opened");
    } else {
      $(this).parents(".tasks_task").find(".dots").css("visibility", "visible");
      $(this).parents(".tasks_task").find(".more-cont").css("max-height", "0");
      $(this).text("Больше");
      $(this).removeClass("opened");
    }
  });

  Fancybox.bind("[data-fancybox]", {
    // Your custom options
  });
});

document.querySelectorAll(".title_acc_btn").forEach((el) => {
  el.addEventListener("click", () => {
    let content = el.nextElementSibling;
    if (content.style.maxHeight) {
      document
        .querySelectorAll(".title_acc_btn")
        .forEach((el) => el.classList.remove("active"));
      document
        .querySelectorAll(".title_acc_content")
        .forEach((el) => (el.style.maxHeight = null));
      el.classList.remove("active");
      content.style.maxHeight = null;
    } else {
      document
        .querySelectorAll(".title_acc_btn")
        .forEach((el) => el.classList.remove("active"));
      document
        .querySelectorAll(".title_acc_content")
        .forEach((el) => (el.style.maxHeight = null));
      el.classList.add("active");
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
});

if ($(".base").length > 0) {
  let e = $(".base"),
    t = e.offset().top,
    i = e.innerHeight(),
    o = $(".base .container"),
    a = o.width(),
    s = o.height(),
    n = $(".base .inner");
  let l;
  (l =
    $("body").width() > 1024
      ? n.innerWidth() + $(".base .up").first().innerWidth() / 2
      : n.innerWidth()),
    $("body").width() > 320
      ? (e.css("height", l - a + i),
        o.css("top", $(window).height() - s - 60),
        o.css("position", "sticky"),
        $(window).scroll(() => {
          const i =
            $(window).scrollTop() +
            $(window).height() -
            (t + parseInt(e.css("padding-top")) + s);
          let o,
            r = i;
          i >= 0
            ? ((o = (r / 100) * 4.6),
              i >= l - a && ((r = l - a), (o = (r / 100) * 4.6)))
            : (r = 0),
            n.css("transform", `translate3d(-${r}px, 0, 0)`),
            $(".base .video .img").each(function (e, t) {
              // $(t).css("transform", `translate3d(${-1 * o}px, 0, 0)`)
            });
        }),
        $(window).on("resize", function () {
          (t = e.offset().top),
            (i = e.innerHeight()),
            (a = o.width()),
            (s = o.height());

          (l =
            $("body").width() > 1024
              ? n.innerWidth() + $(".news .up").first().innerWidth() / 2
              : n.innerWidth()),
            o.css("top", $(window).height() - s - 60),
            console.log(t);
        }))
      : $(".base_item").css("width", $(".base .container").width());
}

if ($(".news").length > 0) {
  let news = $(".news"),
    top1 = news.offset().top,
    inv = news.innerHeight(),
    ont = $(".news .container"),
    aw = ont.width(),
    sh = ont.height(),
    ni = $(".news .inner");
  let le;
  (le =
    $("body").width() > 1024
      ? ni.innerWidth() + $(".news .up").first().innerWidth() / 2
      : ni.innerWidth()),
    $("body").width() > 320
      ? (news.css("height", le - aw + inv),
        ont.css("top", $(window).height() - sh - 60),
        ont.css("position", "sticky"),
        $(window).scroll(() => {
          const inv =
            $(window).scrollTop() +
            $(window).height() -
            (top1 + parseInt(news.css("padding-top")) + sh);
          let ont1,
            r1 = inv;
          inv >= 0
            ? ((ont1 = (r1 / 100) * 4.6),
              inv >= le - aw && ((r1 = le - aw), (ont1 = (r1 / 100) * 4.6)))
            : (r1 = 0),
            ni.css("transform", `translate3d(-${r1}px, 0, 0)`);
          // $(".news .video .img").each((function(e, t) {
          // $(t).css("transform", `translate3d(${-1 * o}px, 0, 0)`)
          // }
          // ))
        }),
        $(window).on("resize", function () {
          top1 = news.offset().top;
          inv = news.innerHeight();

          aw = ont.width();
          sh = ont.height();
          (le =
            $("body").width() > 1024
              ? ni.innerWidth() + $(".news .up").first().innerWidth() / 2
              : ni.innerWidth()),
            ont.css("top", $(window).height() - sh - 60),
            console.log(top1);
        }))
      : $(".base_item").css("width", $(".base .container").width());
}
$(document).ready(function () {
  $('input[type="tel"]').mask("+7(000) 000-00-00");

  SmoothScroll({
    // Время скролла 400 = 0.4 секунды
    animationTime: 800,
    // Размер шага в пикселях
    stepSize: 75,

    // Дополнительные настройки:

    // Ускорение
    accelerationDelta: 30,
    // Максимальное ускорение
    accelerationMax: 2,

    // Поддержка клавиатуры
    keyboardSupport: true,
    // Шаг скролла стрелками на клавиатуре в пикселях
    arrowScroll: 50,

    // Pulse (less tweakable)
    // ratio of "tail" to "acceleration"
    pulseAlgorithm: true,
    pulseScale: 4,
    pulseNormalize: 1,

    // Поддержка тачпада
    touchpadSupport: true,
  });
  new WOW().init();
});
