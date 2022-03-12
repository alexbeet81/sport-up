import MeetUpList from "../components/meetups/MeetUpList";

const DUMMY_LIST = [
  {
    id: '1',
    image: 'https://media.istockphoto.com/photos/night-practice-picture-id1215144695?b=1&k=20&m=1215144695&s=170667a&w=0&h=v-EJb5loMz_d8GuboYxS-BIMH45REeX8-P4X7mQGM-0=',
    title: 'Football at the park',
    description: '5-a-side game in the park',
    attendees: 13,
  },
  {
    id: '2',
    image: 'https://media.istockphoto.com/photos/rugby-players-striving-to-get-to-the-ball-picture-id1095014886?b=1&k=20&m=1095014886&s=170667a&w=0&h=BM0ILzTxBKY1RzjldTODLNl3SKQCM3mdfxyCY6UzEH0=',
    title: 'Rugy',
    description: 'meet us at the old criket ground',
    attendees: 23,
  },
  {
    id: '3',
    image: 'https://media.istockphoto.com/photos/diverse-tennis-picture-id1322615390?b=1&k=20&m=1322615390&s=170667a&w=0&h=8WROZFZujf3UYkTFwBsr4z4WVQ9Y_RtUNT9UWRAxSsU=',
    title: 'Tennis',
    description: 'Come and get your swing on',
    attendees: 4,
  },
]


const HomePage = () => {

  return <MeetUpList meetups={DUMMY_LIST}/>
};

export default HomePage;