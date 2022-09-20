const NutrionalInfo = ({productName, productPicture, nutricionalData}) => {

    return(
        <div class="modal" tabindex="-1" id="nutricionalInfo">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Nutrição - {productName}</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col">
                                    <img src={productPicture} placeholder={`Imagem do produto '${productName}'`} width='100%'/>
                                </div>
                                <div className="col">
                                    <ul>
                                        <li key="nutricionalData#1">
                                            <strong>Calorias:</strong>
                                            {nutricionalData.calories}
                                        </li>
                                        <li key="nutricionalData#2">
                                            <strong>Carboidratos:</strong>
                                            {nutricionalData.carbohydrates}
                                        </li>
                                        <li key="nutricionalData#3">
                                            <strong>Proteínas:</strong>
                                            {nutricionalData.protein}
                                        </li>
                                        <li key="nutricionalData#4">
                                            <strong>Gorduras:</strong>
                                            {nutricionalData.fat}
                                        </li>
                                        <li key="nutricionalData#5">
                                            <strong>Açúcar:</strong>
                                            {nutricionalData.sugar}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NutrionalInfo;