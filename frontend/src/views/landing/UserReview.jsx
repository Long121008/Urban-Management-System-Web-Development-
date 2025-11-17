export default function UsersReview() {
  return (
    <section className="reviews">
      <h2>What People Are Saying</h2>
      <p className="reviews__subtitle">
        Trusted by city authorities, operators, and planners around the world.
      </p>

      <div className="reviews__grid">

        <div className="review-card">
          <p>
            “UrbanSphere transformed how we manage traffic and public
            infrastructure. The AI predictions are incredibly accurate.”
          </p>
          <div className="review-author">
            <img src="https://i.pravatar.cc/80?img=1" alt="" />
            <div>
              <h4>Nguyen Thanh Bao</h4>
              <span>Traffic Control Department</span>
            </div>
          </div>
        </div>

        <div className="review-card">
          <p>
            “We reduced incident response time by 27%. The unified dashboard is a
            game-changer for our operations team.”
          </p>
          <div className="review-author">
            <img src="https://i.pravatar.cc/80?img=12" alt="" />
            <div>
              <h4>Sarah Williams</h4>
              <span>City Operations Lead</span>
            </div>
          </div>
        </div>

        <div className="review-card">
          <p>
            “Beautiful UI and extremely powerful tools. This is how every modern
            city should operate.”
          </p>
          <div className="review-author">
            <img src="https://i.pravatar.cc/80?img=32" alt="" />
            <div>
              <h4>Jonathan Carter</h4>
              <span>Urban Development Analyst</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
