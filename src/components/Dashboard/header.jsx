import Label_header from "./Component_Header/label_header";
import Notifications from "./Component_Header/Notifications";
import Profile_header from "./Component_Header/Profile_header";

export default function Header() {
  return (
    <header>
      <div className="flex justify-between items-center py-[16px]">
        <div>
          <Label_header
            className={"text-[16px] font-nunito text-neutral-500 "}
          />
        </div>
        <div className="flex justify-end  ">
          <Notifications className={"px-4"} />
          <Profile_header name={"Regina"} />
        </div>
      </div>
    </header>
  );
}
