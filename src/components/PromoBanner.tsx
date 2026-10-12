type PromoBannerProps = {
  message: string;
};

function PromoBanner({ message }: PromoBannerProps) {
  return (
    <section className="bg-brand px-6 py-8 text-center text-white">
      <div className="mx-auto max-w-7xl">
        <p className="text-sm font-medium uppercase tracking-widest text-white/80">
          On sale right now!
        </p>

        <h2 className="mt-2 text-2xl font-bold md:text-3xl">{message}</h2>

        <p className="mt-2 text-sm text-white/90 md:text-base">
          Right now you can save money on your favorite products!
        </p>
      </div>
    </section>
  );
}

export default PromoBanner;
