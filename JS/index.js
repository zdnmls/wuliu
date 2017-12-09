$(function(){
    //    轮播图
    let banner=document.querySelector(".banner-box");
    let tu=document.querySelectorAll(".banner-tu");
    let lunbo=document.querySelector(".lunbo");
    let list=document.querySelectorAll(".lunbo-list");
    let t;
    let num=0;
    t=setInterval(fn,2000);
    banner.onmouseenter=function () {
        clearInterval(t);
    }
    banner.onmouseleave=function () {
        t=setInterval(fn,2000);
    }
    function fn() {
        num++;
        if(num==tu.length){
            num=0;
        }
        tu.forEach(function (val,index) {
            val.style.display="none";
            list[index].style.background="";
        })
        tu[num].style.display="block";
        list[num].style.background="#abdab1";
    }
    for(let i=0;i<list.length;i++){
        list[i].onclick=function () {
            tu[i].style.display="block";
            tu[num].style.display="none";
            list[i].style.background="#abdab1";
            list[num].style.background="";
            num=i;
        }
    }
//公告
    $(".demo2").bootstrapNews({

        newsPerPage: 4,

        autoplay: true,

        pauseOnHover: true,

        navigation: false,

        direction: 'down',

        newsTickerInterval: 2500,

        onToDo: function () {
        }

    });
})





















