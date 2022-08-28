import useWidth from "../hooks/useWidth";

type ImageProps = {
  src: string;
  visible?: boolean;
  onLoad?: () => void;
};

export default function Image({ src, visible = true, onLoad }: ImageProps) {
  const width = useWidth();

  return (
    <img
      src={src}
      alt="cat"
      width={width}
      className={`rounded-3xl ${visible ? "block" : "hidden"}`}
      onLoad={onLoad}
    />
  );
}
