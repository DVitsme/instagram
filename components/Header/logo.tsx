import Image from 'next/image';

const Logo = () => {
  return (
    <>
      <div className="cursor-pointer h-24 w-32 relative hidden lg:inline-grid">
        <Image src={'/images/Instagram-Logo.png'} alt="logo" fill={true} />
      </div>
      <div className="cursor-pointer h-12 w-12 relative lg:hidden my-4">
        <Image
          src={'/images/instagram-logo-mobile.png'}
          alt="logo-mobile"
          fill={true}
        />
      </div>
    </>
  );
};

export default Logo;
