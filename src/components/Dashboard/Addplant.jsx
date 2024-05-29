import Header_add_plant from "./Component_Add_plant/Component_Header/header_add_plant";
import List_Component_Step from "./Component_Add_plant/List_Component_Step";

export default function AddPlant() {
  return (
    <>
      <Header_add_plant pages={5} />
      <List_Component_Step pages={5} />
    </>
  );
}
