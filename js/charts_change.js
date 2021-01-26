// 老师线上行为检测charts

//课堂情况趋势图线形图
$(function() {
    // Line chart
    new Chart(document.getElementById("chartjs-line_online_class"), {
        type: "line",
        data: {
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            datasets: [{
                label: "Sales ($)",
                fill: true,
                backgroundColor: "transparent",
                borderColor: window.theme.primary,
                data: [2115, 1562, 1584, 1892, 1487, 2223, 2966, 2448, 2905, 3838, 2917, 3327]
            }, {
                label: "Orders",
                fill: true,
                backgroundColor: "transparent",
                borderColor: "#adb5bd",
                borderDash: [4, 4],
                data: [958, 724, 629, 883, 915, 1214, 1476, 1212, 1554, 2128, 1466, 1827]
            }]
        },
        options: {
            maintainAspectRatio: false,
            legend: {
                display: false
            },
            tooltips: {
                intersect: false
            },
            hover: {
                intersect: true
            },
            plugins: {
                filler: {
                    propagate: false
                }
            },
            scales: {
                xAxes: [{
                    reverse: true,
                    gridLines: {
                        color: "rgba(0,0,0,0.05)"
                    }
                }],
                yAxes: [{
                    ticks: {
                        stepSize: 500
                    },
                    display: true,
                    borderDash: [5, 5],
                    gridLines: {
                        color: "rgba(0,0,0,0)",
                        fontColor: "#fff"
                    }
                }]
            }
        }
    });
});
//bar
$(function() {
    // Bar chart
    new Chart(document.getElementById("chartjs-bar"), {
        type: "bar",
        data: {
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            datasets: [{
                label: "Last year",
                backgroundColor: window.theme.primary,
                borderColor: window.theme.primary,
                hoverBackgroundColor: window.theme.primary,
                hoverBorderColor: window.theme.primary,
                data: [54, 67, 41, 55, 62, 45, 55, 73, 60, 76, 48, 79],
                barPercentage: .75,
                categoryPercentage: .5
            }, {
                label: "This year",
                backgroundColor: "#dee2e6",
                borderColor: "#dee2e6",
                hoverBackgroundColor: "#dee2e6",
                hoverBorderColor: "#dee2e6",
                data: [69, 66, 24, 48, 52, 51, 44, 53, 62, 79, 51, 68],
                barPercentage: .75,
                categoryPercentage: .5
            }]
        },
        options: {
            maintainAspectRatio: false,
            legend: {
                display: false
            },
            scales: {
                yAxes: [{
                    gridLines: {
                        display: false
                    },
                    stacked: false,
                    ticks: {
                        stepSize: 20
                    }
                }],
                xAxes: [{
                    stacked: false,
                    gridLines: {
                        color: "transparent"
                    }
                }]
            }
        }
    });
});
//doughnut 班级行为检测分析
$(function() {
    // Doughnut chart
    new Chart(document.getElementById("chartjs-doughnut_online_class"), {
        type: "doughnut",
        data: {
            labels: ["Social", "Search Engines", "Direct", "Other"],
            datasets: [{
                data: [260, 125, 54, 146],
                backgroundColor: [
                    window.theme.primary,
                    window.theme.success,
                    window.theme.warning,
                    "#dee2e6"
                ],
                borderColor: "transparent"
            }]
        },
        options: {
            maintainAspectRatio: false,
            cutoutPercentage: 65,
            legend: {
                display: false
            }
        }
    });
});
//pie 学生总体情况扇形图
$(function() {
    // Pie chart
    new Chart(document.getElementById("chartjs-pie_online_class"), {
        type: "pie",
        data: {
            labels: ["Social", "Search Engines", "Direct", "Other"],
            datasets: [{
                data: [260, 125, 54, 146],
                backgroundColor: [
                    window.theme.primary,
                    window.theme.warning,
                    window.theme.danger,
                    "#dee2e6"
                ],
                borderColor: "transparent"
            }]
        },
        options: {
            maintainAspectRatio: false,
            legend: {
                display: false
            }
        }
    });
});
//doughnut 学生个人行为
$(function() {
    // Doughnut chart
    new Chart(document.getElementById("chartjs-doughnut_online_students"), {
        type: "doughnut",
        data: {
            labels: ["Social", "Search Engines", "Direct", "Other"],
            datasets: [{
                data: [260, 125, 54, 146],
                backgroundColor: [
                    window.theme.primary,
                    window.theme.success,
                    window.theme.warning,
                    "#dee2e6"
                ],
                borderColor: "transparent"
            }]
        },
        options: {
            maintainAspectRatio: false,
            cutoutPercentage: 65,
            legend: {
                display: false
            }
        }
    });
});


//老师线下行为检测charts

