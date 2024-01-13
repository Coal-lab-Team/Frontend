export type NavLinkProps = {
  id?: number;
  link: string;
  label: string;
};

export interface StateContextProps {
  showMobileMenu: boolean;
  setShowMobileMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

export type FooterLinkProps = {
  company: NavbarLinkProps[];
  resource: NavbarLinkProps[];
  followus: NavbarLinkProps[];
};
