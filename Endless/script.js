let page = 1; // Initial page
const newsContainer = $('#news-container');

$(window).scroll(function () {
    if ($(window).scrollTop() + $(window).height() >= $(document).height() - 100) {
        // Load more content when scrolling to the bottom
        fetchData(page);
    }
});

function fetchData(page) {
    // Simulate fetching data without an actual API
    const dummyData = generateDummyData();

    // Append content to the news container
    appendContent(dummyData);
    page++;
}

// This to generate dummy articles that have nothing to do with information. But just to make things infinitely generated
function generateDummyData() {
    const dummyData = [];

    for (let i = 0; i < 1000; i++) {
        dummyData.push({
            title: `Dummy Article ${i + 1}`,
            description: `This is a dummy article description. There is nothing to see here. Make sure to remember me as I am number ${i + 1}`,
            url: '#',
        });
    }

    return dummyData;
}

function appendContent(articles) {
    articles.forEach(article => {
        const articleDiv = $('<div>').addClass('article');

        // Customize the HTML structure based on your needs
        articleDiv.html(`
            <h2>${article.title}</h2>
            <p>${article.description}</p>
            <a href="${article.url}" target="_blank">Read more</a>
        `);

        // Append the article to the news container
        newsContainer.append(articleDiv);
    });
}

// Initial data fetch when the page loads
$(document).ready(function () {
    fetchData(page);
});
