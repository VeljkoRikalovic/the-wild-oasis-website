"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

function Filter() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const activeFilter = searchParams.get("capacity") ?? "all";

  function handleFilter(filter) {
    const params = new URLSearchParams(searchParams);
    params.set("capacity", filter);
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  }

  return (
    <div className="border border-primary-800 flex">
      <button
        className={`${
          activeFilter === "all" && "bg-primary-700"
        } sm:px-5 px-2 py-2 hover:bg-primary-700`}
        onClick={() => handleFilter("all")}
      >
        All cabins
      </button>
      <button
        className={`${
          activeFilter === "small" && "bg-primary-700"
        } sm:px-5 px-2 py-2 hover:bg-primary-700`}
        onClick={() => handleFilter("small")}
      >
        1&mdash;3 guests
      </button>
      <button
        className={`${
          activeFilter === "medium" && "bg-primary-700"
        } sm:px-5 px-2 py-2 hover:bg-primary-700`}
        onClick={() => handleFilter("medium")}
      >
        4&mdash;7 guests
      </button>
      <button
        className={`${
          activeFilter === "large" && "bg-primary-700"
        } sm:px-5 px-2 py-2 hover:bg-primary-700`}
        onClick={() => handleFilter("large")}
      >
        8&mdash;12 guests
      </button>
    </div>
  );
}

export default Filter;
