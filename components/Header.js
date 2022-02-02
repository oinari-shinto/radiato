import {BadgeCheckIcon, HomeIcon, LightningBoltIcon, MapIcon, SearchIcon, UserIcon} from "@heroicons/react/outline";
import Image from "next/image";
import HeaderItem from "./HeaderItem";

function Header() {
    return (
        <header className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto">
            <div className="flex flex-grow justify-evenly max-w-2xl">
                <HeaderItem title='Главная' Icon={HomeIcon}/>
                <HeaderItem title='Модели' Icon={LightningBoltIcon}/>
                <HeaderItem title='О Нас' Icon={BadgeCheckIcon}/>
                <HeaderItem title='Поиск' Icon={SearchIcon}/>
                <HeaderItem title='Контакты' Icon={MapIcon}/>
                <HeaderItem title='Кабинет' Icon={UserIcon}/>
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
