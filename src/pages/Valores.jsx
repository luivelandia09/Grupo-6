export default function Valores() {
  return (
    <div>
      <section className="valores-section">
        <div className="container">
          <h1 className="display-4 text-center">LOS VALORES QUE NOS DEFINEN</h1>
          <p className="lead text-center">
            Estos principios guían cada producto, servicio e interacción con
            nuestros clientes.
          </p>

          <div className="row align-items-center mt-5">
            <div className="col-md-6">
              <div className="pilar-card mb-4">
                <h3>NUESTRA MISIÓN</h3>
                <p>
                  Ser un pilar de salud y bienestar para la comunidad,
                  ofreciendo productos farmacéuticos de calidad y un servicio
                  excepcional.
                </p>
              </div>
              <div className="pilar-card">
                <h3>NUESTRA VISIÓN</h3>
                <p>
                  Ser la farmacia de mayor confianza en el Perú, reconocida por
                  la innovación en salud digital y cuidado accesible para todos.
                </p>
              </div>
            </div>

            <div className="col-md-6 text-center">
              <img
                src="/src/assets/img/foto valores.jpg"
                alt="Imagen de valores"
                className="img-fluid rounded valores-img"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="container my-5">
        <h2 className="section-title text-center mb-4">
          Nuestros pilares fundamentales
        </h2>

        <div
          id="pilaresCarousel"
          className="carousel slide"
          data-bs-ride="carousel"
          data-bs-interval="4000"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="pilar-card text-center p-4">
                <i className="fa-solid fa-hand-holding-heart icono text-primary fa-2x"></i>
                <h3 className="mt-3">Inclusión y Diversidad</h3>
                <p>
                  Brindamos un servicio transparente, honesto y personalizado
                  para todos.
                </p>
                <p className="destacado">
                  "Tu bienestar es nuestra prioridad."
                </p>
              </div>
            </div>

            <div className="carousel-item">
              <div className="pilar-card text-center p-4">
                <i className="fa-solid fa-lightbulb icono fa-2x"></i>
                <h3 className="mt-3">Innovación en salud digital</h3>
                <p>
                  Usamos tecnología para mejorar el acceso a servicios y
                  productos de salud.
                </p>
                <p className="destacado">
                  "La tecnología al servicio de tu bienestar."
                </p>
              </div>
            </div>

            <div className="carousel-item">
              <div className="pilar-card text-center p-4">
                <i className="fa-solid fa-hands-holding-child icono fa-2x"></i>
                <h3 className="mt-3">Compromiso con el cuidado</h3>
                <p>
                  Promovemos el uso responsable de medicamentos e información
                  confiable.
                </p>
                <p className="destacado">
                  "Cuidarte hoy es vivir mejor mañana."
                </p>
              </div>
            </div>
          </div>

          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#pilaresCarousel"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#pilaresCarousel"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#pilaresCarousel"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>

          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#pilaresCarousel"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Anterior</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#pilaresCarousel"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Siguiente</span>
          </button>
        </div>
      </div>

      <section className="valores-section py-5">
        <div className="container">
          <div className="row text-center mb-5">
            <div className="col-12">
              <h1 className="display-4">Cómo vivimos estos valores</h1>
            </div>
          </div>

          <h2 className="section-title">En nuestros productos</h2>
          <div className="row justify-content-center">
            <div className="col-md-4 mb-4">
              <div className="pilar-card text-center p-4">
                <img
                  src="/src/assets/img/productos valores.png"
                  alt="Productos"
                  className="pilar-img"
                />
                <i className="fa-solid fa-box-open icono"></i>
                <h3 className="mt-3 card-title">Productos</h3>
                <p>
                  Seleccionamos cuidadosamente cada producto para garantizar su
                  calidad y seguridad. Nos aseguramos de que la información sea
                  clara, confiable y fácil de entender para todos.
                </p>
              </div>
            </div>

            <div className="col-md-4 mb-4">
              <div className="pilar-card text-center p-4">
                <img
                  src="/src/assets/img/atencion valores.png"
                  alt="Atención al cliente"
                  className="pilar-img"
                />
                <i className="fa-solid fa-headset icono"></i>
                <h3 className="mt-3 card-title">Atención al cliente</h3>
                <p>
                  Brindamos asesoría personalizada, respondiendo dudas con
                  amabilidad y rapidez. Mantenemos canales de comunicación
                  abiertos para que cada cliente se sienta escuchado y atendido.
                </p>
              </div>
            </div>

            <div className="col-md-4 mb-4">
              <div className="pilar-card text-center p-4">
                <img
                  src="/src/assets/img/reunion valores.png"
                  alt="Colaboraciones"
                  className="pilar-img"
                />
                <i className="fa-solid fa-handshake-angle icono"></i>
                <h3 className="mt-3 card-title">Colaboraciones</h3>
                <p>
                  Establecemos alianzas con marcas y profesionales que comparten
                  nuestro compromiso con la salud, la innovación y la atención
                  responsable.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="valores-section py-5 bg-light">
        <div className="container">
          <div className="row justify-content-center text-center mb-4">
            <h2 className="section-title">
              Completa el formulario y 🎁 participa por un descuento en nuestros
              productos
            </h2>
          </div>

          <div className="row align-items-center">
            <div className="col-md-6 mb-4 mb-md-0">
              <form
                id="formValores"
                className="bg-white p-4 rounded shadow experiencia"
              >
                <div className="mb-3">
                  <label htmlFor="nombre" className="form-label">
                    Nombre:
                  </label>
                  <input
                    type="text"
                    id="nombre"
                    className="form-control"
                    placeholder="Tu nombre completo"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="correo" className="form-label">
                    Correo electrónico:
                  </label>
                  <input
                    type="email"
                    id="correo"
                    className="form-control"
                    placeholder="tucorreo@example.com"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="valor" className="form-label">
                    ¿Qué valor te representa más?
                  </label>
                  <select id="valor" className="form-select">
                    <option value="">Selecciona un valor</option>
                    <option value="inclusion">Inclusión y Diversidad</option>
                    <option value="innovacion">
                      Innovación en salud digital
                    </option>
                    <option value="compromiso">
                      Compromiso con el cuidado
                    </option>
                  </select>
                </div>
                <div className="mb-3">
                  <label htmlFor="comentarios" className="form-label">
                    Comentarios:
                  </label>
                  <textarea
                    id="comentarios"
                    className="form-control"
                    rows="3"
                    placeholder="Cuéntanos tu experiencia o reflexión..."
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary w-100">
                  Enviar
                </button>
                <p id="mensajeExito" className="mt-3 d-none"></p>
              </form>
            </div>

            <div className="col-md-6 text-center">
              <img
                src="/src/assets/img/descuvalores.png"
                alt="Promoción descuento"
                className="img-fluid rounded shadow"
              />
            </div>
          </div>
        </div>
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
