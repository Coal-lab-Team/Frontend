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

export interface ModalProps {
  isOpen: boolean;
  closeModal: () => void;
  children?: React.ReactNode;
  closeOnOverlayClick?: boolean;
  className?: string;
  title?: string;
  size?: 'lg' | 'md' | 'sm' | 'xl' | 'xxl';
  isCloseIconPresent?: boolean;
  closeBtnClass?: string;
}