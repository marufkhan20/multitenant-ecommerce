import { Category } from "@/payload-types";
import Link from "next/link";

interface IProps {
  category: Category;
  position: { top: number; left: number };
  isOpen: boolean;
}

export const SubcategoryMenu = ({ category, isOpen, position }: IProps) => {
  if (
    !isOpen ||
    !category.subcategories ||
    category.subcategories?.length === 0
  ) {
    return null;
  }

  const backgroundColor = category.color || "#f5f5f5";

  return (
    <div
      className="fixed z-100"
      style={{
        left: position.left,
        top: position.top,
      }}
    >
      {/* create invisiable bridge for solve hover issue */}
      <div className="h-3 w-60" />

      <div
        style={{ backgroundColor }}
        className="w-60 text-black rounded-md overflow-hidden border shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] -translate-y-[2px]"
      >
        <div>
          {category.subcategories?.map((subscategory: Category) => (
            <Link
              key={subscategory.id}
              href="/"
              className="w-full text-left p-4 hover:bg-black hover:text-white flex justify-between items-center underline font-medium"
            >
              {subscategory.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