//课堂情况趋势图线形图
$(function() {
    // Line chart
    new Chart(document.getElementById("chartjs-line_offline"), {
        type: "line",
        data: {
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            datasets: [{
                label: "Sales ($)",
                fill: true,
                backgroundColor: "transparent",
                borderColor: window.theme.primary,
                data: [2115, 1562, 1584, 1892, 1487, 2223, 2966, 2448, 2905, 3838, 2917, 3327]
            }, {
                label: "Orders",
                fill: true,
                backgroundColor: "transparent",
                borderColor: "#adb5bd",
                borderDash: [4, 4],
                data: [958, 724, 629, 883, 915, 1214, 1476, 1212, 1554, 2128, 1466, 1827]
            }]
        },
        options: {
            maintainAspectRatio: false,
            legend: {
                display: false
            },
            tooltips: {
                intersect: false
            },
            hover: {
                intersect: true
            },
            plugins: {
                filler: {
                    propagate: false
                }
            },
            scales: {
                xAxes: [{
                    reverse: true,
                    gridLines: {
                        color: "rgba(0,0,0,0.05)"
                    }
                }],
                yAxes: [{
                    ticks: {
                        stepSize: 500
                    },
                    display: true,
                    borderDash: [5, 5],
                    gridLines: {
                        color: "rgba(0,0,0,0)",
                        fontColor: "#fff"
                    }
                }]
            }
        }
    });
});
//bar
$(function() {
    // Bar chart
    new Chart(document.getElementById("chartjs-bar"), {
        type: "bar",
        data: {
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            datasets: [{
                label: "Last year",
                backgroundColor: window.theme.primary,
                borderColor: window.theme.primary,
                hoverBackgroundColor: window.theme.primary,
                hoverBorderColor: window.theme.primary,
                data: [54, 67, 41, 55, 62, 45, 55, 73, 60, 76, 48, 79],
                barPercentage: .75,
                categoryPercentage: .5
            }, {
                label: "This year",
                backgroundColor: "#dee2e6",
                borderColor: "#dee2e6",
                hoverBackgroundColor: "#dee2e6",
                hoverBorderColor: "#dee2e6",
                data: [69, 66, 24, 48, 52, 51, 44, 53, 62, 79, 51, 68],
                barPercentage: .75,
                categoryPercentage: .5
            }]
        },
        options: {
            maintainAspectRatio: false,
            legend: {
                display: false
            },
            scales: {
                yAxes: [{
                    gridLines: {
                        display: false
                    },
                    stacked: false,
                    ticks: {
                        stepSize: 20
                    }
                }],
                xAxes: [{
                    stacked: false,
                    gridLines: {
                        color: "transparent"
                    }
                }]
            }
        }
    });
});
//doughnut 班级行为检测分析
$(function() {
    // Doughnut chart
    new Chart(document.getElementById("chartjs-doughnut_online_class"), {
        type: "doughnut",
        data: {
            labels: ["Social", "Search Engines", "Direct", "Other"],
            datasets: [{
                data: [260, 125, 54, 146],
                backgroundColor: [
                    window.theme.primary,
                    window.theme.success,
                    window.theme.warning,
                    "#dee2e6"
                ],
                borderColor: "transparent"
            }]
        },
        options: {
            maintainAspectRatio: false,
            cutoutPercentage: 65,
            legend: {
                display: false
            }
        }
    });
});
//pie 学生总体情况扇形图
$(function() {
    // Pie chart
    new Chart(document.getElementById("chartjs-pie_offline_class_study"), {
        type: "pie",
        data: {
            labels: ["Social", "Search Engines", "Direct", "Other"],
            datasets: [{
                data: [260, 125, 54, 146],
                backgroundColor: [
                    window.theme.primary,
                    window.theme.warning,
                    window.theme.danger,
                    "#dee2e6"
                ],
                borderColor: "transparent"
            }]
        },
        options: {
            maintainAspectRatio: false,
            legend: {
                display: false
            }
        }
    });
});
//课上 学习行为 班级行为检测分析
$(function() {
    // Pie chart
    new Chart(document.getElementById("chartjs-pie_offline_study"), {
        type: "pie",
        data: {
            labels: ["Social", "Search Engines", "Direct", "Other"],
            datasets: [{
                data: [260, 125, 54, 146],
                backgroundColor: [
                    window.theme.primary,
                    window.theme.warning,
                    window.theme.danger,
                    "#dee2e6"
                ],
                borderColor: "transparent"
            }]
        },
        options: {
            maintainAspectRatio: false,
            legend: {
                display: false
            }
        }
    });
});
//doughnut 学生个人行为
$(function() {
    // Doughnut chart
    new Chart(document.getElementById("chartjs-doughnut_offline_students"), {
        type: "doughnut",
        data: {
            labels: ["Social", "Search Engines", "Direct", "Other"],
            datasets: [{
                data: [260, 125, 54, 146],
                backgroundColor: [
                    window.theme.primary,
                    window.theme.success,
                    window.theme.warning,
                    "#dee2e6"
                ],
                borderColor: "transparent"
            }]
        },
        options: {
            maintainAspectRatio: false,
            cutoutPercentage: 65,
            legend: {
                display: false
            }
        }
    });
});

//危险行为检测
$(function() {
    // Doughnut chart
    new Chart(document.getElementById("chartjs-pie_danger"), {
        type: "doughnut",
        data: {
            labels: ["Social", "Search Engines", "Direct", "Other"],
            datasets: [{
                data: [260, 125, 54, 146],
                backgroundColor: [
                    window.theme.primary,
                    window.theme.success,
                    window.theme.warning,
                    "#dee2e6"
                ],
                borderColor: "transparent"
            }]
        },
        options: {
            maintainAspectRatio: false,
            cutoutPercentage: 65,
            legend: {
                display: false
            }
        }
    });
});

//学生端
$(function() {
    // Doughnut chart
    new Chart(document.getElementById("chartjs-doughnut_students"), {
        type: "doughnut",
        data: {
            labels: ["Social", "Search Engines", "Direct", "Other"],
            datasets: [{
                data: [260, 125, 54, 146],
                backgroundColor: [
                    window.theme.primary,
                    window.theme.success,
                    window.theme.warning,
                    "#dee2e6"
                ],
                borderColor: "transparent"
            }]
        },
        options: {
            maintainAspectRatio: false,
            cutoutPercentage: 65,
            legend: {
                display: false
            }
        }
    });
});
