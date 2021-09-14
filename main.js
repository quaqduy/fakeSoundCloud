window.onload = function() {
    var signInBtn = document.getElementById('btn1');
    var signInBtn1 = document.getElementById('btn2');
    var signInBtn2 = document.getElementById('btn3');
    var backgroundOnclick = document.getElementById('background-onclick');
    var signInBox = document.getElementById('signIn-box');
    const arrSignBtn = [signInBtn, signInBtn1, signInBtn2];

    function signInOpen() {
        for (let i = 0; i < arrSignBtn.length; i++) {
            arrSignBtn[i].onclick = function(e) {
                Object.assign(signInBox.style, {
                    top: '10%'
                })
                Object.assign(backgroundOnclick.style, {
                    display: 'block'
                })
            }
        }

        const listBtn = document.querySelectorAll('#footer button');
        listBtn.forEach((btn, index) => {
            btn.addEventListener('click', () => {
                signInBox.style.top = '160%';
                backgroundOnclick.style.display = 'block';
            })
        })
        backgroundOnclick.onclick = function() {
            Object.assign(signInBox.style, {
                top: '-80%'
            })
            Object.assign(backgroundOnclick.style, {
                display: 'none'
            })
        }
    }

    var imgHover = document.querySelectorAll('#body-container .itemMusic img');
    var playBtn = document.querySelectorAll('#body-container .itemMusic .imgHover .playBtn');
    var optionBox = document.querySelectorAll('#body-container .itemMusic .imgHover .optionBox');
    var optionBoxItem = document.querySelectorAll('#body-container .itemMusic .imgHover .optionBox i');
    var heart = document.querySelectorAll('.heart');
    var checkHeart = document.querySelectorAll('.checkHeart');


    function ImgIsHover() {
        for (let i = 0; i < imgHover.length; i++) {
            imgHover[i].addEventListener('mouseover', function() {
                Object.assign(playBtn[i].style, {
                    display: 'block'
                })
                Object.assign(optionBox[i].style, {
                    display: 'block'
                })
                Object.assign(imgHover[i].style, {
                    opacity: 0.6
                })
            })
            playBtn[i].addEventListener('mouseover', function() {
                Object.assign(playBtn[i].style, {
                    display: 'block'
                })
                Object.assign(optionBox[i].style, {
                    display: 'block'
                })
                Object.assign(imgHover[i].style, {
                    opacity: 0.6
                })
            })
            optionBox[i].addEventListener('mouseover', function() {
                Object.assign(playBtn[i].style, {
                    display: 'block'
                })
                Object.assign(optionBox[i].style, {
                    display: 'block'
                })
                Object.assign(imgHover[i].style, {
                    opacity: 0.6
                })
            })
            imgHover[i].addEventListener('mouseout', function() {
                Object.assign(playBtn[i].style, {
                    display: 'none'
                })
                Object.assign(optionBox[i].style, {
                    display: 'none'
                })
                Object.assign(imgHover[i].style, {
                    opacity: 1
                })
            })
            optionBox[i].addEventListener('mouseout', function() {
                Object.assign(playBtn[i].style, {
                    display: 'none'
                })
                Object.assign(optionBox[i].style, {
                    display: 'none'
                })
                Object.assign(imgHover[i].style, {
                    opacity: 1
                })
                Object.assign(moreSubList[i].style, {
                    display: 'none'
                });
            })
            moreSubList[i].addEventListener('mouseout', function() {
                Object.assign(moreSubList[i].style, {
                    display: 'none'
                });
            })
            moreSubList[i].addEventListener('mouseover', function() {
                Object.assign(moreSubList[i].style, {
                    display: 'block'
                });
            })
        }
    };

    function heartIsClick() {
        for (let j = 0; j < imgHover.length; j++) {
            if (checkHeart[j].name === `check${j+1}`) {
                heart[j].addEventListener('click', function() {
                    let check = checkHeart[j].checked;
                    if (check === true) {
                        Object.assign(heart[j].style, {
                            color: 'white'
                        })
                    } else if (check === false) {
                        Object.assign(heart[j].style, {
                            color: 'red'
                        })
                    }
                })
            }
        }
    };
    var unfollow = document.querySelectorAll('.unfollow');
    var follow = document.querySelectorAll('.follow');

    function unFollowIsClick() {
        for (let k = 0; k < imgHover.length; k++) {
            unfollow[k].addEventListener('click', function() {
                Object.assign(follow[k].style, {
                    display: 'block'
                })
                Object.assign(unfollow[k].style, {
                    display: 'none'
                })
            })
        }
    };

    function followIsClick() {
        for (let l = 0; l < imgHover.length; l++) {
            follow[l].addEventListener('click', function() {
                Object.assign(unfollow[l].style, {
                    display: 'block',
                    color: 'blue'
                })
                Object.assign(follow[l].style, {
                    display: 'none'
                })
            })
        }
    };
    var moreBtn = document.querySelectorAll('.moreBtn');
    var moreSubList = document.querySelectorAll('.moreSubList');

    function subListIsHover() {
        for (let m = 0; m < imgHover.length; m++) {
            moreBtn[m].addEventListener('click', function() {
                Object.assign(moreSubList[m].style, {
                    display: 'block'
                });
            })
        }
    }
    var searchBtn = document.querySelector('#searchBtn');

    signInOpen();
    ImgIsHover();
    heartIsClick();
    unFollowIsClick();
    followIsClick();
    subListIsHover()
}