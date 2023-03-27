import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from "react-redux";
import postOperations from "../../redux/questions/thunk"

import "./blog-block.css";

const BlogBlock = () => {

      //====REDUX STATES====

  const Blog = useSelector(state => state.questions.list)

  const dispatch = useDispatch()

  const {fetchBlog} = postOperations

  useEffect(() => {
    dispatch(postOperations.fetchBlog())
  }, [])
  console.log(Blog)

    //====END REDUX====

    return ( Blog.map((elem, idx) => {
        console.log(elem)
        return (
            <div className="container" key={idx}>
                <div className="blog-block">
                    <div className='blog-card'>
                        <div className='blog-text'>
                            <h3>{elem.title}</h3>
                            {elem.text}
                        </div>
                        <img src={elem.blog_image}></img>
                    </div>
                </div>
            </div>
        )
    }))
}

export default BlogBlock;





{/* <div className="container">
<div className="blog-block">
    <h2 className="blog-header">{t("blog-header")}</h2>
    <div className='blog-card' key={elem.idx}>
        <div className='blog-text'>
            {elem.title}
            {elem.text}
        </div>
    </div>
    <div className="blog-card">
        <div className="blog-text">
        <h3>Работа "Безопасного города" показываeт, что:</h3>
<ul>
<li>Кыргызстанцы чаще всего нарушают ПДД в августе, а спокойнее всего ведут себя на дорогах в мае и декабре.</li>
<li>Нарушений больше всего по субботам, а меньше всего по средам.</li>
<li>Чаще всего нарушители ездят на Toyota, Honda, Mercedes-Benz.</li>
<li>Три самых распространенных нарушения: превышение скорости в пределах от 10 до 20 км/ч, превышение скорости от 20 до 40 км/ч, нарушение требований дорожных знаков.</li>
<li>Топ-3 мест в Бишкеке, где чаще всего камеры фиксируют нарушения: пр. Жибек Жолу, 291, путепровод по ул. Шабдана Баатыра (ул. 7 Апреля), пересечение ул. Боконбаева и пр. Молодой Гвардии.</li>
</ul>
        </div>
        <div className="blog-img"></div>
    </div>
    <div className="blog-card">
        <div className="blog-text">
        {/* {t("blog-text")} */}
//         <h3>Простые лайфхаки для изучения правил дорожного движения:</h3>
// <ul>
// <li>Знаки – все, что красное, означает какой-либо запрет, все что синее – направление или указание.</li>
// <li>Помеха справа – те, кто двигаются справа от вас, должны быть пропущены (кроме ситуаций, когда проезд регулируется светофором или дорожными знаками).</li>
// <li>Всегда уступаем тому, кто движется снизу вверх.</li>
// </ul>
//         </div>
//         <div className="blog-img"></div>
//     </div>
// </div>
// </div> 