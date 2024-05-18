const url = "https://coding-week-2024-api.onrender.com/api/data";
window.addEventListener("load", () => fetchNews());

async function fetchNews() {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    bindData(data);
}

function bindData(articles) {
    const featuredcontainer = document.getElementById('featarticle');
    const newfeaturedtemplate = document.getElementById('featuredtemplate');

    featuredcontainer.innerHTML = '';
    let count = 0; 
    for (let i = 0; i < articles.length && count < 4; i++) { 
        const article = articles[i];
        const featuredclone = newfeaturedtemplate.content.cloneNode(true);
        fillData(featuredclone, article);
        featuredcontainer.appendChild(featuredclone);
        count++; 
    }

    const latestcontainer = document.getElementById('latarticle');
    const newlatesttemplate = document.getElementById('latesttemplate');
    for (let i = 4; i < articles.length && count < 10; i++) { 
      const article = articles[i];
      const latestclone = newlatesttemplate.content.cloneNode(true);
      fillDatalatest(latestclone, article);
      latestclone.querySelector('li').addEventListener('click', () => {
        showFullBlog(article);
      });
    
      latestcontainer.appendChild(latestclone);
      count++; 
    }
    }

function fillData(featuredclone, article) {
    const newsImg = featuredclone.querySelector('#newsimage');
    const newsDate = featuredclone.querySelector('#newsdate');
    const newsHead = featuredclone.querySelector('#newsheadline');
    const newsContent = featuredclone.querySelector('#newscontent');
    const newsTag = featuredclone.querySelector('#newstag');

    newsImg.src = article.image;
    newsDate.innerHTML = article.date;
    newsHead.innerHTML = article.headline;
    newsContent.innerHTML = article.content;
    newsTag.innerHTML = article.type;
}

function fillDatalatest(latestclone, article) {
    const latImg = latestclone.querySelector('#latestimage'); 
    const latDate = latestclone.querySelector('.date'); 
    const latHead = latestclone.querySelector('#latestheadline'); 
    latImg.src = article.image;
    latDate.innerHTML = article.date;
    latHead.innerHTML = article.headline;
}


function showFullBlog(article) {
    const fullBlogText = `
      Headline: ${article.headline}
      Author: By: ${article.author}
      Published: ${article.date}
      Type: ${article.type}
  
      ${article.content}
    `;
  
    alert(fullBlogText); 
  }
  