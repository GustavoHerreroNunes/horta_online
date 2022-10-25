import Button from "../Button";

const ShoppingSummary = ({ totalPrice }) => (
    <form name="frmShoppingSummary" id="frmShoppingSummary" className="col-md-4 col-12 ps-3 py-4 d-flex flex-column justify-content-around border border-2 rounded">
        <h3>Resumo das Compras</h3>
        <label htmlFor="txbCoupon">Cupom de Desconto:</label>
        <input className="form-control" type="text" id="txbCoupon" name="txbCoupon" placeholder="" />
        <span className="fs-4 fw-700">Total: {totalPrice}</span> 
        <Button className="btn-secondaryColor">Finalizar Compra</Button>
    </form>
);

export default ShoppingSummary;
