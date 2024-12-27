exports.handler = async function(event, context) {
    // Пример новостей (можно заменить на реальное хранилище данных, например, базу данных)
    const newsData = [
      {
        id: 1,
        title: "Заголовок новости 1",
        content: "Текст статьи новости 1.",
        images: ["image1.jpg", "image2.jpg"], 
        videos: ["video1.mp4"],
        tags: ["#областьЖетiсу", "#новости", "#жилье"]
      },
      {
        id: 2,
        title: "Заголовок новости 2",
        content: "Текст статьи новости 2.",
        images: ["image3.jpg"],
        videos: ["video2.mp4"],
        tags: ["#Талдыкорган", "#уязвимыеслоинаселения"]
      },
      // Добавьте ещё новости
    ];
  
    return {
      statusCode: 200,
      body: JSON.stringify(newsData), // Возвращаем новости в формате JSON
    };
  };
  