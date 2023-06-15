import cx from "classnames";
import Link from "next/link";
import { v4 } from "uuid";

function BreadCrumb({ items, className }) {
  return (
    <nav className={cx("w-full rounded-md", className)}>
      <ol className="list-reset flex">
        {items?.map((item, index) => (
          <li key={v4()}>
            <Link
              href={item?.href}
              className={cx(
                " font-medium transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary active:text-primary",
                item?.isActive ? "text-black" : "text-primary"
              )}
            >
              {item.label}
            </Link>
            {index !== items.length - 1 && (
              <span className="mx-2 text-neutral-500 dark:text-neutral-400">
                {">"}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export default BreadCrumb;
