import styles from "./styles.module.scss";
import { MdSecurity } from "react-icons/md";
import { BsSuitHeart } from "react-icons/bs";
import { RiArrowDropDownFill, RiAccountPinCircleLine } from "react-icons/ri";
import Link from "next/link";
import { useState } from "react";
import UserMenu from "./UserMenu";

export default function Top() {
	const [loggedIn, setLoggedIn] = useState(false);
	return (
		<div className={styles.top}>
			<div className={styles.top__container}>
				<div></div>
				<ul className={styles.top__list}>
					<li>
						<img
							src="https://th.bing.com/th/id/R.5874f1ab19ea53dd695b4065fa3abe7c?rik=54xISEm8CT%2bGdA&pid=ImgRaw&r=0"
							alt=""
						/>
						<span>Maroco / uds</span>
					</li>
					<li>
						<MdSecurity />
						<span>Buyer Protection</span>
					</li>
					<li>
						<span>Customer Service</span>
					</li>
					<li>
						<span>Help</span>
					</li>
					<li>
						<BsSuitHeart />
						<span>
							<Link href="/profile/wishlist">Wishlist</Link>
						</span>
					</li>
					<li>
						{!loggedIn ? (
							<div className={styles.flex}>
								<RiAccountPinCircleLine />
								<span>Account</span>
								<RiArrowDropDownFill />
							</div>
						) : (
							<div className={styles.flex}>
								<img src="https://www.pngarts.com/files/5/User-Avatar-PNG-Transparent-Image.png" alt="" />
								<span>Joao</span>
								<RiArrowDropDownFill />
							</div>
						)}
						<UserMenu loggedIn={loggedIn} />
					</li>
				</ul>
			</div>
		</div>
	);
}
