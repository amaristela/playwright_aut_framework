import { test, expect } from '@playwright/test'
import { z } from 'zod'
import { server } from '../../../utils/mock/server'
import { http, HttpResponse } from 'msw'

const getEmployeesSchema = z.object({
    id: z.number(),
    firstName: z.string(),
    lastName: z.string(),
    dob: z.string(),
    email: z.string(),
})

const getEmployeeSchemaList = z.array(getEmployeesSchema)

test('GET /v1/employees - Success', async ({ request }) => {
    const response = await request.get('http://localhost:8887/api/v1/employees', {
        headers: {
            accept: '*/*',
        },
    })

    const result = getEmployeeSchemaList.safeParse(await response.json())

    expect(response.status()).toBe(200)

    if (!result.success) {
        console.error('Schema Validation Error: ', result.error.message.toString())
    }

    expect(result.success).toBe(true)
    console.log(result)
})

test.describe('Get /v1/employees - Unsuccesful Responses', () => {
    test.beforeEach(() => server.listen())
    test.afterEach(() => server.resetHandlers())
    test.afterAll(() => server.close)

    // Unauthorized 401
    test('GET /v1/employees - Unauthorized', async ({ request }) => {
        server.use(
            http.get('http://localhost:8887/api/v1/employees', () => {
                return HttpResponse.json({ data: '' }, { status: 401 })
            })
        )
        const response = await request.get('http://localhost:8887/api/v1/employees')
        expect(response.status()).toBe(401)
    })

    // Forbidden - 403
    test('GET /v1/employees - Forbidden', async ({ request }) => {
        server.use(
            http.get('http://localhost:8887/api/v1/employees', () => {
                return HttpResponse.json({ data: '' }, { status: 403 })
            })
        )
        const response = await request.get('http://localhost:8887/api/v1/employees')
        expect(response.status()).toBe(403)
    })

    // Internal Server Error
    test('GET /v1/employees - Internal Server Error', async ({ request }) => {
        server.use(
            http.get('http://localhost:8887/api/v1/employees', () => {
                return HttpResponse.json({ data: 'Internal Server Error' }, { status: 500 })
            })
        )
        const response = await request.get('http://localhost:8887/api/v1/employees')
        expect(response.status()).toBe(500)
    })

    // Not Found
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
