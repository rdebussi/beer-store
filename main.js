       const main =  {
            create: async function(){
                const response = await axios.get("https://api.punkapi.com/v2/beers/random")
                console.log(response)
            }
        }

        main.create()

