
import { Sparkles } from 'lucide-react';
import { jewelleryMenu, collections } from '../data/products';
import type { MenuKey } from '../types';

type Props = {
  type: Exclude<MenuKey, null>;
  onClose: () => void;
};

export default function MegaMenu({ type, onClose }: Props) {
  const isJewellery = type === 'jewellery';

  return (
    <div className="mega-menu" onMouseLeave={onClose}>
      <div className="mega-columns">
        {isJewellery
          ? Object.entries(jewelleryMenu).map(([title, links]) => (
              <div key={title}>
                <h3>{title}</h3>
                {links.map((link) => (
                  <a href="#shop" key={link} onClick={onClose}>
                    {link}
                  </a>
                ))}
              </div>
            ))
          : Array.from({ length: 5 }, (_, index) => (
              <div key={index}>
                <h3>
                  {['Signature', 'Diamond', 'Everyday', 'Occasion', 'The edits'][index]}
                </h3>

                {collections
                  .slice(index * 13, index * 13 + 13)
                  .map((link) => (
                    <a href="#shop" key={link} onClick={onClose}>
                      {link}
                    </a>
                  ))}
              </div>
            ))}
      </div>

      
    </div>
  );
}
