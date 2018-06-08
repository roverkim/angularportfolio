import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import * as ProgressBar from 'progressbar.js';
// import { TweenMax } from 'gsap';

interface skillsObject {
  id: string;
  name: string;
  rating: number;
  duration: number;
  img: string;
};

let counter = 0;


@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  skillsArray: skillsObject[] = [
    {
      id: 'bar1',
      name: 'Html5',
      rating: 90,
      duration: 2000,
      img: '../../assets/html.png'
    }, {
      id: 'bar2',
      name: 'Css3',
      rating: 85,
      duration: 2500,
      img: '../../assets/css.png'
    }, {
      id: 'bar3',
      name: 'Angular 5',
      rating: 80,
      duration: 3000,
      img: '../../assets/angular.png'
    }, {
      id: 'bar4',
      name: 'React',
      rating: 80,
      duration: 3500,
      img: '../../assets/react.png'
    }, {
      id: 'bar5',
      name: 'Node',
      rating: 85,
      duration: 4000,
      img: '../../assets/node.png'
    }, {
      id: 'bar6',
      name: 'Express',
      rating: 80,
      duration: 4500,
      img: '../../assets/express.png'
    }];

   displaySkills: boolean = true;
   pdfSrc: string = '../../assets/ryankimresume.pdf';

  constructor() { }

  ngOnInit() {

    $('.option, .slide').on('click', () => {

      if ($('.option, .slide').hasClass('option') && !$('.option, .slide').hasClass('on')) {
        $('.option').toggleClass('on');
        $('.slide').toggleClass('on');
      } else if ($('.option, .slide').hasClass('slide')) {
        $('.option').toggleClass('on');
        $('.slide').toggleClass('on');
      }
      // this.displaySkills = this.displaySkills.bind(SkillsComponent);

      //console.log(this.displaySkills)
      if(this.displaySkills == true) {
        this.displaySkills = false;
        //console.log('display resume')
      } else {
        this.displaySkills = true;
        //console.log('display skills')
        //console.log('this is '+this.skillsArray);

        let checkCondition = () => {
          if (document.getElementById('bar1')) {
            clearInterval(checkConditionInterval);
            reRenderBar();
          }
        }

        let reRenderBar: any = () => {
          this.skillsArray.map(skill => {
            this.displayRatings(skill.id, skill.name, skill.rating, skill.duration);
          });
        }

        if (document.getElementById('bar1')) {
          reRenderBar();
          clearInterval(reRenderBar);
        } else {
          var checkConditionInterval = setInterval(checkCondition, 100);
        }


      }
    });



    let div_top = $('#skills_section').offset().top;
    $(window).scroll(() => {
      if ($(window).scrollTop() + 500  > div_top && counter == 0) {
        this.skillsArray.map(skill => {
          this.displayRatings(skill.id, skill.name, skill.rating, skill.duration);
        });
        //console.log('scrolling')
        counter++;
      };

      if ($(window).scrollTop() + 250 > div_top ) {
        $('.fa-bars').css('color', 'white');
        $('.fa-bars').hover(function() {
          $(this).css('color', 'yellow')
        });
        $('.fa-bars').mouseleave(function() {
          $(this).css('color', 'white');
        })

      } else {
          $('.fa-bars').css('color', 'black');
          $('.fa-bars').hover(function() {
            $(this).css('color', 'yellow');
          });
          $('.fa-bars').mouseleave(function() {
            $(this).css('color', 'white');
          })
      };

      //console.log($('#skills_section').offset().top)
          //console.log($( window ).scrollTop())
          //console.log($('#skills_section').height());
      //
      if (($( window ).scrollTop() - 100 > ($('#skills_section').offset().top + $('#skills_section').height()) && $(window).width() > 1200)) {
          $('.fa-bars').css('color', 'black');
          $('.fa-bars').hover(function() {
            $(this).css('color', 'yellow');
          });
          $('.fa-bars').mouseleave(function() {
            $(this).css('color', 'black');
          })
      };


    });

  }

  ngAfterContentInit() {
  }


  ngAfterViewInit() {
    // Get the modal
    let modal = <HTMLElement>document.getElementById('myModal');

    // Get the image and insert it inside the modal - use its "alt" text as a caption
    let modalImg = <HTMLImageElement>document.getElementById("img01");
    let captionText = <HTMLElement>document.getElementById("caption");

    $("#uwm").on('click', () => {
      let img = <HTMLImageElement>document.getElementById('uwm');
      modal.style.display = "block";
      modalImg.src = img.src;
      captionText.innerHTML = img.alt;
    });

    $("#northwestern").on('click', () => {
      let img = <HTMLImageElement>document.getElementById('northwestern');
      //console.log(img);
      modal.style.display = "block";
      modalImg.src = img.src;
      captionText.innerHTML = img.alt;
    });


    // Get the <span> element that closes the modal
    let span = <HTMLElement>document.getElementsByClassName("close")[0];

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
      modal.style.display = "none";
    }
  }

  displayRatings(id: string, name: string, rating: number, duration: number): void {

    let barID = document.getElementById(id);
    //console.log(barID);

    let bar = new ProgressBar.Circle(barID, {
      color: 'yellow',
      // This has to be the same size as the maximum width to
      // prevent clipping
      strokeWidth: 4,
      trailWidth: 1,
      easing: 'easeInOut',
      duration,
      text: {
        autoStyleContainer: false
      },
      from: { color: '#aaa', width: 1 },
      to: { color: '#339900', width: 4 },
      // Set default step function for all animate calls
      step: function(state, circle) {
        circle.path.setAttribute('stroke', state.color);
        circle.path.setAttribute('stroke-width', state.width);

        let value = Math.round(circle.value() * rating);
        if (value === 0) {
          circle.setText('');
        } else {
          circle.setText('<div style="text-align:center;">Confidence </br>' + value + '% </div>');
        }

      }
    });
    bar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
    bar.text.style.fontSize = '2rem';

    bar.animate(1.0);  // Number from 0.0 to 1.0
  }

}
