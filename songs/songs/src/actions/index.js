// action creator
export const selectSong = (song) => {
  //returns an action
  return {
    type: 'SELECT_SONG',
    payload: song
  }
}