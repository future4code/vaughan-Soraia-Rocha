import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { useState } from "react"

export const ProfilesPage = () => {
  const history = useHistory();

  const [profile, setProfile] = useState({})




  const getProfile = () => {
    axios
      .get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/soraia/person")
      .then((res) => {
        setProfile(res.data)
        console.log(res.data)

      })

      .catch((error) => {
        console.log(error.response)

      })

  }

  useEffect(() => {
    getProfile()

  }, [])





  return (
    <div>
      {profile && profile.profile ?
        <div>
          <p>Profiles</p>
          <p>{profile.profile.name} </p>
          <img src={profile.profile.photo} alt="Foto Perfil" />
          <p>{profile.profile.age} </p>
          <p>{profile.profile.bio} </p>

        </div>
        : <p> carregando... </p>
      }
    </div>
  );
};
