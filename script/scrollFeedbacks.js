    const container = document.getElementById('reviews-container');
    let isDown = false;
    let startX;
    let scrollLeft;
    let velocity = 0;
    let prevScrollLeft = 0;
    let animationFrame = null;
    let isDragging = false;
    let startTime;
    let startXOnDown;

    function getMaxScroll() {
        return container.scrollWidth - container.clientWidth;
    }

    function clampScroll(value) {
        const max = getMaxScroll();
        return Math.max(0, Math.min(value, max));
    }

    function animateScroll() {
        if (Math.abs(velocity) > 0.5) {
            const newScroll = container.scrollLeft + velocity;
            const clampedScroll = clampScroll(newScroll);

            if (Math.abs(clampedScroll - newScroll) > 0.5) {
                velocity = 0;
            }

            container.scrollLeft = clampedScroll;
            velocity *= 0.92;

            if (Math.abs(velocity) > 0.5 && container.scrollLeft === clampedScroll) {
                animationFrame = requestAnimationFrame(animateScroll);
            } else {
                velocity = 0;
            }
        } else {
            velocity = 0;
        }
    }

    container.addEventListener('mousedown', (e) => {
        const link = e.target.closest('a');
        if (link) link.style.pointerEvents = 'none';

        isDown = true;
        isDragging = false;
        startX = e.pageX - container.offsetLeft;
        scrollLeft = container.scrollLeft;
        prevScrollLeft = scrollLeft;
        startTime = Date.now();
        startXOnDown = e.pageX;

        container.style.cursor = 'grabbing';
        container.style.userSelect = 'none';

        cancelAnimationFrame(animationFrame);
        e.preventDefault();
    });

    container.addEventListener('mousemove', (e) => {
        if (!isDown) return;

        const x = e.pageX - container.offsetLeft;
        const walk = (x - startX);
        const newScrollLeft = scrollLeft - walk;

        if (!isDragging && Math.abs(e.pageX - startXOnDown) > 5) {
            isDragging = true;
        }

        container.scrollLeft = clampScroll(newScrollLeft);

        const now = performance.now();
        if (now - lastVelocityTime > 16) {
            velocity = container.scrollLeft - prevScrollLeft;
            prevScrollLeft = container.scrollLeft;
            lastVelocityTime = now;
        }
    });

    let lastVelocityTime = 0;

    container.addEventListener('mouseup', (e) => {
        if (!isDown) return;
        isDown = false;

        container.style.cursor = 'grab';
        container.style.userSelect = 'auto';
        const link = e.target.closest('a');
        if (link) link.style.pointerEvents = 'auto';

        const dx = Math.abs(e.pageX - startXOnDown);
        const dt = Date.now() - startTime;

        if (!isDragging && dx < 10 && dt < 300) {
            const link = e.target.closest('a');
            if (link) {
                window.location.href = link.href;
            }
        } else {
            if (isDragging && Math.abs(velocity) > 1) {
                cancelAnimationFrame(animationFrame);
                animationFrame = requestAnimationFrame(animateScroll);
            } else {
                velocity = 0;
            }
        }

        isDragging = false;
    });

    container.addEventListener('mouseleave', () => {
        if (isDown) {
            isDown = false;
            container.style.cursor = 'grab';
            const links = container.querySelectorAll('a');
            links.forEach(link => link.style.pointerEvents = 'auto');
        }
    });

    container.addEventListener('touchstart', (e) => {
        const touch = e.touches[0];
        isDown = true;
        isDragging = false;
        startX = touch.pageX - container.offsetLeft;
        scrollLeft = container.scrollLeft;
        prevScrollLeft = scrollLeft;
        startTime = Date.now();
        startXOnDown = touch.pageX;

        cancelAnimationFrame(animationFrame);
        const links = container.querySelectorAll('a');
        links.forEach(link => link.style.pointerEvents = 'none');
    });

    container.addEventListener('touchmove', (e) => {
        if (!isDown) return;
        const touch = e.touches[0];
        const x = touch.pageX - container.offsetLeft;
        const walk = (x - startX);
        const newScrollLeft = scrollLeft - walk;

        if (!isDragging && Math.abs(touch.pageX - startXOnDown) > 10) {
            isDragging = true;
        }

        container.scrollLeft = clampScroll(newScrollLeft);

        const now = performance.now();
        if (now - lastVelocityTime > 16) {
            velocity = container.scrollLeft - prevScrollLeft;
            prevScrollLeft = container.scrollLeft;
            lastVelocityTime = now;
        }
    });

    container.addEventListener('touchend', (e) => {
        isDown = false;
        const links = container.querySelectorAll('a');
        links.forEach(link => link.style.pointerEvents = 'auto');

        const dx = Math.abs(e.changedTouches[0].pageX - startXOnDown);
        const dt = Date.now() - startTime;

        if (!isDragging && dx < 10 && dt < 300) {
            const link = e.target.closest('a');
            if (link) {
                window.location.href = link.href;
            }
        } else {
            if (isDragging && Math.abs(velocity) > 1) {
                cancelAnimationFrame(animationFrame);
                animationFrame = requestAnimationFrame(animateScroll);
            } else {
                velocity = 0;
            }
        }

        isDragging = false;
    });

    container.addEventListener('mouseenter', () => {
        if (!isDown) container.style.cursor = 'grab';
    });

    container.addEventListener('mouseleave', () => {
        if (!isDown) container.style.cursor = 'default';
    });