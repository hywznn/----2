document.addEventListener('DOMContentLoaded', (event) => {
    // intro 섹션 호버 효과
    const introSection = document.querySelector('.intro');
    introSection.addEventListener('mouseover', () => {
        introSection.style.backgroundColor = '#222';
    });
    introSection.addEventListener('mouseout', () => {
        introSection.style.backgroundColor = 'transparent';
    });

    // latest-work 섹션 호버 효과
    const latestWorkSection = document.querySelector('.latest-work');
    latestWorkSection.addEventListener('mouseover', () => {
        latestWorkSection.style.backgroundColor = '#222';
    });
    latestWorkSection.addEventListener('mouseout', () => {
        latestWorkSection.style.backgroundColor = 'transparent';
    });

    // portfolio 섹션 호버 효과
    const portfolioSection = document.querySelector('.portfolio');
    portfolioSection.addEventListener('mouseover', () => {
        portfolioSection.style.backgroundColor = '#222';
    });
    portfolioSection.addEventListener('mouseout', () => {
        portfolioSection.style.backgroundColor = 'transparent';
    });

    // guestbook 섹션 호버 효과
    const guestbookSection = document.querySelector('.guestbook');
    guestbookSection.addEventListener('mouseover', () => {
        guestbookSection.style.backgroundColor = '#222';
    });
    guestbookSection.addEventListener('mouseout', () => {
        guestbookSection.style.backgroundColor = 'transparent';
    });

    

    // project 카드 호버 효과
    const projectCards = document.querySelectorAll('.project');
    projectCards.forEach(card => {
        card.addEventListener('mouseover', () => {
            card.style.transform = 'scale(1.05)';
        });
        card.addEventListener('mouseout', () => {
            card.style.transform = 'scale(1)';
        });
    });
});



//header
// header.html 파일을 포함하는 스크립트
fetch('header.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('header-placeholder').innerHTML = data;
    });
