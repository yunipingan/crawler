var userInput = readline();var xhr = new XMLHttpRequest();
xhr.open("get", "https://club.jd.com/discussion/getProductPageImageCommentList.action?productId=11985075&page=1&pageSize=1000", true);
xhr.onreadystatechange=function(){
    if(xhr.readyState==4){
        var status=xhr.status;
        if(status>=200&&status<300){
            var imgList=JSON.parse(xhr.responseText).imgComments.imgList;
            var picUrl = "";
            for(var i in imgList) {
                picUrl+="http:"+imgList[i].imageUrl+'\n';
            }
            console.log(picUrl)

        }else{
            console.log(status);
        }
    }
}
xhr.send(null);
