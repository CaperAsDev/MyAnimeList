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

//= ======= Relacion de User========

User.hasMany(Anime)// userId
Anime.belongsTo(User)

User.hasMany(Comment)// userId
Comment.belongsTo(User)

User.hasMany(Genre)// userId
Genre.belongsTo(User)

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

Anime.hasMany(Genre)// animeId
Genre.belongsTo(Anime)

Anime.hasMany(Review)// animeId
Review.belongsTo(Anime)

Anime.hasMany(Genre)
Genre.belongsTo(Anime)

Anime.hasMany(Like)
Like.belongsTo(Anime)

//= =============================

Post.hasMany(Comment)// postId
Comment.belongsTo(Post)

Review.hasMany(Comment)// ReviewId
Comment.belongsTo(Review)

Anime.hasMany(Image)
Image.belongsTo(Anime)

Post.hasMany(Image)
Image.belongsTo(Post)

New.hasMany(Image)
Image.belongsTo(New)

User.hasMany(Image)
