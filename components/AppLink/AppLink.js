import Link from 'next/link';

const AppLink = ({ text, href, ...rest }) => (
  <Link href={href} {...rest} passHref>
    <StyledAppLink href={href}>{text}</StyledAppLink>
  </Link>
);

export default AppLink;
