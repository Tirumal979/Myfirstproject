import React from 'react'

function Blog() {
  const data = [{
    title: "The Road to React", img: "images (1).jpg", para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",Prizes : 599},
    { title: "React The Road To Enterprises", img: "images (2).jpg",para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",Prizes : 899},
    { title: "Just React", img: "images (3).jpg", para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua", Prizes: 699 },
    { title: "React The Road To Enterprises", img: "images (2).jpg", para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua", Prizes: 499 },
    { title : "The Road to React", img : "images (1).jpg",para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",Prizes : 399}
  ]
  return (
    <div className='blog'>
      {data.map((x, i) => {
        return (
          <div key={i}>
            <img src={x.img} alt={x.title} />
            <h4>{x.title}</h4>
            <p>{x.para}</p>
            <h3>Rs.{x.Prizes}</h3>
          </div>
        )
          
        })}
    </div>
  )
}

export default Blog