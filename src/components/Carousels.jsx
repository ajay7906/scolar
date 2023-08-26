import Carousel from 'react-bootstrap/Carousel';
import './MiddlePage.css';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';

function UncontrolledExample() {
  return (
    <>
    <h1 className='toptag' >THERE ARE ALL OUR RESEARCH PARTNER</h1>
    <h1 className='' >You can choice any University</h1>
    <Carousel className='Carousel' >
      <Carousel.Item>
        <img src="https://images.unsplash.com/photo-1605470207062-b72b5cbe2a87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dW5pdmVyc2l0eSUyMG9mJTIwY2FtYnJpZGdlfGVufDB8fDB8fHww&w=1000&q=80" alt="" />

        <Carousel.Caption>
          <h3>Combridge University</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src="https://www.collegeboxes.com/wp-content/uploads/2022/04/harvard-university.jpg" alt="" />

    
        <Carousel.Caption>
          <h3>Harward Univerity</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src="https://edsource.org/wp-content/uploads/2017/04/08.UCLA_.Royce_.jpg" alt="" />

       
        <Carousel.Caption>
          <h3>University of California</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src="https://ethz.ch/en/news-and-events/eth-news/news/2021/03/top-rankings-in-15-disciplines/_jcr_content/pageimages/imageCarousel.imageformat.lightbox.1483024166.jpg" alt="" />

       
        <Carousel.Caption>
          <h3>ETH Zurich</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src="https://is.mpg.de/uploads/ckeditor/pictures/1421/content_20100119_Luftaufnahme_MPI_fuer_Metallforschung.jpeg" alt="" />

       
        <Carousel.Caption>
          <h3>Max planck university</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src="https://www.ed.ac.uk/sites/default/files/styles/panel_breakpoints_theme_uoe_mobile_1x/public/thumbnails/image/cam_about-us-1_old_college_0.jpg?itok=jEHMEuJe" alt="" />

       
        <Carousel.Caption>
          <h3>Max planck university</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </>
  );
}

export default UncontrolledExample;