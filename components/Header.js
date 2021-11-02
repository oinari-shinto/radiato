import {HomeIcon} from "@heroicons/react/outline";
import Image from "next/image";
import HeaderItem from "./HeaderItem";

function Header() {
    return (
        <header className=''>
            <div>
                <HeaderItem title='HOME' Icon={HomeIcon}/>
            </div>
            <Image
                className="object-contain" 
                src='http://links.papareact.com/ua6'
                width={200}
                height={100}
                alt='logo radiato'
            />
        </header>
    )
}

export default Header
