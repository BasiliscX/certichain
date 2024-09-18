import Link from "next/link";

export const HMli: React.FC<HMliProps> = ({
  href = "/#",
  toggleMenu,
  mobileLinkClass,
  title,
}) => {
  return (
    <li className="pl-4">
      <Link href={href} onClick={toggleMenu} className={mobileLinkClass}>
        {title}
      </Link>
    </li>
  );
};

type HMliProps = {
  href?: string;
  toggleMenu: () => void;
  mobileLinkClass: string;
  title: string;
};
