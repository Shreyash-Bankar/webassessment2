document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            window.scrollTo({
                top: target.offsetTop,
                behavior: 'smooth'
            });
        });
    });

    document.getElementById('showFormButton').addEventListener('click', function() {
        const form = document.getElementById('contactForm');
        form.style.display = form.style.display === 'none' ? 'block' : 'none';
    });

    document.addEventListener('submit', function(e) {
        if (e.target && e.target.id === 'contactForm') {
            e.preventDefault();
            // Show success message
            alert('Form submitted successfully');
            e.target.reset();
        }
    });

    const chatWidgetMinimized = document.getElementById('chatWidgetMinimized');
    const chatWidgetExpanded = document.getElementById('chatWidgetExpanded');
    const chatDisplay = document.getElementById('chatDisplay');
    const userInput = document.getElementById('userInput');
    const sendButton = document.getElementById('sendButton');
    let firstMessageSent = false;

    chatWidgetMinimized.addEventListener('click', function() {
        chatWidgetExpanded.style.display = chatWidgetExpanded.style.display === 'block' ? 'none' : 'block';
        if (!firstMessageSent) {
            addBotMessage('Hi!');
            firstMessageSent = true;
        }
    });

    sendButton.addEventListener('click', function() {
        const userMessage = userInput.value.trim();
        if (userMessage === '') return;
        addUserMessage(userMessage);
        userInput.value = '';
        setTimeout(function() {
            addBotMessage(userMessage.toUpperCase());
        }, 500); // Simulating a bot response after a delay
    });

    function addUserMessage(message) {
        const userDiv = document.createElement('div');
        userDiv.classList.add('user-message');
        userDiv.textContent = message;
        chatDisplay.appendChild(userDiv);
        scrollToBottom();
    }

    function addBotMessage(message) {
        const botDiv = document.createElement('div');
        botDiv.classList.add('bot-message');
        botDiv.textContent = message;
        chatDisplay.appendChild(botDiv);
        scrollToBottom();
    }

    function scrollToBottom() {
        chatDisplay.scrollTop = chatDisplay.scrollHeight;
    }
});

document.addEventListener("DOMContentLoaded", function() {
    const projectButtons = document.querySelectorAll('.project-button');
    const projects = document.querySelectorAll('.project');
    projectButtons.forEach(button => {
        button.addEventListener('click', function() {
            const projectToShow = this.getAttribute('data-project');
            projects.forEach(project => {
                if (project.getAttribute('data-project') === projectToShow) {
                    project.style.display = 'block';
                } else {
                    project.style.display = 'none';
                }
            });
        });
    });
});

(function ($) {
    $(function () {
  
      $(window).on('scroll', function () {
        fnOnScroll();
      });
  
      $(window).on('resize', function () {
        fnOnResize();
      });
  
      var agTimeline = $('.js-timeline'),
        agTimelineLine = $('.js-timeline_line'),
        agTimelineLineProgress = $('.js-timeline_line-progress'),
        agTimelinePoint = $('.js-timeline-card_point-box'),
        agTimelineItem = $('.js-timeline_item'),
        agOuterHeight = $(window).outerHeight(),
        agHeight = $(window).height(),
        f = -1,
        agFlag = false;
  
      function fnOnScroll() {
        agPosY = $(window).scrollTop();
  
        fnUpdateFrame();
      }
  
      function fnOnResize() {
        agPosY = $(window).scrollTop();
        agHeight = $(window).height();
  
        fnUpdateFrame();
      }
  
      function fnUpdateWindow() {
        agFlag = false;
  
        agTimelineLine.css({
          top: agTimelineItem.first().find(agTimelinePoint).offset().top - agTimelineItem.first().offset().top,
          bottom: agTimeline.offset().top + agTimeline.outerHeight() - agTimelineItem.last().find(agTimelinePoint).offset().top
        });
  
        f !== agPosY && (f = agPosY, agHeight, fnUpdateProgress());
      }
  
      function fnUpdateProgress() {
        var agTop = agTimelineItem.last().find(agTimelinePoint).offset().top;
  
        i = agTop + agPosY - $(window).scrollTop();
        a = agTimelineLineProgress.offset().top + agPosY - $(window).scrollTop();
        n = agPosY - a + agOuterHeight / 2;
        i <= agPosY + agOuterHeight / 2 && (n = i - a);
        agTimelineLineProgress.css({height: n + "px"});
  
        agTimelineItem.each(function () {
          var agTop = $(this).find(agTimelinePoint).offset().top;
  
          (agTop + agPosY - $(window).scrollTop()) < agPosY + .5 * agOuterHeight ? $(this).addClass('js-ag-active') : $(this).removeClass('js-ag-active');
        })
      }
  
      function fnUpdateFrame() {
        agFlag || requestAnimationFrame(fnUpdateWindow);
        agFlag = true;
      }
  
    });
  })(jQuery);

