import Link from 'next/link';
import { useRouter } from 'next/router';

export const CategoryComp = ({ data = [] }) => {
  const router = useRouter();
  return (
    <div className="categories-list">
      {data.map((element, index) => {
        return (
          <Link href={'/san-pham/danh-muc/' + element.slug} passHref>
            <div key={index} className={router.query.slug === element.slug ? 'active' : ''}>
              <span>{element.name}</span>
            </div>
          </Link>
        );
      })}
    </div>
  );
};
