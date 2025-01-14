import React from 'react'
import Player from './Player'

export default function VideoComponent({ video }) {
  return (
    <div>
      <Player hash={video.hash} />
      <div className='flex justify-between flex-row py-4'>
        <div>
          <h3 className='text-2xl dark:text-white'>{video.title}</h3>
          <p className='text-gray-500 mt-1'>
            {video.description} •{' '}
            {new Date(video.createdAt * 1000).toLocaleString('en-IN')}
          </p>
        </div>
      </div>
    </div>
  )
}
