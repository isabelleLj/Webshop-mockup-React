type PromoBannerProps = {
  message: string;
};

function PromoBanner({ message }: PromoBannerProps) {
  return <div className="m-4 p-4 text-center font-bold">{message}</div>;
}

export default PromoBanner;
