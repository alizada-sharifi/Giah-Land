import { MessageItem } from "../../components";
import { messages } from "../../data/messages";
import { DashboardLayout } from "../../layouts";

function Messages() {
  return (
    <DashboardLayout>
      <div className="grow">
        <h3 className="border-r-[3px] pr-2 border-primary font-medium text-base text-neutral-1300">
          پیام های دریافتی
        </h3>
        <div className="p-4 lg:border  border-neutral-300 rounded-2xl mt-10 space-y-10">
          {messages.map((message, index) => {
            return <MessageItem {...message} key={index} />;
          })}
        </div>
      </div>
    </DashboardLayout>
  );
}

export default Messages;
