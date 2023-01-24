function MovieDetailSkl() {
  return (
    <div className="h-[40vh] grid grid-cols-1 md:grid-cols-4 gap-5">
      <div className="bg-slate-100 h-[40vh] w-full rounded"></div>
      <div className="h-full md:col-span-3 space-y-4">
        <div className="h-8 bg-slate-100 w-[25%] rounded"></div>
        <div className="h-5 bg-slate-100 w-[75%] rounded"></div>
        <div className="h-8 bg-slate-100 w-[25%] rounded"></div>
        <div className="h-4 bg-slate-100 w-[75%] rounded"></div>
        <div className="h-4 bg-slate-100 w-[75%] rounded"></div>
        <div className="flex gap-5">
          <div className="h-40 bg-slate-100 w-full rounded"></div>
          <div className="h-40 bg-slate-100 w-full rounded"></div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetailSkl;
