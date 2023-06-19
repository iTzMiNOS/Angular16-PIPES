import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-Pipe';
  count: number = 5235.341;
  date: Date = new Date();
  objArray : object = {
    id: 1,
    postTitle: "Post 1"
  }
  postArray: Array<string> = [
    "post 1",
    "post 2",
    "post 3",
    "post 4",
    "post 5",
    "post 6"
  ];
  userDetails = {
    name: "User 1",
    city: "Newyork",
    country: "US"
  }
  dummy: string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris posuere orci urna, in efficitur nulla rutrum non. Etiam elementum commodo massa a ultricies. Praesent vitae feugiat nisl. Praesent at malesuada nulla. Nulla sed ultricies augue. Quisque massa urna, tincidunt quis nisi et, pulvinar rhoncus ex. Duis venenatis sodales elit non feugiat. Pellentesque in ligula nec sapien lobortis molestie. Vestibulum sit amet neque tincidunt, tincidunt lectus et, ornare neque. Aenean ornare, mi id tincidunt hendrerit, ligula leo efficitur arcu, nec auctor justo quam id ligula. Donec pellentesque felis quis imperdiet fermentum. Duis rutrum vestibulum varius.";
}
