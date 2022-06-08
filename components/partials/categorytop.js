import { useRouter } from 'next/router';

export const CategoryComp = ({ data }) => {
  const router = useRouter();
  const categories = [{ slug: 'tat-ca', name: 'Tất cả danh mục' }, ...data];
  const onChange = (value) => {
    const slug = value.target.value;
    if (slug === 'tat-ca') router.push('/san-pham');
    else router.push('/san-pham/danh-muc/' + slug);
  };
  console.log('tricker ....');
  return (
    <div className="categories-list  ml-auto">
      <select name="" id="" className="mb-0" onChange={onChange} defaultValue={router.query.slug}>
        {categories.map((element, index) => {
          return (
            <option key={element.slug} value={element.slug}>
              {element.name}
            </option>
          );
        })}
      </select>
    </div>
  );
};
