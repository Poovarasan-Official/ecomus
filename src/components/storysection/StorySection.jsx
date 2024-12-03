import "./style.css";
export default function StorySection() {
  return (
    <>
      <section className="story-section py-5">
        <div className="container">
          <div className="row text-center overflow-auto flex-nowrap">
            {/* New Arrivals */}
            <div className="col  mb-4">
              <div className="position-relative">
                <img
                  src="https://themesflat.co/html/ecomus/images/collections/collection-circle-8.jpg"
                  alt="New Arrivals"
                  className="rounded-circle img-fluid mb-3"
                />
                <p className="mb-0">New Arrivals</p>
              </div>
            </div>

            {/* Best Sellers */}
            <div className="col  mb-4">
              <div className="position-relative">
                <img
                  src="https://themesflat.co/html/ecomus/images/collections/collection-circle-9.jpg"
                  alt="Best Sellers"
                  className="rounded-circle img-fluid mb-3"
                />
                <p className="mb-0">Best Sellers</p>
              </div>
            </div>

            {/* Top Rated */}
            <div className="col  mb-4">
              <div className="position-relative">
                <img
                  src="https://themesflat.co/html/ecomus/images/collections/collection-circle-10.jpg"
                  alt="Top Rated"
                  className="rounded-circle img-fluid mb-3"
                />
                <p className="mb-0">Top Rated</p>
              </div>
            </div>

            {/* Brands We Love */}
            <div className="col mb-4">
              <div className="position-relative">
                <img
                  src="https://themesflat.co/html/ecomus/images/collections/collection-circle-11.jpg"
                  alt="Brands We Love"
                  className="rounded-circle img-fluid mb-3"
                />
                <p className="mb-0">Brands We Love</p>
              </div>
            </div>

            {/* Trending */}
            <div className="col mb-4">
              <div className="position-relative">
                <img
                  src="https://themesflat.co/html/ecomus/images/collections/collection-circle-12.jpg"
                  alt="Trending"
                  className="rounded-circle img-fluid mb-3"
                />
                <p className="mb-0">Trending</p>
              </div>
            </div>

            {/* The Re-Imagined */}
            <div className="col  mb-4">
              <div className="position-relative">
                <img
                  src="https://themesflat.co/html/ecomus/images/collections/collection-circle-13.jpg"
                  alt="The Re-Imagined"
                  className="rounded-circle img-fluid mb-3"
                />
                <p className="mb-0">The Re-Imagined</p>
              </div>
            </div>

            {/* 30% off Sale */}
            <div className="col mb-4">
              <div className="position-relative">
                <img
                  src="https://themesflat.co/html/ecomus/images/collections/sale.jpg"
                  alt="30% off Sale"
                  className="rounded-circle img-fluid mb-3"
                />
                <p className="mb-0">30% off Sale</p>
              </div>
            </div>

            {/* Shop All */}
            <div className="col mb-4">
              <div className="position-relative">
                <img
                  src="https://via.placeholder.com/100"
                  alt="Shop All"
                  className="rounded-circle img-fluid mb-3"
                />
                <p className="mb-0">Shop All</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
