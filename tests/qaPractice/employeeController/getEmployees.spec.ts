import { test, expect } from '@playwright/test'
import { server } from '../../../utils/mock/server'
import { getRequest } from '../../../utils/api/apiHelper'
import { http, HttpResponse } from 'msw'
import { getEmployeesSchema } from '../../../utils/api/apiSchema'
import { z } from 'zod'

test.describe('Get /v1/employees - Successful Response', () => {
    let apiResponse: { status: number; body: any; ok: boolean }

    test.beforeEach(async ({ request }) => {
        apiResponse = await getRequest(request, 'http://localhost:8887/api/v1/employees')
    })

    test('GET /v1/employees - Success Respone', async () => {
        expect(apiResponse.status).toBe(200)
    })

    test('GET /v1/employees - Validate Schema', async () => {
        const getEmployeeSchemaList = z.array(getEmployeesSchema)
        const result = getEmployeeSchemaList.safeParse(apiResponse.body)
        if (!result.success) {
            console.error('Schema Validation Error: ', result.error.message.toString())
        }
        expect(result).toBeTruthy()
    })
})

test.describe('Get /v1/employees - Unsuccesful Responses', () => {
    test.beforeEach(() => server.listen())
    test.afterEach(() => server.resetHandlers())
    test.afterAll(() => server.close)

    // Unauthorized - 401
    test('GET /v1/employees - Unauthorized', async ({ request }) => {
        server.use(
            http.get('http://localhost:8887/api/v1/employees', () => {
                return HttpResponse.json({ data: 'Unauthorized' }, { status: 401 })
            })
        )
        const response = await request.get('http://localhost:8887/api/v1/employees')
        expect(response.status()).toBe(401)
    })

    // Forbidden - 403
    test('GET /v1/employees - Forbidden', async ({ request }) => {
        server.use(
            http.get('http://localhost:8887/api/v1/employees', () => {
                return HttpResponse.json({ data: 'Forbidden' }, { status: 403 })
            })
        )
        const response = await request.get('http://localhost:8887/api/v1/employees')
        expect(response.status()).toBe(403)
    })

    // Internal Server Error - 500
    test('GET /v1/employees - Internal Server Error', async ({ request }) => {
        server.use(
            http.get('http://localhost:8887/api/v1/employees', () => {
                return HttpResponse.json({ data: 'Internal Server Error' }, { status: 500 })
            })
        )
        const response = await request.get('http://localhost:8887/api/v1/employees')
        expect(response.status()).toBe(500)
    })

    // Not Found - 404
    test('GET /v1/employees - Not Found', async ({ request }) => {
        server.use(
            http.get('http://localhost:8887/api/v1/employees', () => {
                return HttpResponse.json({ data: 'Not Found' }, { status: 404 })
            })
        )
        const response = await request.get('http://localhost:8887/api/v1/employees')
        expect(response.status()).toBe(404)
    })
})
