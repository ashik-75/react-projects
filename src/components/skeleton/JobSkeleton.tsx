function Item() {
  return (
    <div className="w-[50%] h-40 bg-slate-600 p-5 rounded-lg animate-pulse space-y-4">
      <div className="bg-slate-700 h-4 w-1/4 rounded-full"></div>
      <div className="bg-slate-700 h-4 w-1/2 rounded-full"></div>
      <div className="bg-slate-700 h-4 w-3/4 rounded-full"></div>
      <div className="bg-slate-700 h-4 w-3/4 rounded-full"></div>
    </div>
  );
}

function JobSkeleton() {
  return (
    <div className="space-y-5">
      <Item />
      <Item />
      <Item />
      <Item />
    </div>
  );
}

export default JobSkeleton;
