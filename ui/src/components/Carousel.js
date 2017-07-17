
/*eslint-disable no-unused-vars*/
import React, { Component } from 'react'
import { Link } from 'preact-router'

/*eslint-enable no-unused-vars*/

class Carousel extends Component {

  render() {
    return (
            <div class="container">

                <div id="myCarousel" class="carousel slide" data-ride="carousel">
                    <ol class="carousel-indicators">
                        <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                        <li data-target="#myCarousel" data-slide-to="1"></li>
                        <li data-target="#myCarousel" data-slide-to="2"></li>
                    </ol>

                    <div class="carousel-inner">
                        <div class="item active">
                            <image src="http://www.akwholesale.com/image/cache/catalog/vaporizer/ALIEN/TFV12_BLACK-600x600_0.jpg" alt="Los Angeles" style="width:100%;"></image>
                        </div>

                        <div class="item">
                            <image src="http://www.akwholesale.com/image/cache/catalog/vaporizer/ALIEN/TFV12_BLACK-600x600_0.jpg" alt="Chicago" style="width:100%;"></image>
                        </div>

                        <div class="item">
                            <image src="http://www.akwholesale.com/image/cache/catalog/vaporizer/ALIEN/TFV12_BLACK-600x600_0.jpg" alt="New york" style="width:100%;"> </image>
                        </div>
                    </div>


                    <a class="left carousel-control" href="#myCarousel" data-slide="prev">
                        <span class="glyphicon glyphicon-chevron-left"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="right carousel-control" href="#myCarousel" data-slide="next">
                        <span class="glyphicon glyphicon-chevron-right"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>
            </div>

        )
  }
}

export default Carousel;