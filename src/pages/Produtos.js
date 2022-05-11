import React from "react";
import '../App.css' 
import Card from "./Card";
import Parametro from "./Parametro";


export default (props) => (
<>
<div className="div_pes">
    <h1> PRODUTOS </h1>
</div>
<div className="App">
        <Card >
            <Parametro 
            image_prod="https://www.sitiodamata.com.br/pub/media/catalog/product/cache/80281f1a4d89199560fc0837e49d13da/c/a/cactos_2nd.jpg"
            titulo="Cacto"
            subtitulo="Valor R$ 3.50"/>
        </Card>
        <Card >
            <Parametro 
            image_prod="https://res.cloudinary.com/studguacamole/image/upload/ghwc2o472tbet85tta7by8t5ci9m"
            titulo="Girassol"
            subtitulo="Valor R$ 12.50"/>
        </Card>
        <Card >
            <Parametro 
            image_prod="https://images.tcdn.com.br/img/img_prod/618025/arranjo_orquideas_artificiais_branca_no_vaso_de_vidro_formosinha_1271_1_d56bb1f15004c4f37c24e05e02ef92aa.jpg"
            titulo="Orquídeas"
            subtitulo="Valor R$ 32.00"/>
        </Card>
        <Card >
            <Parametro 
            image_prod="https://cdn.awsli.com.br/1000x1000/601/601454/produto/50173176/6b145905e2.jpg"
            titulo="Margarida"
            subtitulo="Valor R$ 18.90"/>
        </Card>

    </div>
</>
    );