import Label_header from "./Component_Header/label_header";
import Notifications from "./Component_Header/Notifications";
import Profile_header from "./Component_Header/Profile_header";

export default function Header() {
  return (
    <header>
      <div className="flex">
        <div className="py-[16px] w-full">
          <Label_header className={"text-[16px] text-neutral-500"} />
        </div>
        <div className="flex justify-end w-full p-[16px]">
          <Notifications />
          <Profile_header name={"Regina"} />
        </div>
      </div>
    </header>
  );
}
