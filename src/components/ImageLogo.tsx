type ImageIcon = { src: string; name: string };

export default function ImageLogo({ src, name }: ImageIcon) {
    return (
        <img
            src={src}
            alt={`${name} Icon`}
            className="h-16 w-16 xl:w-27 xl:h-27 mx-auto"
        />
    );
}
