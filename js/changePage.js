
currentPage = "indexPage";

function chpages_clicked(id_){
    if(id_ != currentPage){
        console.log("hele")
        document.getElementById(id_).setAttribute("style", "display:block");
        document.getElementById(currentPage).setAttribute("style", "display:none");
        currentPage = id_;
    }

}