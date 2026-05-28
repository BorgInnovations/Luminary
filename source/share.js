//?utm_term=cloud
//single quote &#39; &apos
//double quote &#34; &quot
//open < &#60; &lt
//close > &#62; &gt
//slash / &#47; &sol
//space &#32

    function getShared(){

        const splitters = ["utm_term="];
        sharedURL=window.location.href
        sep = sharedURL.split(splitters)
        orign = sep[0]
        utm=sep[1]
        console.log(utm)
        document.getElementById("ide-body").innerHTML=utm

    }


