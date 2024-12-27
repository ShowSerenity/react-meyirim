import React, { useState, useEffect } from 'react';

import supabase from '../configs/supabase-config';

import NewsItem from '../components/NewsItem';


const Home = () => {

    const [newsItems, setNewsItems] = useState([]); // Состояние для новостей

    // Загружаем последние новости с базы данных
    useEffect(() => {
        const fetchNews = async () => {
        const { data, error } = await supabase
            .from('news')
            .select('title, content, images, videos, tags, created_at')
            .order('created_at', { ascending: false }) // Сортировка по дате
            .limit(5); // Ограничение на 5 последних новостей
            console.log('Fetched data:', data);

        if (error) {
            console.error('Ошибка при загрузке новостей:', error);
        } else {
            console.log('Fetched data:', data);
            setNewsItems(data); // Сохраняем данные в состояние
        }
        };

        fetchNews();
    }, []); // Пустой массив зависимостей, чтобы выполнить запрос только один раз при загрузке


  return (

      <main>
        <h1>Welcome to Meyirim</h1>
        <p>Helping Disabled People Live Better Lives</p>

        <section id="about">
          <h2>About Us</h2>
          <p>
            Meyirim is an organization dedicated to supporting disabled individuals through projects,
            community initiatives, and resources.
          </p>
        </section>

        <section id="projects">
          <h2>Our Projects</h2>
          <ul>
            <li>Project 1: Accessible Transportation</li>
            <li>Project 2: Vocational Training Programs</li>
            <li>Project 3: Community Awareness Events</li>
          </ul>
        </section>

        {/* Блок для отображения новостей */}
        <section id="news">
            <h2>Latest News</h2>
            {newsItems.length > 0 ? (
            newsItems.map((item) => (
                <NewsItem
                key={item.id}
                title={item.title}
                content={item.content}
                images={item.images}
                videos={item.videos}
                tags={item.tags}
                created_at={item.created_at}
                />
            ))
            ) : (
            <p>Loading news...</p>
            )}
        </section>

        <section id="contact">
          <h2>Contact Us</h2>
          <p>Email: contact@meyirim.org</p>
          <p>Phone: +123 456 789</p>
        </section>
      </main>

  );
}

export default Home;