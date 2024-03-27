import React, { lazy, Suspense, useState } from 'react'
import HeroCommunity from '../../organisms/heroCommunity'
import InfoCommunity from '../../molecules/infoCommunity'
import ButtonsSectionsCommunity from '../../molecules/buttonsSectionsCommunity'
import SectionsCommunity from '../../organisms/sectionsCommunity'

// secciones que pueden llegar a tardar en cargar
const Reviews = lazy(() => import('../../organisms/reviewsCommunity/index'))
const Noticias = lazy(() => import('../../organisms/noticiasCommunity/index'))

const Community = () => {
  const [section, setSection] = useState(false)
  const [selectedSection, setSelectedSection] = useState(null)

  return (
    <section id='community'>
      <HeroCommunity />
      <InfoCommunity />
      <div className='sections-community'>
        <ButtonsSectionsCommunity section={section} setSection={setSection} setSelectedSection={setSelectedSection} />
        {
          section === true && selectedSection != null
            ? <Suspense fallback={<span>Loading...</span>} className='sections_community__section'>
              {
                selectedSection === 'noticias'
                  ? <Noticias/>
                  : <Reviews/>
              }
            </Suspense>
            : <SectionsCommunity />
        }
      </div>
    </section>
  )
}

export default Community
