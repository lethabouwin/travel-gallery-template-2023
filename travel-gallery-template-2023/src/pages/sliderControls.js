export default {
    data() {
      return {
        images: [
          '../assets/Pexels Photo by Albert Koenig.svg',
          '../assets/Pexels Photo by Barry Tan.svg',
          '../assets/Pexels Photo by Gerhard Lipold.svg'
        ],
        currentIndex: 0
      };
    },
    methods: {
      moveSlider(direction) {
        if (direction === 'left') {
          this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
        } else if (direction === 'right') {
          this.currentIndex = (this.currentIndex + 1) % this.images.length;
        }
      }
    }
  }