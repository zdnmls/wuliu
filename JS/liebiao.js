$(function () {
    $(".dongtai-list").bootstrapNews({

        newsPerPage:7,

        autoplay: true,

        pauseOnHover: true,

        navigation: false,

        direction: 'down',

        newsTickerInterval: 2500,

        onToDo: function () {
        }

    });
})