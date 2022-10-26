import Link from 'next/link'
import Image from 'next/image'

export default function Logo({ className }) {
  return (
    <>
      <Link href="/">
        <img
          className={className}
          src="https://firebasestorage.googleapis.com/v0/b/upload-113c4.appspot.com/o/hacktiv8-1.png?alt=media&token=9bad961a-9110-49eb-9528-9c9e459235c0"
          alt="Logo-Hacktiv8-News"
        />
      </Link>
    </>
  );
}
