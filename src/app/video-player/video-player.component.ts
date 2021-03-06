import { Component, OnInit } from '@angular/core';
import { VgAPI } from 'videogular2/core';

export interface IMedia {
  title: string;
  src: string;
  type: string;
}

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.css']
})
export class VideoPlayerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  playlist: Array<IMedia> = [
    {
      title: 'Pale Blue Dot',
      src: 'http://static.videogular.com/assets/videos/videogular.mp4',
      type: 'video/mp4'
    },
    {
      title: 'Big Buck Bunny',
      src: 'http://static.videogular.com/assets/videos/big_buck_bunny_720p_h264.mov',
      type: 'video/mp4'
    },
    {
      title: 'Elephants Dream',
      src: 'http://static.videogular.com/assets/videos/elephants-dream.mp4',
      type: 'video/mp4'
    },
    {
      title: 'Erick test',
      src: 'http://static.videogular.com/assets/videos/elephants-dream.mp4',
      type: 'video/mp4'
    }
  ];

  currentIndex = 0;
  currentItem: IMedia = this.playlist[this.currentIndex];
  api: VgAPI;
  index = 0;


  onClickPlaylistItem(item: IMedia, index) {
    this.currentIndex = index;
    this.currentItem = item;
  }

  onPlayerReady(api: VgAPI) {
    this.api = api;
    this.api.subscriptions.loadedMetadata.subscribe(this.playVideo.bind(this));
    this.api.subscriptions.ended.subscribe(this.nextVideo.bind(this));
  }

  playVideo() {
    this.api.play();
  }
  
  nextVideo() {
    this.currentIndex++;

    if (this.currentIndex === this.playlist.length) {
      this.currentIndex = 0;
    }

    this.currentItem = this.playlist[this.currentIndex];
  }


}
