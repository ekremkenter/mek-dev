import Image from "next/image";

interface AvatarProps {
  size?: number;
}
export default function Avatar({ size = 144 }: AvatarProps) {
  return (
    <div className="flex items-center justify-center">
      <Image
        src="/ekrem-kenter-profile.jpeg"
        alt="Picture of the Mustafa Ekrem Kenter"
        width={size}
        height={size}
        className="rounded-full"
      />
    </div>
  );
}
