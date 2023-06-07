// サイトの<title>取得
// 権限の関係で断念。自分でタイトルも入力する必要あり。
// fetch('')
// .then(Response => {
//     return Response.json()
// })
// .then(data => {
//     const p = document.createElement('p')
//     p.textContent = data.name
//     document.getElementById("title").appendChild(p)
// })
// .catch(e => {
//     console.log(e)
// })

function submitClick(){
    let UrlText = document.getElementById('UrlText');
    let Title = document.getElementById('Title');
    let result = document.getElementById('result');

    let str = UrlText.value;
    let arr = str.split("");
    console.log(UrlText.value);
    if(str.indexOf('.com')!=-1){
        let tmp = str.indexOf('.com');
        arr.splice(tmp+4);
    }
    else if(str.indexOf('.jp')!=-1){
        let tmp = str.indexOf('.jp');
        arr.splice(tmp+3);
    }
    else if(str.indexOf('.net')!=-1){
        let tmp = str.indexOf('.net');
        arr.splice(tmp+4);
    }
    else if(str.indexOf('.org')!=-1){
        let tmp = str.indexOf('.org');
        arr.splice(tmp+4);
    }
    let ans = arr.join("");
    // 参照日
    let d = new Date();
    let year = d.getFullYear();
    let month = d.getMonth() + 1;
    let day = d.getDate();
    let date = year + '年' + month + '月' + day + '日';

    result.innerText = ans +'「'+ Title.value +'」'+'、'+ UrlText.value+'('+ date +')';
}


let btn = document.getElementById('btn');
btn.addEventListener('click',submitClick);