function init() {
    const body = document.getElementsByTagName('body')[0]

    if(document.URL.includes("QNA.html") || document.URL.includes("pip.html")){
        body.style = 'height: auto';
    }
    else if(document.URL.includes("PrivacyPolicy.html")){
        body.style = 'height: auto';
        body.style = 'display: block';
    }
    else{
        body.style = 'height: 100vh';
        document.getElementById('videoSizeSel').getElementsByTagName('option')[1].selected = 'selected';
        const shuffle = document.getElementById('shuffle')
        shuffle.addEventListener("click", (event) => {
            body.style = 'flex-direction: row';
            document.getElementById('info').style = 'margin-left: 50px';
        })
        const rls = document.getElementById('rls')
        rls.addEventListener("click", (event) => {
            body.style = 'flex-direction: row';
        })
    }
}

init()