function MessageItem({ userImg, name, message }) {
  return (
    <div className="flex gap-4 items-center">
      <img src={userImg} alt="" className="size-16 rounded-full" />
      <div className="space-y-1">
        <h2 className="font-medium text-base text-neutral-1300">{name}</h2>
        <p className="text-neutral-900">{message}</p>
      </div>
    </div>
  );
}

export default MessageItem;
