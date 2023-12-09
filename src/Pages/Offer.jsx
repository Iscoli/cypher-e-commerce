import OfferHeader from "../components/Parts/offerHeader/OfferHeader";

function Offer() {
  const title='Mega  Offer'
  return (
    <div>
      <OfferHeader title={title} />
      <h1>Offer</h1>
    </div>
  );
}

export default Offer;
