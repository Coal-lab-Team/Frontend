import { NavLinkProps, FooterLinkProps } from "../@types";

export const NAVLINKS: NavLinkProps[] = [
  { id: 1, link: "templates", label: "Templates" },
  { id: 1, link: "how-it-works", label: "How It Works" },
  { id: 1, link: "about-us", label: "About Us" },
];

export const FOOTER_LINKS: FooterLinkProps = {
  company: [
    { id: 1, link: "about?path=about", label: "about us" },
    { id: 2, link: "contacts?path=contacts", label: "contact us" },
    { id: 3, link: "career?path=career", label: "carreer" },
  ],
  resource: [
    { id: 1, link: "blog?path=blog", label: "blog" },
    { id: 2, link: "brand?path=brand", label: "brand guide" },
    { id: 3, link: "ebook?path=ebook", label: "ebook" },
    { id: 4, link: "articles?path=articles", label: "articles" },
  ],
  followus: [
    { id: 1, link: "", label: "dribbble" },
    { id: 2, link: "", label: "behance" },
    { id: 3, link: "", label: "instagram" },
  ],
};
