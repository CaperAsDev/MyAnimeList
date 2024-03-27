import React from 'react'
import Section from '../../molecules/section'
import AnimeCard from '../../molecules/animeCard'
import TrailerCard from '../../molecules/trailerCard'
import ReviewCard from '../../molecules/reviewCard'

function Main () {
  const prueba = {
    id: 1,
    title: 'Demon Slayer y sus redonditos de ricota',
    image: 'https://i.ebayimg.com/images/g/ACIAAOSwdnphKthz/s-l1600.png',
    score: 9.7
  }
  const prueba2 = {
    id: 2,
    title: 'Demon Slayer y sus redonditos de ricota pasados por manteca',
    image: 'https://prod-printler-front-as.azurewebsites.net/media/photo/126779.jpg',
    score: 9.0
  }

  const prueba3 = {
    id: 3,
    title: 'Otro titulo falso de demostracion',
    image: 'https://m.media-amazon.com/images/I/81pO1o2RmPL.jpg',
    score: 5.6
  }
  const prueba4 = {
    id: 4,
    title: 'Y uno mas',
    image: 'https://www.ubuy.com.ph/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvODFzK2p4RTVLRUwuX0FDX1NMMTUwMF8uanBn.jpg'
  }

  const trailer1 = {
    isMarked: true,
    image: 'https://i.pinimg.com/736x/47/86/1f/47861f7751f9de3d707fbbfe9be2ee89.jpg',
    title: 'Your Name'
  }

  const trailer2 = {
    isMarked: false,
    image: 'https://i.vimeocdn.com/video/1202969703-1684f8af633728d1a328fc77cd61f80eadc703d4f02484022360b6dcf9eced7b-d_640x360.jpg',
    title: 'Un nombre mas largo para probar como queda'
  }
  const trailer3 = {
    isMarked: true,
    image: 'https://i.blogs.es/a76cc0/_media_demon_slayer_switch_840ad63e97/450_1000.jpeg',
    title: 'Ia tu sabe'
  }

  const trailer4 = {
    isMarked: false,
    image: 'https://imagenes.elpais.com/resizer/0alCgok56VuEcSE1s2BELjuqPUM=/1200x675/cloudfront-eu-central-1.images.arcpublishing.com/prisa/C7BFNTXVSVCLBGFZPKBJOV3WCY.jpg',
    title: 'Lorem ipsum sit dolor amet'
  }
  const reseña1 = {
    id: 1,
    idManga: 2,
    idUser: 2,
    content: 'una masa, lo mejor que lei en mi vida',
    date: '08-10-2023'
  }
  const reseña2 = {
    id: 2,
    idManga: 3,
    idUser: 1,
    content: 'una copia barata de friends',
    date: '10-02-2023'
  }
  const reseña3 = {
    id: 3,
    idManga: 2,
    idUser: 1,
    content: 'lorem ipsum sit dolor amet y unas palabras de relleno mas para ver el comportamiento en el overflow',
    date: '08-10-2023'
  }
  const reseña4 = {
    id: 4,
    idManga: 4,
    idUser: 2,
    content: '"romantica entonaba sus poemas mas brillantes susurrando al oido de mi representante: te amo, te odio, dame más"',
    date: '08-10-2023'
  }
  // const user1 = {
  //     id: 1,
  //     user: 'juanito',
  //     userImage: 'https://randomuser.me/api/portraits/men/79.jpg'
  // }
  // const user2 = {
  //     id: 2,
  //     user: 'carlita',
  //     userImage: 'https://randomuser.me/api/portraits/women/79.jpg'
  // }
  return (
    <main className='main'>
      <Section title="Tendencias de Anime">
        <div style={ { display: 'flex', flexDirection: 'row', gap: '10px' }}>
          <AnimeCard item={prueba}/>
          <AnimeCard item={prueba2}/>
          <AnimeCard item={prueba3}/>
          <AnimeCard item={prueba4}/>
        </div>
      </Section>
      <Section title="Tráilers populares">
        <div style={ { display: 'flex', flexDirection: 'row', gap: '10px' }}>
          <TrailerCard item= {trailer1}/>
          <TrailerCard item= {trailer2}/>
          <TrailerCard item= {trailer3}/>
          <TrailerCard item= {trailer4}/>
        </div>
      </Section>
      <Section title ="Reseñas  recientes de Manga">
        <div style={ { display: 'flex', flexDirection: 'row', gap: '10px' }}>
          <ReviewCard item={reseña1}/>
          <ReviewCard item={reseña2}/>
          <ReviewCard item={reseña3}/>
          <ReviewCard item={reseña4}/>
        </div>
      </Section>
    </main>
  )
}

export default Main
