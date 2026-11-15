
import { Heart } from 'lucide-react';
import type { Product } from '../types';

type Props = {
  product: Product;
  liked: boolean;
  onLike: () => void;
  onAdd: () => void;
};

export default function ProductTile({
  product,
  liked,
  onLike,
  onAdd,
}: Props) {
  return (
    <article className="product-tile">
      <div className={`product-art art-${product.tone}`}>
        <span className="new-label">New arrival</span>

        <button
          className={liked ? 'heart liked' : 'heart'}
          onClick={onLike}
          aria-label="Add to wishlist"
        >
          <Heart
            size={18}
            fill={liked ? 'currentColor' : 'none'}
          />
        </button>

        <div className="mini-jewel" />

        <div className="image-note">
          Product visual
          <br />
          coming soon
        </div>
      </div>

      <div className="product-info">
        <div>
          <span>{product.category}</span>
          <h3>{product.name}</h3>
          <b>{product.code}</b>
        </div>

        <button
          className="add-button"
          onClick={onAdd}
          aria-label={`Add ${product.name} to cart`}
        >
          +
        </button>
      </div>
    </article>
  );
}
