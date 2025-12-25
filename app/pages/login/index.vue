<script lang="ts" setup>
const username = ref("");
const password = ref("");

const handleSubmit = async () => {
	// TODO: Implement login API call
	console.log("Login attempt:", { username: username.value, password: password.value });
};
</script>

<template>
	<div class="login-container">
		<div class="nes-container with-title is-centered is-dark">
			<p class="title">Login</p>
			
			<form @submit.prevent="handleSubmit" class="login-form">
				<div class="nes-field">
					<label for="username">Username</label>
					<input
						id="username"
						v-model="username"
						type="text"
						class="nes-input"
						placeholder="Enter your username"
						autocomplete="username"
						required
					/>
				</div>

				<div class="nes-field">
					<label for="password">Password</label>
					<input
						id="password"
						v-model="password"
						type="password"
						class="nes-input"
						placeholder="Enter your password"
						autocomplete="current-password"
						required
					/>
					<div class="forgot-password-link">
						<a href="/forgot-password" class="nes-text is-error">
							Forgot your password?
						</a>
					</div>
				</div>

				<div class="form-actions">
					<button type="submit" class="nes-btn is-primary">
						Login
					</button>
				</div>

				<div class="registration-helper">
					<p class="nes-text">
						Don't have an account?
						<a href="/register" class="nes-text is-primary">Create one here</a>
					</p>
				</div>
			</form>
		</div>
	</div>
</template>

<style scoped>
.login-container {
	display: flex;
	justify-content: center;
	align-items: center;
	min-height: calc(100vh - 120px);
	padding: 2rem 1rem;
}

.nes-container.with-title.is-centered {
	max-width: 500px;
	width: 100%;
	margin: 0 auto;
}

.login-form {
	display: flex;
	flex-direction: column;
	gap: 1.5rem;
	padding: 1rem 0;
}

.nes-field {
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
}

.nes-field label {
	font-size: 0.875rem;
	margin-bottom: 0.25rem;
}

.forgot-password-link {
	margin-top: 0.5rem;
	text-align: right;
}

.forgot-password-link a {
	font-size: 0.75rem;
	text-decoration: none;
	cursor: pointer;
}

.forgot-password-link a:hover {
	text-decoration: underline;
}

.form-actions {
	display: flex;
	justify-content: center;
	margin-top: 0.5rem;
}

.registration-helper {
	text-align: center;
	margin-top: 1rem;
	padding-top: 1rem;
	border-top: 2px solid var(--nes-border-color, #212529);
}

.registration-helper p {
	margin: 0;
	font-size: 0.875rem;
}

.registration-helper a {
	text-decoration: none;
	cursor: pointer;
}

.registration-helper a:hover {
	text-decoration: underline;
}

/* Responsive adjustments */
@media (max-width: 600px) {
	.login-container {
		padding: 1rem 0.5rem;
		min-height: calc(100vh - 80px);
	}

	.nes-container.with-title.is-centered {
		max-width: 100%;
	}

	.login-form {
		gap: 1.25rem;
	}
}

@media (min-width: 768px) {
	.nes-container.with-title.is-centered {
		max-width: 450px;
	}
}
</style>