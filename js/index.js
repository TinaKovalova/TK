"use strict";
window.addEventListener("load", () => {
    const toShow = (element) => {
        element.classList.add('_show') 
    };

    const createSlide = ({ title, imagePath, githubURL, projectURL, technologies }) => {
      return ` <div class="swiper-slide">
                                <article class="work-card">
                                    <a href="${projectURL}" class="work-card__link">
                                        <img src="${imagePath}" alt="The Tasteat landing"
                                            class="work-card__image" >
                                    </a>
                                    <div class="work-card__actions">
                                        <a href="${githubURL}"
                                            class="work-card__info-link _icon-github"></a>
                                        <a href="${projectURL}"
                                            class="work-card__info-link _icon-eye"></a>
                                    </div>
                                    <div class="work-card__info">
                                        <h5 class="work-card__title">${title}</h5>
                                        <div class="work-card__description">${technologies}</div>
                                    </div>
                                </article>
                            </div>`;
    };
    const fillPortfolio = (projects) => {
        const swiperWrapper = document.querySelector(".swiper-wrapper");
        if (swiperWrapper) {
          for (const project of projects) {
            swiperWrapper.insertAdjacentHTML("beforeend", createSlide(project));
          }
        const projectsImages = swiperWrapper.querySelectorAll(".work-card__image");
        if (projectsImages.length > 0) {
          projectsImages.forEach((image) =>
            image.addEventListener("load", (e) => toShow(e.target))
          );
        }
    }
    }

    getData("files/data.json");

    async function getData(dataUrl) {
        try {
            const response = await fetch(dataUrl);
            if (!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            }
            const json = await response.json();
            fillPortfolio(json.projects);
           
        } catch (error) {
            console.log(error.message)
        }
        
    }
    document.querySelector(".about__title").addEventListener("load",e=> toShow(e));

    
});