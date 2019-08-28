// action creator
export const selectSong = (song) => {
  //returns an action
  return {
    type: 'SONG_SELECTED',
    payload: song
  }
}