import { useState, type ImgHTMLAttributes } from "react";

const ERROR_IMG_SRC =
  "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4OCIgaGVpZ2h0PSI4OCIgdmlld0JveD0iMCAwIDg4IDg4IiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIG9wYWNpdHk9Ii4zIj48cmVjdCB4PSIxNiIgeT0iMTYiIHdpZHRoPSI1NiIgaGVpZ2h0PSI1NiIgcng9IjYiIHN0cm9rZS13aWR0aD0iMyIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIgc3Ryb2tlLXdpZHRoPSIzIi8+PGNpcmNsZSBjeD0iNTMiIGN5PSIzNSIgcj0iNyIgc3Ryb2tlLXdpZHRoPSIzIi8+PC9zdmc+";

export function ImageWithFallback(props: ImgHTMLAttributes<HTMLImageElement>) {
  const [didError, setDidError] = useState(false);
  const { src, alt, style, className, ...rest } = props;

  return didError ? (
    <div className={`inline-block bg-gray-100 text-center align-middle ${className ?? ""}`} style={style}>
      <div className="flex h-full w-full items-center justify-center">
        <img src={ERROR_IMG_SRC} alt="Erro ao carregar a imagem" {...rest} data-original-url={src} />
      </div>
    </div>
  ) : (
    <img src={src} alt={alt} className={className} style={style} {...rest} onError={() => setDidError(true)} />
  );
}
