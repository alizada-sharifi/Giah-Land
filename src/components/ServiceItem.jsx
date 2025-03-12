function ServiceItem({ icon: Icon, text, desc }) {
  return (
    <div className="space-y-4 text-center md:w-1/4">
      <span className="bg-primary-50 rounded-full inline-block p-6 ">
        <Icon />
      </span>
      <h4 className="font-semibold text-base text-neutral-1200">{text}</h4>
      <p className="text-sm text-neutral-1000">{desc}</p>
    </div>
  );
}

export default ServiceItem;
