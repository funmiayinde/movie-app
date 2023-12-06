export const NotFound = () => {
  return (
    <>
      <div className="flex h-[calc(100dvh-0dvh)] w-full flex-col items-center justify-center bg-neutral-800">
        <h1 className="mb-16 text-9xl font-extrabold text-neutral-800">404</h1>
        <h2 className="text-3xl font-extrabold text-neutral-600">Not Found</h2>
        <h3 className="mt-t mb-10 text-base font-bold text-neutral-400">Oop! Can't find this movie</h3>
      </div>
    </>
  );
};
