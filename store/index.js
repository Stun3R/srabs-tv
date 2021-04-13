import {
  ROTATE_SRABS,
  SET_HERO_VISIBLE,
  SET_SRAB_VISIBLE,
} from './mutation-type'

export const state = () => ({
  heroVisible: true,
  srabVisible: false,
  twitchProfile: {},
  srabs: [
    {
      id: 0,
      theme: 'mirakk',
      nickname: 'Mirakk',
      twitch: 'mirakk_',
      fullname: 'Karim "Mirakk" El Asli',
      memoji: {
        default: 'mirakk.png',
        smile: 'mirakk_1.png',
      },
    },
    {
      id: 1,
      theme: 'leiksa',
      nickname: 'Leiksa',
      twitch: 'leiksa_',
      fullname: 'Diane "Leiksa" Guillot',
      memoji: {
        default: 'leiksa.png',
        smile: 'leiksa_1.png',
      },
    },

    {
      id: 2,
      theme: 'stun3r',
      nickname: 'Stun3R',
      twitch: 'stun3r_',
      fullname: 'Thibaut "Stun3R" David',
      memoji: {
        default: 'stun3r.png',
        smile: 'stun3r_1.png',
      },
      games: [
        {
          name: 'valorant',
          color: '#dc3d4b',
          img: 'valorant.jpeg',
          overlay: 'valorant_logo.png',
        },
        {
          name: 'minecraft',
          color: '#477b1e',
          img: 'minecraft.jpeg',
          overlay: 'minecraft_logo.png',
        },
        {
          name: 'leagueoflegends',
          color: '#24649f',
          img: 'leagueoflegends.jpeg',
          overlay: 'leagueoflegends_logo.png',
        },
        {
          name: 'csgo',
          color: '#e6a708',
          img: 'csgo.jpeg',
          overlay: 'csgo_logo.png',
        },
      ],
    },
  ],
})

export const mutations = {
  [ROTATE_SRABS](state, index) {
    const tmp = [...state.srabs]
    if (index === 0) {
      const save = tmp[2]
      tmp[2] = tmp[1]
      tmp[1] = tmp[0]
      tmp[0] = save
    } else if (index === 2) {
      const save = tmp[0]
      tmp[0] = tmp[1]
      tmp[1] = tmp[2]
      tmp[2] = save
    }
    state.srabs = tmp
  },

  [SET_HERO_VISIBLE](state, value) {
    state.heroVisible = value
  },
  [SET_SRAB_VISIBLE](state, value) {
    state.srabVisible = value
  },

  setTwitchProfile(state, profile) {
    state.twitchProfile = profile
  },
}

export const actions = {
  rotateSrabs({ commit }, index) {
    commit(ROTATE_SRABS, index)
  },

  setHeroVisible({ commit }, value) {
    commit(SET_HERO_VISIBLE, value)
  },

  setSrabVisible({ commit }, value) {
    commit(SET_SRAB_VISIBLE, value)
  },
}

export const plugins = []
