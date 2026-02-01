import { setupServer } from 'msw/node'
import { http, HttpResponse } from 'msw'

export const server = setupServer(
    http.get('http://localhost:8887/api/v1/employees', () => {
        return HttpResponse.json({ data: '' }, { status: 401 })
    })
)
