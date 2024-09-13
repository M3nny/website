
// this file is generated — do not edit it


/// <reference types="@sveltejs/kit" />

/**
 * Environment variables [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env`. Like [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), this module cannot be imported into client-side code. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://kit.svelte.dev/docs/configuration#env) (if configured).
 * 
 * _Unlike_ [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), the values exported from this module are statically injected into your bundle at build time, enabling optimisations like dead code elimination.
 * 
 * ```ts
 * import { API_KEY } from '$env/static/private';
 * ```
 * 
 * Note that all environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
 * 
 * ```
 * MY_FEATURE_FLAG=""
 * ```
 * 
 * You can override `.env` values from the command line like so:
 * 
 * ```bash
 * MY_FEATURE_FLAG="enabled" npm run dev
 * ```
 */
declare module '$env/static/private' {
	export const NODE_ENV: string;
	export const WSL_INTEROP: string;
	export const WAYLAND_DISPLAY: string;
	export const PATH: string;
	export const NAME: string;
	export const DENO_INSTALL: string;
	export const npm_lifecycle_event: string;
	export const WSL2_GUI_APPS_ENABLED: string;
	export const WT_SESSION: string;
	export const PNPM_HOME: string;
	export const PULSE_SERVER: string;
	export const HOME: string;
	export const LANG: string;
	export const npm_execpath: string;
	export const npm_package_json: string;
	export const BUN_INSTALL: string;
	export const SHELL: string;
	export const _: string;
	export const USER: string;
	export const npm_config_user_agent: string;
	export const LOGNAME: string;
	export const SHLVL: string;
	export const OLDPWD: string;
	export const npm_package_name: string;
	export const OPENAI_API_KEY: string;
	export const WSL_DISTRO_NAME: string;
	export const npm_node_execpath: string;
	export const LS_COLORS: string;
	export const LESSCLOSE: string;
	export const WT_PROFILE_ID: string;
	export const NODE_OPTIONS: string;
	export const HOSTTYPE: string;
	export const TERM: string;
	export const npm_config_local_prefix: string;
	export const XDG_RUNTIME_DIR: string;
	export const LESSOPEN: string;
	export const XDG_DATA_DIRS: string;
	export const npm_package_version: string;
	export const WSLENV: string;
	export const PWD: string;
	export const DISPLAY: string;
	export const NODE: string;
}

/**
 * Similar to [`$env/static/private`](https://kit.svelte.dev/docs/modules#$env-static-private), except that it only includes environment variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Values are replaced statically at build time.
 * 
 * ```ts
 * import { PUBLIC_BASE_URL } from '$env/static/public';
 * ```
 */
declare module '$env/static/public' {
	
}

/**
 * This module provides access to runtime environment variables, as defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/master/packages/adapter-node) (or running [`vite preview`](https://kit.svelte.dev/docs/cli)), this is equivalent to `process.env`. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://kit.svelte.dev/docs/configuration#env) (if configured).
 * 
 * This module cannot be imported into client-side code.
 * 
 * ```ts
 * import { env } from '$env/dynamic/private';
 * console.log(env.DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 * 
 * > In `dev`, `$env/dynamic` always includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.
 */
declare module '$env/dynamic/private' {
	export const env: {
		NODE_ENV: string;
		WSL_INTEROP: string;
		WAYLAND_DISPLAY: string;
		PATH: string;
		NAME: string;
		DENO_INSTALL: string;
		npm_lifecycle_event: string;
		WSL2_GUI_APPS_ENABLED: string;
		WT_SESSION: string;
		PNPM_HOME: string;
		PULSE_SERVER: string;
		HOME: string;
		LANG: string;
		npm_execpath: string;
		npm_package_json: string;
		BUN_INSTALL: string;
		SHELL: string;
		_: string;
		USER: string;
		npm_config_user_agent: string;
		LOGNAME: string;
		SHLVL: string;
		OLDPWD: string;
		npm_package_name: string;
		OPENAI_API_KEY: string;
		WSL_DISTRO_NAME: string;
		npm_node_execpath: string;
		LS_COLORS: string;
		LESSCLOSE: string;
		WT_PROFILE_ID: string;
		NODE_OPTIONS: string;
		HOSTTYPE: string;
		TERM: string;
		npm_config_local_prefix: string;
		XDG_RUNTIME_DIR: string;
		LESSOPEN: string;
		XDG_DATA_DIRS: string;
		npm_package_version: string;
		WSLENV: string;
		PWD: string;
		DISPLAY: string;
		NODE: string;
		[key: `PUBLIC_${string}`]: undefined;
		[key: `${string}`]: string | undefined;
	}
}

/**
 * Similar to [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), but only includes variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Note that public dynamic environment variables must all be sent from the server to the client, causing larger network requests — when possible, use `$env/static/public` instead.
 * 
 * ```ts
 * import { env } from '$env/dynamic/public';
 * console.log(env.PUBLIC_DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 */
declare module '$env/dynamic/public' {
	export const env: {
		[key: `PUBLIC_${string}`]: string | undefined;
	}
}
