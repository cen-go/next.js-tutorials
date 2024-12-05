import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "First Meetup",
    image: "https://cdn.culture.ru/images/88a0e8fa-74e3-5880-ba16-b875262abab7",
    address: "Moscow",
    description: "This is a first meetup."
  },
  {
    id: "m2",
    title: "Second Meetup",
    image: "https://sun6-23.userapi.com/impg/JlSgQEuBHvvte7rGIhgnqMVSd0Z79E6qtEwUeA/1W17lUXNkhI.jpg?size=807x546&quality=96&sign=355b19213fd4c77df836ba6af8290246&c_uniq_tag=ssIzxA5a8Q6Fi23W5UZFu0z5efPWYYcS0VE4JSEMu2A&type=album",
    address: "Shenyang",
    description: "This is the second meeting"
  }
];

export default function HomePage() {
  return <MeetupList meetups={DUMMY_MEETUPS} />
}