const moviesData = [
    {
      id: 1,
      title: "The Lion King",
      releaseYear: 1994,
      genre: "Animation",
      rating: 8.5,
      duration: "1h 28m",
      description: "A young lion prince is cast out of his pride by his cruel uncle.",
      poster: "https://variety.com/wp-content/uploads/2024/02/Disneyland-Mickey-Mouse.jpg?w=1000&h=667&crop=1" // Lion King poster
    },
    {
      id: 2,
      title: "Frozen",
      releaseYear: 2013,
      genre: "Animation",
      rating: 7.4,
      duration: "1h 42m",
      description: "When a newly crowned queen accidentally uses her power to curse the land.",
      poster: "https://punchdrink.com/wp-content/uploads/2014/05/disneyworld-5.jpg?w=1024" // Frozen poster
    },
    {
      id: 3,
      title: "Aladdin",
      releaseYear: 1992,
      genre: "Animation",
      rating: 8.0,
      duration: "1h 30m",
      description: "A young man discovers a magical lamp and releases a genie who grants him three wishes.",
      poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY8rNJISbvB85XjLXQDG_p7OjQVrhP8NVuNA&s" // Aladdin poster
    },
    {
      id: 4,
      title: "Beauty and the Beast",
      releaseYear: 1991,
      genre: "Animation",
      rating: 8.0,
      duration: "1h 24m",
      description: "A prince cursed to spend his days as a hideous monster.",
      poster: "https://images.jpost.com/image/upload/q_auto/c_fill,g_faces:center,h_537,w_822/454694" // Beauty and the Beast poster
    },
    {
      id: 5,
      title: "Moana",
      releaseYear: 2016,
      genre: "Animation",
      rating: 7.6,
      duration: "1h 47m",
      description: "A spirited teenager sets sail on a daring mission to save her people.",
      poster: "https://d23.com/app/uploads/2022/05/1180w-600h_A_Z_Hero_2.jpg" // Moana poster
    },
    {
      id: 6,
      title: "Mulan",
      releaseYear: 1998,
      genre: "Animation",
      rating: 7.6,
      duration: "1h 28m",
      description: "A young Chinese maiden disguises herself as a male warrior in order to save her father.",
      poster: "https://static1.srcdn.com/wordpress/wp-content/uploads/2023/08/disney-movies-aged-well-classic-good.jpg" // Mulan poster
    },
    {
      id: 7,
      title: "Zootopia",
      releaseYear: 2016,
      genre: "Animation",
      rating: 8.0,
      duration: "1h 48m",
      description: "In a city of anthropomorphic animals, a bunny cop and a cynical con artist fox must work together.",
      poster: "https://static0.cbrimages.com/wordpress/wp-content/uploads/2024/04/10-old-disney-movies-that-aged-poorly-ranked-emaki.jpg" // Zootopia poster
    },
    {
      id: 8,
      title: "Toy Story",
      releaseYear: 1995,
      genre: "Animation",
      rating: 8.3,
      duration: "1h 21m",
      description: "A cowboy doll is profoundly threatened and jealous when a new spaceman toy supplants him.",
      poster: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/8B69767E2D459907ACD9081D84BE31A6CB7F0349DD129C636C27BE87FD86F632/scale?width=440&aspectRatio=1.78&format=webp" // Toy Story poster
    },
    {
      id: 9,
      title: "Finding Nemo",
      releaseYear: 2003,
      genre: "Animation",
      rating: 8.1,
      duration: "1h 40m",
      description: "After his son is captured in the Great Barrier Reef and taken to Sydney, a timid clownfish sets out on a journey to bring him home.",
      poster: "https://images.squarespace-cdn.com/content/v1/53cdd8f4e4b0c984e433fab1/1491149711698-EBCDFE4SWF5ZNBP10QFC/Alice-march-hare-mad-hatter.jpg?format=1000w" // Finding Nemo poster
    },
    {
      id: 10,
      title: "The Incredibles",
      releaseYear: 2004,
      genre: "Animation",
      rating: 8.0,
      duration: "1h 55m",
      description: "A family of undercover superheroes, while trying to live the quiet suburban life, are forced into action to save the world.",
      poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp7dB4B4XOA7s2jx-uJ3fwRpJAIAdKv-lAAg&s" // The Incredibles poster
    },
    {
      id: 11,
      title: "Big Hero 6",
      releaseYear: 2014,
      genre: "Animation",
      rating: 7.8,
      duration: "1h 42m",
      description: "A special bond develops between plus-sized inflatable robot Baymax and prodigy Hiro Hamada, who team up with a group of friends to form a band of high-tech heroes.",
      poster: "https://static1.cbrimages.com/wordpress/wp-content/uploads/2021/06/Sleeping-beauty.jpeg" // Big Hero 6 poster
    },
    {
      id: 12,
      title: "Ratatouille",
      releaseYear: 2007,
      genre: "Animation",
      rating: 8.0,
      duration: "1h 51m",
      description: "A rat who can cook makes an unusual alliance with a young kitchen worker at a famous restaurant.",
      poster: "https://images.squarespace-cdn.com/content/v1/53cdd8f4e4b0c984e433fab1/1491150380976-GZ9GNVAXS95N3O5OC06Y/image-asset.jpeg?format=500w" // Ratatouille poster
    },
    {
      id: 13,
      title: "Coco",
      releaseYear: 2017,
      genre: "Animation",
      rating: 8.4,
      duration: "1h 45m",
      description: "Aspiring musician Miguel, confronted with his family's ancestral ban on music, enters the Land of the Dead to find his great-great-grandfather.",
      poster: "https://static1.cbrimages.com/wordpress/wp-content/uploads/2024/08/split-image-of-moana-2-elio-and-tron-ares.jpg" // Coco poster
    },
    {
      id: 14,
      title: "Brave",
      releaseYear: 2012,
      genre: "Animation",
      rating: 7.1,
      duration: "1h 33m",
      description: "Determined to make her own path in life, Princess Merida defies a custom that brings chaos to her kingdom.",
      poster: "https://static1.srcdn.com/wordpress/wp-content/uploads/2021/06/The-dance-scene-from-Sleeping-Beauty-Cropped.jpg" // Brave poster
    },
    {
      id: 15,
      title: "Tangled",
      releaseYear: 2010,
      genre: "Animation",
      rating: 7.7,
      duration: "1h 40m",
      description: "The magically long-haired Rapunzel has spent her entire life in a tower, but now that a runaway thief has stumbled upon her, she is about to discover the world for the first time.",
      poster: "https://i.insider.com/5da9e7d6045a3149943777c5?width=800&format=jpeg&auto=webp" // Tangled poster
    },
    {
      id: 16,
      title: "Wreck-It Ralph",
      releaseYear: 2012,
      genre: "Animation",
      rating: 7.7,
      duration: "1h 41m",
      description: "A video game villain wants to be a hero and sets out to fulfill his dream, but his quest brings havoc to the arcade where he lives.",
      poster: "https://static1.srcdn.com/wordpress/wp-content/uploads/2023/09/coziest-disney-movies-autumn-october.jpg" // Wreck-It Ralph poster
    },
    {
        id: 17,
        title: "The Little Mermaid",
        releaseYear: 2023,
        genre: "Fantasy, Kids, Musical, Romance",
        rating: 8.7,
        duration: "2h 15min",
        description: "'The Little Mermaid' is visionary filmmaker Rob Marshalls live-action reimagining of Disneys beloved animated musical classic, the story of Ariel, a beautiful and spirited young mermaid with a thirst for adventure. The youngest of King Tritons daughters and the most defiant, Ariel longs to find out more about the world beyond the sea and, while visiting the surface, falls for the dashing Prince Eric. While mermaids are forbidden to interact with humans, Ariel must follow her heart. She makes a deal with the evil sea witch, Ursula, which gives her a chance to experience life on land but ultimately places her life and her fathers crown in jeopardy. “The Little Mermaid” is directed by Rob Marshall with a screenplay by David Magee, and is produced by Marc Platt, Lin-Manuel Miranda, John DeLuca and Rob Marshall.",
        poster: "https://lumiere-a.akamaihd.net/v1/images/p_disneyplusoriginals_ariel2023_poster_rebrand_36ca57b4.jpeg" // Wreck-It Ralph poster
      },
      {
        id: 18,
        title: "Elemental",
        releaseYear: 2023,
        genre: "Animation, Comedy, Fantasy, Kids & Family",
        rating: 7.7,
        duration: "1h 43m",
        description: "Disney and Pixar’s “Elemental” is an all-new, original feature film set in Element City, where fire-, water-, land- and air residents live together. The story introduces Ember, a tough, quick-witted and fiery young woman, whose friendship with a fun, sappy, go-with-the-flow guy named Wade challenges her beliefs about the world they live in.",
        poster: "https://lumiere-a.akamaihd.net/v1/images/p_disneyplusoriginals_elemental_poster_rebrand_a0788af2.jpeg" // Wreck-It Ralph poster
      },
      {
        id: 19,
        title: "Avatar: The Way of Water",
        releaseYear: 2022,
        genre: "Action-Adventure, Fantasy, Science Fiction",
        rating: 9.7,
        duration: "3h 41m",
        description: "'Avatar: The Way of Water' reaches new heights and explores undiscovered depths as James Cameron returns to the world of Pandora in this emotionally packed action adventure",
        poster: "https://lumiere-a.akamaihd.net/v1/images/p_disneyplusoriginals_avatar_thewayofwater_poster_rebra_fa08636d.jpeg" // Wreck-It Ralph poster
      },
      {
        id: 20,
        title: "Inside Out 2",
        releaseYear: 2024,
        genre: "Animation, Coming of Age",
        rating: 7.4,
        duration: "1h 36min",
        description: "Disney and Pixar’s “Inside Out 2” returns to the mind of newly minted teenager Riley just as headquarters is undergoing a sudden demolition to make room for something entirely unexpected: new Emotions! Joy, Sadness, Anger, Fear and Disgust, who’ve long been running a successful operation by all accounts, aren’t sure how to feel when Anxiety shows up. And it looks like she’s not alone.",
        poster: "https://lumiere-a.akamaihd.net/v1/images/p_insideout2_now_available_disneyplus_d24c051c.jpeg" // Wreck-It Ralph poster
      },
      {
        id: 21,
        title: "Snow White",
        releaseYear: 2025,
        genre: "Fantasy, Live Action, Musical",
        rating: 7.7,
        duration: "1h 41m",
        description: "A video game villain wants to be a hero and sets out to fulfill his dream, but his quest brings havoc to the arcade where he lives.",
        poster: "https://lumiere-a.akamaihd.net/v1/images/p_disney_snowwhite_v1_792_6866004d.jpeg" // Wreck-It Ralph poster
      },
      {
        id: 22,
        title: "Mufasa: The Lion King",
        releaseYear: 202,
        genre: "Animation",
        rating: 7.7,
        duration: "1h 41m",
        description: "The Lion King” enlists Rafiki to relay the legend of Mufasa to young lion cub Kiara, daughter of Simba and Nala, with Timon and Pumbaa lending their signature schtick.",
        poster: "https://lumiere-a.akamaihd.net/v1/images/p_mufasa_d23_c301cb21.jpeg" // Wreck-It Ralph poster
      },
      {
        id: 23,
        title: "Encanto",
        releaseYear: 2021,
        genre: "Adventure, Animation, Fantasy, Kids & Family, Musical",
        rating: 7.7,
        duration: "1h 41m",
        description: "Walt Disney Animation Studios’ “Encanto” tells the tale of an extraordinary family, the Madrigals, who live hidden in the mountains of Colombia, in a magical house, in a vibrant town, in a wondrous, charmed place called an Encanto.",
        poster: "https://lumiere-a.akamaihd.net/v1/images/p_encanto_homeent_22359_4892ae1c.jpeg" // Wreck-It Ralph poster
      },
      {
        id: 24,
        title: "WLightyear",
        releaseYear: 2022,
        genre: "Action, Adventure, Animation, Science Fiction",
        rating: 7.7,
        duration: "1h 40m",
        description: "From Disney and Pixar comes an animated sci-fi action-adventure — the definitive origin story of Buzz Lightyear (voice of Chris Evans), the hero who inspired the toy. “Lightyear” follows the legendary space ranger on an intergalactic adventure alongside ambitious recruits, Izzy, Mo and Darby, and his robot companion Sox",
        poster: "https://lumiere-a.akamaihd.net/v1/images/p_disney_lightyear_519_c4636841.jpeg" // Wreck-It Ralph poster
      }
  ];


  export default moviesData;