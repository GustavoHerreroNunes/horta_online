const FruityviceController = {

    requestXMLDocument: () => {
        FruityviceController.httpRequest = new XMLHttpRequest();
        if(!FruityviceController.httpRequest) console.log("Erro ao instânciar objeto HTTP");
        
        FruityviceController.httpRequest.onreadystatechange = () => {
            console.log("Ready State mudou");

            if(FruityviceController.httpRequest.readyState == XMLHttpRequest.DONE){
                if(FruityviceController.httpRequest.status === 200){
                    FruityviceController.responseHttp = JSON.parse(FruityviceController.httpRequest.responseText);
                    console.log(FruityviceController.responseHttp);
                }else{
                    console.log("Erro com a requisição HTTP - Status", FruityviceController.httpRequest.status);
                }
            }else{
                console.log("Requisição HTTP",(FruityviceController.httpRequest.readyState == 0) ? "não iniciada." : 
                                               (FruityviceController.httpRequest.readyState == 1) ? "aguardando, com conexão estabelecidada com o server." :
                                               (FruityviceController.httpRequest.readyState == 2) ? "recebida." :
                                               (FruityviceController.httpRequest.readyState == 3) ? "sendo processada." :
                                               "com estado desconhecido: " + FruityviceController.httpRequest.readyState);
            }
        }
        FruityviceController.httpRequest.open('GET', 'https://secure-meadow-21274.herokuapp.com/https://www.fruityvice.com/api/fruit/all');
        FruityviceController.httpRequest.send();
    },


};

export default FruityviceController;