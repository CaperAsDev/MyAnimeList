import React from 'react'
import TopItem from '../../atoms/topItem'
import LastReviewItem from '../../atoms/lastReviewItem'

const AsideCard = ({ title, format, array }) => {
  return (
    <aside className='aside-card'>
      <p className='aside-card_title'>{title}</p>
      <div className='aside-card_container'>
        {
          format === 'top' &&
                    array.map((item, index) => {
                      return <TopItem key={item.id} item={item} index={index + 1}/>
                    })
        }
        {
          format === 'last-review' &&
                    array.map(item => {
                      return <LastReviewItem key={item.id} item={item}/>
                    })
        }
      </div>
    </aside>
  )
}

export default AsideCard
