import Link from 'next/link'

export default function NavCategory() {
    // const navActive = ({ isActive }) => {
    //   return {
    //     backgroundColor: isActive ? "#F67D12" : "#cbd5e1",
    //   };
    // };
  
    return (
      <div className="justify-center flex text-black text-xs">
        <Link
          className={`p-2 rounded-lg m-2 hover:bg-orange`}
          href="/indonesia"
        //   style={navActive}
        >
          Indonesia
        </Link>
        <Link
          className="p-2 rounded-lg m-2 hover:bg-orange"
          href="/covid"
        //   style={navActive}
        >
          Covid
        </Link>
        <Link
          className="p-2 rounded-lg m-2 hover:bg-orange"
          href="/programming"
        //   style={navActive}
        >
          Programming
        </Link>
      </div>
    );
  }