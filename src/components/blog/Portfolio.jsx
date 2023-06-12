import React from 'react'

export default ({ portfolioLinks }) => {
  const getRandomCarImage = () => {
    const randomNumber = Math.floor(Math.random() * 100);
    return `https://source.unsplash.com/350x140/?car/${randomNumber}`;
  };
    return (
        <section className="bg-light page-section" id="portfolio">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading text-uppercase">Photo</h2>
              <h3 className="section-subheading text-muted">Taken photos by travelers!</h3>
            </div>
          </div>
          <div className="row">
            {
                portfolioLinks && portfolioLinks.map(({ name, description }, index) => 
                    <div className="col-md-4 col-sm-6 portfolio-item">
                        <a className="portfolio-link" data-toggle="modal" href="#portfolioModal1">
                            <div className="portfolio-hover">
                                <div className="portfolio-hover-content">
                                    <i className="fa fa-plus fa-3x"></i>
                                </div>
                            </div>
                            <img className="img-fluid" src={getRandomCarImage()} alt="portfolio_img" />
                        </a>
                        <div className="portfolio-caption">
                            <h4>{ name}</h4>
                            <p className="text-muted">{ description }</p>
                        </div>
                    </div>
                )
            }
          </div>
        </div>
      </section>
    )
}