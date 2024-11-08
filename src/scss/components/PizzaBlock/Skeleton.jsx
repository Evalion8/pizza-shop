import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton = (props) => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={465}
    viewBox="0 0 280 465"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}>
    <circle cx="140" cy="130" r="109" />
    <rect x="0" y="309" rx="10" ry="10" width="280" height="88" />
    <rect x="-1" y="267" rx="10" ry="10" width="280" height="27" />
    <rect x="0" y="428" rx="4" ry="4" width="76" height="26" />
    <rect x="125" y="421" rx="25" ry="25" width="155" height="46" />
  </ContentLoader>
);

export default Skeleton;
