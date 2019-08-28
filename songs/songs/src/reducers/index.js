const songsReducer = () => {
  return [
    { title: 'No Scrubs', duration: '4:05' },
    { title: 'No Diggity', duration: '2:05' },
    { title: 'Wesleys Theory', duration: '3:05' },
    { title: 'Nikes', duration: '3:45' }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }
  return selectedSong;
};