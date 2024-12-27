import React from 'react';

// Пример компонента NewsItem
function NewsItem({ title, content, images, videos, tags, created_at }) {
  // Преобразуем created_at в формат даты, если оно существует
  const formattedDate = created_at ? new Date(created_at).toLocaleDateString() : 'Дата не указана';

  return (
    <div className="news-item">
      <h2>{title}</h2>
      <p>{content}</p>
      
      {/* Отображаем изображения */}
      {images && images.length > 0 && (
        <div className="image-gallery">
          {images.map((url, index) => (
            <img key={index} src={url} alt={`News ${index + 1}`} />
          ))}
        </div>
      )}

      {/* Отображаем видео */}
      {videos && videos.length > 0 && (
        <div className="video-gallery">
          {videos.map((url, index) => (
            <video key={index} controls>
              <source src={url} type="video/mp4" />
              Ваш браузер не поддерживает видео.
            </video>
          ))}
        </div>
      )}
      
      {/* Отображаем теги */}
      {tags && tags.length > 0 && (
        <div className="tags">
          {tags.map((tag, index) => (
            <span key={index} className="tag">{tag}</span>
          ))}
        </div>
      )}

      {/* Отображаем дату создания новости */}
      <p className="news-date">Дата публикации: {formattedDate}</p>
    </div>
  );
}

export default NewsItem;
