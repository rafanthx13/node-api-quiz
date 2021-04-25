export interface HttpResponse {
  statusCode: number
  body: any
}

export interface HttpRequest {
  body?: any // nem sempre vai ter o body
}
