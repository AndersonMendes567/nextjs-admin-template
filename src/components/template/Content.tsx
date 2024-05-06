import { ReactNode } from "react";

export default function Content({ children } : { children: ReactNode }) {

  return (
    <div className={`
      h-full mt-7 dark:text-gray-200
    `}>
      {children}
    </div>
  )
}