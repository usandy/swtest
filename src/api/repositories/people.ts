import { AxiosResponse } from 'axios'

import { HttpClient } from 'api/client'
import { BASE_API_URL, API_NAMESPACES } from 'constants/api'
import { GetPeopleRequestParams, GetPeopleResponse, GetPersonRequestParams, GetPersonResponse } from 'types/api/people'

export class PeopleRepository extends HttpClient {
  protected readonly path: string

  constructor() {
    super(BASE_API_URL)

    this.path = API_NAMESPACES.people
  }

  public getPeople = async ({ name, page }: GetPeopleRequestParams) => {
    const { data } = await this.instance.get<GetPeopleRequestParams, AxiosResponse<GetPeopleResponse>>(this.path, {
      params: { search: name, page },
    })

    return data
  }

  public getPerson = async ({ id }: GetPersonRequestParams) => {
    const { data } = await this.instance.get<unknown, AxiosResponse<GetPersonResponse>>(`${this.path}/${id}`)

    return data
  }
}
