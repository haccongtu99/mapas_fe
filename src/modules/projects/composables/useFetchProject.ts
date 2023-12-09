import { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { projectQueryService } from '../services/hook'
import { TProject } from '../types'

const useFetchProject = () => {
  const { id } = useParams()
  // const { data, isFetching, refetch } = projectQueryService.useGetProjectById(id as string)
  const [projectInfos, setProjectInfos] = useState<TProject>({
    name: '123',
    client: 'Vinh',
    images: [],
    description: 'Mô tả Nguyễn Tân Vinh'
  })

  useEffect(() => {
    // refetch()
    console.log(id, 'id...')
  }, [])

  // useEffect(() => {
  //   if (!isFetching) {
  //     setProjectInfos(data);
  //   }
  // }, [isFetching])

  return { projectInfos }
}

export default useFetchProject
