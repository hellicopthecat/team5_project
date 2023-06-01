$('.faq_question_div').click(function () {
    let qusetion = $(this).attr('id')
    if (qusetion == 'faq_question1') {
        $('#faq_answer1').slideToggle()
        $('#question_arrow1').toggleClass('question_arrow_up')
        $('#faq_question_division_Q_1').toggleClass('faq_question_division')
        $('#faq_question_division_A_1').toggleClass('faq_question_division')
    } else if (qusetion == 'faq_question2') {
        $('#faq_answer2').slideToggle()
        $('#question_arrow2').toggleClass('question_arrow_up')
        $('#faq_question_division_Q_2').toggleClass('faq_question_division')
        $('#faq_question_division_A_2').toggleClass('faq_question_division')
    } else if (qusetion == 'faq_question3') {
        $('#faq_answer3').slideToggle()
        $('#question_arrow3').toggleClass('question_arrow_up')
        $('#faq_question_division_Q_3').toggleClass('faq_question_division')
        $('#faq_question_division_A_3').toggleClass('faq_question_division')
    } else if (qusetion == 'faq_question4') {
        $('#faq_answer4').slideToggle()
        $('#question_arrow4').toggleClass('question_arrow_up')
        $('#faq_question_division_Q_4').toggleClass('faq_question_division')
        $('#faq_question_division_A_4').toggleClass('faq_question_division')
    } else if (qusetion == 'faq_question5') {
        $('#faq_answer5').slideToggle()
        $('#question_arrow5').toggleClass('question_arrow_up')
        $('#faq_question_division_Q_5').toggleClass('faq_question_division')
        $('#faq_question_division_A_5').toggleClass('faq_question_division')
    }
})