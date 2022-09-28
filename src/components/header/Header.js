import './header.css';
import '../../main.css'
const Header = ({ active, setActive }) => {

	return (
		<header className="header">
			<div className="container">
				<div className="header__inner">
					<a href='#' className="header__logo">BestServices</a>
					<div className="header__login">
						<button className='header-btn button' onClick={() => setActive('login')}> Log In </button>
						<button className='header-btn button' onClick={() => setActive('signup')}> Sign Up </button>
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header;