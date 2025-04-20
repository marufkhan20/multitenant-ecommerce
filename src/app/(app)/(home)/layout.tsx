import { Category } from "@/payload-types";
import configPromise from "@/payload.config";
import { getPayload } from "payload";
import { ReactNode } from "react";
import Footer from "./footer";
import { Navbar } from "./navbar";
import { SearchFilters } from "./search-filters";

const Layout = async ({ children }: { children: ReactNode }) => {
  const payload = await getPayload({
    config: configPromise,
  });

  const categories = await payload.find({
    collection: "categories",
    depth: 1,
    pagination: false,
    where: {
      parent: {
        exists: false,
      },
    },
  });

  const formattedCategories = categories.docs.map((category) => ({
    ...category,
    subcategories: (category.subcategories?.docs ?? []).map((subcategory) => ({
      ...(subcategory as Category),
      subcategories: undefined,
    })),
  }));

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <SearchFilters data={formattedCategories} />
      <div className="flex-1 bg-[#f4f4f0]">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
