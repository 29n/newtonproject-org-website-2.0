import React, { useState, useEffect } from 'react'
import { Pagination } from 'antd'
import { getRequest } from '../utils/axiosData'
import { newsEnvUrl } from '../utils/url'
import { arrDate } from '../utils/createTime'

function CommunityData() {
  const [data, setData] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPage, setTotalPage] = useState(1)

  useEffect(() => {
    const listUrl = newsEnvUrl + 'api/v1/press/list'
    getDate(listUrl)
  }, [])
  const getDate = (bannerUrl: any) => {
    const fetchData = async (bannerUrl: any) => {
      const res = await getRequest(bannerUrl)
      setData(res.data.result.data)
      setCurrentPage(res.data.result.page_id)
      setTotalPage(res.data.result.total_page)
    }
    fetchData(bannerUrl)
  }
  const onPageChange = (page: any) => {
    const detailUrl = newsEnvUrl + 'api/v1/press/list?page_id=' + page + '&page_size=10'
    getDate(detailUrl)
  }

  return (
    <div className={'container community-data'}>
      <ul className={'data-list'}>
        <li>
          <a href="" target="_blank">
            <h3>标题</h3>
            <p>日期d</p>
          </a>
        </li>
      </ul>
      <Pagination defaultCurrent={1} total={50} />
    </div>
  )
}
export default CommunityData
