import type { NextPage } from 'next'
import axios from 'axios';
import { Video } from '../types';
import { BASE_URL } from '../utils';

import VideoCard from '../components/VideoCard';
import NoResults from '../components/NoResults';

interface IProps {
  videos: Video[];
}


const Home = ({videos } : IProps) => {
  console.log(videos);
  return (
    <div className='flex flex-col gap-10 videos h-full'>
    {videos.length
        ? videos?.map((video: Video) => (
          <VideoCard post={video} isShowingOnHome key={video._id} />
        ))
        : <NoResults text={`No Videos`} />}
    </div>
  )
}

export default Home


export const getServerSideProps = async ({
  query: { topic },
}: {
  query: { topic: string };
}) => {
  let response = null;



  if(topic) {
    response = await axios.get(`https://vivapp-blightalpha.vercel.app/api/discover/${topic}`);
  }
  else
  {
    response = await axios.get(`https://vivapp-blightalpha.vercel.app/api/post`);
  }

  return {
    props: { videos: response.data },
  };
};
