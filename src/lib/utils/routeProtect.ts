import { isLoggedIn } from './authentication';
export const routeProtect = (base: Record<string, unknown> = {}): Record<string, unknown> => {
	if (!isLoggedIn()) {
		return {
			redirect: '/app/auth',
			status: 303
		};
	}
	return base;
};
