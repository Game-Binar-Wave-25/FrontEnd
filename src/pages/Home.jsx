import { useState, Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


import { dataFeaturedGames } from './gamesData/featureData';
import { dataNewGames } from './gamesData/newData';
import imgGirl from '../assets/images/ArenaOfValor.jpg';


// import Slider from "react-slick";
// import Lightbox from "react-image-lightbox";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import "react-image-lightbox/style.css";

// const photos = [
//     "https://i.ibb.co/xSK5c9J/Arena-Of-Valor.jpg",
//     "https://source.unsplash.com/Dm-qxdynoEc/800x799",

//     "https://source.unsplash.com/qDkso9nvCg0/600x799",
//     "https://source.unsplash.com/qDkso9nvCg0/600x799",
//     "https://source.unsplash.com/qDkso9nvCg0/600x799"
// ];

// const captions = [
//     'Cat in the snow',
//     '',
//     '',
//     '',
//   ];

const Home = () => {
    const [defaultImage, setDefaultImage] = useState({});
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    const handleErrorImage = (data) => {
        setDefaultImage((prev) => ({
            ...prev,
            [data.target.alt]: data.target.alt,
            // linkDefault: imgGirl,
        }));
    };

    const handlePlayNow = () => {
        if(localStorage.getItem('accesstoken') === null) {
            alert ("Please Login or Sign Up")
            window.location.href = '/'
        } else window.location.href = "/firebase/gameSuit"
    }

    // const handleClick = () => {
    //     console.log(localStorage.getItem('accesstoken'))
    //     if(localStorage.getItem('accesstoken') === null) {
    //         alert ("Please Login or Sign Up")
    //         window.location.href = '/register'
    //     } else window.location.href = href
    // }

    // constructor(props) {
    //     super(props);

    //     this.state = {
    //         images: photos,
    //         current: "",
    //         text: captions
    //     };
    // }

    // getSliderSettings() {
    //     return {
    //         dots: true,
    //         autoplay: false,
    //         infinite: true,
    //         slidesToShow: 3,
    //         slidesToScroll: 1
    //     };
    // }

    // handleClickImage = (e, images,captions) => {
    //     e && e.preventDefault();

    //     this.setState({
    //         current: images,
    //         text: captions
    //     });
    // };

    // handleCloseModal = e => {
    //     e && e.preventDefault();

    //     this.setState({
    //         current: ""
    //     });
    // };

    // const sliderClick1 = () => {
    //     alert("test")

    // }
    // const sliderClick2 = () => {
    //     alert("test2")

    // }
    // const sliderClick3 = () => {
    //     alert("test3")

    // }

    // const featureGame = [
    //     { image: "https://i.ibb.co/xSK5c9J/Arena-Of-Valor.jpg", title: "Arena of Valor", 
    //     description: "Arena of Valor (AOV) adalah arena pertempuran online multipemain yang dikembangkan oleh TiMi Studio Group dan diterbitkan oleh Tencent Games untuk Android, iOS, dan Nintendo Switch. Permainan telah menemukan popularitas di pasar Asia, termasuk Cina, Jepang, Thailand, Indonesia.", clickEvent: sliderClick1 },
    //     { image: "https://images.crazygames.com/fantasy-madness/20221031100113/fantasy-madness-cover?auto=format,compress&q=45&cs=strip&ch=DPR&w=252&h=138&fit=max", title: "This is a second title", description: "This is a second description", clickEvent: sliderClick2 },
    //     { image: "https://picsum.photos/200/300", title: "This is a fifth title", description: "This is a fifth description", clickEvent: sliderClick3 },
    //     // { image: "https://picsum.photos/800/700", title: "This is a sixth title", description: "This is a sixth description", clickEvent: sliderClick },
    //     // { image: "https://picsum.photos/300/400", title: "This is a seventh title", description: "This is a seventh description", clickEvent: sliderClick }
    // ]

    // const newGame = [
    //     { image: "https://images.crazygames.com/games/crazy-grand-prix/cover-1669033093125.png?auto=format,compress&q=45&cs=strip&ch=DPR&w=252&h=138&fit=max", title: "This is a third title", description: "This is a third description" },
    //     { image: "https://images.crazygames.com/rocket-bot-royale/20220310095708/rocket-bot-royale-cover?auto=format,compress&q=45&cs=strip&ch=DPR&w=252&h=138&fit=max", title: "This is a fourth title", description: "This is a fourth description" },
    //     { image: "https://images.crazygames.com/games/crazy-courier/cover-1662392935747.png?auto=format,compress&q=45&cs=strip&ch=DPR&w=252&h=138&fit=max", title: "This is a title", description: "This is a description" },
    //     { image: "https://images.crazygames.com/fantasy-madness/20221031100113/fantasy-madness-cover?auto=format,compress&q=45&cs=strip&ch=DPR&w=252&h=138&fit=max", title: "This is a second title", description: "This is a second description" },
    //     // { image: "https://picsum.photos/200/300", title: "This is a fifth title", description: "This is a fifth description", clickEvent: sliderClick },
    //     // { image: "https://picsum.photos/800/700", title: "This is a sixth title", description: "This is a sixth description", clickEvent: sliderClick },
    //     // { image: "https://picsum.photos/300/400", title: "This is a seventh title", description: "This is a seventh description", clickEvent: sliderClick }
    // ]
    // render() {
    //     const settings = this.getSliderSettings();
    //     const { images, current } = this.state;

    return (
        <>
            <div className="slider-game">
                <button type="button" className="btn btn-light ml-2 my-3 type-game">Game List</button>
                <Slider {...settings}>
                    {dataFeaturedGames.map((item) => (
                        <div className="card-slider">
                            <div className="card-top">
                                <img
                                    src={
                                        defaultImage[item.title] === item.title
                                            ? defaultImage.linkDefault
                                            : item.linkImg
                                    }
                                    alt={item.title}
                                    onError={handleErrorImage}
                                />
                                <h1 className="title-game">{item.title}</h1>
                            </div>
                            <div className="card-bottom">
                                <span className="category">{item.category}</span>
                            </div>
                            <button type="button" className="btn btn-outline-success btn-slider text-center" onClick={handlePlayNow}>Play Now!</button>
                        </div>
                    ))}
                </Slider>
            </div>
            <div className="slider-game">
                <button type="button" className="btn btn-light ml-2 my-3 type-game">Another Game</button>
                <Slider {...settings}>
                    {dataNewGames.map((item) => (
                        <div className="card-slider">
                            <div className="card-top">
                                <img
                                    src={
                                        defaultImage[item.title] === item.title
                                            ? defaultImage.linkDefault
                                            : item.linkImg
                                    }
                                    alt={item.title}
                                    onError={handleErrorImage}
                                />
                                <h1 className="title-game">{item.title}</h1>
                            </div>
                            <div className="card-bottom">
                                <span className="category">{item.category}</span>
                            </div>
                            <button type="button" className="btn btn-outline-success btn-slider text-center" onClick={item.btn}>Play Now!</button>
                        </div>
                    ))}
                </Slider>
            </div>
            {/* <div className="carousel">
                    <Slider {...settings}>
                        {images.map(image => (
                            <div className="mx-1">
                                <img
                                    src={image}
                                    alt="logo"
                                    onClick={e => this.handleClickImage(e, image)}
                                />
                                <div>hello</div>
                            </div>
                        ))}
                    </Slider>

                    {current && (
                        <Lightbox mainSrc={current} onCloseRequest={this.handleCloseModal}/>
                    )}
                </div> */}
        </>
    );
    // };
};

export default Home;
