import { AnchorHTMLAttributes } from "react";

export interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: React.ReactNode;
};

export function Link({ href, children, ...props }: LinkProps) {
  if (!href.startsWith('/')) throw new Error('Link href should start with /')
  href = import.meta.env.BASE_URL + href
  href = normalize(href)
  return <a href={href} {...props}>{children}</a>
};

function normalize(url: string) {
  return '/' + url.split('/').filter(Boolean).join('/')
};
