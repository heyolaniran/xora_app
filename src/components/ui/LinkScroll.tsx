import { Link as LinkScroll } from "react-scroll";
export default function NavLink({ title }: { title: string }) {
  return (
    <LinkScroll className="base-bold text-p4 uppercase transition-colors duration-500 hover:text-p1 cursor-pointer max-lg:my-4 max-lg:h5">
      <div>{title}</div>
    </LinkScroll>
  );
}
