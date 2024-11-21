
import Logo from "./Logo";
const Header = () => {
    return(
        <header className="flex justify-between items-center py-12 px-10">
            <Logo />
            <nav className="w-4/6 flex justify-between items-center">
                <ul className="flex gap-6 items-center cursor-pointer">
                    <li className="font-medium text-xl font-sans-serif px-5">All articles</li>
                    <li className="font-medium text-xl font-sans-serif border-light-grey border-r-2 border-l-2 px-6">Topics</li>
                    <li className="font-medium text-xl font-sans-serif px-5">Subscribe</li>
                </ul>
                <a href="" className="font-medium text-xl font-sans-serif">Write an Article</a>
            </nav>
        </header>
    )
}

export default Header;