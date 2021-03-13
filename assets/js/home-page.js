function showHomePage(almubList, artistName) {
  jsEntryPoint.innerHTML += `
  <section class="cards-section mb-1 mb-md-5">
    <h4 class="section-name text-white font-weight-bold mb-2 display-5 pl-2 text-capitalize">${artistName}</h4>
    <div class="d-flex flex-md-wrap row-albums mb-1">
        ${almubList
          .map(
            (element) => `
             <div class="px-2 mb-3">
                <div class="card-custom shadow animate__animated animate__faster" data-album-id="${element.id}">
                  <div class="card-image-wrapper d-flex flex-column p-2">
                    <img src="${element.cover_medium}" class="img-fluid rounded shadow-lg" alt="" />
                    <a href="#" class="card-play-btn align-self-end "><i class="fas fa-play-circle "></i></a>
                  </div>
                  <div class="card-body-custom px-2">
                   
                    <h6 class="card-title-custom text-white text-truncate">${element.title}</h6>
                    <p class="card-text-custom text-muted">random text</p>
                  </div>
                </div>
              </div>
        `
          )
          .join('')}
    </div>
  </section>
  `;

  const cards = document.querySelectorAll('.card-custom');
  cards.forEach((card) => {
    card.addEventListener('click', getCardsInfo);
    card.classList.remove('animate__fadeInUp');
    card.classList.add('animate__fadeInUp');
  });
}
