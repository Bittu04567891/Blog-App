import "./singlePost.css";

const SinglePost = () => {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          src="https://i.pinimg.com/236x/1e/3f/58/1e3f587572a7a7b20bbf1828595a1786--holiday-party-themes-holiday-gift-guide.jpg"
          alt=""
          className="singlePostImg"
        />
        <h1 className="singlePostTitle">
          Lorem ipsum dolor sit, amet consectetur
          <div className="singlePostEdit">
            <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
            <i className="singlePostIcon fa-solid fa-trash"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <b>Bittu</b>
          </span>
          <span className="singlePostDate">1 hour ago</span>
        </div>
        <p className="singlePostDesc">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum
          exercitationem ducimus voluptate ex, perspiciatis voluptatibus earum
          voluptates reiciendis neque, cupiditate, tenetur architecto nisi
          obcaecati itaque ratione eos facere magni aliquam! Lorem, ipsum dolor
          sit amet consectetur adipisicing elit. Vel, voluptatum dolor
          voluptate, impedit ab cum iste quo quisquam minus nihil similique quis
          nulla aliquam totam deleniti commodi fugit. Omnis, tenetur neque
          blanditiis deserunt eligendi, facilis aut exercitationem voluptate
          expedita enim, possimus facere minus repellendus dolore aperiam
          commodi reiciendis inventore. Eveniet quisquam ea laudantium eligendi
          nulla ipsa dignissimos aut in minus, ut vero laborum, doloribus,
          pariatur dolorem? Tempora reprehenderit expedita iure reiciendis
          necessitatibus cumque magnam quae possimus modi optio magni, ut velit
          non rerum dignissimos exercitationem itaque, inventore repellat!
          Delectus atque eveniet facere omnis quaerat enim ab nihil tempore?
          Quam unde deleniti eaque quibusdam illum officiis corrupti, laborum
          placeat, nostrum sed modi magnam totam possimus id iusto fugit
          perspiciatis labore exercitationem voluptatibus aspernatur similique.
          Delectus, ducimus. Distinctio fuga nostrum facere aperiam doloribus,
          est adipisci nisi veritatis soluta modi mollitia ullam dignissimos
          voluptatibus sint saepe sequi exercitationem libero magnam. Totam,
          sunt obcaecati.
        </p>
      </div>
    </div>
  );
};

export default SinglePost;
