import useSWR, { SWRResponse } from 'swr'
import { IOrder } from './models/order.model'

const endpoint = 'https://www.mocky.io/v2/5b15c4923100004a006f3c07'

const getOrders: () => Promise<IOrder> = () => fetch(endpoint).then((data) => data.json())

export const useOrders = (): SWRResponse<IOrder, any> =>
  useSWR<IOrder>(endpoint, () => getOrders(), { revalidateOnFocus: false, revalidateOnReconnect: true })
