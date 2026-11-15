
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

        <a className="wordmark" href="#top">
          PRISM<span>JEWELLERY</span>
        </a>

        <nav className={mobileOpen ? 'main-nav mobile-visible' : 'main-nav'}>
          <a href="#top" onClick={() => setMobileOpen(false)}>Home</a>

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
        </nav>

        <div className="header-actions">
          

          

          <button aria-label="Cart">
            <ShoppingBag size={20} />
            <span>Cart</span>
            {cart > 0 && <b>{cart}</b>}
          </button>
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
