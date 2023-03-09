import { fontHeading } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import { Separator } from "@/components/ui/separator"

interface DocsPageHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  heading: string
  text?: string
}

export function DocsPageHeader({
  heading,
  text,
  className,
  children,
  ...props
}: DocsPageHeaderProps) {
  return (
    <>
      <div className={cn("space-y-4", className)} {...props}>
        <h1
          className={cn(
            "font-heading scroll-m-20 text-4xl font-bold lg:text-5xl",
            fontHeading.className
          )}
        >
          {heading}
        </h1>
        {text && (
          <p className="max-w-[95%] text-xl text-slate-700 dark:text-slate-400">
            {text}
          </p>
        )}
      </div>
      {children}
      <Separator className="my-4 md:my-6" />
    </>
  )
}
