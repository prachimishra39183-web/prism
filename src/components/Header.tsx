
import { useState } from 'react';
import {
  ChevronDown, Menu, Search, ShoppingBag, UserRound, X
} from 'lucide-react';
import MegaMenu from './MegaMenu';
import type { MenuKey } from '../types';
import { Link } from "react-router-dom";

type HeaderProps = {
  cart: number;
};

export default function Header({ cart }: HeaderProps) {
  const [menu, setMenu] = useState<MenuKey>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <header className="header">
        <button
          className="mobile-menu"
          aria-label="Open menu"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X /> : <Menu />}
        </button>

       <Link className="wordmark" to="/" onClick={() => setMobileOpen(false)}>
  PRISM<span>JEWELLERY</span>
</Link>

        <nav className={mobileOpen ? 'main-nav mobile-visible' : 'main-nav'}>
          <Link to="/" onClick={() => setMobileOpen(false)}>
  Home
</Link>

          <button
            className={menu === 'jewellery' ? 'nav-trigger active' : 'nav-trigger'}
            onClick={() => setMenu(menu === 'jewellery' ? null : 'jewellery')}
          >
            Jewellery <ChevronDown size={15} />
          </button>

          <button
            className={menu === 'collection' ? 'nav-trigger active' : 'nav-trigger'}
            onClick={() => setMenu(menu === 'collection' ? null : 'collection')}
          >
            Collection <ChevronDown size={15} />
          </button>

          
<Link
  to="/about"
  onClick={() => setMobileOpen(false)}
>
  About us
</Link>
         <Link
  to="/impact"
  onClick={() => setMobileOpen(false)}
>
  Impact
</Link>
<Link
  to="/enquiry"
  className="nav-enquiry-link"
  onClick={() => {
    setMobileOpen(false);
    setMenu(null);
  }}
>
  Enquiry <span>↗</span>
</Link>
        </nav>
          
        <div className="header-actions">
          

          

        
        </div>
      </header>

      {menu && (
        <MegaMenu
          type={menu}
          onClose={() => setMenu(null)}
        />
      )}
    </>
  );
}
