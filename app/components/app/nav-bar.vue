<script lang="ts" setup>
const isMobileMenuOpen = ref(false);
const isAccountMenuOpen = ref(false);
const isScrolled = ref(false);

const toggleMobileMenu = () => {
	isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

const toggleAccountMenu = () => {
	isAccountMenuOpen.value = !isAccountMenuOpen.value;
};

const closeMenus = () => {
	isMobileMenuOpen.value = false;
	isAccountMenuOpen.value = false;
};

// Handle scroll detection
onMounted(() => {
	const handleScroll = () => {
		isScrolled.value = window.scrollY > 20;
	};

	window.addEventListener("scroll", handleScroll, { passive: true });
	handleScroll(); // Check initial state

	// Close menus when clicking outside
	document.addEventListener("click", (e) => {
		const target = e.target as HTMLElement;
		if (!target.closest(".navbar") && !target.closest(".account-menu")) {
			closeMenus();
		}
	});

	onUnmounted(() => {
		window.removeEventListener("scroll", handleScroll);
	});
});
</script>

<template>
	<nav class="navbar" :class="{ 'is-scrolled': isScrolled }">
		<div class="navbar-container">
			<div class="navbar-brand">
				<NuxtLink to="/" class="brand-link" @click="closeMenus">
					<span class="nes-text is-primary">Fantasy League</span>
				</NuxtLink>
			</div>

			<!-- Desktop Navigation -->
			<div class="navbar-menu desktop-menu">
				
				<div class="account-menu-wrapper">
					<button
						type="button"
						class="nes-btn"
						:class="{ 'is-disabled': isAccountMenuOpen }"
						@click="toggleAccountMenu"
					>
						Menu
					</button>
					
					<div
						v-if="isAccountMenuOpen"
						class="account-menu nes-container is-dark"
					>
						<NuxtLink
							to="/tournaments"
							class="menu-item"
							@click="closeMenus"
						>
							Tournaments
						</NuxtLink>
						<NuxtLink
							to="/squad"
							class="menu-item"
							@click="closeMenus"
						>
							My Squad
						</NuxtLink>
						<NuxtLink
							to="/leaderboard"
							class="menu-item"
							@click="closeMenus"
						>
							Leaderboard
						</NuxtLink>
						<NuxtLink
							to="/profile"
							class="menu-item"
							@click="closeMenus"
						>
							Profile
						</NuxtLink>
						<NuxtLink
							to="/rules"
							class="menu-item"
							@click="closeMenus"
						>
							Rules
						</NuxtLink>
						<div class="menu-divider"></div>
						<a
							href="#"
							class="menu-item is-error"
							@click.prevent="closeMenus"
						>
							Logout
						</a>
					</div>
				</div>
			</div>

			<!-- Mobile Menu Toggle -->
			<button
				type="button"
				class="nes-btn mobile-menu-toggle"
				@click="toggleMobileMenu"
			>
				{{ isMobileMenuOpen ? "✕" : "☰" }}
			</button>
		</div>

		<!-- Mobile Navigation -->
		<div
			v-if="isMobileMenuOpen"
			class="mobile-menu nes-container is-dark"
		>
			<NuxtLink
				to="/services"
				class="mobile-menu-item nes-btn"
				@click="closeMenus"
			>
				Services
			</NuxtLink>
			
			<div class="mobile-menu-section">
				<p class="mobile-menu-title">Account</p>
				<NuxtLink
					to="/tournaments"
					class="mobile-menu-item nes-btn is-primary"
					@click="closeMenus"
				>
					Tournaments
				</NuxtLink>
				<NuxtLink
					to="/squad"
					class="mobile-menu-item nes-btn is-primary"
					@click="closeMenus"
				>
					My Squad
				</NuxtLink>
				<NuxtLink
					to="/leaderboard"
					class="mobile-menu-item nes-btn is-primary"
					@click="closeMenus"
				>
					Leaderboard
				</NuxtLink>
				<NuxtLink
					to="/profile"
					class="mobile-menu-item nes-btn is-primary"
					@click="closeMenus"
				>
					Profile
				</NuxtLink>
				<NuxtLink
					to="/rules"
					class="mobile-menu-item nes-btn is-primary"
					@click="closeMenus"
				>
					Rules
				</NuxtLink>
				<a
					href="#"
					class="mobile-menu-item nes-btn is-error"
					@click.prevent="closeMenus"
				>
					Logout
				</a>
			</div>
		</div>
	</nav>
</template>

<style scoped>
.navbar {
	position: sticky;
	top: 0;
	z-index: 1000;
	background-color: #212529;
	border-bottom: 4px solid #fff;
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
	transition: all 0.3s ease;
}

.navbar.is-scrolled {
	box-shadow: 0 6px 12px rgba(0, 0, 0, 0.4);
}

.navbar-container {
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 1rem 1.5rem;
	max-width: 1200px;
	margin: 0 auto;
	gap: 1rem;
}

.navbar-brand {
	flex-shrink: 0;
}

.brand-link {
	text-decoration: none;
	font-size: 1.25rem;
	font-weight: bold;
}

.brand-link:hover {
	opacity: 0.8;
}

.navbar-menu {
	display: flex;
	align-items: center;
	gap: 1rem;
}

.desktop-menu {
	display: none;
}

.account-menu-wrapper {
	position: relative;
}

.account-menu {
	position: absolute;
	top: calc(100% + 0.5rem);
	right: 0;
	min-width: 200px;
	padding: 0.75rem;
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
	z-index: 1001;
}

.menu-item {
	display: block;
	padding: 0.5rem 0.75rem;
	text-decoration: none;
	color: #fff;
	font-size: 0.875rem;
	border: none;
	background: transparent;
	cursor: pointer;
	transition: background-color 0.2s;
}

.menu-item:hover {
	background-color: rgba(255, 255, 255, 0.1);
}

.menu-item.is-error {
	color: #dc3545;
}

.menu-divider {
	height: 2px;
	background-color: rgba(255, 255, 255, 0.2);
	margin: 0.5rem 0;
}

.mobile-menu-toggle {
	display: block;
	min-width: 60px;
}

.mobile-menu {
	display: block;
	margin: 0 1.5rem 1rem;
	padding: 1rem;
	border-top: 2px solid #fff;
}

.mobile-menu-section {
	margin-top: 1rem;
	padding-top: 1rem;
	border-top: 2px solid rgba(255, 255, 255, 0.2);
}

.mobile-menu-title {
	margin: 0 0 0.75rem 0;
	font-size: 0.875rem;
	color: #fff;
	opacity: 0.8;
}

.mobile-menu-item {
	display: block;
	width: 100%;
	margin-bottom: 0.5rem;
	text-align: left;
	text-decoration: none;
}

.mobile-menu-item:last-child {
	margin-bottom: 0;
}

/* Responsive Design */
@media (min-width: 768px) {
	.desktop-menu {
		display: flex;
	}

	.mobile-menu-toggle {
		display: none;
	}

	.mobile-menu {
		display: none;
	}

	.navbar-container {
		padding: 1rem 2rem;
	}
}

@media (max-width: 767px) {
	.navbar-container {
		padding: 0.75rem 1rem;
	}

	.brand-link {
		font-size: 1rem;
	}
}

/* Scroll behavior enhancement */
@media (prefers-reduced-motion: no-preference) {
	.navbar {
		transition: box-shadow 0.3s ease, border-width 0.3s ease;
	}
}
</style>