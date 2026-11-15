
import { ArrowRight } from 'lucide-react';

type Props = {
  number: string;
  title: string;
  detail: string;
  tone: string;
};

export default function CollectionCard({
  number,
  title,
  detail,
  tone,
}: Props) {
  return (
    <article className={`collection-card card-${tone}`}>
      <div className="collection-art">
        <div className="collection-orbit" />
        <div className="collection-gem" />

        <div className="image-note">
          Collection visual
          <br />
          coming soon
        </div>
      </div>

      <div className="collection-meta">
        <span>{number}</span>

        <div>
          <h3>{title}</h3>
          <p>{detail}</p>
        </div>

        <ArrowRight size={18} />
      </div>
    </article>
  );
}
