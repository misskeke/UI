/** 项目: cloud-ui
 * 版本: v1.0.0
 * 作者: kezh,wyt
 * 日期: 2017/2/6.
 * 说明: 云纪管理端UI框架JS插件
 */

/**
 * tab切换
 */
$('#myTab a').click(function (e) {
    e.preventDefault();
    $(this).tab('show')
});

/**
 * 弹出框
 */
$(function () {
    $('[data-toggle="popover"]').popover()
});

/**
 * 下拉框
 */
var app = angular.module('cloudApp', ['ui.bootstrap']);

app.controller('DropdownController', function($scope) {
    $scope.items = [
        '第一项',
        '第二项',
        '第三项第三项第三项第三项第三项第三项第三项第三项第三项第三项第三项',
        '第四项',
        '第五项'
    ];

    //默认显示第一项的内容
    var sDefaultText = $scope.items[0];

    $(".js-select-text").text(sDefaultText);

    //显示为选中内容
    $scope.chooseItem = function(){
        var sText = this.item;

        $(".js-select-text").text(sText);
    };
});

/**
 * 分页
 */
app.controller('PaginationController', function($scope) {
    $scope.maxSize = 5;
    $scope.totalItems = 120;
    $scope.currentPage = 1;
});

/**
 * 日历
 */
app.controller('DatepickerPopupController', function($scope) {
    $scope.dateOptions = {
        startingDay: 1,
        showWeeks: false
    };

    $scope.popupStartTime = {
        opened: false
    };

    $scope.openStartTime = function() {
        $scope.popupStartTime.opened = true;
    };

    $scope.popupEndTime = {
        opened: false
    };

    $scope.openEndTime = function() {
        $scope.popupEndTime.opened = true;
    };
});

/**
 * 图表
 */
//曲线图
var ctx = $(".chart-area").get(0).getContext("2d");

window.myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: [
            "标签1",
            "标签2",
            "标签3",
            "标签4",
            "标签5"
        ],
        datasets : [{
            label: "曲线1",
            fill: false,
            lineTension: 0,
            borderColor: "rgba(75,192,192,1)",
            data: [67, 52, 27, 55, 80, 63],
            spanGaps: false
        },{
            label: "曲线2",
            fill: true,
            lineTension: 0.4,
            backgroundColor: "rgba(249, 79, 118,0.4)",
            borderColor: "rgba(249, 79, 118,1)",
            data: [28, 60, 42, 18, 96, 100]
        }]
    },
    options:{
        responsive: true,
        legend: {
            position: 'bottom'//图例位置
        },
        title: {
            display: true,
            text: ''
        },
        animation: {
            animateScale: true,
            animateRotate: true
        }
    }
});

//饼图
var ctx = $(".chart-area").get(1).getContext("2d");
window.myChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: [
            "标签1",
            "标签2",
            "标签3",
            "标签4",
            "标签5"
        ],
        datasets: [{
            label: "",
            data: [20, 15, 35,20,10],
            backgroundColor: [
                'rgb(80, 147, 225)',
                'rgb(80, 193, 78)',
                'rgb(159, 164, 180)',
                'rgb(249, 79, 118)',
                'rgb(255, 207, 118)'
            ],
            borderWidth: 0
        }]
    },
    options:{
        responsive: true,
        legend: {
            position: 'bottom'//图例位置
        },
        title: {
            display: true,
            text: ''
        },
        animation: {
            animateScale: true,
            animateRotate: true
        }
    }
});

//环形图
var ctx = $(".chart-area").get(2).getContext("2d");
window.myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: [
            "标签1",
            "标签2",
            "标签3",
            "标签4",
            "标签5"
        ],
        datasets: [{
            label: "",
            data: [20, 15, 35,20,10],
            backgroundColor: [
                'rgb(80, 147, 225)',
                'rgb(80, 193, 78)',
                'rgb(159, 164, 180)',
                'rgb(249, 79, 118)',
                'rgb(255, 207, 118)'
            ],
            borderWidth: 0
        }]
    },
    options:{
        responsive: true,
        legend: {
            position: 'bottom'//图例位置
        },
        title: {
            display: true,
            text: ''
        },
        animation: {
            animateScale: true,
            animateRotate: true
        }
    }
});

