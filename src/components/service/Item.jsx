function Item({ icon: Icon, text, desc }) {
  return (
    <div className="space-y-4 flex items-center gap-5  ">
      <span className="bg-primary-50 rounded-full inline-flex items-center justify-center w-[68px] h-[68px] ">
        <Icon />
      </span>
      <div className="w-4/5 space-y-2">
        <h4 className="font-medium text-sm md:text-base text-neutral-1300">
          {text}
        </h4>
        <p className="text-sm text-neutral-1000">{desc}</p>
      </div>
    </div>
  );
}

export default Item;
