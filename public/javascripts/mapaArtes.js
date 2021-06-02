window.onload = function () {
    loadArtes();
}

async function loadArtes() {

    let elemAside = document.getElementById("error");
        try {
            let artes = await $.ajax({
                url: "/api/artes",
                method: "get",
                dataType: "json"
            });
            //console.log(JSON.stringify(artes));
            //showArtes(artes);
            artesMarkers(artes);
        } catch (err) {
            console.log(err);
            elemAside.innerHTML = "<h1> Página não está disponível</h1>" +
                "<h2> Por favor tente mais tarde</h2>";
        }
}



async function showArtesMapa(arteID, arteNome, arteArtista, arteImagem) {
    let html = "";
    html+="<img src=" + arteImagem + ">"+
    "<p>Nome da arte: "+arteNome+"</p>"+
    "<p>Nome Artista: "+arteArtista+"</p>";
     

    document.getElementById("infoC").innerHTML = html;
    console.log(arteID, arteNome, arteArtista, arteImagem);
}
