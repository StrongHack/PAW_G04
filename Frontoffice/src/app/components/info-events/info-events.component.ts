import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Event } from '../../model/event.model';
import { EventService } from 'src/app/service/event.service';

@Component({
  selector: 'app-info-events',
  templateUrl: './info-events.component.html',
  styleUrls: ['./info-events.component.css']
})
export class InfoEventsComponent implements OnInit {
  event: Event | undefined;

  constructor(
    private route: ActivatedRoute,
    private eventService: EventService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      console.log('Event ID:', id);
      if (id) {
        this.getEvent(id);
      }
    });
  }

  getEvent(id: string) {
    console.log('Making API request with ID:', id);

    this.eventService.getEvent(id)
      .subscribe(
        (response: any) => {
          this.event = response.dbevents;
          this.fetchEventImage(this.event);
        },
        (error) => {
          console.log('API Error:', error);
        }
      );
  }

  fetchEventImage(event: Event | undefined): void {
    if (event && event._id) {
      this.eventService.getEventImage(event._id).subscribe(
        (imageBlob: Blob) => {
          this.createImageFromBlob(imageBlob, event);
        },
        (error: any) => {
          console.error('Error fetching event image:', error);
          this.setDefaultImage(event);
        }
      );
    } else {
      console.warn('Invalid event object or missing _id');
    }
  }

  createImageFromBlob(imageBlob: Blob, event: Event): void {
    const reader = new FileReader();
    reader.onloadend = () => {
      event.imageSrc = reader.result as string;
      console.log('Image URL:', event.imageSrc);
    };
    reader.readAsDataURL(imageBlob);
  }

  setDefaultImage(event: Event): void {
    event.imageSrc = '/assets/img/castle2.png';
  }
}
