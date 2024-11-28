import { headerLogo } from '../assets/images';
import { hamburger } from '../assets/icons';
import {navLinks} from '../constants/index';

export const Nav = () => {
    return (
        <header className="padding-x py-8 absolute z-10 w-full">
            <nav className="flex justify-between items-center max-container">
                <a href="/">
                    <img src={headerLogo} alt="Logo" width={130} height={29} />
                </a>
                <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
                    {navLinks.map(i => (
                        <li key={i.label}>
                            <a href={i.href} className="font-monts errat leading-normal text-lg text-slate-gray">{i.label}</a>
                        </li>
                    ))}
                </ul>
                <div className="hidden max-lg:block">
                    <img src={hamburger} alt="hamburger" height={25} width={25} />
                </div>
            </nav>
        </header>
    )
}
