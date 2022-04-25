import Link from 'next/link';

export default function Custom404() {
  return (
    <div>
      <img className="w-[45rem] mx-auto" src="/images/not-found.jpg" alt="" />

      <div className="text-center">
        <h2>
          Go to{' '}
          <Link href="/" passHref>
            <a className="text-blue-600">home page</a>
          </Link>
        </h2>
      </div>
    </div>
  );
}
