import '../assets/css/nosotras.css';

export default function Nosotras() {
  return (
    <div>
      <header className="nosotras-header">
        <h1 className="shiny-text">Conócenos</h1>
        <p>
          Somos tres mentes, creativas y poderosas, que juntas decidimos formar
          esta empresa como una forma de poder ayudar a las personas con
          nuestros conocimientos en salud y atención personalizada. Nos
          dedicamos a ofrecer productos farmacéuticos de la más alta calidad,
          cuidando la salud de nuestros clientes. Nuestra prioridad es escuchar,
          orientar y acompañar a cada cliente, asegurando que encuentre no solo
          lo que necesita, sino también la confianza y tranquilidad que merece.
        </p>
      </header>

      <div>
        <h2>
          <i className="fa fa-users" aria-hidden="true"></i>
          Nuestro equipo
        </h2>
      </div>

      <div className="grid-container">
        <div className="card">
          <img
            src="/src/assets/img/NIÑA1.jpg"
            className="card-img-top"
            alt="Nayeli Mamani sonríe con calidez y confianza"
          />
          <div className="card-body">
            <h5 className="card-title carved-text">Nayeli Mamani</h5>
            <p className="card-text">
              Soy Nayeli Mamani, especialista en Marketing Digital. Provengo del
              mundo del diseño gráfico y el marketing, y me apasiona crear
              campañas que conecten a las personas con productos que realmente
              mejoren su calidad de vida. Domino áreas como la publicidad en
              redes, el email marketing, y el diseño de banners y promociones.
              Mi mayor fortaleza es transformar cada promoción en una historia
              irresistible que los clientes quieren compartir.
            </p>
          </div>
        </div>

        <div className="card">
          <img
            src="/src/assets/img/NIÑA2.jpg"
            className="card-img-top"
            alt="Luisana Velandia sonríe cálidamente"
          />
          <div className="card-body">
            <h5 className="card-title carved-text">Luisana Velandia</h5>
            <p className="card-text">
              Soy Luisana Velandia, especialista en ventas de Farmaven, tengo un
              fuerte compromiso hacia el bienestar de los clientes, cuento con
              más de 5 años de experiencia en ventas y atención al cliente. Mi
              misión es escuchar y comprender las necesidades de cada persona
              para ofrecer soluciones que mejoren su calidad de vida. Poseo una
              gran habilidad de comunicación, técnicas de persuasión y soy buena
              trabajando en equipo. Mi mayor fortaleza es la habilidad de
              comprender al instante las necesidades y emociones de cada
              cliente.
            </p>
          </div>
        </div>

        <div className="card">
          <img
            src="/src/assets/img/NIÑA3.png"
            className="card-img-top"
            alt="Mikela Mora sonríe con amabilidad y confianza"
          />
          <div className="card-body">
            <h5 className="card-title carved-text">Mikela Mora</h5>
            <p className="card-text">
              Soy Mikela Mora, una apasionada por conectar las necesidades de
              cada persona con soluciones de salud efectivas. En Farmaven,
              combino mi conocimiento farmacéutico con estrategias de
              orientación al cliente para garantizar que cada recomendación sea
              clara, segura y adaptada a cada situación. Mi objetivo es que cada
              cliente no solo reciba un producto, sino también confianza y
              acompañamiento en su bienestar. Entre mis habilidades están,
              comunicación clara, asesoría personalizada, trabajo en equipo,
              gestión de clientes. Mis fortalezas son la empatía, compromiso,
              adaptabilidad.
            </p>
          </div>
        </div>
      </div>

      <section className="experiencia">
        <h2>Cuéntanos tu experiencia</h2>
        <p className="experiencia-p">
          ✨Tu opinión nos ayuda a crecer y a seguir cuidando de ti.✨
        </p>

        <form
          action="procesar_experiencia.php"
          method="post"
          className="form-experiencia"
        >
          <label htmlFor="Nombres">Nombres y Apellidos:</label>
          <input
            type="text"
            id="Nombres"
            name="Nombre"
            placeholder="Escribe tu nombre completo"
          />

          <label htmlFor="Correo">Correo Electrónico:</label>
          <input
            type="email"
            id="Correo"
            name="Correo"
            placeholder="ejemplo@correo.com"
          />

          <label htmlFor="Experiencia">
            ¿Cómo fue tu experiencia en Farmaven?
          </label>
          <textarea
            id="Experiencia"
            name="Experiencia"
            rows="5"
            placeholder="Cuéntanos cómo fue"
          ></textarea>

          <label htmlFor="Sugerencias">Cuéntanos tus sugerencias aquí</label>
          <input
            type="text"
            name="Sugerencias"
            id="Sugerencias"
            placeholder="Escribe tus sugerencias"
          />

          <button type="submit" className="shiny-btn">
            Enviar
          </button>
        </form>
      </section>

      {/* FOOTER */}
      <footer className="custom-footer text-dark pt-5">
        <div className="container">
          <div className="row">
            <div className="col-md-3 mb-4">
              <img
                src="/src/assets/img/logo.png"
                alt="Logo FARMAVEN"
                className="mb-3"
                height="60"
                width="150"
              />
              <p className="small">
                FARMAVEN nació con la misión de ofrecer medicamentos y productos
                de salud accesibles para todos, con un servicio humano y
                cercano.
              </p>
            </div>

            <div className="col-md-3 mb-4">
              <h5 className="fw-bold">FARMAVEN</h5>
              <ul className="list-unstyled">
                <li>
                  <a
                    href="src/pages/Catálogo.jsx"
                    className="text-dark text-decoration-none"
                  >
                    Catálogo del mes
                  </a>
                </li>
                <li>
                  <a
                    href="src/pages/Testimonios.jsx"
                    className="text-dark text-decoration-none"
                  >
                    Testimonios
                  </a>
                </li>
                <li>
                  <a href="#" className="text-dark text-decoration-none">
                    Libro de reclamaciones
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-md-3 mb-4">
              <h5 className="fw-bold">Contáctanos</h5>
              <ul className="list-unstyled small">
                <li>
                  📧{" "}
                  <a href="mailto:contacto@farmaven.com" className="text-dark">
                    contacto@farmaven.com
                  </a>
                </li>
                <li>
                  📞{" "}
                  <a href="tel:+51987654321" className="text-dark">
                    +51 987 654 321
                  </a>
                </li>
                <li>Central Telefónica: (01) 612-5000</li>
                <li>
                  <a href="#" className="text-dark text-decoration-none">
                    Libro de reclamaciones
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-md-3 mb-4">
              <h5 className="fw-bold">Suscríbete</h5>
              <p className="small">
                Recibe notificaciones de sorteos y promociones exclusivas 🎁
              </p>
              <form className="d-flex mb-3">
                <input
                  type="email"
                  className="form-control form-control-sm me-2"
                  placeholder="Tu correo"
                />
                <button className="btn btn-primary btn-sm">Enviar</button>
              </form>
              <h6 className="fw-bold">Síguenos</h6>
              <div>
                <a href="#" className="text-dark me-3">
                  <i className="fab fa-facebook fa-lg"></i>
                </a>
                <a href="#" className="text-dark me-3">
                  <i className="fab fa-instagram fa-lg"></i>
                </a>
                <a href="#" className="text-dark">
                  <i className="fab fa-tiktok fa-lg"></i>
                </a>
              </div>
            </div>
          </div>

          <hr />
          <div className="text-center small py-3">
            © 2025 FARMAVEN - Todos los derechos reservados
          </div>
        </div>
      </footer>
    </div>
  );
}
