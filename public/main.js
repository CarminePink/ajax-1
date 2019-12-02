let n = 2;
getPage.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", `/page${n}.json`);
  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status < 300) {
        const array = JSON.parse(request.response);
        array.forEach(element => {
          const li = document.createElement("li");
          li.textContent = element.id;
          xxx.appendChild(li);
        });
        n += 1;
      }
    }
  };
  request.send();
};
getJSON.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/5.json");
  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status < 300) {
        console.log(request.response);
        const object = JSON.parse(request.response);
        console.log(object);
        myName.textContent = object.name;
      }
    }
  };
  request.send();
};
getXML.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/4.xml");
  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status < 300) {
        const dom = request.responseXML;
        console.log(dom);
        const text = dom.getElementsByTagName("warning")[0].textContent;
        console.log(text.trim());
      }
    }
  };
  request.send();
};
getHTML.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/3.html");
  request.onload = () => {
    //创建div标签
    const div = document.createElement("div");
    //填写div标签的内容
    div.innerHTML = request.response;
    //将div标签插入到body中
    document.body.appendChild(div);
  };
  request.onerror = () => {};
  request.send();
};
getJS.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/2.js");
  request.onload = () => {
    //创建script标签
    const script = document.createElement("script");
    //填写script标签内容
    script.innerHTML = request.response;
    //将script标签插入body中
    document.body.appendChild(script);
  };
  request.onerror = () => {
    console.log("失败了");
  };
  request.send();
};
getCSS.onclick = () => {
  const request = new XMLHttpRequest(); //readyState = 0
  request.open("GET", "/style.css"); //readyState = 1
  request.onreadystatechange = () => {
    console.log(request.readyState);
    //虽然下载完成了 但是不知道下载的是成功的(2xx)还是失败的(4xx  5xx)
    if (request.readyState === 4) {
      console.log(request.status);
      if (request.status >= 200 && request.status < 300) {
        //创建style标签
        const style = document.createElement("style");
        //填写style标签内容
        style.innerHTML = request.response;
        //把style标签插入到head里
        document.head.appendChild(style);
      } else {
        alert("加载CSS失败");
      }
    }
  };

  request.send(); //readyState = 2
};
