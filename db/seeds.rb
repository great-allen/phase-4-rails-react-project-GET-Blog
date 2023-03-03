

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
u1 = User.create!(username: 'user1', password: 'password',image_url:"https://i.pinimg.com/originals/fa/56/85/fa5685f79cc76a868d1d52cbc561d6fd.png",bio: Faker::Movies::StarWars.quote)
u2 = User.create!(username: 'user2', password: 'password',image_url:"https://images3.alphacoders.com/905/thumb-1920-905410.jpg",bio: Faker::Movies::StarWars.quote)
u3 = User.create!(username: 'user3', password: 'password',image_url:"https://play-lh.googleusercontent.com/5z9Pz6hivpD5QctfHl4KR5UOkQHbBifmaJvG-SVHbG7aWvybPawSJCNJHXVsTcLFXnQ",bio: Faker::Movies::StarWars.quote)
u4 = User.create!(username: 'user4', password: 'password',image_url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRVtgHw_yNlNQIfTrZ59-TuNv_NgiHTZRCBtsQYA3Jf7Bu56nLq6dglejLPp3T9lo2RUc&usqp=CAU",bio: Faker::Movies::StarWars.quote)
u5 = User.create!(username: 'user5', password: 'password',image_url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTpXsNalmyVtG44s1NvbaMbEveYyzE-blMcOweTsXTz8-omWZYygn64Oh2lNw2qoMbdVg&usqp=CAU",bio: Faker::Movies::StarWars.quote)
u6 = User.create!(username: 'user6', password: 'password',image_url:"https://m.media-amazon.com/images/I/717Hm5vNciL._AC_UF894,1000_QL80_.jpg",bio: Faker::Quote.famous_last_words)
u7 = User.create!(username: 'user7', password: 'password',image_url:"https://media.wired.com/photos/5933097ba30e27707249b60d/master/w_2560%2Cc_limit/legendofkorra.jpg",bio: Faker::Quote.famous_last_words)
u8 = User.create!(username: 'user8', password: 'password',image_url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPtcY3faNt3d0NbDf6iMzbeAhhfzXYJJgyww&usqp=CAU",bio: Faker::Quote.famous_last_words)
u9 = User.create!(username: 'user9', password: 'password',image_url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf8Cfq9X4qWFNB_7a2vB3MYVYgCebxkq_TCg&usqp=CAU",bio: Faker::Quote.famous_last_words)
u10 = User.create!(username: 'user10', password: 'password',image_url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQfhsmMFZoHjaM7rW2i9d2RdWOkdNDrapwWBL6TFWf6d3JYmtPQgY5n3ieHRdDPhIq0pI&usqp=CAU",bio: Faker::Quote.famous_last_words)
u11 = User.create!(username: 'user11', password: 'password',image_url:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/67bb5ee0-0fed-4bf5-8057-5e6dee7852ef/ddmuuxl-3d9271b2-623c-4e2b-b02c-b92789a20f3e.png/v1/fill/w_600,h_600,q_80,strp/my_winter_discord_profile_pic_by_rovingneophyte_ddmuuxl-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjAwIiwicGF0aCI6IlwvZlwvNjdiYjVlZTAtMGZlZC00YmY1LTgwNTctNWU2ZGVlNzg1MmVmXC9kZG11dXhsLTNkOTI3MWIyLTYyM2MtNGUyYi1iMDJjLWI5Mjc4OWEyMGYzZS5wbmciLCJ3aWR0aCI6Ijw9NjAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.9KytYKsxS13Vj7adSZzVr05I9Ba-EzQdM2kg4423sgw",bio: Faker::Quote.famous_last_words)
u12= User.create!(username: 'user12', password: 'password',image_url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkRJoutGJC_ivK2nGTalCV76z1mYcYUkXh7t_ut0ey6_0Ykubkaglqnu318HOmJeiV-mQ&usqp=CAU",bio: Faker::Quote.famous_last_words)
u13= User.create!(username: 'user13', password: 'password',image_url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTOpRgs71breABoDi9MFFMd_OHEBXS2IEL1Nx045fXhohiUUoA1IxMy_1TCoc3WkbEa_8&usqp=CAU",bio: Faker::Quote.famous_last_words)
u14= User.create!(username: 'user14', password: 'password',image_url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyAo_K03ExEcs5Hbp3ixX60JL5mLco7fRqEe3lN0luFK0wHpntIT9i6yoxyAENDx-Kgtw&usqp=CAU",bio: Faker::Quote.famous_last_words)
u15= User.create!(username: 'user15', password: 'password',image_url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFFFwvkHbgEzh6rYFkekHmBjrd0bHdVGIjgk7an_3_V2SGiw3-C-qR2obHdyTOsIb_n_k&usqp=CAU",bio: Faker::Quote.famous_last_words)
u16 = User.create!(username: 'user16', password: 'password',image_url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0xdoysoqsqvVka50OrRXi8plzQ8dc6X3ToA&usqp=CAU",bio: Faker::Quote.famous_last_words)
u17 = User.create!(username: 'user17', password: 'password',image_url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4kGtjXc8OIRXXDZCOFibaa1kkMuYaEQN_hq9cbmcA2DQFiLlnzEsMFx3SlpsbjINpxwM&usqp=CAU",bio: Faker::Quote.famous_last_words)
u18= User.create!(username: 'user18', password: 'password',image_url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAQ9MIEhbCHMn29YkgHp0a6UhdbVUP_v72HN8PkJmaE-dkZ3lH5c0XDxh0mb8wKq08q7s&usqp=CAU",bio: Faker::Quote.famous_last_words)
u19= User.create!(username: 'user19', password: 'password',image_url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl60i4kqhBsfPqPBmBOnjJdGixV0f_NJKFmg&usqp=CAU",bio: Faker::Quote.famous_last_words)
u20= User.create!(username: 'user20', password: 'password',image_url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiWamAvotG7AjDGs5DOpwFBnEmYl5uvEjjwU_GmP4WGeQ1UAPccyM8XQvVx9bDPtYzeF4&usqp=CAU",bio: Faker::Quote.famous_last_words)
u21= User.create!(username: 'user21', password: 'password',image_url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPDtvHIZ0WDJ8pITb3b78Z3O2v7G-eZ2cMwPKLK7jBtqI0MOoWK_MrZKvnXKN8zBqMImE&usqp=CAU",bio: Faker::Quote.famous_last_words)
u22= User.create!(username: 'user22', password: 'password',image_url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvHF7V047BN1Ab2M61Gso0le9qcvVVSk7SFQ&usqp=CAU",bio: Faker::Quote.famous_last_words)
u23= User.create!(username: 'user23', password: 'password',image_url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr-cQ0bT_RDEtGzmEXa-owkozGAqLMhVhmiA&usqp=CAU",bio: Faker::Quote.famous_last_words)
u24= User.create!(username: 'user24', password: 'password',image_url:"https://images.wallpapersden.com/image/download/anime-naruto-hd-2023-ai_bW5mbGmUmZqaraWkpJRoZ2WtaGdl.jpg",bio: Faker::Quote.famous_last_words)
u25= User.create!(username: 'user25', password: 'password',image_url:"https://images.wallpapersden.com/image/ws-crow-bakuman_69651.jpg",bio: Faker::Quote.famous_last_words)

# p1=Post.create(user_id: u1.id,title:Faker::Lorem.characters(number: 10),content:Faker::Lorem.paragraph,image_url:'https://m.media-amazon.com/images/M/MV5BMTY2ODQ3NjMyMl5BMl5BanBnXkFtZTcwODg0MTUzNA@@._V1_.jpg')
# p2=Post.create(user_id: u2.id,title:Faker::Lorem.characters(number: 10),content:Faker::Lorem.paragraph,image_url:'https://static.wikia.nocookie.net/jamescameronsavatar/images/e/e5/Avatar_TWoW_Neytiri_Textless_Poster.jpg/revision/latest?cb=20221125232909')
# p3=Post.create(user_id: u2.id,title:Faker::Lorem.characters(number: 10),content:Faker::Lorem.paragraph,image_url:'https://staticg.sportskeeda.com/editor/2022/11/a402f-16694231050443-1920.jpg')
# p4=Post.create(user_id: u3.id,title:Faker::Lorem.characters(number: 10),content:Faker::Lorem.paragraph,image_url:'https://i.pinimg.com/originals/fa/56/85/fa5685f79cc76a868d1d52cbc561d6fd.png')
# p5=Post.create(user_id: u1.id,title:Faker::Lorem.characters(number: 10),content:Faker::Lorem.paragraph,image_url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqmIAPf_KnI3yQJVBEmJRU45AyfogG437VNw&usqp=CAU')
# p6=Post.create(user_id: u3.id,title:Faker::Lorem.characters(number: 10),content:Faker::Lorem.paragraph,image_url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXubulSEOLZ6H4GggsyUoDXFUP5nIoAxsmZNz7etHicAsAf0Qi6ZKzpxwDLvi4pqsVWf0&usqp=CAU')
# p7=Post.create(user_id: u1.id,title:Faker::Lorem.characters(number: 10),content:Faker::Lorem.paragraph,image_url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTaydn4_dn1PAv2SfnXz3A7jBXSR_x0unaKQ&usqp=CAU')
# p8=Post.create(user_id: u3.id,title:Faker::Lorem.characters(number: 10),content:Faker::Lorem.paragraph,image_url:'https://images3.alphacoders.com/905/thumb-1920-905410.jpg')
# p9=Post.create(user_id: u1.id,title:Faker::Lorem.characters(number: 10),content:Faker::Lorem.paragraph,image_url:'https://m.media-amazon.com/images/M/MV5BMTY2ODQ3NjMyMl5BMl5BanBnXkFtZTcwODg0MTUzNA@@._V1_.jpg')
# p10=Post.create(user_id: u2.id,title:Faker::Lorem.characters(number: 10),content:Faker::Lorem.paragraph,image_url:'https://static.wikia.nocookie.net/jamescameronsavatar/images/e/e5/Avatar_TWoW_Neytiri_Textless_Poster.jpg/revision/latest?cb=20221125232909')
# p11=Post.create(user_id: u2.id,title:Faker::Lorem.characters(number: 10),content:Faker::Lorem.paragraph,image_url:'https://staticg.sportskeeda.com/editor/2022/11/a402f-16694231050443-1920.jpg')
# p12=Post.create(user_id: u3.id,title:Faker::Lorem.characters(number: 10),content:Faker::Lorem.paragraph,image_url:'https://i.pinimg.com/originals/fa/56/85/fa5685f79cc76a868d1d52cbc561d6fd.png')
# p13=Post.create(user_id: u1.id,title:Faker::Lorem.characters(number: 10),content:Faker::Lorem.paragraph,image_url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqmIAPf_KnI3yQJVBEmJRU45AyfogG437VNw&usqp=CAU')
# p14=Post.create(user_id: u3.id,title:Faker::Lorem.characters(number: 10),content:Faker::Lorem.paragraph,image_url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXubulSEOLZ6H4GggsyUoDXFUP5nIoAxsmZNz7etHicAsAf0Qi6ZKzpxwDLvi4pqsVWf0&usqp=CAU')
# p15=Post.create(user_id: u1.id,title:Faker::Lorem.characters(number: 10),content:Faker::Lorem.paragraph,image_url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTaydn4_dn1PAv2SfnXz3A7jBXSR_x0unaKQ&usqp=CAU')
# p16=Post.create(user_id: u3.id,title:Faker::Lorem.characters(number: 10),content:Faker::Lorem.paragraph,image_url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4iY6dz6wWdzxEMY2wWff5Rboh9pGOFzmcfg&usqp=CAU')
# p17=Post.create(user_id: u4.id,title:Faker::Lorem.characters(number: 10),content:Faker::Lorem.paragraph,image_url:'https://m.media-amazon.com/images/M/MV5BMTY2ODQ3NjMyMl5BMl5BanBnXkFtZTcwODg0MTUzNA@@._V1_.jpg')
# p18=Post.create(user_id: u5.id,title:Faker::Lorem.characters(number: 10),content:Faker::Lorem.paragraph,image_url:'https://static.wikia.nocookie.net/jamescameronsavatar/images/e/e5/Avatar_TWoW_Neytiri_Textless_Poster.jpg/revision/latest?cb=20221125232909')
# p19=Post.create(user_id: u6.id,title:Faker::Lorem.characters(number: 10),content:Faker::Lorem.paragraph,image_url:'https://staticg.sportskeeda.com/editor/2022/11/a402f-16694231050443-1920.jpg')
# p20=Post.create(user_id: u7.id,title:Faker::Lorem.characters(number: 10),content:Faker::Lorem.paragraph,image_url:'https://i.pinimg.com/originals/fa/56/85/fa5685f79cc76a868d1d52cbc561d6fd.png')
# p21=Post.create(user_id: u8.id,title:Faker::Lorem.characters(number: 10),content:Faker::Lorem.paragraph,image_url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqmIAPf_KnI3yQJVBEmJRU45AyfogG437VNw&usqp=CAU')
# p22=Post.create(user_id: u8.id,title:Faker::Lorem.characters(number: 10),content:Faker::Lorem.paragraph,image_url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXubulSEOLZ6H4GggsyUoDXFUP5nIoAxsmZNz7etHicAsAf0Qi6ZKzpxwDLvi4pqsVWf0&usqp=CAU')
# p23=Post.create(user_id: u9.id,title:Faker::Lorem.characters(number: 10),content:Faker::Lorem.paragraph,image_url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTaydn4_dn1PAv2SfnXz3A7jBXSR_x0unaKQ&usqp=CAU')
# p24=Post.create(user_id: u9.id,title:Faker::Lorem.characters(number: 10),content:Faker::Lorem.paragraph,image_url:'https://upload.wikimedia.org/wikipedia/en/f/fd/Droopy_dog.png')
# p25=Post.create(user_id: u10.id,title:Faker::Lorem.characters(number: 10),content:Faker::Lorem.paragraph,image_url:'https://m.media-amazon.com/images/M/MV5BMTY2ODQ3NjMyMl5BMl5BanBnXkFtZTcwODg0MTUzNA@@._V1_.jpg')
# p26=Post.create(user_id: u12.id,title:Faker::Lorem.characters(number: 10),content:Faker::Lorem.paragraph,image_url:'https://static.wikia.nocookie.net/jamescameronsavatar/images/e/e5/Avatar_TWoW_Neytiri_Textless_Poster.jpg/revision/latest?cb=20221125232909')
# p27=Post.create(user_id: u12.id,title:Faker::Lorem.characters(number: 10),content:Faker::Lorem.paragraph,image_url:'https://i2.wp.com/pediaa.com/wp-content/uploads/2016/02/Difference-Between-Anime-and-Cartoon-image-2.png?resize=450%2C415')
# p28=Post.create(user_id: u13.id,title:Faker::Lorem.characters(number: 10),content:Faker::Lorem.paragraph,image_url:'https://cn.i.cdn.ti-platform.com/cnapac/content/2017/showpage/ben-10/sa/showicon.png')
# p29=Post.create(user_id: u11.id,title:Faker::Lorem.characters(number: 10),content:Faker::Lorem.paragraph,image_url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqmIAPf_KnI3yQJVBEmJRU45AyfogG437VNw&usqp=CAU')
# p30=Post.create(user_id: u13.id,title:Faker::Lorem.characters(number: 10),content:Faker::Lorem.paragraph,image_url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXubulSEOLZ6H4GggsyUoDXFUP5nIoAxsmZNz7etHicAsAf0Qi6ZKzpxwDLvi4pqsVWf0&usqp=CAU')
# p31=Post.create(user_id: u14.id,title:Faker::Lorem.characters(number: 10),content:Faker::Lorem.paragraph,image_url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTaydn4_dn1PAv2SfnXz3A7jBXSR_x0unaKQ&usqp=CAU')
# p32=Post.create(user_id: u15.id,title:Faker::Lorem.characters(number: 10),content:Faker::Lorem.paragraph,image_url:'https://upload.wikimedia.org/wikipedia/en/thumb/f/fe/Speedy_Gonzales.svg/800px-Speedy_Gonzales.svg.png')
# p33=Post.create(user_id: u13.id,title:Faker::Lorem.characters(number: 10),content:Faker::Lorem.paragraph,image_url:'https://i.pinimg.com/originals/fa/56/85/fa5685f79cc76a868d1d52cbc561d6fd.png')
# p34=Post.create(user_id: u11.id,title:Faker::Lorem.characters(number: 10),content:Faker::Lorem.paragraph,image_url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqmIAPf_KnI3yQJVBEmJRU45AyfogG437VNw&usqp=CAU')
# p35=Post.create(user_id: u13.id,title:Faker::Lorem.characters(number: 10),content:Faker::Lorem.paragraph,image_url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXubulSEOLZ6H4GggsyUoDXFUP5nIoAxsmZNz7etHicAsAf0Qi6ZKzpxwDLvi4pqsVWf0&usqp=CAU')
# p36=Post.create(user_id: u14.id,title:Faker::Lorem.characters(number: 10),content:Faker::Lorem.paragraph,image_url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTaydn4_dn1PAv2SfnXz3A7jBXSR_x0unaKQ&usqp=CAU')
# p37=Post.create(user_id: u15.id,title:Faker::Lorem.characters(number: 10),content:Faker::Lorem.paragraph,image_url:'https://images3.alphacoders.com/905/thumb-1920-905410.jpg')
# p38=Post.create(user_id: u13.id,title:Faker::Lorem.characters(number: 10),content:Faker::Lorem.paragraph,image_url:'https://i.pinimg.com/originals/fa/56/85/fa5685f79cc76a868d1d52cbc561d6fd.png')
# p39=Post.create(user_id: u11.id,title:Faker::Lorem.characters(number: 10),content:Faker::Lorem.paragraph,image_url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqmIAPf_KnI3yQJVBEmJRU45AyfogG437VNw&usqp=CAU')
# p40=Post.create(user_id: u13.id,title:Faker::Lorem.characters(number: 10),content:Faker::Lorem.paragraph,image_url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXubulSEOLZ6H4GggsyUoDXFUP5nIoAxsmZNz7etHicAsAf0Qi6ZKzpxwDLvi4pqsVWf0&usqp=CAU')
# p41=Post.create(user_id: u14.id,title:Faker::Lorem.characters(number: 10),content:Faker::Lorem.paragraph,image_url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTaydn4_dn1PAv2SfnXz3A7jBXSR_x0unaKQ&usqp=CAU')
# p42=Post.create(user_id: u15.id,title:Faker::Lorem.characters(number: 10),content:Faker::Lorem.paragraph,image_url:'https://www.liveabout.com/thmb/pr4K8JNyAO84ZKWhePwfsDN-9xM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/bart-simpson-58fe1f773df78ca159b60cc2.jpg')
# p43=Post.create(user_id: u13.id,title:Faker::Lorem.characters(number: 10),content:Faker::Lorem.paragraph,image_url:'https://i.pinimg.com/originals/fa/56/85/fa5685f79cc76a868d1d52cbc561d6fd.png')
# p44=Post.create(user_id: u11.id,title:Faker::Lorem.characters(number: 10),content:Faker::Lorem.paragraph,image_url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqmIAPf_KnI3yQJVBEmJRU45AyfogG437VNw&usqp=CAU')
# p45=Post.create(user_id: u13.id,title:Faker::Lorem.characters(number: 10),content:Faker::Lorem.paragraph,image_url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXubulSEOLZ6H4GggsyUoDXFUP5nIoAxsmZNz7etHicAsAf0Qi6ZKzpxwDLvi4pqsVWf0&usqp=CAU')
# p46=Post.create(user_id: u14.id,title:Faker::Lorem.characters(number: 10),content:Faker::Lorem.paragraph,image_url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTaydn4_dn1PAv2SfnXz3A7jBXSR_x0unaKQ&usqp=CAU')
# p47=Post.create(user_id: u15.id,title:Faker::Lorem.characters(number: 10),content:Faker::Lorem.paragraph,image_url:'https://images.unsplash.com/photo-1637858868799-7f26a0640eb6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGNhcnRvb258ZW58MHx8MHx8&w=1000&q=80')
# p48=Post.create(user_id: u13.id,title:Faker::Lorem.characters(number: 10),content:Faker::Lorem.paragraph,image_url:'https://iheartcraftythings.com/wp-content/uploads/2022/01/6-24.jpg')
# p49=Post.create(user_id: u11.id,title:Faker::Lorem.characters(number: 10),content:Faker::Lorem.paragraph,image_url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqmIAPf_KnI3yQJVBEmJRU45AyfogG437VNw&usqp=CAU')
# p50=Post.create(user_id: u13.id,title:Faker::Lorem.characters(number: 10),content:Faker::Lorem.paragraph,image_url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXubulSEOLZ6H4GggsyUoDXFUP5nIoAxsmZNz7etHicAsAf0Qi6ZKzpxwDLvi4pqsVWf0&usqp=CAU')
# p51=Post.create(user_id: u14.id,title:Faker::Lorem.characters(number: 10),content:Faker::Lorem.paragraph,image_url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTaydn4_dn1PAv2SfnXz3A7jBXSR_x0unaKQ&usqp=CAU')
# p52=Post.create(user_id: u15.id,title:Faker::Lorem.characters(number: 10),content:Faker::Lorem.paragraph,image_url:'https://static.vecteezy.com/system/resources/previews/004/226/762/original/panda-cartoon-cute-say-hello-panda-animals-illustration-vector.jpg')
# p53=Post.create(user_id: u13.id,title:Faker::Lorem.characters(number: 10),content:Faker::Lorem.paragraph,image_url:'https://i.pinimg.com/originals/fa/56/85/fa5685f79cc76a868d1d52cbc561d6fd.png')
# p54=Post.create(user_id: u11.id,title:Faker::Lorem.characters(number: 10),content:Faker::Lorem.paragraph,image_url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqmIAPf_KnI3yQJVBEmJRU45AyfogG437VNw&usqp=CAU')
# p55=Post.create(user_id: u13.id,title:Faker::Lorem.characters(number: 10),content:Faker::Lorem.paragraph,image_url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXubulSEOLZ6H4GggsyUoDXFUP5nIoAxsmZNz7etHicAsAf0Qi6ZKzpxwDLvi4pqsVWf0&usqp=CAU')
# p56=Post.create(user_id: u14.id,title:Faker::Lorem.characters(number: 10),content:Faker::Lorem.paragraph,image_url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTaydn4_dn1PAv2SfnXz3A7jBXSR_x0unaKQ&usqp=CAU')
# p57=Post.create(user_id: u15.id,title:Faker::Lorem.characters(number: 10),content:Faker::Lorem.paragraph,image_url:'https://cn.i.cdn.ti-platform.com/content/2167/we-baby-bears/showpage/fr/webabybears-icon.8db091e9.8db091e9.png')
# p58=Post.create(user_id: u13.id,title:Faker::Lorem.characters(number: 10),content:Faker::Lorem.paragraph,image_url:'https://i.pinimg.com/originals/fa/56/85/fa5685f79cc76a868d1d52cbc561d6fd.png')
# p59=Post.create(user_id: u11.id,title:Faker::Lorem.characters(number: 10),content:Faker::Lorem.paragraph,image_url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqmIAPf_KnI3yQJVBEmJRU45AyfogG437VNw&usqp=CAU')
# p60=Post.create(user_id: u13.id,title:Faker::Lorem.characters(number: 10),content:Faker::Lorem.paragraph,image_url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXubulSEOLZ6H4GggsyUoDXFUP5nIoAxsmZNz7etHicAsAf0Qi6ZKzpxwDLvi4pqsVWf0&usqp=CAU')
# p61=Post.create(user_id: u14.id,title:Faker::Lorem.characters(number: 10),content:Faker::Lorem.paragraph,image_url:'https://cn.i.cdn.ti-platform.com/content/20/the-amazing-world-of-gumball/showpage/za/gumball-carousel.a94b8e60.png')
# p62=Post.create(user_id: u15.id,title:Faker::Lorem.characters(number: 10),content:Faker::Lorem.paragraph,image_url:'https://i.guim.co.uk/img/media/c8b1d78883dfbe7cd3f112495941ebc0b25d2265/256_0_3840_2304/master/3840.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=3ac0dfad4c2edc23c843d59f1ec08cc8')
# p63=Post.create(user_id: u13.id,title:Faker::Lorem.characters(number: 10),content:Faker::Lorem.paragraph,image_url:'https://i.pinimg.com/originals/fa/56/85/fa5685f79cc76a868d1d52cbc561d6fd.png')
# p64=Post.create(user_id: u11.id,title:Faker::Lorem.characters(number: 10),content:Faker::Lorem.paragraph,image_url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqmIAPf_KnI3yQJVBEmJRU45AyfogG437VNw&usqp=CAU')
# p65=Post.create(user_id: u13.id,title:Faker::Lorem.characters(number: 10),content:Faker::Lorem.paragraph,image_url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXubulSEOLZ6H4GggsyUoDXFUP5nIoAxsmZNz7etHicAsAf0Qi6ZKzpxwDLvi4pqsVWf0&usqp=CAU')
# p66=Post.create(user_id: u14.id,title:Faker::Lorem.characters(number: 10),content:Faker::Lorem.paragraph,image_url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTaydn4_dn1PAv2SfnXz3A7jBXSR_x0unaKQ&usqp=CAU')
# p67=Post.create(user_id: u15.id,title:Faker::Lorem.characters(number: 10),content:Faker::Lorem.paragraph,image_url:'https://images3.alphacoders.com/905/thumb-1920-905410.jpg')
# p68=Post.create(user_id: u13.id,title:Faker::Lorem.characters(number: 10),content:Faker::Lorem.paragraph,image_url:'https://i.pinimg.com/originals/fa/56/85/fa5685f79cc76a868d1d52cbc561d6fd.png')
# p69=Post.create(user_id: u11.id,title:Faker::Lorem.characters(number: 10),content:Faker::Lorem.paragraph,image_url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqmIAPf_KnI3yQJVBEmJRU45AyfogG437VNw&usqp=CAU')
# p70=Post.create(user_id: u13.id,title:Faker::Lorem.characters(number: 10),content:Faker::Lorem.paragraph,image_url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXubulSEOLZ6H4GggsyUoDXFUP5nIoAxsmZNz7etHicAsAf0Qi6ZKzpxwDLvi4pqsVWf0&usqp=CAU')
# p71=Post.create(user_id: u14.id,title:Faker::Lorem.characters(number: 10),content:Faker::Lorem.paragraph,image_url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTaydn4_dn1PAv2SfnXz3A7jBXSR_x0unaKQ&usqp=CAU')
# p72=Post.create(user_id: u15.id,title:Faker::Lorem.characters(number: 10),content:Faker::Lorem.paragraph,image_url:'https://images3.alphacoders.com/905/thumb-1920-905410.jpg')
# p73=Post.create(user_id: u13.id,title:Faker::Lorem.characters(number: 10),content:Faker::Lorem.paragraph,image_url:'https://i.pinimg.com/originals/fa/56/85/fa5685f79cc76a868d1d52cbc561d6fd.png')
# p74=Post.create(user_id: u11.id,title:Faker::Lorem.characters(number: 10),content:Faker::Lorem.paragraph,image_url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqmIAPf_KnI3yQJVBEmJRU45AyfogG437VNw&usqp=CAU')
# p75=Post.create(user_id: u13.id,title:Faker::Lorem.characters(number: 10),content:Faker::Lorem.paragraph,image_url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXubulSEOLZ6H4GggsyUoDXFUP5nIoAxsmZNz7etHicAsAf0Qi6ZKzpxwDLvi4pqsVWf0&usqp=CAU')
# p76=Post.create(user_id: u14.id,title:Faker::Lorem.characters(number: 10),content:Faker::Lorem.paragraph,image_url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTaydn4_dn1PAv2SfnXz3A7jBXSR_x0unaKQ&usqp=CAU')
# p77=Post.create(user_id: u15.id,title:Faker::Lorem.characters(number: 10),content:Faker::Lorem.paragraph,image_url:'https://images3.alphacoders.com/905/thumb-1920-905410.jpg')
# p78=Post.create(user_id: u13.id,title:Faker::Lorem.characters(number: 10),content:Faker::Lorem.paragraph,image_url:'https://i.pinimg.com/originals/fa/56/85/fa5685f79cc76a868d1d52cbc561d6fd.png')
# p79=Post.create(user_id: u11.id,title:Faker::Lorem.characters(number: 10),content:Faker::Lorem.paragraph,image_url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqmIAPf_KnI3yQJVBEmJRU45AyfogG437VNw&usqp=CAU')
# p80=Post.create(user_id: u13.id,title:Faker::Lorem.characters(number: 10),content:Faker::Lorem.paragraph,image_url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXubulSEOLZ6H4GggsyUoDXFUP5nIoAxsmZNz7etHicAsAf0Qi6ZKzpxwDLvi4pqsVWf0&usqp=CAU')
# p81=Post.create(user_id: u14.id,title:Faker::Lorem.characters(number: 10),content:Faker::Lorem.paragraph,image_url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTaydn4_dn1PAv2SfnXz3A7jBXSR_x0unaKQ&usqp=CAU')
# p82=Post.create(user_id: u15.id,title:Faker::Lorem.characters(number: 10),content:Faker::Lorem.paragraph,image_url:'https://images3.alphacoders.com/905/thumb-1920-905410.jpg')
# p83=Post.create(user_id: u13.id,title:Faker::Lorem.characters(number: 10),content:Faker::Lorem.paragraph,image_url:'https://i.pinimg.com/originals/fa/56/85/fa5685f79cc76a868d1d52cbc561d6fd.png')
# p84=Post.create(user_id: u11.id,title:Faker::Lorem.characters(number: 10),content:Faker::Lorem.paragraph,image_url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqmIAPf_KnI3yQJVBEmJRU45AyfogG437VNw&usqp=CAU')
# p85=Post.create(user_id: u13.id,title:Faker::Lorem.characters(number: 10),content:Faker::Lorem.paragraph,image_url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXubulSEOLZ6H4GggsyUoDXFUP5nIoAxsmZNz7etHicAsAf0Qi6ZKzpxwDLvi4pqsVWf0&usqp=CAU')
# p86=Post.create(user_id: u14.id,title:Faker::Lorem.characters(number: 10),content:Faker::Lorem.paragraph,image_url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTaydn4_dn1PAv2SfnXz3A7jBXSR_x0unaKQ&usqp=CAU')
# p87=Post.create(user_id: u15.id,title:Faker::Lorem.characters(number: 10),content:Faker::Lorem.paragraph,image_url:'https://images3.alphacoders.com/905/thumb-1920-905410.jpg')
# p88=Post.create(user_id: u13.id,title:Faker::Lorem.characters(number: 10),content:Faker::Lorem.paragraph,image_url:'https://i.pinimg.com/originals/fa/56/85/fa5685f79cc76a868d1d52cbc561d6fd.png')
# p89=Post.create(user_id: u11.id,title:Faker::Lorem.characters(number: 10),content:Faker::Lorem.paragraph,image_url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqmIAPf_KnI3yQJVBEmJRU45AyfogG437VNw&usqp=CAU')
# p90=Post.create(user_id: u13.id,title:Faker::Lorem.characters(number: 10),content:Faker::Lorem.paragraph,image_url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXubulSEOLZ6H4GggsyUoDXFUP5nIoAxsmZNz7etHicAsAf0Qi6ZKzpxwDLvi4pqsVWf0&usqp=CAU')
# p91=Post.create(user_id: u14.id,title:Faker::Lorem.characters(number: 10),content:Faker::Lorem.paragraph,image_url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTaydn4_dn1PAv2SfnXz3A7jBXSR_x0unaKQ&usqp=CAU')
# p92=Post.create(user_id: u15.id,title:Faker::Lorem.characters(number: 10),content:Faker::Lorem.paragraph,image_url:'https://images3.alphacoders.com/905/thumb-1920-905410.jpg')
# p93=Post.create(user_id: u13.id,title:Faker::Lorem.characters(number: 10),content:Faker::Lorem.paragraph,image_url:'https://i.pinimg.com/originals/fa/56/85/fa5685f79cc76a868d1d52cbc561d6fd.png')
# p94=Post.create(user_id: u11.id,title:Faker::Lorem.characters(number: 10),content:Faker::Lorem.paragraph,image_url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqmIAPf_KnI3yQJVBEmJRU45AyfogG437VNw&usqp=CAU')
# p95=Post.create(user_id: u13.id,title:Faker::Lorem.characters(number: 10),content:Faker::Lorem.paragraph,image_url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXubulSEOLZ6H4GggsyUoDXFUP5nIoAxsmZNz7etHicAsAf0Qi6ZKzpxwDLvi4pqsVWf0&usqp=CAU')
# p96=Post.create(user_id: u14.id,title:Faker::Lorem.characters(number: 10),content:Faker::Lorem.paragraph,image_url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTaydn4_dn1PAv2SfnXz3A7jBXSR_x0unaKQ&usqp=CAU')
# p97=Post.create(user_id: u15.id,title:Faker::Lorem.characters(number: 10),content:Faker::Lorem.paragraph,image_url:'https://images3.alphacoders.com/905/thumb-1920-905410.jpg')
# p98=Post.create(user_id: u13.id,title:Faker::Lorem.characters(number: 10),content:Faker::Lorem.paragraph,image_url:'https://i.pinimg.com/originals/fa/56/85/fa5685f79cc76a868d1d52cbc561d6fd.png')
# p99=Post.create(user_id: u11.id,title:Faker::Lorem.characters(number: 10),content:Faker::Lorem.paragraph,image_url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqmIAPf_KnI3yQJVBEmJRU45AyfogG437VNw&usqp=CAU')
# p100=Post.create(user_id: u13.id,title:Faker::Lorem.characters(number: 10),content:Faker::Lorem.paragraph,image_url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXubulSEOLZ6H4GggsyUoDXFUP5nIoAxsmZNz7etHicAsAf0Qi6ZKzpxwDLvi4pqsVWf0&usqp=CAU')
# p101=Post.create(user_id: u14.id,title:Faker::Lorem.characters(number: 10),content:Faker::Lorem.paragraph,image_url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTaydn4_dn1PAv2SfnXz3A7jBXSR_x0unaKQ&usqp=CAU')
# p102=Post.create(user_id: u15.id,title:Faker::Lorem.characters(number: 10),content:Faker::Lorem.paragraph,image_url:'https://images3.alphacoders.com/905/thumb-1920-905410.jpg')



102.times do |i|
  Post.create(title: Faker::Lorem.sentence(word_count: 2), content: Faker::Lorem.paragraph(sentence_count: 4), image_url: Faker::Avatar.image(slug: Faker::Lorem.word, size: '400x300', format: 'jpg'), user_id: rand(1..25))
end

100.times do
    # Generate random user_id between 1 and 15
    user_id = rand(1..25)
  
    # Generate random post_id between 1 and 100
    post_id = rand(1..102)
  
    # Create a new record with the random user_id and post_id
    Review.create(user_id: user_id, post_id: post_id,content:Faker::Lorem.paragraph(sentence_count: 3))
  end
  (1..102).each do |post_id|
    (1..25).each do |user_id|
      Review.create(user_id: user_id, post_id: post_id, content: Faker::Lorem.paragraph(sentence_count: 3))
    end
  end
  

  # 25.times do 
  #    # Generate random user_id between 1 and 15
  #    user_id = rand(1..25)
  
  #    # Generate random post_id between 1 and 100
  #    post_id = rand(1..102)
  #    Like.create(user_id: user_id,post_id:post_id)
  # end

  25.times do |user_index|
    102.times do |post_index|
      # Randomly generate a boolean value to determine if the user likes the post
      likes_post = [true, false].sample
      
      # Create a new like record for the user and post if they like the post
      if likes_post
        Like.create(user_id: user_index + 1, post_id: post_index + 1)
      end
    end
  end

 # Get all users from the database
users = User.all

# Create follow relationships between users
users.each do |user|
  # Randomly select a number of other users to follow
  num_followings = rand(1..5)
  
  # Randomly select that number of other users to follow from the remaining users
  followings = users.where.not(id: user.id).sample(num_followings)
  
  # Create follow relationships between the user and the selected followings
  followings.each do |following|
    unless user.followings.include?(following)
      user.followings << following
    end
  end
end