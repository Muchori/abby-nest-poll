import { Injectable } from '@nestjs/common';

Injectable();
export class PollService {
  private poll: string;
  Ably = require('ably');

  create(poll) {
    const ably = new this.Ably.Realtime(
      'WodnFg._CKImw:T3xugMN8TV28hiiabPr_qbC2xhqNJycURq2CvxleUOM',
    );

    const channel = ably.channels.get('ably-nest');
    const data = {
      points: 1,
      moview: poll.movie,
    };
    channel.publish('vote', data);
  }
}
