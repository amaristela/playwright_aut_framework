import { APIRequestContext } from '@playwright/test'

/**
 * Generic GET request helper
 * @param request - The Playwright request fixture
 * @param endpoint - The endpoint path
 * @param params = Optional query parameters or variables
 */

export async function getRequest<T>(
    request: APIRequestContext,
    endpoint: string,
    params?: Record<string, string | number>
) {
    const response = await request.get(endpoint, {
        params: params,
        headers: {
            Accept: '*/*',
        },
    })

    return {
        status: response.status(),
        body: (await response.json()) as T,
        ok: response.ok(),
    }
}
