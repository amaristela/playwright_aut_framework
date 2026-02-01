import { expect, request, test } from '@playwright/test'

test('API /billpay', async ({ request }) => {
    const response = await request.post(
        'https://parabank.parasoft.com/parabank/services/bank/billpay',
        {
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/xml',
            },
            params: {
                accountId: '131121',
                amount: 100,
            },
        }
    )

    expect(response.status()).toBe(200)
})
