const navbar = () => {
  return `<header class="header">
    <a href="#" class="logo">BERCELLE</a>
    <nav>
      <ul class="menu-items">
        <li><a href="#" class="menu-item">Home</a></li>
        <li class="dropdown">
          <a href="#" class="menu-item">Dropdown Menu</a>
          <ul class="dropdown-menu">
            <li><a href="#" class="menu-item">Item 1</a></li>
            <li><a href="#" class="menu-item">Item 2</a></li>
            <li class="dropdown dropdown-right">
              <a href="#" class="menu-item">
                Item 3
                <i class="fas fa-angle-right"></i>
              </a>
              <ul class="menu-right">
                <li><a href="#" class="menu-item">Item 3.1</a></li>
                <li><a href="#" class="menu-item">Item 3.2</a></li>
                <li><a href="#" class="menu-item">Item 3.3</a></li>
                <li><a href="#" class="menu-item">Item 3.4</a></li>
              </ul>
            </li>
            <li><a href="#" class="menu-item">Item 4</a></li>
          </ul>
        </li>
        <li>
          <a href="#" class="menu-item">Mega Menu</a>
          <div class="mega-menu">
            <div class="content">
              <div class="col">
                <section>
                  <h2>Featured 1</h2>
                  <a href="#" class="img-wrapper"
                    ><span class="img"
                      ><img
                        src="https://picsum.photos/400?random=1"
                        alt="Random Image" /></span
                  ></a>
                  <p>Lorem ipsum dolor sit amet.</p>
                </section>
              </div>
              <div class="col">
                <section>
                  <h2>Featured 2</h2>
                  <ul class="mega-links">
                    <li><a href="#">Item 1</a></li>
                    <li><a href="#">Item 2</a></li>
                    <li><a href="#">Item 3</a></li>
                    <li><a href="#">Item 4</a></li>
                    <li><a href="#">Item 5</a></li>
                  </ul>
                </section>
              </div>
              <div class="col">
                <section>
                  <h2>Featured 3</h2>
                  <ul class="mega-links">
                    <li><a href="#">Item 1</a></li>
                    <li><a href="#">Item 2</a></li>
                    <li><a href="#">Item 3</a></li>
                    <li><a href="#">Item 4</a></li>
                    <li><a href="#">Item 5</a></li>
                  </ul>
                </section>
              </div>
              <div class="col">
                <section>
                  <h2>Featured 4</h2>
                  <ul class="mega-links">
                    <li><a href="#">Item 1</a></li>
                    <li><a href="#">Item 2</a></li>
                    <li><a href="#">Item 3</a></li>
                    <li><a href="#">Item 4</a></li>
                    <li><a href="#">Item 5</a></li>
                  </ul>
                </section>
              </div>
            </div>
          </div>
        </li>
        <li>
          <a href="#" class="menu-item">Blog</a>
          <div class="mega-menu blog">
            <div class="content">
              <div class="col">
                <a href="#" class="img-wrapper"
                  ><span class="img"
                    ><img
                      src="https://picsum.photos/400?random=2"
                      alt="Random Image" /></span
                ></a>
                <h2>Title</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Dolorum vel quae quos culpa! Voluptate ipsum adipisci et
                  quibusdam deserunt quis.
                </p>
                <a href="#" class="read-more">read more...</a>
              </div>
              <div class="col">
                <a href="#" class="img-wrapper"
                  ><span class="img"
                    ><img
                      src="https://picsum.photos/400?random=3"
                      alt="Random Image" /></span
                ></a>
                <h2>Title</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Dolorum vel quae quos culpa! Voluptate ipsum adipisci et
                  quibusdam deserunt quis.
                </p>
                <a href="#" class="read-more">read more...</a>
              </div>
              <div class="col">
                <a href="#" class="img-wrapper"
                  ><span class="img"
                    ><img
                      src="https://picsum.photos/400?random=4"
                      alt="Random Image" /></span
                ></a>
                <h2>Title</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Dolorum vel quae quos culpa! Voluptate ipsum adipisci et
                  quibusdam deserunt quis.
                </p>
                <a href="#" class="read-more">read more...</a>
              </div>
            </div>
          </div>
        </li>
        <li><a href="#" class="menu-item">About</a></li>
      </ul>
    </nav>
  </header>`;
};
export default navbar;
