import styles from "./styles.module.scss";
import Link from "next/link";

export default function UserMenu({ loggedIn }) {
	return (
		<div className={styles.menu}>
			<h4>Welcome to Shoppay ! </h4>

			{loggedIn ? (
				<div className={styles.flex}>
					<img
						src="https://www.pngarts.com/files/5/User-Avatar-PNG-Transparent-Image.png"
						alt=""
						className={styles.menu__img}
					/>

					<div className={styles.col}>
						<span>Welcome Back,</span>
						<h3>M74JJ1</h3>
						<span>Sing Out</span>
					</div>
				</div>
			) : (
				<div className={styles.flex}>
					<button>Register</button>
					<button>Login</button>
				</div>
			)}
			<ul>
				<li>
					<Link href="/profile">Account</Link>
				</li>
				<li>
					<Link href="/profile/orders">My Orders</Link>
				</li>
				<li>
					<Link href="/profile/messages">Message Center</Link>
				</li>
				<li>
					<Link href="/profile/adress">Adrress</Link>
				</li>
				<li>
					<Link href="/profile/wishlist">Whishlist</Link>
				</li>
			</ul>
		</div>
	);
}
