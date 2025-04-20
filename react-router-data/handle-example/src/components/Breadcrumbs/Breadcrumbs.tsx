import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Fragment } from "react";
import { Link } from "react-router";

interface BreadcrumbLinkData {
  text: string;
  url: string;
}

interface BreadcrumbsProps {
  links: BreadcrumbLinkData[];
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ links }) => {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        {links.map((link, index) => (
          <Fragment key={index}>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to={link.url}>
                  {link.text}
                </Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            {index < links.length - 1 && (
              <BreadcrumbSeparator />
            )}
          </Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default Breadcrumbs;
