const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
    counter.innerText = '0';

    const updateCounter = () => {
        // converting to number
        const target = +counter.getAttribute('data-target');
        const follower = +counter.innerText;
        // lower the speed, faster the numbers run
        const speed = 200;

        // amount at which numbers will increase
        const incrementSpeed = target / speed;

        if(follower<target){
            // number gets increased
            counter.innerText = `${Math.ceil(follower + incrementSpeed)}`;
            // function getting called in every 1 ms
            setTimeout(updateCounter, 1);
        }else{
            counter.innerText = target;
        }
        // console.log(typeof target, target)
    }

    // invoking function
    updateCounter()
})