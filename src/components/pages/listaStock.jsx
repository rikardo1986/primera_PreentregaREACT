import { Card } from "../../common/card/Card";

export const ItemListContainer = () => {
  return (
    <div>
      <Card title="HP" price={1200} stock={5} />
      <Card title="Lenovo" price={500} stock={15} />
      <Card title="Dell " price={111} stock={51} />
      <Card title="Asus" price={300} stock={12} />
    </div>
  );
};
