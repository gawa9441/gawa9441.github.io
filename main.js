const myImage = document.querySelector("img");
/*この変数にHTML要素が格納されている
→JS内で特定のHTML要素(画像やボタンなど)を変数に関連づけて操作できている*/

myImage.onclick = (/*無名の関数：「onclick」によって関数が動く*/ ) => {
  const mySrc/*←変更できない変数宣言*/ = myImage.getAttribute("src");
  if (mySrc === "images/Mozilla_Firefox_logo_2013.png") {
    myImage.setAttribute/*"setAttribute"：HTML要素の属性設定・変更のためのメソッド*/("src", "images/Unofficial_JavaScript_logo_2.svg.png");
  } else {
    myImage.setAttribute("src", "images/Mozilla_Firefox_logo_2013.png");
  }
};

/*
・↑画像をクリックして、🦊ならjsに、そうでないなら🦊にする関数
・*/

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    /*setUserName()はユーザーに名前の入力をお願いできる */
    /*alert()ではなくprompt()という関数で出す*/
    const myName = prompt("あなたの名前を入力してください。");
    if (!myName) {
        setUserName();
      } else {
    localStorage.setItem("name", myName);
    /*入力した名前は「myName」という変数に保存される*/
    /*「localStorage」というブラウザの機能を使って保存される */
    myHeading.textContent = `Mozilla is cool ${myName} `;
  }
}
  if (!localStorage.getItem("name")) {/*「！」〜されなかった場合：否定演算子 */
    setUserName();
  } else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Mozilla is cool ${storedName}`;
  }/*最初に読み込んだ時にアプリを構造化するから「初期化コード」と呼ぶらしい*/

//ダイアログボックス：ユーザーとのやりとりになる部分

myButton.onclick = () => {
    setUserName();
  };  