import React from "react";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
export const MatchesPage = () => {
  const history = useHistory();

  const [matches, setMatches] = useState(
    {
      "matches": [
        {
          "id": "71gMbZs2txS9LDvGK5Ew",
          "age": 26,
          "name": "Anitta",
          "photo": "data:image/jpeg;base64,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",
          "bio": "Amo cachorros e sair para dançar. Procuro alguém animado e sem neuras."
        },

        {
          "id": "xUrxMGvODWZa4ZASbfwx",
          "age": 26,
          "name": "Carol Danvers",
          "photo": "https://s1.r29static.com/bin/entry/7e8/340x408,85/2138124/image.webp",
          "bio": "Gosto de voar e de gatos. Procuro relações que respeitem minha independência."
        }


      ]
    })




  const matchesList = matches.matches.map((profile) => {
    console.log("profile", profile)
    return (
      <div>
        <img src={profile.photo} alt={"foto de perfil"} />
        <p>{profile.name}</p>

      </div>
    )

  })

  const getMatches = () => {
    axios
      .get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/soraia/matches")
      .then((res) => {
        setMatches(res.data)
       

      })

      .catch((error) => {
       

      })

  }

  useEffect(() => {
    getMatches()

  }, [])

  return (
    <div>

      {matches && matches.matches && matches.matches.length > 0 ?
    
        
      <div>
      <p>Matches Pages</p>
      <p>{matches.matches.name} </p>
      <img src={matches.matches.photo} alt="Foto de Perfil" />
    
      </div>

        :
        <p>Você não possui nenhum match</p>
      }

    </div>
  )
}
