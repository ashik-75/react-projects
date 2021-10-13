import { useState } from 'react';
import './project_15.scss';

const Project_15 = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  window.onscroll = (e) => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
  };
  return (
    <div className="project_15">
      <div
        className={
          isScrolled ? 'navbar-container scrolled' : 'navbar-container'
        }
      >
        <div className="left">
          <img src="/netflix/netflix.png" alt="" />
        </div>
        <div className="center">
          <span>Home</span>
          <span>Series</span>
          <span>Movies</span>
          <span>News</span>
          <span>My List</span>
        </div>
        <div className="right">
          <span>
            {' '}
            <i className="fas icon fa-search"></i>
          </span>
          <span>Kid</span>
          <span>
            <i className="fas icon fa-bell"></i>
          </span>
          <img
            src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bWFuJTIwZm9ybWFsfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
          <div className="profile">
            <i className="fas icon fa-sort-down"></i>{' '}
            <div className="profile-container">
              <span>Setting</span>
              <span>Logout</span>
            </div>
          </div>
        </div>
      </div>
      <img
        src="https://images.unsplash.com/photo-1524143986875-3b098d78b363?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZHJvbmV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=60"
        alt=""
      />
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores
      quidem nisi labore similique maiores ullam, tempore ea distinctio odio
      cupiditate, doloremque in blanditiis sit deleniti modi, neque eos tempora
      quisquam fugiat cumque ipsa sapiente dolore. Doloremque voluptatum
      nesciunt quibusdam sed consectetur eligendi vitae labore quia. Delectus
      dolores eveniet, perferendis explicabo incidunt maxime corrupti autem
      deleniti voluptatem excepturi quasi iste nulla distinctio fuga magni
      molestias dolor, saepe minus necessitatibus nam. Cum nostrum repellendus
      odio itaque tempora praesentium illo perferendis numquam dolores? Quod
      unde officia iste odit doloribus! Reiciendis dolores temporibus distinctio
      dicta odit, voluptates maxime consectetur assumenda quisquam beatae ad
      magnam culpa fuga eveniet, ut animi, impedit esse ducimus. Fugit error qui
      excepturi ipsam cumque tempore dignissimos quaerat. Et ab consequatur
      temporibus iure sequi labore aspernatur minus expedita. Itaque esse
      voluptatem dicta fuga natus impedit necessitatibus, similique fugiat
      incidunt doloremque non et tempora est, facilis sed voluptatum fugit ut
      laudantium molestias veritatis magni praesentium quaerat! Sunt, ab. Rerum,
      eveniet mollitia voluptatem natus ipsa quis minima soluta laborum eum
      maxime quibusdam. Placeat esse perferendis quae magnam libero inventore
      magni atque tenetur hic quas, beatae molestiae laborum quo itaque
      repellat? Asperiores delectus blanditiis et, recusandae atque pariatur
      nesciunt obcaecati, in quam, cum ut aliquid cupiditate? Odit, voluptates
      accusamus accusantium fugit maiores, consectetur aliquam sed, obcaecati
      odio cupiditate temporibus similique quo culpa qui commodi? Similique
      inventore autem quos consequuntur earum quisquam accusamus asperiores
      ratione voluptatibus debitis, laborum et perspiciatis ipsa rerum pariatur,
      perferendis doloribus, fugiat suscipit velit! Eum dignissimos nemo
      voluptatum atque, eius ducimus recusandae asperiores expedita possimus
      nostrum quidem in necessitatibus fugit eveniet, sapiente sunt minus minima
      explicabo impedit laboriosam consequuntur laudantium placeat et quaerat.
      Voluptates et voluptas incidunt non laborum voluptate ratione aliquid, nam
      aliquam veniam earum rem dolore repellendus harum obcaecati quibusdam
      culpa ipsam porro odio quos ipsa ex expedita a commodi? Ab aliquid, quos
      esse soluta, ipsam deleniti vitae architecto fuga dicta nostrum corporis
      neque eligendi expedita sapiente maxime tenetur impedit facere alias
      magnam dolore repudiandae. Quos rerum quod consequuntur commodi amet
      possimus officia velit aliquam saepe maiores, voluptatibus sed ipsa,
      blanditiis optio repellendus eligendi adipisci laborum. Nemo mollitia
      voluptatibus deserunt neque adipisci ipsum nesciunt temporibus, ducimus
      blanditiis quasi ex. Corrupti officiis, mollitia sunt saepe maxime nisi
      est. Ipsam quas aut mollitia similique magnam, optio voluptatibus ratione
      nobis quaerat, aliquam eligendi provident enim officia quod dignissimos
      laborum dolorum ut pariatur inventore quae, ea voluptas labore. A illum
      sunt ratione officia? Lorem ipsum dolor, sit amet consectetur adipisicing
      elit. Soluta ea quaerat enim, ducimus doloribus dolore at voluptate sed
      modi, porro officia, optio dicta incidunt accusantium. Fugit ipsum dolor,
      inventore natus similique odit ratione sequi voluptates eaque ab cum
      corporis voluptatum architecto ipsa consectetur et vitae laborum corrupti
      nulla ea odio hic accusantium! Pariatur delectus, hic qui fuga iure quam
      quia, fugiat sint eius minima necessitatibus molestias eveniet illo
      laboriosam eos natus. Laboriosam doloremque eligendi necessitatibus
      officiis perspiciatis magnam sint dolorum cupiditate facilis inventore!
      Minima iure debitis ad accusantium aspernatur fuga vitae dolor saepe,
      reprehenderit delectus magnam nam corporis sequi corrupti odit? Sint
      tenetur error unde dolorem voluptatum? Exercitationem illum quia
      repellendus sapiente cupiditate reiciendis illo hic obcaecati similique
      fugiat veritatis odio, possimus eveniet alias fugit voluptatibus amet
      beatae dolore velit reprehenderit iure ducimus assumenda dignissimos nisi!
      Odit velit quae deleniti nulla consectetur! Laborum ex, saepe excepturi id
      et voluptatem culpa debitis atque accusamus eligendi, facere eos, quas
      error qui? Ipsam iste repudiandae libero blanditiis aliquam nostrum quis
      pariatur, aliquid consequuntur atque commodi ratione totam veniam at
      voluptatibus beatae odit, doloremque magnam molestiae quam aut quaerat.
      Modi itaque vel doloremque sunt quos tempora in assumenda perspiciatis
      incidunt ab illo iusto, dignissimos est. Ipsum ex minus architecto aliquam
      eos vel quo impedit autem rem odit aliquid modi eum veritatis, vitae nemo
      magnam optio dolorem esse voluptatem tempora, quis iure? Exercitationem
      reprehenderit eveniet consequatur doloribus tempore, sed fugiat ea velit
      suscipit at fugit recusandae error quisquam aspernatur iure minus
      repellat, maiores quo ipsa? Nam in animi minima delectus necessitatibus
      maiores sint incidunt corporis pariatur. Nam blanditiis ad provident nulla
      mollitia illum, in velit cumque ipsa minus adipisci nostrum sequi
      accusantium voluptatem corporis, excepturi error culpa vitae assumenda
      sint quaerat ipsam voluptates sit vero. Veritatis similique libero
      perferendis accusantium hic voluptate dolorem harum neque eaque ea in,
      placeat, necessitatibus sunt molestiae nisi numquam non nesciunt
      voluptatem eius labore. At dolorem ratione tempore ipsum? Qui blanditiis
      cum fuga consequuntur ex inventore nesciunt, ut sit maiores aliquid eaque,
      minima saepe? Quisquam mollitia, unde accusantium odio consequatur
      perspiciatis minima, maxime accusamus deserunt delectus tenetur! Maiores
      eaque ratione quod illo minima eum excepturi. Aliquid ratione temporibus
      natus alias nesciunt doloribus quibusdam, eligendi doloremque est nobis
      fugit reiciendis facilis accusamus qui porro expedita nihil rerum
      repellendus dolore eos tempora cupiditate aut asperiores ipsam? Nihil
      placeat praesentium quisquam perferendis atque debitis voluptas nam,
      asperiores, dicta repellat molestiae magni distinctio perspiciatis
      incidunt iusto quas quos suscipit ipsum eveniet vero fugit? Maxime, animi
      voluptatum placeat fugiat, sunt nesciunt nulla recusandae rem, aliquam
      expedita magnam ratione eum cumque sed ad corrupti? Nostrum reiciendis
      doloremque sequi repellendus labore quibusdam quam nulla vero inventore
      error saepe exercitationem, corporis, repellat magni quaerat ducimus!
      Magni voluptate, dolores obcaecati optio iure autem reiciendis doloremque
      facere unde voluptas quos, sequi eaque velit quo. Nostrum possimus
      explicabo quod quidem sequi magnam sapiente eius at inventore, veniam
      corporis porro nam consectetur ipsum nesciunt sint delectus, pariatur
      dolore temporibus cupiditate excepturi facilis repudiandae. Voluptate
      incidunt quam eos, mollitia expedita necessitatibus non qui?
    </div>
  );
};

export default Project_15;
