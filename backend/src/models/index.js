import Anime from './Anime.js'
import Comment from './Comment.js'
import Genre from './Genre.js'
import Image from './Image.js'
import Like from './Like.js'
import ListAnime from './ListAnime.js'
import New from './New.js'
import Permiso from './Permiso.js'
import Post from './Post.js'
import Review from './Review.js'
import Rol from './Rol.js'
import User from './User.js'
import UserAnime from './User_Anime.js'
import Producer from './Producer.js'
import Studio from './Studio.js'
import ProducerAnime from './Producer_Anime.js'
import StudioAnime from './Studio_Anime.js'

//= ======= Relacion de User========

/* User.hasMany(Anime)// userId
Anime.belongsTo(User) */

User.belongsToMany(Anime, { through: UserAnime })
Anime.belongsToMany(User, { through: UserAnime })
Anime.hasMany(UserAnime)
UserAnime.belongsTo(Anime)

User.hasMany(Comment)// userId
Comment.belongsTo(User)

User.hasMany(ListAnime)// userId
ListAnime.belongsTo(User)

User.hasMany(Post)// userId
Post.belongsTo(User)

User.hasMany(New)// userId
New.belongsTo(User)

User.hasMany(Review)// userId
Review.belongsTo(User)

User.belongsTo(Rol)

User.belongsToMany(Permiso, { through: 'UsersPermiso' })
Permiso.belongsToMany(User, { through: 'UsersPermiso' })

//= ======= Relacion restante=========//

Anime.belongsToMany(ListAnime, { through: 'AnimeLista' })
ListAnime.belongsToMany(Anime, { through: 'AnimeLista' })

Anime.hasMany(Comment)// animeId
Comment.belongsTo(Anime)

Anime.belongsToMany(Studio, { through: StudioAnime })
Studio.belongsToMany(Anime, { through: StudioAnime })

Anime.belongsToMany(Producer, { through: ProducerAnime })
Producer.belongsToMany(Anime, { through: ProducerAnime })

Anime.belongsToMany(Genre, { through: 'AnimeGenre' })
Genre.belongsToMany(Anime, { through: 'AnimeGenre' })

Anime.hasMany(Review)// animeId
Review.belongsTo(Anime)

Anime.hasMany(Like)
Like.belongsTo(Anime)

//= =============================

Post.hasMany(Comment)// postId
Comment.belongsTo(Post)

Review.hasMany(Comment)// ReviewId
Comment.belongsTo(Review)

// Image Association

Anime.hasMany(Image, {
  foreignKey: 'entityId',
  constraints: false,
  as: 'animeImage',
  scope: {
    entityType: 'anime'
  }
})
Image.belongsTo(Anime, {
  foreignKey: 'entityId',
  constraints: false
})

User.hasMany(Image, {
  foreignKey: 'entityId',
  constraints: false,
  as: 'userImage',
  scope: {
    entityType: 'user'
  }
})
Image.belongsTo(User, {
  foreignKey: 'entityId',
  constraints: false
})

/* Post.hasMany(Image)
Image.belongsTo(Post)

New.hasMany(Image)
Image.belongsTo(New)
 */
